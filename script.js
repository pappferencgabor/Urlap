function igazol() {
    nev = document.getElementById("nev").value;
    cim = document.getElementById("cim").value;
    tel = document.getElementById("tel").value;

    document.getElementById("szoveg").innerHTML = `Név: ${nev} <br> Cím: ${cim} <br> Telefon: ${tel}`;
}
function bele(elem) {
    elem.style.background = "#c8c8fa";
}
function ki(elem2) {
    elem2.style.background = "#fff";
}