export default function isWeekDay(date: Date): boolean {
    switch(date.getDay()) {
        case 0:
            return false;
        case 1:
            return true;
        case 2:
            return true;
        case 3:
            return true;
        case 4:
            return true;
        case 5:
            return true;
    }
    return false;
}
