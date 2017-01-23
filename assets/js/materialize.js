

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
	// smooth scroll
	$('.scrollspy').scrollSpy();
	// fixed action button
	$('.fixed-action-btn').openFAB();
 	$('.fixed-action-btn').closeFAB();
 	$('.fixed-action-btn.toolbar').openToolbar();
 	$('.fixed-action-btn.toolbar').closeToolbar();
});
