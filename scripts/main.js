
function getAPIdata() {


//Api goed maken tijdens les nasa00

//Api verder afmaken
//Opmaak afmaken: groottes en stijl

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Amsterdam,nl";

	// construct request +
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city +'&units=metric';
	fetch(request)

	 // parse response to JSON format
	 .then(function(response) {
	 	return response.json();
	 })

	 // do something with response
	 .then(function(response) {
	 	// show full JSON object
	 	console.log(response);
	 	document.getElementById('weather1').innerHTML = Math.round(response.main.temp) + ' degrees';
	 	document.getElementById('weather2').innerHTML = response.weather[0].description;

	 	var weather = response.weather[0].description;
	 	var description1 =document.getElementById('weather1description');


	 	if(weather == 'clear sky') {
	 		description1.innerHTML = 'Perfect to land because of clear sight.';
	 	}

	 	else if(weather == 'few clouds') {
	 		description1.innerHTML = 'Easy to land because of an almost clear sight..';
	 	}

	 	else if(weather == 'scattered clouds') {
	 		description1.innerHTML = 'Good weather to land, because of a good sight with some clouds.';
	 	}

	 	else if(weather == 'broken clouds') {
	 		description1.innerHTML = 'A little hard weather to land, because of broken clouds with a poor sight.';
	 	}

	 	else if(weather == 'shower rain') {
	 		description1.innerHTML = 'It is harder to land, because of the rain, which reduces sight and control.';
	 	}

	 	else if(weather == 'rain') {
	 		description1.innerHTML = 'It is much harder to land, because of the rain, which reduces much sight and control.';
	 	}

	 	else if(weather == 'light rain') {
	 		description1.innerHTML = 'It is much harder to land, because of the rain, which reduces much sight and control.';
	 	}	 	

	 	else if(weather == 'thunderstorm') {
	 		description1.innerHTML = 'It is dangerous to land, because of Thunder that could affect you and the spaceship.';
	 	}

	 	else if(weather == 'snow') {
	 		description1.innerHTML = 'Dangerous to land because of snow, which gives poor sight and could affect the spaceship weight.';
	 	}

	 	else if(weather == 'mist') {
	 		description1.innerHTML = 'Dangerous to land because of an extremely poor sight, because of mist.';
	 	}



	 	var temperature = response.main.temp;
	 	var description2 =document.getElementById('weather2description');
	 	
	 	if (temperature < 11){
	 		description2.innerHTML = 'Perfect landing temperature.';
	 	}

	 	else if (temperature > 10 && temperature < 26){
	 		description2.innerHTML = 'Great landing temperature';
	 	}

	 	else if (temperature > 25 && temperature < 36){
	 		description2.innerHTML = 'Good landing temperature';
	 	}

	 	else if (temperature > 35 && temperature < 46){
	 		description2.innerHTML = 'Bad landing temperature';
	 	}

	 	else if (temperature > 45 && temperature < 56){
	 		description2.innerHTML = 'Really bad landing temperature';
	 	}

	 	else if (temperature > 55){
	 		description2.innerHTML = 'Dangerous bad landing temperature';
	 	}
	 })

	 // catch error
	 .catch(function (error) {
	 	console.log('Request failed', error);
	 });

}

getAPIdata();





function getAPIdata2() {


var url = "https://api.nasa.gov/planetary/apod?api_key=OMo3IcnzB2t3PlbMMBXT2rUHMRBFBV1INjkBs2rz";


$.ajax({
  url: url,
  success: function(result){
  if("copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }
  
  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none"); 
    $("#apod_vid_id").attr("src", result.url);
  }
  else {
    $("#apod_vid_id").css("display", "none"); 
    $("#apod_img_id").attr("src", result.url);
  }
  $("#reqObject").text(url);
  $("#returnObject").text(JSON.stringify(result, null, 4));  
  $("#apod_explaination").text(result.explanation);
  $("#apod_title").text(result.title);
}
});

}

// init data stream
getAPIdata2();
