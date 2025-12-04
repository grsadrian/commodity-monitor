export interface ParsedData {
  commodity: string;
  indicators: {
    date: string;
    value: number;
    dailyChange: number;
    monthlyChange: number;
    dollarValue: number;
  };
}

export class ProcessData {
  parsedData!: ParsedData;

  constructor() {}

  processData(rawData: string[][], commodity: string): ParsedData {
    return {
      commodity: commodity,
      indicators: {
        date: rawData[1][0]
        value: rawData[1][1],
        dailyChange: rawData[1][2],
        monthlyChange: rawData[1][3],
        dollarValue: rawData[1][4]
      }
    };
  }
}
