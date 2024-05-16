var countriesList = ["USA", "Rome", "France", "Japan", "Brazil", "Switzerland", "India", "Egypt"];
var amusementActivitiesList = ["Disneyland Park", "Luneaur Park", "Parc Walt Disney Studios", "Universal Studios Japan", "Florybal Magic Park Land", "Conny-Land", "EsselWorld", "Aqua Coraya"];
var natureActivitiesList = ["Yosemite National Park", "Riserva Naturale di Decima Malafede", "Cévennes National Park", "Shiretoko National Park", "Iguaçu National Park", "Parc Ela", "Periyar National Park", "Siwa Oasis"];
var historicalSitesList = ["Statue of Liberty", "Roman Forum", "Cathédrale Notre-Dame de Paris", "Itsukushima Shrine", "São Paulo Cathedral", "Château de Chillon", "Taj Mahal", "Great Sphinx of Giza"];
var countryChosen = getProperty("countryDropDown", "value");
var activityChosen = "";
var countryIndex;
onEvent("enterButton", "click", function( ) {
  countryChosen = getProperty("countryDropDown", "value");
  if (countryChosen == "Country") {
    showElement("makeSelectionText");
  } else {
    hideElement("makeSelectionText");
    setScreen("screen2");
  }
});
onEvent("amusementButton", "click", function( ) {
  activityChosen = "Amusement";
  updateScreen();
  setProperty("activityTypeBox", "text", "Amusement Park");
  setProperty("activityNameBox", "text", amusementActivitiesList[countryIndex]);
});
onEvent("natureButton", "click", function( ) {
  activityChosen = "Nature";
  updateScreen();
  setProperty("activityTypeBox", "text", "Nature Park");
  setProperty("activityNameBox", "text", natureActivitiesList[countryIndex]);
});
onEvent("historicalButton", "click", function( ) {
  activityChosen = "Historical";
  updateScreen();
  setProperty("activityTypeBox", "text", "Historic Site");
  setProperty("activityNameBox", "text", historicalSitesList[countryIndex]);
});
onEvent("home", "click", function( ) {
  setScreen("screen1");
});
onEvent("home2", "click", function( ) {
  setScreen("screen1");
});
function updateScreen() {
  setScreen("screen3");
  setProperty("activityLocationBox", "text", countryChosen);
  findActivity(countryChosen, activityChosen);
}
function findActivity(country) {
  for (var i = 0; i < countriesList.length; i++) {
    if (country == countriesList[i]) {
      countryIndex = i;
    }
  }
  console.log(countryIndex);
  if (activityChosen == "Amusement") {
    showElement("amusmentImage");
  } else if ((activityChosen == "Nature")) {
    showElement("natureImage");
  } else {
    showElement("historicImage");
  }
}
