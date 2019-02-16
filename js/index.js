$(document).ready(function() {
  //Daily Astronomy Pictures and Captions
  const url1 = "https://api.nasa.gov/planetary/apod?api_key=C9SKwZtT7ZEPy0GwYhnzYCax2uITajKzDmsldSo2";
  fetch(url1)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      // console.log(json.url);
      if (json.url != undefined && json.url != null) {
        // console.log($("dailyPicture"));
        document.getElementById("dailyPicture").getElementsByTagName("img")[0].src = json.url;
        // $("dailyPicture")[0].getElementsByTagName("img")[0].src = json.url;
        document.getElementById("dailyPicture").getElementsByTagName("h1")[0].innerHTML = json.title;
        document.getElementById("dailyPicture").getElementsByTagName("p")[0].innerHTML = json.explanation;
        // console.log(json.explanation);
      }
      //console.log($("#dailyPicture")[0]);
    });
});