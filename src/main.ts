import { Scrapper } from "./classes/Scrapper.js";

async function main(): Promise<void> {
    const app: Scrapper = new Scrapper();
    console.log("🟡 Iniciando scrapper...");
    await app.start();
    console.log("🟢 Scrapper iniciado!")
    const data = await app.scrap();
    console.log("🟡 Salvando dados extraídos em JSON...")
    await app.saveData(data);
    console.log("🟢 Dados extraídos e salvos com sucesso!")
    console.log("🟡 Fechando browser...")
    await app.close()
    console.log("🟢 Browser fechado. Fim da rotina. Consulte os dados extraídos...")
}

main();
