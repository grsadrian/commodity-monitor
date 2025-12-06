import puppeteer, { Browser, Page } from "puppeteer";
import { commodity, config } from "../config/config.js";
import { ParsedData, ProcessData } from "../services/ProcessData.js";
import { mkdir, writeFile } from "fs/promises";
import { join } from "path";

export class Scrapper {
    url = config.baseUrl;
    commodities = commodity;
    processor = new ProcessData();
    indicators: ParsedData[] = [];
    rawData!: string[][];
    browser!: Browser;
    page!: Page;

    constructor() {}

    async start(): Promise<void> {
        this.browser = await puppeteer.launch();
        this.page = await this.browser.newPage();
    }

    async scrap(): Promise<ParsedData[]> {
        for (let i = 0; i < this.commodities.length; i++) {
            console.log("🟡 Extraindo dados da commodity:", this.commodities[i].name, "...")
            await new Promise(resolve => setTimeout(resolve, 2000));
            await this.page.goto(
                `${this.url}${this.commodities[i].route}.aspx`
            );
            this.rawData = await this.page.evaluate(() => {
                const trs = Array.from(document.querySelectorAll("tr"));
                return trs.map((tr) => {
                    const tds = Array.from(tr.querySelectorAll("td"));
                    return tds.map((td) => td.textContent?.trim() || "");
                });
            });
            const indicators = this.processor.processData(
                this.rawData,
                this.commodities[i].name
            );
            this.indicators.push(indicators);
            console.log("🟢 Dados da commodity:", this.commodities[i].name, " extraídos com sucesso!")
        }
        return this.indicators;
    }

    async saveData(data: ParsedData[]): Promise<void> {
        const outputDir = join(process.cwd(), "data");
        await mkdir(outputDir, { recursive: true });
        const filePath = join(outputDir, "commodities.json");
        await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
        console.log("💾 Arquivo salvo em:", filePath);
    }

    async close(): Promise<void> {
        await this.browser.close();
    }
}
