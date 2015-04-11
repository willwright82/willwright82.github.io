/***************** Waypoints ******************/

$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

});

/***************** Slide-In Nav ******************/

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});

/***************** Smooth Scrolling ******************/

$(function() {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});

});

/***************** Nav Transformicon ******************/

document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
});

/***************** Overlays ******************/

$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
});

/***************** Flexsliders ******************/

$(window).load(function() {

	$('#portfolioSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

});

/***************** Portfolio Details ******************/

$(function() {
    $('.first').avgrund({
      width: 640, // max is 640px
      height: 350, // max is 350px
      showClose: true, // switch to 'true' for enabling close button
      showCloseText: 'x', // type your text for close button
      closeByEscape: true, // enables closing popup by 'Esc'..
      closeByDocument: false, // ..and by clicking document itself
      holderClass: 'avgrund', // lets you name custom class for popin holder..
      // overlayClass: '', // ..and overlay block
      onBlurContainer: 'body', // enables blur filter for specified block
      openOnEvent: true, // set to 'false' to init on load
      setEvent: 'click', // use your event like 'mouseover', 'touchmove', etc.
      template: '<div class="container">' +
      '<div class="row">' +
      '<div class="col-lg-8 col-lg-offset-2">' +
      '<div class="portfolio-detail">' +
      // '<img src="img/portfolio/simplefp3.jpg" class="img-responsive img-centered" alt="Simple Financial Planning">' +
      // '<h1>Simple Financial Planning</h1>' +
      // '<p>This responsive website, built in HTML5/CSS3 and featuring jQuery animation, provides the visitors with a clean interface with easily accessible content.</p>' +
      // '<ul class="list-inline item-details">' +
      // '<li>Client:&nbsp;' +
      // '<strong><a href="http://www.simplefp.co.uk" target="_blank">Simple Financial</a>' +
      // '</strong>' +
      // '</li>' +
      // '<li>Date:&nbsp;' +
      // '<strong>October 2014</strong>' +
      // '</li>' +
      // '<li>Roles:&nbsp;' +
      // '<strong>Digital Design, UI Development</strong>' +
      // '</li>' +
      '<img src="img/portfolio/flavourly3.jpg" class="img-responsive img-centered" alt="Flavourly.com">' +
      '<h1>Flavourly.com</h1>' +
      '<p>A mobile-first HTML5/SASS website and in-house eCommerce “Marketplace”, built with scalability, usability and a quality user experience as a main focus.</p>' +
      '<ul class="list-inline item-details">' +
      '<li>Client:&nbsp;' +
      '<strong><a href="http://www.flavourly.com" target="_blank">Flavourly.com</a>' +
      '</strong>' +
      '</li>' +
      '<li>Date:&nbsp;' +
      '<strong>December 2014</strong>' +
      '</li>' +
      '<li>Roles:&nbsp;' +
      '<strong>Digital Design, UI Development, Photography</strong>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      // '<a href="#portfolio" class="left control first">' +
      // '<i class="fa fa-chevron-left"></i>' +
      // '</a>' +
      // '<a href="#portfolio" class="right control first">' +
      // '<i class="fa fa-chevron-right"></i>' +
      // '</a>' +
      '</div>'
    });
    $('.second').avgrund({
      width: 640, // max is 640px
      height: 350, // max is 350px
      showClose: true, // switch to 'true' for enabling close button
      showCloseText: 'x', // type your text for close button
      closeByEscape: true, // enables closing popup by 'Esc'..
      closeByDocument: false, // ..and by clicking document itself
      holderClass: 'avgrund', // lets you name custom class for popin holder..
      // overlayClass: '', // ..and overlay block
      onBlurContainer: 'body', // enables blur filter for specified block
      openOnEvent: true, // set to 'false' to init on load
      setEvent: 'click', // use your event like 'mouseover', 'touchmove', etc.
      template: '<div class="container">' +
      '<div class="row">' +
      '<div class="col-lg-8 col-lg-offset-2">' +
      '<div class="portfolio-detail">' +
      '<img src="img/portfolio/liq3.jpg" class="img-responsive img-centered" alt="">' +
      '<h1>Life Insurance Quotes UK</h1>' +
      '<p>A responsive website in HTML5/CSS3 and jQuery animation, which features a PHP/Javascript enabled Web App, allowing the visitor to easily compare quotes from all the major UK life insurance providers.</p>' +
      '<ul class="list-inline item-details">' +
      '<li>Client:&nbsp;' +
      '<strong>Life Insurance Quotes' +
      '</strong>' +
      '</li>' +
      '<li>Date:&nbsp;' +
      '<strong>August 2014</strong>' +
      '</li>' +
      '<li>Roles:&nbsp;' +
      '<strong>Digital Design, UI Development</strong>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      // '<a href="#portfolio" class="left control first">' +
      // '<i class="fa fa-chevron-left"></i>' +
      // '</a>' +
      // '<a href="#portfolio" class="right control first">' +
      // '<i class="fa fa-chevron-right"></i>' +
      // '</a>' +
      '</div>'
    });
    $('.third').avgrund({
      width: 640, // max is 640px
      height: 350, // max is 350px
      showClose: true, // switch to 'true' for enabling close button
      showCloseText: 'x', // type your text for close button
      closeByEscape: true, // enables closing popup by 'Esc'..
      closeByDocument: false, // ..and by clicking document itself
      holderClass: 'avgrund', // lets you name custom class for popin holder..
      // overlayClass: '', // ..and overlay block
      onBlurContainer: 'body', // enables blur filter for specified block
      openOnEvent: true, // set to 'false' to init on load
      setEvent: 'click', // use your event like 'mouseover', 'touchmove', etc.
      template: '<div class="container">' +
      '<div class="row">' +
      '<div class="col-lg-8 col-lg-offset-2">' +
      '<div class="portfolio-detail">' +
      '<img src="img/portfolio/croma3.jpg" class="img-responsive img-centered" alt="">' +
      '<h1>Croma Marketing Solutions</h1>' +
      // '<p>Croma Marketing Solutions is a consultancy in strategic planning, marketing management and innovation. They believe in transformation and contribute to break patterns, integrate efforts, streamline operations and empower leaders to drive change.</p>' +
      '<p>The responsive HTML+CSS+Javascript website, created to establish the company&rsquo;s new identity, features jQuery animation, a secure content management system for the company&rsquo;s blog, and custom Google Maps. All of this is fully optimised for usability on every possible screen size, from mobiles to tablets, to large desktop monitors.</p>' +
      '<p>In order to increase their online presence, Facebook, Google+ and Linkedin pages, a YouTube channel, and Twitter, Foursquare and Instagram profiles were created to announce events, courses, blog posts, special offers and other updates from the company.</p>' +
      '<ul class="list-inline item-details">' +
      '<li>Client:&nbsp;' +
      '<strong><a href="http://cromasolutions.com.br" target="_blank">Croma Marketing Solutions</a>' +
      '</strong>' +
      '</li>' +
      '<li>Date:&nbsp;' +
      '<strong>November 2013</strong>' +
      '</li>' +
      '<li>Roles:&nbsp;' +
      '<strong>Digital Design, UI Development, Online Presence, CMS, Social Media</strong>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      // '<a href="#portfolio" class="left control first">' +
      // '<i class="fa fa-chevron-left"></i>' +
      // '</a>' +
      // '<a href="#portfolio" class="right control first">' +
      // '<i class="fa fa-chevron-right"></i>' +
      // '</a>' +
      '</div>'
    });
    $('.fourth').avgrund({
      width: 640, // max is 640px
      height: 350, // max is 350px
      showClose: true, // switch to 'true' for enabling close button
      showCloseText: 'x', // type your text for close button
      closeByEscape: true, // enables closing popup by 'Esc'..
      closeByDocument: false, // ..and by clicking document itself
      holderClass: 'avgrund', // lets you name custom class for popin holder..
      // overlayClass: '', // ..and overlay block
      onBlurContainer: 'body', // enables blur filter for specified block
      openOnEvent: true, // set to 'false' to init on load
      setEvent: 'click', // use your event like 'mouseover', 'touchmove', etc.
      template: '<div class="container">' +
      '<div class="row">' +
      '<div class="col-lg-8 col-lg-offset-2">' +
      '<div class="portfolio-detail">' +
      '<img src="img/portfolio/simplefa3.jpg" class="img-responsive img-centered" alt="Simple Financial Associates">' +
      '<h1>Simple Financial Associates</h1>' +
      '<p>A responsive elegant landing page built in HTML5/CSS3 with Javascript animated smooth scrolling, created to serve as a placeholder for a future website for the company.</p>' +
      '<p>As a one page website, several modals are shown when necessary in order to present all the relevant information for their visitors.</p>' +
      '<ul class="list-inline item-details">' +
      '<li>Client:&nbsp;' +
      '<strong><a href="http://www.simplefa.co.uk" target="_blank">Simple Financial Associates</a>' +
      '</strong>' +
      '</li>' +
      '<li>Date:&nbsp;' +
      '<strong>August 2014</strong>' +
      '</li>' +
      '<li>Roles:&nbsp;' +
      '<strong>Digital Design, UI Development</strong>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      // '<a href="#portfolio" class="left control first">' +
      // '<i class="fa fa-chevron-left"></i>' +
      // '</a>' +
      // '<a href="#portfolio" class="right control first">' +
      // '<i class="fa fa-chevron-right"></i>' +
      // '</a>' +
      '</div>'
    });
$('.fifth').avgrund({
      width: 640, // max is 640px
      height: 350, // max is 350px
      showClose: true, // switch to 'true' for enabling close button
      showCloseText: 'x', // type your text for close button
      closeByEscape: true, // enables closing popup by 'Esc'..
      closeByDocument: false, // ..and by clicking document itself
      holderClass: 'avgrund', // lets you name custom class for popin holder..
      // overlayClass: '', // ..and overlay block
      onBlurContainer: 'body', // enables blur filter for specified block
      openOnEvent: true, // set to 'false' to init on load
      setEvent: 'click', // use your event like 'mouseover', 'touchmove', etc.
      template: '<div class="container">' +
      '<div class="row">' +
      '<div class="col-lg-8 col-lg-offset-2">' +
      '<div class="portfolio-detail">' +
      '<img src="img/portfolio/fitincompany.jpg" class="img-responsive img-centered" alt="Fit in Company">' +
      '<h1>Fit in Company</h1>' +
      '<p>The website in HTML5/CSS3 features javascript animated banners and a dynamic content blog area managed through a safe content management system. All of this is fully optimised for usability both on desktops and mobile platforms.</p>' +
      '<ul class="list-inline item-details">' +
      '<li>Client:&nbsp;' +
      '<strong><a href="http://www.fitincompany.com.br" target="_blank">Fit in Company</a>' +
      '</strong>' +
      '</li>' +
      '<li>Date:&nbsp;' +
      '<strong>September 2013</strong>' +
      '</li>' +
      '<li>Roles:&nbsp;' +
      '<strong>UI Development</strong>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      // '<a href="#portfolio" class="left control first">' +
      // '<i class="fa fa-chevron-left"></i>' +
      // '</a>' +
      // '<a href="#portfolio" class="right control first">' +
      // '<i class="fa fa-chevron-right"></i>' +
      // '</a>' +
      '</div>'
    });
$('.sixth').avgrund({
      width: 640, // max is 640px
      height: 350, // max is 350px
      showClose: true, // switch to 'true' for enabling close button
      showCloseText: 'x', // type your text for close button
      closeByEscape: true, // enables closing popup by 'Esc'..
      closeByDocument: false, // ..and by clicking document itself
      holderClass: 'avgrund', // lets you name custom class for popin holder..
      // overlayClass: '', // ..and overlay block
      onBlurContainer: 'body', // enables blur filter for specified block
      openOnEvent: true, // set to 'false' to init on load
      setEvent: 'click', // use your event like 'mouseover', 'touchmove', etc.
      template: '<div class="container">' +
      '<div class="row">' +
      '<div class="col-lg-8 col-lg-offset-2">' +
      '<div class="portfolio-detail">' +
      '<img src="img/portfolio/plastamp.jpg" class="img-responsive img-centered" alt="Plastamp">' +
      '<h1>Plastamp &mdash; Plastic Containers</h1>' +
      '<p>The website in HTML5/CSS3, also has javascript animations and dynamic content for the company&rsquo;s latest updates. All of this is fully optimised for usability both on desktops and mobile platforms.</p>' +
      '<ul class="list-inline item-details">' +
      '<li>Client:&nbsp;' +
      '<strong><a href="http://www.plastamp.com.br" target="_blank">Plastamp</a>' +
      '</strong>' +
      '</li>' +
      '<li>Date:&nbsp;' +
      '<strong>June 2013</strong>' +
      '</li>' +
      '<li>Roles:&nbsp;' +
      '<strong>UI Development, Photography</strong>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      // '<a href="#portfolio" class="left control first">' +
      // '<i class="fa fa-chevron-left"></i>' +
      // '</a>' +
      // '<a href="#portfolio" class="right control first">' +
      // '<i class="fa fa-chevron-right"></i>' +
      // '</a>' +
      '</div>'
    });
});