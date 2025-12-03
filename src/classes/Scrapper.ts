import puppeteer, { Browser, Page } from "puppeteer";
import { config, indicator } from "../config/config.js";
import { ParsedData, ProcessData } from "../services/ProcessData.js";

export class Scrapper {
  url = config.baseUrl;
  indicators = indicator;
  processor = new ProcessData();
  parsedData!: ParsedData[];
  rawData?: string;
  browser!: Browser;
  page!: Page;

  constructor() {}

  async start(): Promise<void> {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();
  }

  async scrap(): Promise<void> {
    for (let i = 0; i++; this.indicators.length) {
      await this.page.goto(`${this.url}${this.indicators[0].route}.aspx`);
      this.rawData = await this.page.evaluate(() => {
        let element = document.querySelector("tbody");
        return element?.innerHTML;
      });
      this.processor.processData(this.rawData);
    }
  }

  async close(): Promise<void> {
    await this.browser.close();
  }
}
