export function urlRegex(url, id, index) {
    const idRegex = new RegExp('\{id\}', 'gi');
    const indexRegex = new RegExp('\{index\}', 'gi');
    url = url.replace(idRegex, id);
    url = url.replace(indexRegex, index);
    return url;
}