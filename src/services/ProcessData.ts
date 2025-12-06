import isWeekDay from "../utils/isWeekDay.js";

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
    filteredData?: string[][];
    constructor() {}

    processData(rawData: string[][], commodity: string): ParsedData {
        let today: any = new Date(-1);
        if (isWeekDay(today)) {
            today = today.toLocaleDateString();
            this.filteredData = rawData.filter((row) => {
                return row[0] === today;
            });
        } else {
            throw new Error(
                "Os indicadores do CEPEA são atualizados somente em dias úteis"
            );
        }

        return {
            commodity: commodity,
            indicators: {
                date: this.filteredData[0][0],
                value: parseFloat(this.filteredData[0][1]),
                dailyChange: parseFloat(this.filteredData[0][2]),
                monthlyChange: parseFloat(this.filteredData[0][3]),
                dollarValue: parseFloat(this.filteredData[0][4]),
            },
        };
    }
}
