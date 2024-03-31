import myjson from "./txfepisode.json" assert { type: "json" };
console.log(myjson);

let btn = document.querySelector("#episode-button");
btn.addEventListener("click", alertepisode);

function randomnum(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function seasonpicker() {
    return randomnum(1, 11);
}

function episodepicker(season) {
    let selectedseasonobj = myjson[season];
    let length = Object.keys(myjson[season]).length;
    return randomnum(1, length);
}

function getepisode(){
    let season = seasonpicker();
    let episode = episodepicker(season);
    let seasonobj = myjson[season];
    let epname = seasonobj[episode];
    const epgen = [];
    epgen[0] = `Season ${season} Episode ${episode}`;
    epgen[1] = `"${epname}"`;
    return epgen;
}

function alertepisode(){
    let name = getepisode();
    document.getElementById("episode-returned").innerHTML = `${name[0]} <br> ${name[1]}`;
}