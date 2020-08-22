function abert() {
    document.getElementById("abert").style.marginLeft = '20%'
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("abert").innerHTML = 'Favorites: ' + localStorage.clickcount;
        // document.getElementById("abert").disabled = true;
    } else {
        document.getElementById("abert").innerHTML = "Sorry, your browser have favorite animals. Lame.";
    }
}
function dolphin() {
    document.getElementById("BabyDolphin").style.marginLeft = '20%'
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("BabyDolphin").innerHTML = 'Favorites: ' + localStorage.clickcount;
        // document.getElementById("abert").disabled = true;
    } else {
        document.getElementById("BabyDolphin").innerHTML = "Sorry, your browser have favorite animals. Lame.";
    }
}