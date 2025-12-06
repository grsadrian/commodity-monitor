import puppeteer, { Browser, Page } from "puppeteer";
import { commodity, config } from "../config/config.js";
import { ParsedData, ProcessData } from "../services/ProcessData.js";

export class Scrapper {
    url = config.baseUrl;
    commodities = commodity;
    processor = new ProcessData();
    indicators!: ParsedData[];
    rawData!: string[][];
    browser!: Browser;
    page!: Page;

    constructor() {}

    async start(): Promise<void> {
        this.browser = await puppeteer.launch();
        this.page = await this.browser.newPage();
    }

    async scrap(): Promise<void> {
        for (let i = 0; this.commodities.length; i++) {
            await this.page.goto(
                `${this.url}${this.commodities[0].route}.aspx`
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
                this.commodities[0].name
            );
            console.log(indicators);
            this.indicators.push(indicators);
        }
    }

    async close(): Promise<void> {
        await this.browser.close();
    }
}
