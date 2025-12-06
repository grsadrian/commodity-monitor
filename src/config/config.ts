export interface Config {
    baseUrl: string;
}

export interface Commodity {
    name: string;
    route: string;
}

export const config: Config = {
    baseUrl: "https://www.cepea.org.br/br/indicador/",
};

export const commodity: Commodity[] = [
    { name: "acucar", route: "acucar" },
    { name: "algodao", route: "algodao" },
    { name: "arroz", route: "arroz" },
    { name: "bezerro", route: "bezerro" },
    { name: "boi", route: "boi-gordo" },
    { name: "cafe", route: "cafe" },
    { name: "milho", route: "milho" },
    { name: "soja", route: "soja" },
    { name: "trigo", route: "trigo" },
];
