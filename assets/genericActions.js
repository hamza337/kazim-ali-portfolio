function getFilteredQuery(query) {
    const filteredQuery = Object.entries(query)
        .reduce((acc, [key, value]) => {
            if (value !== '' && value !== null && value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
    const queryString = Object.keys(filteredQuery)
        .filter(key => (filteredQuery[key] !== '' || filteredQuery[key] !== null)) // Exclude empty values
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(filteredQuery[key])}`)
        .join('&');

    return queryString
}
function removeTags(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
    return str.replace(/(<([^>]+)>)/ig, '');
}
function convertBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};
async function getImageAsBinary(url) {
    const response = await fetch(url);
    const blob = await response.blob(); // Convert the image to a Blob

    // Option 1: Convert Blob to ArrayBuffer
    const arrayBuffer = await blob.arrayBuffer();
    console.log(arrayBuffer); // This is the binary data of the image

    // Option 2: Blob as binary directly
    const reader = new FileReader();
    reader.readAsBinaryString(blob);
    reader.onloadend = () => {
        console.log(reader.result); // This is the binary string of the image
    };
}
async function urlToFile(url) {
    // Fetch the file from the URL
    const lastPart = url.split('/').pop();
    const response = await fetch(url);
    // Convert the response into a blob
    const blob = await response.blob();
    // Convert the blob into a file
    const file = new File([blob], lastPart, { type: lastPart.replace('.', '/') });
    return file;
}
function truncateString(str, maxLength) {
    return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
  }
export {
    truncateString,
    urlToFile,
    removeTags,
    convertBase64,
    getFilteredQuery,
    getImageAsBinary
}