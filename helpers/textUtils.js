export function shortenText(text, len = 50) {
    let length = text.length;
    text = text.trim();
    text = text.slice(0, len);
    if (text.length == length) return text;
    return text + '...';
}
