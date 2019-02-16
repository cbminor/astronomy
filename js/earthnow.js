$(document).ready(function() {
  //Daily Pictures of the earth
  const url3 = "https://api.nasa.gov/EPIC/api/natural/images?api_key=C9SKwZtT7ZEPy0GwYhnzYCax2uITajKzDmsldSo2";
  fetch(url3)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let html = "";
      for (let i = 0; i < json.length; i++) {
        let date = json[i].date;
        date = date.split(" ");
        date = date[0];
        date = date.split("-");
        let url = "https://epic.gsfc.nasa.gov/archive/natural/" + date[0] + "/" + date[1] + "/" + date[2] + "/jpg/" + json[i].image + ".jpg";
        html += "<div class='container item'><img src='" + url + "' class='image'>";
        html += "<div class='middle'><div class='text'>";
        html += json[i].date + "<br>" + json[i].caption + "<br></div></div></div>";
      }
      document.getElementById("EarthNow").innerHTML = html;
    });

});