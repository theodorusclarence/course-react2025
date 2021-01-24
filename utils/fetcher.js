export default async function fetcher(link, token) {
    const res = await fetch(link, {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json', token }),
        credentials: 'same-origin',
    });

    return res.json();
}
