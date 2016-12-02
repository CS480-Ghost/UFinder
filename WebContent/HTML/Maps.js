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
  
  //puts markers on where you want
  var locations = [   <!-- to display markers on specific places-->
  [34.058524, -117.824785, "http://www.oakleymotorsports.com/wp-content/uploads/2016/02/22520129_l.jpg"], // building 1
  [34.057617, -117.823385, "http://www.oakleymotorsports.com/wp-content/uploads/2016/02/22520129_l.jpg"], // building 8 (College of Science)
  [34.057857, -117.821132, "http://www.oakleymotorsports.com/wp-content/uploads/2016/02/22520129_l.jpg"], // building 97 (Marketplace)
  [34.059584, -117.824255, "http://www.oakleymotorsports.com/wp-content/uploads/2016/02/22520129_l.jpg"], // building 15 (Library)
  [34.0563141, -117.82123, "http://www.oakleymotorsports.com/wp-content/uploads/2016/02/22520129_l.jpg"], // building 35 (Bronco Student Center)
  [34.0558874, -117.82043, "http://www.oakleymotorsports.com/wp-content/uploads/2016/02/22520129_l.jpg"], // building 66 (Bronco Bookstore)
  [34.0570519, 117.82027,  "http://www.oakleymotorsports.com/wp-content/uploads/2016/02/22520129_l.jpg"], // building 26 (University Plaza)
  [34.0569674, -117.82269, "http://www.oakleymotorsports.com/wp-content/uploads/2016/02/22520129_l.jpg"], // building 24 (Music)
  [34.0567052, -117.82223, "http://www.oakleymotorsports.com/wp-content/uploads/2016/02/22520129_l.jpg"] // building 25 (Drama Department/Theatre)
  ];
   
  var marker;
  for (var i = 0; i < locations.length; i++){
	   	var num = 0;
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][0], locations[i][1]),
			map: map,
			});
		marker.setVisible(false);
		} 

  /*
   *  MODAL OPERATIONS
   */
  //gets modal
  var modal = document.getElementById('myModal');

  // makes a close modal and adds a picture change variable
  var span = document.getElementsByClassName("close")[0];
  var picChange = document.getElementById('image');

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
  
  var building5 = [ // coordinates for building 5(College of Letters, Arts and Social Sciences) 
	  {lat: 34.0578674, lng: -117.82481},
	  {lat: 34.0580252 , lng: -117.82428},
	  {lat: 34.0576718, lng: -117.82402},
	  {lat: 34.0575541, lng: -117.82436},
	  
	  {lat: 34.0574807 , lng: -117.82431},
	  {lat: 34.0574163, lng: -117.82448},
	  {lat: 34.0574963 , lng: -117.82453},
	  {lat: 34.0574541, lng: -117.82462}
	  ];
  
  var building3 = [ // coordinates for building 3(Science Laboratory)
	  {lat: 34.0576941, lng: -117.82594},
	  {lat: 34.0578452, lng: -117.82600},
	  {lat: 34.0579296, lng: -117.82576},
	  {lat: 34.0581140 , lng: -117.82587},
	  
	  {lat: 34.0581074, lng: -117.82591},
	  {lat: 34.0582807, lng: -117.82601},
	  {lat: 34.0586185, lng:-117.82524 },
	  {lat: 34.0584407  , lng: -117.82511},
	  
	  {lat: 34.0581896, lng: -117.82568},
	  {lat: 34.0580096, lng: -117.82558},
	  {lat: 34.0581918, lng: -117.82516},
	  {lat: 34.0581474 , lng: -117.82512},
	  
	  {lat: 34.0582229, lng: -117.82496},
	  {lat: 34.0581474, lng: -117.82491},
	  {lat: 34.0580807 , lng: -117.82508},
	  {lat: 34.0580274, lng: -117.82505},
	  
	  {lat: 34.0578052 , lng: -117.82556},
	  {lat: 34.0578407, lng: -117.82558}
	  ];
  
  var building4 = [ // coordinates for building 4(Biotechnology Building)
	  {lat: 34.0576163, lng: -117.82580},
	  {lat: 34.0576607, lng: -117.82581},
	  {lat: 34.0578229  , lng: -117.82540},
	  {lat: 34.0577785, lng: -117.82538},
	  
	  {lat: 34.0577141 , lng: -117.82539},
	  {lat: 34.0576696, lng: -117.82545},
	  {lat: 34.0575207, lng: -117.82536},
	  {lat: 34.0576718  , lng: -117.82500},
	  
	  {lat: 34.0575207 , lng: -117.82490},
	  {lat: 34.0575296 , lng: -117.82485},
	  {lat: 34.0574829, lng:  -117.82482},
	  {lat: 34.0574430, lng: -117.82486},
	  
	  {lat: 34.0573874 , lng: -117.82485},
	  {lat: 34.0571785, lng: -117.82553}
	  ];
  
  var building4A = [ // coordinates for building 4A(BioTrek Learning Center)
	  {lat: 34.0572763, lng: -117.82619},
	  {lat: 34.0573385, lng: -117.82607},
	  {lat: 34.0571785  , lng:  -117.82595},
	  {lat: 34.0571163  , lng: -117.82609}
	  ];
	  
  var building92 = [ // coordinates for building 92(Laboratory Facility)
	  {lat: 34.0576118 , lng: -117.82616},
	  {lat: 34.0579429, lng: -117.82632},
	  {lat: 34.0579940 , lng: -117.82619},
	  {lat: 34.0577696 , lng: -117.82604},
	  
	  {lat: 34.0577807 , lng: -117.82601},
	  {lat: 34.0577185, lng: -117.82597},
	  {lat: 34.0576941, lng: -117.82600},
	  {lat: 34.0576696, lng: -117.82600}
	  ];
  
  var building2 = [ // coordinates for building 2(College of Agriculture)
	  {lat: 34.0573074 , lng: -117.82680},
	  {lat: 34.0578229  , lng: -117.82710},
	  {lat: 34.0580363, lng: -117.82662},
	  {lat: 34.0575363, lng: -117.82630}
	  ];
  
  var building7 = [ // coordinates for building 7(College of Environmental Design)
	  {lat: 34.0568896, lng: -117.82751},
	  {lat: 34.0570607, lng: -117.82762},
	  {lat: 34.0570830 , lng: -117.82756},
	  {lat: 34.0572207, lng: -117.82761},
	  
	  {lat: 34.0573474, lng: -117.82735},
	  {lat: 34.0575474, lng: -117.82747},
	  {lat: 34.0576652, lng: -117.82720},
	  {lat: 34.0574385 , lng: -117.82703},
	  
	  {lat: 34.0573207, lng: -117.82727},
	  {lat: 34.0571119 , lng: -117.82711},
	  {lat: 34.0570719, lng: -117.82718},
	  {lat: 34.0569230 , lng: -117.82715},
	  
	  {lat: 34.0568230, lng: -117.82739},
	  {lat: 34.0568852, lng: -117.82751}
	  ];
  
  var building77 = [ // coordinates for building 77(Kellog West Main Lodge)
	  {lat: 34.0563941, lng: -117.82622},
	  {lat: 34.0564363, lng: -117.82571},
	  {lat: 34.0561163 , lng: -117.82566},
	  {lat: 34.0560674 , lng: -117.82617}
	  ];
  
  var building78 = [ // coordinates for building 78(Kellog West Addition)
	  {lat: 34.0568296 , lng: -117.82578},
	  {lat: 34.0568341, lng: -117.82548},
	  {lat: 34.0567407  , lng: -117.82549},
	  {lat: 34.0567452 , lng: -117.82578}
	  ];
  
  var building76 = [ // coordinates for building 76(Kellog West Education/Dining)
	  {lat: 34.0564941, lng: -117.82526},
	  {lat: 34.0565696, lng: -117.82532},
	  {lat: 34.0565608, lng: -117.82536},
	  {lat: 34.0566874, lng: -117.82542},
	  
	  {lat: 34.0569607, lng: -117.82478},
	  {lat: 34.0569052, lng:  -117.82476},
	  {lat: 34.0569741, lng: -117.82457},
	  {lat: 34.0566208, lng: -117.82434},
	  
	  {lat: 34.0565919 , lng: -117.82439},
	  {lat: 34.0564985 , lng: -117.82434},
	  {lat: 34.0564141 , lng: -117.82452},
	  {lat: 34.0564630, lng: -117.82455},
	  
	  {lat: 34.0563474, lng: -117.82482},
	  {lat: 34.0566830 , lng: -117.82504},
	  {lat: 34.0566563, lng: -117.82513},
	  {lat: 34.0565630, lng: -117.82509}
	  ];
  
  var building79 = [ // coordinates for building 79(Collins College of Hospitality)
	  {lat: 34.0550297, lng: -117.82427},
	  {lat: 34.0550652 , lng: -117.82409},
	  {lat: 34.0549541 , lng: -117.82405},
	  {lat: 34.0549674 , lng:  -117.82396},
	  
	  {lat: 34.0551697, lng: -117.82400},
	  {lat: 34.0551763, lng: -117.82404},
	  {lat: 34.0553097, lng: -117.82399},
	  {lat: 34.0552497 , lng: -117.82388},
	  
	  {lat: 34.0551941, lng: -117.82385},
	  {lat: 34.0551386, lng: -117.82384},
	  {lat: 34.0551408, lng: -117.82382},
	  {lat: 34.0550474, lng: -117.82379},
	  
	  {lat: 34.0550408, lng:  -117.82384},
	  {lat: 34.0549563 , lng: -117.82383},
	  {lat: 34.0549563 , lng: -117.82378},
	  {lat: 34.0547830, lng: -117.82373},
	  
	  {lat: 34.0547674, lng: -117.82380},
	  {lat: 34.0547186, lng: -117.82379},
	  {lat: 34.0546897, lng: -117.82401},
	  {lat: 34.0547163, lng: -117.82402},
	  
	  {lat: 34.0547119, lng: -117.82409},
	  {lat: 34.0547213, lng: -117.82409},
	  {lat: 34.0547141, lng: -117.82414},
	  {lat: 34.0547424 , lng: -117.82415},
	  
	  {lat: 34.0547380, lng: -117.82418},
	  {lat: 34.0548241, lng: -117.82420},
	  {lat: 34.0548224, lng: -117.82422}
	  ];
	  
  /*  var building5 = [ // coordinates for building 5(College of Letters, Arts and Social Sciences)
	  {lat: , lng: },
	  {lat: , lng: },
	  {lat: , lng: },
	  {lat: , lng: },
	  
	  {lat: , lng: },
	  {lat: , lng: },
	  {lat: , lng: },
	  {lat: , lng: },
	  
	  {lat: , lng: },
	  {lat: , lng: },
	  {lat: , lng: },
	  {lat: , lng: } */
  
  var building79B = [ // coordinates for building 79B(Collins College of Hospitality Management)
	  {lat: 34.0552713 , lng: -117.82474},
	  {lat: 34.0553813 , lng: -117.82472},
	  {lat: 34.0554458, lng: -117.82462},
	  {lat: 34.0553402, lng: -117.82408},
	  
	  {lat: 34.0552080 , lng: -117.82423},
	  {lat: 34.0551913 , lng: -117.82428}
	  ];
  
  var building79A = [ // coordinates for building 79A(Collins College of Hospitality Management)
	  {lat: 34.0550313  , lng: -117.82501},
	  {lat: 34.0550924  , lng: -117.82495},
	  {lat: 34.0550847, lng: -117.82489},
	  {lat: 34.0552169, lng: -117.82475},
	  
	  {lat: 34.0552069 , lng: -117.82464},
	  {lat: 34.0551524 , lng: -117.82465},
	  {lat: 34.0551324, lng: -117.82464 },
	  {lat:  34.0549147, lng: -117.82484},
	  
	  {lat: 34.0549202 , lng: -117.82485},
	  {lat: 34.0548991, lng: -117.82487},
	  {lat: 34.0549424 , lng: -117.82494},
	  {lat: 34.0549758, lng:  -117.82491},
	  ];
  
  var building94 = [ // coordinates for building 94(University Office Building)
	  {lat: 34.0594245, lng: -117.82352},
	  {lat: 34.0595179, lng: -117.82320},
	  {lat: 34.0589846, lng: -117.82288},
	  {lat: 34.0588646 , lng: -117.82317}
	  ];
  
  var building6 = [ // coordinates for building 6(College of Education and Integrative Studies)
	  {lat: 34.0587246 , lng: -117.82309},
	  {lat: 34.0588490, lng: -117.82281},
	  {lat: 34.0584446, lng: -117.82254},
	  {lat: 34.0583379, lng: -117.82283}
	  ];
  
  var building9 = [ // coordinates for building 9(College of Engineering)
	  {lat: 34.0594601, lng: -117.82272},
	  {lat: 34.0595556, lng: -117.82249},
	  {lat: 34.0596134, lng: -117.82251},
	  {lat: 34.0596490, lng: -117.82239},
	  
	  {lat: 34.0596178, lng: -117.82238},
	  {lat: 34.0596356, lng: -117.82235},
	  {lat: 34.0587290 , lng: -117.82182},
	  {lat: 34.0586001, lng: -117.82217}
	  ];
  
  var building17 = [ // coordinates for building 17(Engineering Laboratories)
	  {lat: 34.0593912 , lng: -117.82194},
	  {lat: 34.0597934, lng: -117.82220},
	  {lat: 34.0600312 , lng: -117.82167},
	  {lat: 34.0600689, lng: -117.82169},
	  
	  {lat: 34.0601378 , lng: -117.82152},
	  {lat: 34.0602178, lng: -117.82157},
	  {lat: 34.0602511, lng: -117.82152},
	  {lat: 34.0603889, lng:  -117.82161},
	  
	  {lat: 34.0604860, lng:  -117.82138},
	  {lat: 34.0605327 , lng:  -117.82140},
	  {lat: 34.0605549, lng: -117.82135},
	  {lat: 34.0606178 , lng: -117.82139},
	  
	  {lat: 34.0607022 , lng: -117.82118},
	  {lat: 34.0602505 , lng: -117.82089},
	  {lat: 34.0601994 , lng: -117.82101},
	  {lat: 34.0600927, lng: -117.82095},
	  
	  {lat: 34.0600661 , lng: -117.82091},
	  {lat: 34.0599727 , lng: -117.82091},
	  {lat: 34.0599039, lng: -117.82096},
	  {lat: 34.0599061, lng: -117.82101},
	  
	  {lat: 34.0598505, lng: -117.82115},
	  {lat: 34.0597483, lng: -117.82109}
	  ];
  
  var building163 = [ // coordinates for building 163(College of Business Administration)
	  {lat: 34.0612482, lng: -117.82049},
	  {lat: 34.0614371, lng: -117.82038},
	  {lat: 34.0611927, lng: -117.81986},
	  {lat: 34.0609993, lng: -117.82001}
	  ];
  
  var building164 = [ // coordinates for building 164(College of Business Administration)
	  {lat: 34.0614838 , lng: -117.82037},
	  {lat: 34.0616326 , lng: -117.82030},
	  {lat: 34.0616748 , lng: -117.81975},
	  {lat: 34.0615793 , lng:  -117.81919},
	  
	  {lat: 34.0614526, lng: -117.81931},
	  {lat: 34.0615215, lng:  -117.81977}
	  ];
  
  var building162 = [ // coordinates for building 162(College of Business Administration)
	  {lat: 34.0613260, lng: -117.81975},
	  {lat: 34.0614049, lng: -117.81937},
	  {lat: 34.0612493, lng: -117.81932},
	  {lat: 34.0611704, lng: -117.81970}
	  ];
  // Shade the polygon.

  var shade162 = new google.maps.Polygon({
	  paths: building162,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade162.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade162, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade162, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade162, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
	  
  var shade164 = new google.maps.Polygon({
	  paths: building164,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade164.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade164, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade164, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade164, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
	  
  var shade163 = new google.maps.Polygon({
	  paths: building163,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade163.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade163, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade163, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade163, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
	  
  var shade17 = new google.maps.Polygon({
	  paths: building17,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade17.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade17, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade17, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade17, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
	  
  var shade9 = new google.maps.Polygon({
	  paths: building9,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade9.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade9, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade9, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade9, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
	  
  var shade6 = new google.maps.Polygon({
	  paths: building6,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade6.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade6, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade6, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade6, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
	  
  var shade94 = new google.maps.Polygon({
	  paths: building94,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade94.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade94, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade94, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade94, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
	  
  var shade79A = new google.maps.Polygon({
	  paths: building79A,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade79A.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade79A, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade79A, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade79A, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
	  
  var shade79B = new google.maps.Polygon({
	  paths: building79B,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade79B.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade79B, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade79B, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade79B, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
	  
  var shade79 = new google.maps.Polygon({
	  paths: building79,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade79.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade79, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade79, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade79, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
	  
  var shade76 = new google.maps.Polygon({
	  paths: building76,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade76.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade76, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade76, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade76, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
	  
  var shade78 = new google.maps.Polygon({
	  paths: building78,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade78.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade78, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade78, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade78, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
	  
  var shade77 = new google.maps.Polygon({
	  paths: building77,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade77.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade77, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade77, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade77, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
	  
  var shade7 = new google.maps.Polygon({
	  paths: building7,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade7.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade7, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade7, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade7, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
	  
  var shade2 = new google.maps.Polygon({
	  paths: building2,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade2.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade2, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade2, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade2, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
	  
  var shade92 = new google.maps.Polygon({
	  paths: building92,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade92.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade92, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade92, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade92, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
	  
  var shade4A = new google.maps.Polygon({
	  paths: building4A,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade4A.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade4A, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade4A, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade4A, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
	  
  var shade4 = new google.maps.Polygon({
	  paths: building4,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade4.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade4, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade4, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade4, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
	  
  var shade3 = new google.maps.Polygon({
	  paths: building3,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade3.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade3, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade3, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade3, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
	  
  var shade5 = new google.maps.Polygon({
	  paths: building5,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.05,
	  strokeWeight: 0.5,
	  fillColor: '#FF0000',
	  fillOpacity: 0.5
	  });
	  
	  shade5.setMap(map);
	  // Listen for when the mouse hovers over the polygon
	  google.maps.event.addListener(shade5, 'mouseover', function (event) {
	       // Within the event listener, "this" refers to the polygon which
	       // received the event.
	       this.setOptions({
	           strokeColor: '#000000',
	           strokeOpacity: 0.8,
	           strokeWeight: 2,
	           fillColor: '#ff0000',
	           fillOpacity: 0.35
	       });
	  });
	  
	  // Listen for when the mouse stops hovering over the polygon    
	  google.maps.event.addListener(shade5, 'mouseout', function (event) {
	       this.setOptions({
	           strokeColor: '#ff0000',
	           strokeOpacity: 0.05,
	           strokeWeight: 0.5,
	           fillColor: '#ff0000',
	           fillOpacity: 0.5
	       });
	  });
	  
	  // Listen for clicks on the polygon
	  google.maps.event.addListener(shade5, 'click', function (event) {
	      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
	      modal.style.display = "block";
	  });
  
  var shade8 = new google.maps.Polygon({
  paths: building8,
  strokeColor: '#FF0000',
  strokeOpacity: 0.05,
  strokeWeight: 0.5,
  fillColor: '#FF0000',
  fillOpacity: 0.5
  });
  
  shade8.setMap(map);
  // Listen for when the mouse hovers over the polygon
  google.maps.event.addListener(shade8, 'mouseover', function (event) {
       // Within the event listener, "this" refers to the polygon which
       // received the event.
       this.setOptions({
           strokeColor: '#000000',
           strokeOpacity: 0.8,
           strokeWeight: 2,
           fillColor: '#ff0000',
           fillOpacity: 0.35
       });
  });
  
  // Listen for when the mouse stops hovering over the polygon    
  google.maps.event.addListener(shade8, 'mouseout', function (event) {
       this.setOptions({
           strokeColor: '#ff0000',
           strokeOpacity: 0.05,
           strokeWeight: 0.5,
           fillColor: '#ff0000',
           fillOpacity: 0.5
       });
  });
  
  // Listen for clicks on the polygon
  google.maps.event.addListener(shade8, 'click', function (event) {
      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
      modal.style.display = "block";
  });

  var shade1 = new google.maps.Polygon({
  paths: building1,
  strokeColor: '#FF0000',
  strokeOpacity: 0.05,
  strokeWeight: 0.5,
  fillColor: '#FF0000',
  fillOpacity: 0.5
  });
  
  shade1.setMap(map);
  // Listen for when the mouse hovers over the polygon
  google.maps.event.addListener(shade1, 'mouseover', function (event) {
       // Within the event listener, "this" refers to the polygon which
       // received the event.
      this.setOptions({
          strokeColor: '#000000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#ff0000',
          fillOpacity: 0.35
      });
  });
      
  // Listen for when the mouse stops hovering over the polygon    
  google.maps.event.addListener(shade1, 'mouseout', function (event) {
      this.setOptions({
          strokeColor: '#ff0000',
          strokeOpacity: 0.05,
          strokeWeight: 0.5,
          fillColor: '#ff0000',
          fillOpacity: 0.5
      });
  });
  
  //Listen for clicks on the polygon
  google.maps.event.addListener(shade1, 'click', function (event) {
      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
      modal.style.display = "block";
  });
  
  var shade35 = new google.maps.Polygon({
  paths: building35,
  strokeColor: '#FF0000',
  strokeOpacity: 0.05,
  strokeWeight: 0.5,
  fillColor: '#FF0000',
  fillOpacity: 0.5
  });
  
  shade35.setMap(map);  
  // Listen for when the mouse hovers over the polygon
  google.maps.event.addListener(shade35, 'mouseover', function (event) {
       // Within the event listener, "this" refers to the polygon which
       // received the event.
      this.setOptions({
          strokeColor: '#000000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#ff0000',
          fillOpacity: 0.35
      });
  });
      
  // Listen for when the mouse stops hovering over the polygon    
  google.maps.event.addListener(shade35, 'mouseout', function (event) {
      this.setOptions({
          strokeColor: '#ff0000',
          strokeOpacity: 0.05,
          strokeWeight: 0.5,
          fillColor: '#ff0000',
          fillOpacity: 0.5
      });
  });
  
  //Listen for clicks on the polygon
  google.maps.event.addListener(shade35, 'click', function (event) {
      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
      modal.style.display = "block";
      num++;
  });
  
  var shade66 = new google.maps.Polygon({
  paths: building66,
  strokeColor: '#FF0000',
  strokeOpacity: 0.05,
  strokeWeight: 0.5,
  fillColor: '#FF0000',
  fillOpacity: 0.5
  });
  
  shade66.setMap(map);
  // Listen for when the mouse hovers over the polygon
  google.maps.event.addListener(shade66, 'mouseover', function (event) {
      this.setOptions({
          strokeColor: '#000000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#ff0000',
          fillOpacity: 0.35
      });
  });
      
  // Listen for when the mouse stops hovering over the polygon    
  google.maps.event.addListener(shade66, 'mouseout', function (event) {
      this.setOptions({
          strokeColor: '#ff0000',
          strokeOpacity: 0.05,
          strokeWeight: 0.5,
          fillColor: '#ff0000',
          fillOpacity: 0.5
      });
  });
  
  //Listen for clicks on the polygon
  google.maps.event.addListener(shade66, 'click', function (event) {
      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
      modal.style.display = "block";
      num++;
  });
  
  var shade97 = new google.maps.Polygon({
  paths: building97,
  strokeColor: '#FF0000',
  strokeOpacity: 0.05,
  strokeWeight: 0.5,
  fillColor: '#FF0000',
  fillOpacity: 0.5
  });
  
  shade97.setMap(map);
  // Listen for when the mouse hovers over the polygon
  google.maps.event.addListener(shade97, 'mouseover', function (event) {
       // Within the event listener, "this" refers to the polygon which
       // received the event.
      this.setOptions({
          strokeColor: '#000000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#ff0000',
          fillOpacity: 0.35
      });
  });
      
  // Listen for when the mouse stops hovering over the polygon    
  google.maps.event.addListener(shade97, 'mouseout', function (event) {
      this.setOptions({
          strokeColor: '#ff0000',
          strokeOpacity: 0.05,
          strokeWeight: 0.5,
          fillColor: '#ff0000',
          fillOpacity: 0.5
      });
  });
  
  //Listen for clicks on the polygon
  google.maps.event.addListener(shade97, 'click', function (event) {
      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
      modal.style.display = "block";
      num++;
  });
	  
  var shade15 = new google.maps.Polygon({
  paths: building15,
  strokeColor: '#FF0000',
  strokeOpacity: 0.05,
  strokeWeight: 0.5,
  fillColor: '#FF0000',
  fillOpacity: 0.5
  });
  
  shade15.setMap(map); 
  // Listen for when the mouse hovers over the polygon
  google.maps.event.addListener(shade15, 'mouseover', function (event) {
       // Within the event listener, "this" refers to the polygon which
       // received the event.
      this.setOptions({
          strokeColor: '#000000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#ff0000',
          fillOpacity: 0.35
      });
  });
  
  // Listen for when the mouse stops hovering over the polygon    
  google.maps.event.addListener(shade15, 'mouseout', function (event) {
      this.setOptions({
          strokeColor: '#ff0000',
          strokeOpacity: 0.05,
          strokeWeight: 0.5,
          fillColor: '#ff0000',
          fillOpacity: 0.5
      });
  });
  
  //Listen for clicks on the polygon
  google.maps.event.addListener(shade15, 'click', function (event) {
      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
      modal.style.display = "block";
      num++;
  });
  
  var shade26 = new google.maps.Polygon({
  paths: building26,
  strokeColor: '#FF0000',
  strokeOpacity: 0.05,
  strokeWeight: 0.5,
  fillColor: '#FF0000',
  fillOpacity: 0.5
  });
  
  shade26.setMap(map); 
  // Listen for when the mouse hovers over the polygon
  google.maps.event.addListener(shade26, 'mouseover', function (event) {
       // Within the event listener, "this" refers to the polygon which
       // received the event.
      this.setOptions({
          strokeColor: '#000000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#ff0000',
          fillOpacity: 0.35
      });
  });
  
  // Listen for when the mouse stops hovering over the polygon    
  google.maps.event.addListener(shade26, 'mouseout', function (event) {
      this.setOptions({
          strokeColor: '#ff0000',
          strokeOpacity: 0.05,
          strokeWeight: 0.5,
          fillColor: '#ff0000',
          fillOpacity: 0.5
      });
  });
  
  //Listen for clicks on the polygon
  google.maps.event.addListener(shade26, 'click', function (event) {
      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
      modal.style.display = "block";
      num++;
  });
	  
  var shade24 = new google.maps.Polygon({
  paths: building24,
  strokeColor: '#FF0000',
  strokeOpacity: 0.05,
  strokeWeight: 0.5,
  fillColor: '#FF0000',
  fillOpacity: 0.5
  });
  
  shade24.setMap(map);
  // Listen for when the mouse hovers over the polygon
  google.maps.event.addListener(shade24, 'mouseover', function (event) {
       // Within the event listener, "this" refers to the polygon which
       // received the event.
      this.setOptions({
          strokeColor: '#000000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#ff0000',
          fillOpacity: 0.35
      });
  });
  
  // Listen for when the mouse stops hovering over the polygon    
  google.maps.event.addListener(shade24, 'mouseout', function (event) {
      this.setOptions({
          strokeColor: '#ff0000',
          strokeOpacity: 0.05,
          strokeWeight: 0.5,
          fillColor: '#ff0000',
          fillOpacity: 0.5
      });
  });
  
  //Listen for clicks on the polygon
  google.maps.event.addListener(shade24, 'click', function (event) {
      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
      modal.style.display = "block";
      num++;
  });
  
  var shade25 = new google.maps.Polygon({
  paths: building25,
  strokeColor: '#FF0000',
  strokeOpacity: 0.05,
  strokeWeight: 0.5,
  fillColor: '#FF0000',
  fillOpacity: 0.5
  });
  
  shade25.setMap(map);
  // Listen for when the mouse hovers over the polygon
  google.maps.event.addListener(shade25, 'mouseover', function (event) {
       // Within the event listener, "this" refers to the polygon which
       // received the event.
      this.setOptions({
          strokeColor: '#000000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#ff0000',
          fillOpacity: 0.35
      });
  }); 
  
  // Listen for when the mouse stops hovering over the polygon    
  google.maps.event.addListener(shade25, 'mouseout', function (event) {
      this.setOptions({
          strokeColor: '#ff0000',
          strokeOpacity: 0.05,
          strokeWeight: 0.5,
          fillColor: '#ff0000',
          fillOpacity: 0.5
      });
  });
  
  //Listen for clicks on the polygon
  google.maps.event.addListener(shade25, 'click', function (event) {
      picChange.src = locations[num][2]; //need to use i location, location[i][2], like that
      modal.style.display = "block";
      num++;
  });
	
	
  /*
   * 	BATHROOM POLYGON OPERATIONS
   */
  
  /*var microwave97 = [ // coordinates for microwave 1 in building 97(Marketplace)
	  
	  {lat: 34.0576268, lng: -117.82333},
	  {lat: 34.0576556, lng: -117.82324},
	  {lat: 34.0576156, lng: -117.82323},
	  {lat: 34.0575923, lng: -117.82330}
	  ];
  
  var shademw97 = new google.maps.Polygon({
  paths: microwave97,
  strokeColor: '#003E77',
  strokeOpacity: 0.2,
  strokeWeight: 0.5,
  fillColor: '#003E77',
  fillOpacity: 0.15
  });
  shademw97.setMap(map);*/
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
   
   /*
    *  MICROWAVE POLYGON OPERATIONS
    */
   
   var microwave97 = [ // coordinates for microwave 1 in building 97(Marketplace)
		  
		  {lat: 34.0576268, lng: -117.82333},
		  {lat: 34.0576556, lng: -117.82324},
		  {lat: 34.0576156, lng: -117.82323},
		  {lat: 34.0575923, lng: -117.82330}
		  
		  ];
	  
   var shademw97 = new google.maps.Polygon({
	  paths: microwave97,
	  strokeColor: '#003E77',
	  strokeOpacity: 0.2,
	  strokeWeight: 0.5,
	  fillColor: '#003E77',
	  fillOpacity: 0.5
	  });
	  shademw97.setMap(map);
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

