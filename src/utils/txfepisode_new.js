import txfJson from "./txfepisode_new.json" assert { type: "json" };

window.onload = function () {
  DisplayFilterMsg();
};

// button actions
let btn = document.querySelector("#episode-button");
btn.addEventListener("click", () => AlertEpisode(0));
let radioGrp = document.getElementById("filter-fieldset");

let filterCount = document.querySelector("#total-count");

document.addEventListener("change", () => {
  DisplayFilterMsg();
});

// functions
function FilterByTag(tagIndex) {
  const filterArray = txfJson.filter((episode) =>
    episode.tags.includes(tagIndex)
  );
  return filterArray;
}

function DisplayFilterMsg() {
  let tagIndex = GetFilterSelected();
  let message;
  switch (tagIndex) {
    case 0:
      message = "picking from all 217 episodes";
      break;
    case 1:
      message = "picking from 71 mytharc episodes";
      break;
    case 2:
      message = "picking from 146 monster of the week episodes";
      break;
  }
  filterCount.innerHTML = `<i>${message}</i>`;
}

function RandomNum(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function GetFilteredEpisode(tagIndex) {
  let filterArray = FilterByTag(tagIndex);
  let arrayLength = filterArray.length;
  let num = RandomNum(0, arrayLength - 1);
  return filterArray[num];
}

function GetAnyEpisode() {
  let arrayLength = txfJson.length;
  let num = RandomNum(0, arrayLength - 1);
  return txfJson[num];
}

function GetFilterSelected() {
  if (document.getElementById("mytharc").checked) {
    return 1;
  } else if (document.getElementById("motw").checked) {
    return 2;
  } else return 0;
}

function AlertEpisode() {
  let filterIndex = GetFilterSelected();
  let episode;
  switch (filterIndex) {
    case 1:
      episode = GetFilteredEpisode(1);
      break;
    case 2:
      episode = GetFilteredEpisode(2);
      break;
    default:
      episode = GetAnyEpisode();
  }
  console.log(episode);
  document.getElementById(
    "episode-returned"
  ).innerHTML = `${episode.episode_code} <br> ${episode.episode_name}`;
}
