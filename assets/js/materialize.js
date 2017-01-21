

// materialize features

$(document).ready(function() {
    // side bar nav
	$('.button-collapse').sideNav({
    	menuWidth: 200, // Default is 240
    	edge: 'left', // Choose the horizontal origin
    	closeOnClick: true // Closes side-nav on <a> clicks
  		}
	);
	// collapsible menus
	 $('.collapsible').collapsible();
});
