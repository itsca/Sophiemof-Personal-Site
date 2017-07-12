var /*Funciones*/
	goToSection = function(dot) {
	  var dotTargets = $(".dot-link");
	  var sectionTargets = $(".content-section");
	  for (var i = 0; i < dotTargets.length; i++) {
	  	if (dot === dotTargets[i]) {
	  		$('html, body').animate({
	        	scrollTop: ($(sectionTargets[i]).offset().top - 10)
	    	}, 1000);
	  	}; 
	  };
	},
	checkForFromUrl = function() {
	  if (window.location.href.indexOf("#FormSubmittedCorrectly:)") > -1) {
	      $('html, body').animate({
	          scrollTop: ($("#contact").offset().top - 100)
	      }, 1000);
	      $("#form-submitted-correctly").fadeIn();
	  }
	};
checkForFromUrl();


/*Mostrar dot nav desp del header*/
$(window).scroll(function () {
	var dotTargets = $(".dot-link");
	var sectionTargets = $(".content-section");
    if ($(window).scrollTop() >= 600) {
        $('#dot-nav-wrapper').fadeIn();
    }else {
    	$('#dot-nav-wrapper').fadeOut();
    }
    for (var i = 0; i < sectionTargets.length; i++) {
    	if ($(window).scrollTop() >= $(sectionTargets[i]).offset().top - 200) {
    		$('.current').removeClass('current');
    		$(dotTargets[i]).addClass('current');
    	};
    };
}	
);
/**/


/*Eventos*/
$('#dot-nav-wrapper li').click(function(event){
	event.preventDefault();
  $('.current').removeClass('current');
  $(this).addClass('current');
  goToSection(this);
});

$('#navLink1').click(function(event){
	event.preventDefault();
  	$('html, body').animate({
    	scrollTop: ($("#about-me").offset().top - 10)
	}, 1000);
});

$('#navLink2').click(function(event){
	event.preventDefault();
  	$('html, body').animate({
    	scrollTop: ($("#cv").offset().top - 10)
	}, 1000);
});

$('#navLink3').click(function(event){
	event.preventDefault();
  	$('html, body').animate({
    	scrollTop: ($("#portfolio").offset().top - 10)
	}, 1000);
});

$('#navLink4').click(function(event){
	event.preventDefault();
  	$('html, body').animate({
    	scrollTop: ($("#contact").offset().top - 10)
	}, 1000);
});
/*Fin Eventos*/