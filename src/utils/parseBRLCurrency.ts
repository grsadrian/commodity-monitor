export function parseBRLCurrency(value: string): number {
    return Number(value.replace(/\./g, "").replace(",", "."));
}
