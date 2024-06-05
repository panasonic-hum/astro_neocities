import episodeJSON from "./txfepisode.json" assert { type: "json" };
console.log(episodeJSON);

let btn = document.querySelector("#episode-button");
btn.addEventListener("click", AlertEpisode);

function RandomNum(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function SeasonPicker() {
    return RandomNum(1, 11);
}

function EpisodePicker(season) {
    let selSeasonObj = episodeJSON[season];
    let length = Object.keys(selSeasonObj).length;
    return RandomNum(1, length);
}

function GetEpisode(){
    let season = SeasonPicker();
    let episode = EpisodePicker(season);
    let seasonObj = myjson[season];
    let SelEpisodeName = seasonObj[episode];
    const episodeArray = [];
    episodeArray[0] = `Season ${season} Episode ${episode}`;
    episodeArray[1] = `"${SelEpisodeName}"`;
    return episodeArray;
}

function AlertEpisode(){
    let name = GetEpisode();
    document.getElementById("episode-returned").innerHTML = `${name[0]} <br> ${name[1]}`;
}