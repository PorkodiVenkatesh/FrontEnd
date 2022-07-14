window.addEventListener("load", () => {
    const params = (new URL(document.location)).searchParams;

    const n = params.get('name')
    const a = params.get('age')

    document.getElementById('result-name').innerHTML = n;
    document.getElementById('result-age').innerHTML = a;
})