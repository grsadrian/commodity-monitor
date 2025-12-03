export interface ParsedData {
  date: Date;
  value: number;
  dailyChange: number;
  monthlyChange: number;
  dollarValue: number;
}

export class ProcessData {
  parsedData!: ParsedData[];

  constructor() {}

  processData(rawData?: string): ParsedData[] {
    return [];
  }
}
