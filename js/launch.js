$(document).ready(function() {
  const url4 = "https://api.spacexdata.com/v3/launches?launch_year=" + (new Date()).getFullYear();
  fetch(url4)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let launch_info = "";
      for (let i = 0; i < json.length; i++) {
        launch_info += "<div class='launch'><h4>";
        launch_info += json[i].mission_name;
        launch_info += "</h4><p>Launch Date: ";
        launch_info += moment(json[i].launch_date_local).format('MMMM Do YYYY');
        launch_info += "</p><p>Launch Time: ";
        launch_info += moment(json[i].launch_date_local).format('h:mm a');
        launch_info += "</p><p>Site: ";
        launch_info += json[i].launch_site.site_name_long;
        launch_info += "</p><p>Rocket Name: ";
        launch_info += json[i].rocket.rocket_name;
        launch_info += "</p></div>";
      }
      document.getElementById("launch-results").innerHTML = launch_info;
      // console.log(json);
    });
});