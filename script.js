const API_URL="https://api.covid19api.com/summary";
async function getApiData(url)
{
    console.log("we are good to go");
    var data=await fetch(url);
    var result=await data.json();
    displayData(result);
}
var i =77;
getApiData(API_URL);
function displayData(serverData)
{
    console.log(serverData)
    document.getElementById("grp1").innerHTML= "<b>Country Name :</b> " +"" + serverData.Countries[i].Country;
    document.getElementById("grp2").innerHTML="<b>New Confirmed Cases :</b>"+" "+ serverData.Countries[i].NewConfirmed;
    document.getElementById("grp3").innerHTML="<b>Total confirmed cases :</b>"+" "+ serverData.Countries[i].TotalConfirmed;
    document.getElementById("grp4").innerHTML="<b>Total deaths :</b>"+" "+ serverData.Countries[i].NewDeaths;
    document.getElementById("grp5").innerHTML="<b>Today deaths :</b>"+" "+ serverData.Countries[i].TotalDeaths;
    document.getElementById("grp6").innerHTML="<b>Today Recovered :</b>"+" "+ serverData.Countries[i].NewRecovered;
    document.getElementById("grp7").innerHTML="<b>Total Recovered :</b>"+" "+ serverData.Countries[i].TotalRecovered;
    document.getElementById("grp8").innerHTML="<b>Today's Date :</b>"+ " "+serverData.Countries[i].Date;

}
