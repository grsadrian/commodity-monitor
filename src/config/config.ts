export interface Config {
  baseUrl: string;
}

export interface Indicator {
  name: string;
  route: string;
}

export const config: Config = {
  baseUrl: "https://www.cepea.org.br/indicador",
};

export const indicator: Indicator[] = [
  { name: "acucar", route: "acucar" },
  { name: "algodao", route: "algodao" },
  { name: "arroz", route: "arroz" },
  { name: "bezerro", route: "bezerro" },
  { name: "boi", route: "boi-gordo" },
  { name: "cafe", route: "cafe" },
  { name: "citros", route: "citros" },
  { name: "etanol", route: "etanol" },
  { name: "feijao", route: "feijao" },
  { name: "frango", route: "frango" },
  { name: "leite", route: "leite" },
  { name: "mandioca", route: "mandioca" },
  { name: "milho", route: "milho" },
  { name: "ovinos", route: "ovinos" },
  { name: "ovos", route: "ovos" },
  { name: "soja", route: "soja" },
  { name: "suino", route: "suino" },
  { name: "tilapia", route: "tilapia" },
  { name: "trigo", route: "trigo" },
];
