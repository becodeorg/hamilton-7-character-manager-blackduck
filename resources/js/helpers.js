/* eslint-disable no-console */
export function error(message) {
    console.error(`Error: ${message} `);
}

export function makeImageSource(base64) {
    return `data:image/gif;base64,${base64}`;
}
