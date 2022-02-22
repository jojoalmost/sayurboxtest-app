export const breakCamelCase = (string = '') => {
    if (!string) return '';
    return string
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, function (str) {
            return str.toUpperCase();
        })
}