window.addEventListener("load", () => {
    // const params = (new URL(document.location)).searchParams;

    const n = sessionStorage.getItem('nameSS')
    const a = sessionStorage.getItem('ageSS')

    document.getElementById('result2-name').innerHTML = n;
    document.getElementById('result2-age').innerHTML = a;
})