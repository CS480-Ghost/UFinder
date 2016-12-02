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
		
  // Define the LatLng coordinates for the polygon's path.
  var building8 = [ // coordinates for building 8
  {lat: 34.0590118, lng: -117.82461},
  {lat: 34.0587273, lng: -117.82525},
  {lat: 34.0581007, lng: -117.82483},
  {lat: 34.0583762, lng: -117.82423}
  ];
  
  var building1 = [ //coordinates for building 1
  {lat: 34.0601539, lng: -117.82454},
  {lat: 34.0602373, lng: -117.82433},
  {lat: 34.0600628, lng: -117.82422},
  {lat: 34.0600517, lng: -117.82426},
  {lat: 34.0597795, lng: -117.82409},
  {lat: 34.0598128, lng: -117.82401},
  {lat: 34.0596340, lng: -117.82390},
  {lat: 34.0595784, lng: -117.82403},
  {lat: 34.0595029, lng: -117.82399},
  {lat: 34.0593906, lng: -117.82425},
  {lat: 34.0594529, lng: -117.82430},
  {lat: 34.0592929, lng: -117.82469},
  {lat: 34.0593551, lng: -117.82473},
  {lat: 34.0593340, lng: -117.82480},
  {lat: 34.0593773, lng: -117.82483},
  {lat: 34.0594040, lng: -117.82477},
  {lat: 34.0594884, lng: -117.82480},
  {lat: 34.0597295, lng: -117.82422},
  {lat: 34.0600462, lng: -117.82442},
  {lat: 34.0600317, lng: -117.82446} 
  ];
  
  var building35 = [ // coordinates for building 35(BSC)
	  {lat: 34.0568496, lng: -117.82187},
	  {lat: 34.0569874, lng: -117.82154},
	  {lat: 34.0562319, lng: -117.82106},
	  {lat: 34.0561830, lng: -117.82110},

	  {lat: 34.0561674, lng: -117.82106},
	  {lat: 34.0560785, lng: -117.82105},
	  {lat: 34.0560008, lng: -117.82100},
	  {lat: 34.0559830, lng: -117.82095},
	  
	  {lat: 34.0560252, lng: -117.82092},
	  {lat: 34.0559963, lng: -117.82088},
	  {lat: 34.0559185, lng: -117.82090},
	  {lat: 34.0555830, lng: -117.82061},
	  
	  {lat: 34.0553630, lng: -117.82096}
	  ];
  
  var building66 = [ // coordinates for building 66(Bronco Bookstore)
	  {lat: 34.0559185, lng: -117.82086},
	  {lat: 34.0562830, lng: -117.82035},
	  {lat: 34.0560141, lng: -117.82007},
	  {lat: 34.0556497, lng: -117.82059}
	  ];
  
  var building97 = [ // coordinates for building 97(Marketplace)
	  {lat: 34.0577381, lng: -117.82374},
	  {lat: 34.0580337, lng: -117.82305},
	  {lat: 34.0579115, lng: -117.82298},
	  {lat: 34.0579381, lng: -117.82289},
	  
	  {lat: 34.0577492, lng: -117.82277},
	  {lat: 34.0574293, lng: -117.82355}
	  ];
  
  var building15 = [ // coordinates for building 15(Library)
	  /*
	  {lat: , lng: },
	  {lat: , lng: },
	  {lat: , lng: },
	  {lat: , lng: },
	   */
	  
	  {lat: 34.0580259, lng: -117.82195},
	  {lat: 34.0582881, lng: -117.82134},
	  {lat: 34.0581026, lng: -117.82122},
	  {lat: 34.0581192, lng: -117.82118},
	  
	  {lat: 34.0579192, lng: -117.82077},
	  {lat: 34.0578906, lng: -117.82085},
	  {lat: 34.0578562, lng: -117.82083},
	  {lat: 34.0578806, lng: -117.82078},
	  
	  {lat: 34.0577040, lng: -117.82072},
	  {lat: 34.0575195, lng: -117.82117},
	  {lat: 34.0573862 , lng: -117.82129},
	  {lat: 34.0574640, lng: -117.82141},
	  
	  {lat: 34.0575262, lng: -117.82141},
	  {lat: 34.0575295, lng: -117.82151},
	  {lat: 34.0576429, lng: -117.82149},
	  {lat: 34.0575684, lng: -117.82167},
	  
	  {lat: 34.0577573, lng: -117.82179},
	  {lat: 34.0576640 , lng: -117.82201},
	  {lat: 34.0577717, lng: -117.82208},
	  {lat: 34.0578673, lng: -117.82187}
	  
	  ];
  
  var building26 = [ // coordinates for building 26(University Plaza)
	  
	  {lat: 34.0571084, lng: -117.82078},
	  {lat: 34.0572440, lng: -117.82007},
	  {lat: 34.0572018, lng: -117.81996},
	  {lat: 34.0569018 , lng: -117.81989},
	  
	  {lat: 34.0567618, lng: -117.82069},
	  {lat: 34.0568462, lng: -117.82071},
	  {lat: 34.0569573, lng: -117.82009},
	  {lat: 34.0571284, lng: -117.82013},
	  
	  {lat: 34.0570240, lng: -117.82076}
	  
	  ];
  
  var building24 = [ // coordinates for building 24(Music)
	  
	  {lat: 34.0570640 , lng: -117.82338},
	  {lat: 34.0571284, lng: -117.82321},
	  {lat: 34.0569196, lng: -117.82308},
	  {lat: 34.0571195, lng: -117.82258},
	  
	  {lat: 34.0569040, lng: -117.82243},
	  {lat: 34.0567440, lng: -117.82282},
	  {lat: 34.0566418 , lng: -117.82276},
	  {lat: 34.0566085, lng: -117.82283},
	  
	  {lat: 34.0565251, lng: -117.82263},
	  {lat: 34.0564935, lng: -117.82263},
	  {lat: 34.0564679, lng: -117.82265},
	  {lat: 34.0563612, lng: -117.82266},
	  
	  {lat: 34.0563090, lng: -117.82277},
	  {lat: 34.0563701, lng: -117.82289},
	  {lat: 34.0563929, lng: -117.82289},
	  {lat: 34.0563935 , lng: -117.82295},
	  
	  {lat: 34.0564768, lng: -117.82300},
	  {lat: 34.0564890, lng: -117.82297},
	  {lat: 34.0565307, lng: -117.82300},
	  {lat: 34.0565146, lng: -117.82304}
	  
	  ];
  
  var building25 = [ // coordinates for building 25(Drama/Theatre Department)
	  
	  {lat: 34.0567701, lng: -117.82248},
	  {lat: 34.0568901 , lng: -117.82217},
	  {lat: 34.0565790, lng: -117.82197},
	  {lat: 34.0565912, lng: -117.82192},
	  
	  {lat: 34.0564635, lng: -117.82185},
	  {lat: 34.0564368, lng: -117.82191},
	  {lat: 34.0561368, lng: -117.82173},
	  {lat: 34.0559924, lng: -117.82207},
	  
	  {lat: 34.0563968, lng: -117.82234},
	  {lat: 34.0564312, lng: -117.82227}
	  
	  ];
  

  // Shade the polygon.
  var shade8 = new google.maps.Polygon({
  paths: building8,
  strokeColor: '#FF0000',
  strokeOpacity: 0.05,
  strokeWeight: 0.5,
  fillColor: '#FF0000',
  fillOpacity: 0.05
  });
  shade8.setMap(map);
  
  var shade1 = new google.maps.Polygon({
  paths: building1,
  strokeColor: '#FF0000',
  strokeOpacity: 0.05,
  strokeWeight: 0.5,
  fillColor: '#FF0000',
  fillOpacity: 0.05
  });
  shade1.setMap(map);
  
  
  
  var shade35 = new google.maps.Polygon({
  paths: building35,
  strokeColor: '#FF0000',
  strokeOpacity: 0.05,
  strokeWeight: 0.5,
  fillColor: '#FF0000',
  fillOpacity: 0.05
  });
  shade35.setMap(map);
  
  var shade66 = new google.maps.Polygon({
  paths: building66,
  strokeColor: '#FF0000',
  strokeOpacity: 0.05,
  strokeWeight: 0.5,
  fillColor: '#FF0000',
  fillOpacity: 0.05
  });
  shade66.setMap(map); 
  
  var shade97 = new google.maps.Polygon({
  paths: building97,
  strokeColor: '#FF0000',
  strokeOpacity: 0.05,
  strokeWeight: 0.5,
  fillColor: '#FF0000',
  fillOpacity: 0.05
  });
  shade97.setMap(map);
	  
  var shade15 = new google.maps.Polygon({
  paths: building15,
  strokeColor: '#FF0000',
  strokeOpacity: 0.05,
  strokeWeight: 0.5,
  fillColor: '#FF0000',
  fillOpacity: 0.05
  });
  shade15.setMap(map); 
  
  var shade26 = new google.maps.Polygon({
  paths: building26,
  strokeColor: '#FF0000',
  strokeOpacity: 0.05,
  strokeWeight: 0.5,
  fillColor: '#FF0000',
  fillOpacity: 0.05
  });
  shade26.setMap(map); 
	  
  var shade24 = new google.maps.Polygon({
  paths: building24,
  strokeColor: '#FF0000',
  strokeOpacity: 0.05,
  strokeWeight: 0.5,
  fillColor: '#FF0000',
  fillOpacity: 0.05
  });
  shade24.setMap(map);
  
  var shade25 = new google.maps.Polygon({
  paths: building25,
  strokeColor: '#FF0000',
  strokeOpacity: 0.05,
  strokeWeight: 0.5,
  fillColor: '#FF0000',
  fillOpacity: 0.05
  });
  shade25.setMap(map);
	
	
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
