import puppeteer, { Browser, Page } from "puppeteer";
import { config, indicator } from "../config/config.js";

export class Scrapper {
  url = config.baseUrl;
  indicators = indicator
  browser!: Browser;
  page!: Page;

  constructor() {}

  async start(): Promise<void> {
    this.browser = await puppeteer.launch({ headless: false });
    this.page = await this.browser.newPage();
  }

  async scrap(): Promise<void> {
    await this.page.goto(this.url);
  }

  async close(): Promise<void> {
    await this.browser.close();
  }
}
