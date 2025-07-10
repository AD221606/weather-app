export function convertToC(temp) {
    return Math.floor((Number(temp) - 32) * (5 / 9));
}