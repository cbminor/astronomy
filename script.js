$(document).ready(function() {
  // console.log(value);
  const url = "https://launchlibrary.net/1.3/launch";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
    });
  //Daily Astronomy Pictures and Captions
  const url1 = "https://api.nasa.gov/planetary/apod?api_key=C9SKwZtT7ZEPy0GwYhnzYCax2uITajKzDmsldSo2";
  fetch(url1)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json.url);
      if (json.url != undefined && json.url != null) {
        // console.log($("dailyPicture"));
        document.getElementById("dailyPicture").getElementsByTagName("img")[0].src = json.url;
        // $("dailyPicture")[0].getElementsByTagName("img")[0].src = json.url;
        document.getElementById("dailyPicture").getElementsByTagName("h1")[0].innerHTML = json.title;
        document.getElementById("dailyPicture").getElementsByTagName("p")[0].innerHTML = json.explanation;
        console.log(json.explanation);
      }
      //console.log($("#dailyPicture")[0]);
    });

  // const url2 = 'http://api.open-notify.org/iss-pass.json?lat=45.0&lon=-122.3&alt=20&n=5&callback=?';
  // fetch(url2, fuction(data) {
  //   data['response'].forEach(function(d) {
  //     var date = new Date(d['risetime'] * 1000);
  //     $('isspass').append('<li>' + date.toString() + '</li>');
  //   })
  // });
  // .then(function(response) {
  //   return response.json();
  // }).then(function(json) {
  //   console.log(json);
  // });

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
      console.log(json);
    });

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
      console.log(json);
    });

  // $.getJSON('http://api.open-notify.org/iss-pass.json?lat=45.0&lon=-122.3&alt=20&n=5&callback=?', function(data) {
  //   data['response'].forEach(function(d) {
  //     var date = new Date(d['risetime'] * 1000);
  //     $('#isspass').append('<li>' + date.toString() + '</li>');
  //   });
  // });
  //
  // $.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
  //   var number = data['number'];
  //   $('#spacepeeps').html(number);
  //
  //   data['people'].forEach(function(d) {
  //     $('#astronames').append('<li>' + d['name'] + '</li>');
  //   });
  // });

  // const url = "https://launchlibrary.net/1.3/missionevent";
  // fetch(url)
  //   .then(function(response) {
  //     return response.json();
  //   }).then(function(json) {
  //     console.log(json);
  //   });
});