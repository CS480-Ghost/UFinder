/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("Bathrooms").onclick = function() {bathroomFunction()};
    document.getElementById("Microwaves").onclick = function() {microwaveFunction()};
}

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(34.058929, -117.818898),
    zoom: 16
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
 
 
 //THIS IS A TEST MARKER
  var marker = new google.maps.Marker({
        position : {lat: 34.058524, lng: -117.824785},
        map : map,
        clickable : true
      });
  
  // Get the modal
var modal = document.getElementById('myModal');

// closes the modal
var span = document.getElementsByClassName("close")[0];

// open the modal on click
marker.addListener('click', function(){
    modal.style.display = "block";
    });

// close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// close it when clicked outside of modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//THIS WAS A TEST MARKER  

  
}

function bathroomFunction() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: new google.maps.LatLng(34.058929, -117.818898),zoom: 16}
  var map = new google.maps.Map(mapCanvas, mapOptions);
  /*finds the map and resets all of it again*/
  
  /*puts markers on where you want*/
  var locations = [   <!-- to display markers on specific places-->
  [34.058524, -117.824785, "https://scontent.xx.fbcdn.net/t31.0-8/q82/p960x960/12615594_1101749653210976_8751263346063708335_o.jpg"], // building 1
  [34.057617, -117.823385, "https://scontent.xx.fbcdn.net/v/t1.0-1/c1.0.719.719/13511031_10209986551730399_414828524990737921_n.jpg?oh=0dfa548e22dfd292275245fc363d9d0d&oe=58A41DA1"], // building 8 (College of Science)
  [34.057857, -117.821132, "https://scontent.xx.fbcdn.net/v/t1.0-9/14212166_1232232150130419_8485250524428682934_n.jpg?oh=74eb3ddef14b80dd6e0503640a018212&oe=58D38A2A"], // building 97 (Marketplace)
  [34.059584, -117.824255, "https://scontent.xx.fbcdn.net/v/t1.0-9/10580050_10203823057004547_4192991177799506923_n.jpg?oh=342a30958c834023a0268df58ddc6e45&oe=58A8B09F"], // building 15 (Library)
  [34.0563141, -117.82123, "http://www.sharonkgilbert.com/wp-content/uploads/2015/12/Under-construction-1.png"], // building 35 (Bronco Student Center)
  [34.0558874, -117.82043, "http://www.sharonkgilbert.com/wp-content/uploads/2015/12/Under-construction-1.png"], // building 66 (Bronco Bookstore)
  [34.0570519, 117.82027,  "http://www.sharonkgilbert.com/wp-content/uploads/2015/12/Under-construction-1.png"], // building 26 (University Plaza)
  [34.0569674, -117.82269, "http://www.sharonkgilbert.com/wp-content/uploads/2015/12/Under-construction-1.png"], // building 24 (Music)
  [34.0567052, -117.82223, "http://www.sharonkgilbert.com/wp-content/uploads/2015/12/Under-construction-1.png"] // building 25 (Drama Department/Theatre)
  ];
   var marker;
   for (var i = 0; i < 10; i++){
	   	var num = 0;
		marker = new google.maps.Marker({position: new google.maps.LatLng(locations[i][0], locations[i][1]), map: map, clickable: true});
	
	
//ADDED BATHROOM MODAL ITEMS, STILL WORKING ON CHANGING THE PICTURES PER MARKER, I CAN PROBS FIX THAT
//UNLESS YOU WANNA CHANGE IT	
	
//gets modal
var modal = document.getElementById('myModal');

// makes a close modal and adds a picture change variable
var span = document.getElementsByClassName("close")[0];
var picChange = document.getElementById('image');

//open the modal
marker.addListener('click', function(){
	picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
    modal.style.display = "block";
    num++;
    });

//close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// close it when clicked outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
	
	
	 }
	//NEW CODE FOR MODAL STUFF 
	 
	 
	 
	 
}

function microwaveFunction() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: new google.maps.LatLng(34.058929, -117.818898),zoom: 16}
  var map = new google.maps.Map(mapCanvas, mapOptions);
  /*finds the map and resets all of it again*/
  
    /*puts markers on where you want*/
   mw1 = {lat: 34.057564, lng: -117.823525}; <!-- to display markers on specific places-->
   mw2 = {lat: 34.057831, lng: -117.823010};
   mw3 = {lat: 34.055884, lng: -117.821154};
   mw4 = {lat: 34.059107, lng: -117.822398};
   var mw = [mw1,mw2,mw3,mw4];
   for (i = 0; i < 4; i++){
		 new google.maps.Marker({position: mw[i], map: map});
	 }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

