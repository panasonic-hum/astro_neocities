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
    return randomnum(1, 4);
}

function episodepicker(season) {
    if (season == 2) {
        return randomnum(1, 25);
    } else{
        return randomnum(1, 24);
    }
}

function getepisode(){
    // readFile(epjson, function(err, data) { 
    
    //     // Check for errors 
    //     if (err) throw err; 
    
    //     // Converting to JSON 
    //     const episodes = JSON.parse(data); 
    //     console.log(episodes);
    // })  
    let season = seasonpicker();
    let episode = episodepicker(season);
    const epunit = [season, episode];
    return epunit;
}

function alertepisode(){
    let title = getepisode();
    alert(title);
}