window.addEventListener("load", () => {
    // const params = (new URL(document.location)).searchParams;

    const n = localStorage.getItem('nameLS')
    const a = localStorage.getItem('ageLS')

    document.getElementById('result2-name').innerHTML = n;
    document.getElementById('result2-age').innerHTML = a;
})