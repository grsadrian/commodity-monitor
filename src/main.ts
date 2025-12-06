import { Scrapper } from "./classes/Scrapper.js";

async function main(): Promise<void> {
    const app: Scrapper = new Scrapper();
    await app.start();
    await app.scrap();
}

main();
