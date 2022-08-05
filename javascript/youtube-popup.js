/*!
 * GRT Youtube Popup - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2017 GRT107
 * Released under the MIT license
*/

(function ( $ ) {

	$.fn.grtyoutube = function( options ) {

		return this.each(function() {

			// Get video ID
			var getvideoid = $(this).attr("youtubeid");

			// Default options
			var settings = $.extend({
				videoID: getvideoid,
				autoPlay: true,
				theme: "dark"
			}, options );

			// Convert some values
			if(settings.autoPlay === true) { settings.autoPlay = 1 } else if(settings.autoPlay === false)  { settings.autoPlay = 0 }
			if(settings.theme === "dark") { settings.theme = "grtyoutube-dark-theme" } else if(settings.theme === "light")  { settings.theme = "grtyoutube-light-theme" }

			// Initialize on click
			if(getvideoid) {
				$(this).on( "click", function() {
					 $("body").append('<div class="grtyoutube-popup '+settings.theme+'">'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<iframe class="grtyoutube-iframe" src="https://www.youtube.com/embed/'+settings.videoID+'?rel=0&wmode=transparent&autoplay='+settings.autoPlay+'&iv_load_policy=3" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
							'</div>');
							$('body').css({'overflow-y': 'hidden'});
							$('#element').on('scroll touchmove mousewheel', function(event) {
								event.preventDefault();
								event.stopPropagation();
			
								return false;
							});
				});
			}

			// Close the box on click or escape
			$(this).on('click', function (event) {
				event.preventDefault();
				$(".grtyoutube-popup-close, .grtyoutube-popup").click(function(){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				});
			});

			$(document).keyup(function(event) {
				if (event.keyCode == 27){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				}
			});
		});
	};

}( jQuery ));


$(".youtube-link").grtyoutube({
	autoPlay:true,
	theme: "dark"
});

/*!
 * GRT Youtube Popup - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2017 GRT107
 * Released under the MIT license
*/

(function ( $ ) {

	$.fn.grttwitch = function( options ) {

		return this.each(function() {

			// Get video ID
			var getdvideoid = $(this).attr("twitchid");

			var getdvideotitle = $(this).attr("twitchtitle");

			// Default options
			var settings = $.extend({
				videoID: getdvideoid,
				videoTitle: getdvideotitle,
				autoPlay: true,
				theme: "dark"
			}, options );

			// Convert some values
			if(settings.autoPlay === true) { settings.autoPlay = 1 } else if(settings.autoPlay === false)  { settings.autoPlay = 0 }
			if(settings.theme === "dark") { settings.theme = "grtyoutube-dark-theme" } else if(settings.theme === "light")  { settings.theme = "grtyoutube-light-theme" }

			// Initialize on click
			if(getdvideoid) {
				$(this).on( "click", function() {
					 $("body").append('<div class="grtyoutube-popup '+settings.theme+'">'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://player.twitch.tv/?channel='+settings.videoID+'&enableExtensions=true&muted=false&parent=twitch.tv&player=popout" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
							'</div>');
							$('body').css({'overflow-y': 'hidden'});
							$('#element').on('scroll touchmove mousewheel', function(event) {
								event.preventDefault();
								event.stopPropagation();
			
								return false;
							});
				});
			}

			// Close the box on click or escape
			$(this).on('click', function (event) {
				event.preventDefault();
				$(".grtyoutube-popup-close, .grtyoutube-popup").click(function(){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				});
			});

			$(document).keyup(function(event) {
				if (event.keyCode == 27){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				}
			});
		});
	};

}( jQuery ));


$(".twitch-link").grttwitch({
	autoPlay:true,
	theme: "dark"
});


/*!
 * GRT Youtube Popup - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2017 GRT107
 * Released under the MIT license
*/

(function ( $ ) {

	$.fn.grtdrive = function( options ) {

		return this.each(function() {

			// Get video ID
			var getdvideoid = $(this).attr("driveid");

			var getdvideotitle = $(this).attr("drivetitle");

			// Default options
			var settings = $.extend({
				videoID: getdvideoid,
				videoTitle: getdvideotitle,
				autoPlay: true,
				theme: "dark"
			}, options );

			// Convert some values
			if(settings.autoPlay === true) { settings.autoPlay = 1 } else if(settings.autoPlay === false)  { settings.autoPlay = 0 }
			if(settings.theme === "dark") { settings.theme = "grtyoutube-dark-theme" } else if(settings.theme === "light")  { settings.theme = "grtyoutube-light-theme" }

			// Initialize on click
			if(getdvideoid) {
				$(this).on( "click", function() {
					 $("body").append('<div class="grtyoutube-popup '+settings.theme+'">'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
							'</div>');
							$('body').css({'overflow-y': 'hidden'});
							$('#element').on('scroll touchmove mousewheel', function(event) {
								event.preventDefault();
								event.stopPropagation();
			
								return false;
							});
				});
			}

			// Close the box on click or escape
			$(this).on('click', function (event) {
				event.preventDefault();
				$(".grtyoutube-popup-close").click(function(){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				});
			});

			$(document).keyup(function(event) {
				if (event.keyCode == 27){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				}
			});
		});
	};

}( jQuery ));


$(".drive-link").grtdrive({
	autoPlay:true,
	theme: "dark"
});

/*!
 * GRT Youtube Popup - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2017 GRT107
 * Released under the MIT license
*/

(function ( $ ) {

	$.fn.grtdrive2 = function( options ) {

		return this.each(function() {

			// Get video ID
			var getdvideoid = $(this).attr("driveid");

			var getdvideotitle = $(this).attr("drivetitle");

			var getdvideoid2 = $(this).attr("driveid2");

			var getdvideotitle2 = $(this).attr("drivetitle2");

			// Default options
			var settings = $.extend({
				videoID: getdvideoid,
				videoTitle: getdvideotitle,
				videoID2: getdvideoid2,
				videoTitle2: getdvideotitle2,
				autoPlay: true,
				theme: "dark"
			}, options );

			// Convert some values
			if(settings.autoPlay === true) { settings.autoPlay = 1 } else if(settings.autoPlay === false)  { settings.autoPlay = 0 }
			if(settings.theme === "dark") { settings.theme = "grtyoutube-dark-theme" } else if(settings.theme === "light")  { settings.theme = "grtyoutube-light-theme" }

			// Initialize on click
			if(getdvideoid) {
				$(this).on( "click", function() {
					 $("body").append('<div class="grtyoutube-popup '+settings.theme+'">'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle2+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID2+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
							'</div>');
							$('body').css({'overflow-y': 'hidden'});
							$('#element').on('scroll touchmove mousewheel', function(event) {
								event.preventDefault();
								event.stopPropagation();
			
								return false;
							});
				});
			}

			// Close the box on click or escape
			$(this).on('click', function (event) {
				event.preventDefault();
				$(".grtyoutube-popup-close").click(function(){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				});
			});

			$(document).keyup(function(event) {
				if (event.keyCode == 27){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				}
			});
		});
	};

}( jQuery ));


$(".drive-link2").grtdrive2({
	autoPlay:true,
	theme: "dark"
});

/*!
 * GRT Youtube Popup - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2017 GRT107
 * Released under the MIT license
*/

(function ( $ ) {

	$.fn.grtdrive3 = function( options ) {

		return this.each(function() {

			// Get video ID
			var getdvideoid = $(this).attr("driveid");

			var getdvideotitle = $(this).attr("drivetitle");

			var getdvideoid2 = $(this).attr("driveid2");

			var getdvideotitle2 = $(this).attr("drivetitle2");

			var getdvideoid3 = $(this).attr("driveid3");

			var getdvideotitle3 = $(this).attr("drivetitle3");

			// Default options
			var settings = $.extend({
				videoID: getdvideoid,
				videoTitle: getdvideotitle,
				videoID2: getdvideoid2,
				videoTitle2: getdvideotitle2,
				videoID3: getdvideoid3,
				videoTitle3: getdvideotitle3,
				autoPlay: true,
				theme: "dark"
			}, options );

			// Convert some values
			if(settings.autoPlay === true) { settings.autoPlay = 1 } else if(settings.autoPlay === false)  { settings.autoPlay = 0 }
			if(settings.theme === "dark") { settings.theme = "grtyoutube-dark-theme" } else if(settings.theme === "light")  { settings.theme = "grtyoutube-light-theme" }

			// Initialize on click
			if(getdvideoid) {
				$(this).on( "click", function() {
					 $("body").append('<div class="grtyoutube-popup '+settings.theme+'">'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle2+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID2+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle3+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID3+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
							'</div>');
							$('body').css({'overflow-y': 'hidden'});
							$('#element').on('scroll touchmove mousewheel', function(event) {
								event.preventDefault();
								event.stopPropagation();
			
								return false;
							});
				});
			}

			// Close the box on click or escape
			$(this).on('click', function (event) {
				event.preventDefault();
				$(".grtyoutube-popup-close").click(function(){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				});
			});

			$(document).keyup(function(event) {
				if (event.keyCode == 27){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				}
			});
		});
	};

}( jQuery ));


$(".drive-link3").grtdrive3({
	autoPlay:true,
	theme: "dark"
});

/*!
 * GRT Youtube Popup - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2017 GRT107
 * Released under the MIT license
*/

(function ( $ ) {

	$.fn.grtdrive4 = function( options ) {

		return this.each(function() {

			// Get video ID
			var getdvideoid = $(this).attr("driveid");

			var getdvideotitle = $(this).attr("drivetitle");

			var getdvideoid2 = $(this).attr("driveid2");

			var getdvideotitle2 = $(this).attr("drivetitle2");

			var getdvideoid3 = $(this).attr("driveid3");

			var getdvideotitle3 = $(this).attr("drivetitle3");

			var getdvideoid4 = $(this).attr("driveid4");

			var getdvideotitle4 = $(this).attr("drivetitle4");

			// Default options
			var settings = $.extend({
				videoID: getdvideoid,
				videoTitle: getdvideotitle,
				videoID2: getdvideoid2,
				videoTitle2: getdvideotitle2,
				videoID3: getdvideoid3,
				videoTitle3: getdvideotitle3,
				videoID4: getdvideoid4,
				videoTitle4: getdvideotitle4,
				autoPlay: true,
				theme: "dark"
			}, options );

			// Convert some values
			if(settings.autoPlay === true) { settings.autoPlay = 1 } else if(settings.autoPlay === false)  { settings.autoPlay = 0 }
			if(settings.theme === "dark") { settings.theme = "grtyoutube-dark-theme" } else if(settings.theme === "light")  { settings.theme = "grtyoutube-light-theme" }

			// Initialize on click
			if(getdvideoid) {
				$(this).on( "click", function() {
					 $("body").append('<div class="grtyoutube-popup '+settings.theme+'">'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle2+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID2+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle3+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID3+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle4+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID4+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
							'</div>');
							$('body').css({'overflow-y': 'hidden'});
							$('#element').on('scroll touchmove mousewheel', function(event) {
								event.preventDefault();
								event.stopPropagation();
			
								return false;
							});
				});
			}

			// Close the box on click or escape
			$(this).on('click', function (event) {
				event.preventDefault();
				$(".grtyoutube-popup-close").click(function(){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				});
			});

			$(document).keyup(function(event) {
				if (event.keyCode == 27){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				}
			});
		});
	};

}( jQuery ));


$(".drive-link4").grtdrive4({
	autoPlay:true,
	theme: "dark"
});

/*!
 * GRT Youtube Popup - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2017 GRT107
 * Released under the MIT license
*/

(function ( $ ) {

	$.fn.grtdrive5 = function( options ) {

		return this.each(function() {

			// Get video ID
			var getdvideoid = $(this).attr("driveid");

			var getdvideotitle = $(this).attr("drivetitle");

			var getdvideoid2 = $(this).attr("driveid2");

			var getdvideotitle2 = $(this).attr("drivetitle2");

			var getdvideoid3 = $(this).attr("driveid3");

			var getdvideotitle3 = $(this).attr("drivetitle3");

			var getdvideoid4 = $(this).attr("driveid4");

			var getdvideotitle4 = $(this).attr("drivetitle4");

			var getdvideoid5 = $(this).attr("driveid5");

			var getdvideotitle5 = $(this).attr("drivetitle5");

			// Default options
			var settings = $.extend({
				videoID: getdvideoid,
				videoTitle: getdvideotitle,
				videoID2: getdvideoid2,
				videoTitle2: getdvideotitle2,
				videoID3: getdvideoid3,
				videoTitle3: getdvideotitle3,
				videoID4: getdvideoid4,
				videoTitle4: getdvideotitle4,
				videoID5: getdvideoid5,
				videoTitle5: getdvideotitle5,
				autoPlay: true,
				theme: "dark"
			}, options );

			// Convert some values
			if(settings.autoPlay === true) { settings.autoPlay = 1 } else if(settings.autoPlay === false)  { settings.autoPlay = 0 }
			if(settings.theme === "dark") { settings.theme = "grtyoutube-dark-theme" } else if(settings.theme === "light")  { settings.theme = "grtyoutube-light-theme" }

			// Initialize on click
			if(getdvideoid) {
				$(this).on( "click", function() {
					 $("body").append('<div class="grtyoutube-popup '+settings.theme+'">'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle2+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID2+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle3+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID3+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle4+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID4+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle5+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID5+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
							'</div>');
							$('body').css({'overflow-y': 'hidden'});
							$('#element').on('scroll touchmove mousewheel', function(event) {
								event.preventDefault();
								event.stopPropagation();
			
								return false;
							});
				});
			}

			// Close the box on click or escape
			$(this).on('click', function (event) {
				event.preventDefault();
				$(".grtyoutube-popup-close").click(function(){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				});
			});

			$(document).keyup(function(event) {
				if (event.keyCode == 27){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				}
			});
		});
	};

}( jQuery ));


$(".drive-link5").grtdrive5({
	autoPlay:true,
	theme: "dark"
});

/*!
 * GRT Youtube Popup - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2017 GRT107
 * Released under the MIT license
*/

(function ( $ ) {

	$.fn.grtdrive6 = function( options ) {

		return this.each(function() {

			// Get video ID
			var getdvideoid = $(this).attr("driveid");

			var getdvideotitle = $(this).attr("drivetitle");

			var getdvideoid2 = $(this).attr("driveid2");

			var getdvideotitle2 = $(this).attr("drivetitle2");

			var getdvideoid3 = $(this).attr("driveid3");

			var getdvideotitle3 = $(this).attr("drivetitle3");

			var getdvideoid4 = $(this).attr("driveid4");

			var getdvideotitle4 = $(this).attr("drivetitle4");

			var getdvideoid5 = $(this).attr("driveid5");

			var getdvideotitle5 = $(this).attr("drivetitle5");

			var getdvideoid6 = $(this).attr("driveid6");

			var getdvideotitle6 = $(this).attr("drivetitle6");

			// Default options
			var settings = $.extend({
				videoID: getdvideoid,
				videoTitle: getdvideotitle,
				videoID2: getdvideoid2,
				videoTitle2: getdvideotitle2,
				videoID3: getdvideoid3,
				videoTitle3: getdvideotitle3,
				videoID4: getdvideoid4,
				videoTitle4: getdvideotitle4,
				videoID5: getdvideoid5,
				videoTitle5: getdvideotitle5,
				videoID6: getdvideoid6,
				videoTitle6: getdvideotitle6,
				autoPlay: true,
				theme: "dark"
			}, options );

			// Convert some values
			if(settings.autoPlay === true) { settings.autoPlay = 1 } else if(settings.autoPlay === false)  { settings.autoPlay = 0 }
			if(settings.theme === "dark") { settings.theme = "grtyoutube-dark-theme" } else if(settings.theme === "light")  { settings.theme = "grtyoutube-light-theme" }

			// Initialize on click
			if(getdvideoid) {
				$(this).on( "click", function() {
					 $("body").append('<div class="grtyoutube-popup '+settings.theme+'">'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle2+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID2+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle3+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID3+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle4+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID4+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle5+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID5+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle6+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID6+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
							'</div>');
							$('body').css({'overflow-y': 'hidden'});
							$('#element').on('scroll touchmove mousewheel', function(event) {
								event.preventDefault();
								event.stopPropagation();
			
								return false;
							});
				});
			}

			// Close the box on click or escape
			$(this).on('click', function (event) {
				event.preventDefault();
				$(".grtyoutube-popup-close").click(function(){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				});
			});

			$(document).keyup(function(event) {
				if (event.keyCode == 27){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				}
			});
		});
	};

}( jQuery ));


$(".drive-link6").grtdrive6({
	autoPlay:true,
	theme: "dark"
});

/*!
 * GRT Youtube Popup - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2017 GRT107
 * Released under the MIT license
*/

(function ( $ ) {

	$.fn.grtdrive7 = function( options ) {

		return this.each(function() {

			// Get video ID
			var getdvideoid = $(this).attr("driveid");

			var getdvideotitle = $(this).attr("drivetitle");

			var getdvideoid2 = $(this).attr("driveid2");

			var getdvideotitle2 = $(this).attr("drivetitle2");

			var getdvideoid3 = $(this).attr("driveid3");

			var getdvideotitle3 = $(this).attr("drivetitle3");

			var getdvideoid4 = $(this).attr("driveid4");

			var getdvideotitle4 = $(this).attr("drivetitle4");

			var getdvideoid5 = $(this).attr("driveid5");

			var getdvideotitle5 = $(this).attr("drivetitle5");

			var getdvideoid6 = $(this).attr("driveid6");

			var getdvideotitle6 = $(this).attr("drivetitle6");

			var getdvideoid7 = $(this).attr("driveid7");

			var getdvideotitle7 = $(this).attr("drivetitle7");

			// Default options
			var settings = $.extend({
				videoID: getdvideoid,
				videoTitle: getdvideotitle,
				videoID2: getdvideoid2,
				videoTitle2: getdvideotitle2,
				videoID3: getdvideoid3,
				videoTitle3: getdvideotitle3,
				videoID4: getdvideoid4,
				videoTitle4: getdvideotitle4,
				videoID5: getdvideoid5,
				videoTitle5: getdvideotitle5,
				videoID6: getdvideoid6,
				videoTitle6: getdvideotitle6,
				videoID7: getdvideoid7,
				videoTitle7: getdvideotitle7,
				autoPlay: true,
				theme: "dark"
			}, options );

			// Convert some values
			if(settings.autoPlay === true) { settings.autoPlay = 1 } else if(settings.autoPlay === false)  { settings.autoPlay = 0 }
			if(settings.theme === "dark") { settings.theme = "grtyoutube-dark-theme" } else if(settings.theme === "light")  { settings.theme = "grtyoutube-light-theme" }

			// Initialize on click
			if(getdvideoid) {
				$(this).on( "click", function() {
					 $("body").append('<div class="grtyoutube-popup '+settings.theme+'">'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle2+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID2+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle3+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID3+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle4+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID4+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle5+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID5+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle6+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID6+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle7+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID7+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
							'</div>');
							$('body').css({'overflow-y': 'hidden'});
							$('#element').on('scroll touchmove mousewheel', function(event) {
								event.preventDefault();
								event.stopPropagation();
			
								return false;
							});
				});
			}

			// Close the box on click or escape
			$(this).on('click', function (event) {
				event.preventDefault();
				$(".grtyoutube-popup-close").click(function(){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				});
			});

			$(document).keyup(function(event) {
				if (event.keyCode == 27){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				}
			});
		});
	};

}( jQuery ));


$(".drive-link7").grtdrive7({
	autoPlay:true,
	theme: "dark"
});

/*!
 * GRT Youtube Popup - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2017 GRT107
 * Released under the MIT license
*/

(function ( $ ) {

	$.fn.grtdrive8 = function( options ) {

		return this.each(function() {

			// Get video ID
			var getdvideoid = $(this).attr("driveid");

			var getdvideotitle = $(this).attr("drivetitle");

			var getdvideoid2 = $(this).attr("driveid2");

			var getdvideotitle2 = $(this).attr("drivetitle2");

			var getdvideoid3 = $(this).attr("driveid3");

			var getdvideotitle3 = $(this).attr("drivetitle3");

			var getdvideoid4 = $(this).attr("driveid4");

			var getdvideotitle4 = $(this).attr("drivetitle4");

			var getdvideoid5 = $(this).attr("driveid5");

			var getdvideotitle5 = $(this).attr("drivetitle5");

			var getdvideoid6 = $(this).attr("driveid6");

			var getdvideotitle6 = $(this).attr("drivetitle6");

			var getdvideoid7 = $(this).attr("driveid7");

			var getdvideotitle7 = $(this).attr("drivetitle7");

			var getdvideoid8 = $(this).attr("driveid8");

			var getdvideotitle8 = $(this).attr("drivetitle8");

			// Default options
			var settings = $.extend({
				videoID: getdvideoid,
				videoTitle: getdvideotitle,
				videoID2: getdvideoid2,
				videoTitle2: getdvideotitle2,
				videoID3: getdvideoid3,
				videoTitle3: getdvideotitle3,
				videoID4: getdvideoid4,
				videoTitle4: getdvideotitle4,
				videoID5: getdvideoid5,
				videoTitle5: getdvideotitle5,
				videoID6: getdvideoid6,
				videoTitle6: getdvideotitle6,
				videoID7: getdvideoid7,
				videoTitle7: getdvideotitle7,
				videoID8: getdvideoid8,
				videoTitle8: getdvideotitle8,
				autoPlay: true,
				theme: "dark"
			}, options );

			// Convert some values
			if(settings.autoPlay === true) { settings.autoPlay = 1 } else if(settings.autoPlay === false)  { settings.autoPlay = 0 }
			if(settings.theme === "dark") { settings.theme = "grtyoutube-dark-theme" } else if(settings.theme === "light")  { settings.theme = "grtyoutube-light-theme" }

			// Initialize on click
			if(getdvideoid) {
				$(this).on( "click", function() {
					 $("body").append('<div class="grtyoutube-popup '+settings.theme+'">'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle2+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID2+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle3+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID3+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle4+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID4+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle5+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID5+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle6+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID6+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle7+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID7+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle8+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID8+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
							'</div>');
							$('body').css({'overflow-y': 'hidden'});
							$('#element').on('scroll touchmove mousewheel', function(event) {
								event.preventDefault();
								event.stopPropagation();
			
								return false;
							});
				});
			}

			// Close the box on click or escape
			$(this).on('click', function (event) {
				event.preventDefault();
				$(".grtyoutube-popup-close").click(function(){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				});
			});

			$(document).keyup(function(event) {
				if (event.keyCode == 27){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				}
			});
		});
	};

}( jQuery ));


$(".drive-link8").grtdrive8({
	autoPlay:true,
	theme: "dark"
});

/*!
 * GRT Youtube Popup - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2017 GRT107
 * Released under the MIT license
*/

(function ( $ ) {

	$.fn.grtdrive9 = function( options ) {

		return this.each(function() {

			// Get video ID
			var getdvideoid = $(this).attr("driveid");

			var getdvideotitle = $(this).attr("drivetitle");

			var getdvideoid2 = $(this).attr("driveid2");

			var getdvideotitle2 = $(this).attr("drivetitle2");

			var getdvideoid3 = $(this).attr("driveid3");

			var getdvideotitle3 = $(this).attr("drivetitle3");

			var getdvideoid4 = $(this).attr("driveid4");

			var getdvideotitle4 = $(this).attr("drivetitle4");

			var getdvideoid5 = $(this).attr("driveid5");

			var getdvideotitle5 = $(this).attr("drivetitle5");

			var getdvideoid6 = $(this).attr("driveid6");

			var getdvideotitle6 = $(this).attr("drivetitle6");

			var getdvideoid7 = $(this).attr("driveid7");

			var getdvideotitle7 = $(this).attr("drivetitle7");

			var getdvideoid8 = $(this).attr("driveid8");

			var getdvideotitle8 = $(this).attr("drivetitle8");

			var getdvideoid9 = $(this).attr("driveid9");

			var getdvideotitle9 = $(this).attr("drivetitle9");

			// Default options
			var settings = $.extend({
				videoID: getdvideoid,
				videoTitle: getdvideotitle,
				videoID2: getdvideoid2,
				videoTitle2: getdvideotitle2,
				videoID3: getdvideoid3,
				videoTitle3: getdvideotitle3,
				videoID4: getdvideoid4,
				videoTitle4: getdvideotitle4,
				videoID5: getdvideoid5,
				videoTitle5: getdvideotitle5,
				videoID6: getdvideoid6,
				videoTitle6: getdvideotitle6,
				videoID7: getdvideoid7,
				videoTitle7: getdvideotitle7,
				videoID8: getdvideoid8,
				videoTitle8: getdvideotitle8,
				videoID9: getdvideoid9,
				videoTitle9: getdvideotitle9,
				autoPlay: true,
				theme: "dark"
			}, options );

			// Convert some values
			if(settings.autoPlay === true) { settings.autoPlay = 1 } else if(settings.autoPlay === false)  { settings.autoPlay = 0 }
			if(settings.theme === "dark") { settings.theme = "grtyoutube-dark-theme" } else if(settings.theme === "light")  { settings.theme = "grtyoutube-light-theme" }

			// Initialize on click
			if(getdvideoid) {
				$(this).on( "click", function() {
					 $("body").append('<div class="grtyoutube-popup '+settings.theme+'">'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle2+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID2+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle3+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID3+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle4+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID4+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle5+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID5+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle6+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID6+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle7+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID7+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle8+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID8+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle9+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID9+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
							'</div>');
							$('body').css({'overflow-y': 'hidden'});
							$('#element').on('scroll touchmove mousewheel', function(event) {
								event.preventDefault();
								event.stopPropagation();
			
								return false;
							});
				});
			}

			// Close the box on click or escape
			$(this).on('click', function (event) {
				event.preventDefault();
				$(".grtyoutube-popup-close").click(function(){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				});
			});

			$(document).keyup(function(event) {
				if (event.keyCode == 27){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				}
			});
		});
	};

}( jQuery ));


$(".drive-link9").grtdrive9({
	autoPlay:true,
	theme: "dark"
});

/*!
 * GRT Youtube Popup - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2017 GRT107
 * Released under the MIT license
*/

(function ( $ ) {

	$.fn.grtdrive10 = function( options ) {

		return this.each(function() {

			// Get video ID
			var getdvideoid = $(this).attr("driveid");

			var getdvideotitle = $(this).attr("drivetitle");

			var getdvideoid2 = $(this).attr("driveid2");

			var getdvideotitle2 = $(this).attr("drivetitle2");

			var getdvideoid3 = $(this).attr("driveid3");

			var getdvideotitle3 = $(this).attr("drivetitle3");

			var getdvideoid4 = $(this).attr("driveid4");

			var getdvideotitle4 = $(this).attr("drivetitle4");

			var getdvideoid5 = $(this).attr("driveid5");

			var getdvideotitle5 = $(this).attr("drivetitle5");

			var getdvideoid6 = $(this).attr("driveid6");

			var getdvideotitle6 = $(this).attr("drivetitle6");

			var getdvideoid7 = $(this).attr("driveid7");

			var getdvideotitle7 = $(this).attr("drivetitle7");

			var getdvideoid8 = $(this).attr("driveid8");

			var getdvideotitle8 = $(this).attr("drivetitle8");

			var getdvideoid9 = $(this).attr("driveid9");

			var getdvideotitle9 = $(this).attr("drivetitle9");

			var getdvideoid10 = $(this).attr("driveid10");

			var getdvideotitle10 = $(this).attr("drivetitle10");

			// Default options
			var settings = $.extend({
				videoID: getdvideoid,
				videoTitle: getdvideotitle,
				videoID2: getdvideoid2,
				videoTitle2: getdvideotitle2,
				videoID3: getdvideoid3,
				videoTitle3: getdvideotitle3,
				videoID4: getdvideoid4,
				videoTitle4: getdvideotitle4,
				videoID5: getdvideoid5,
				videoTitle5: getdvideotitle5,
				videoID6: getdvideoid6,
				videoTitle6: getdvideotitle6,
				videoID7: getdvideoid7,
				videoTitle7: getdvideotitle7,
				videoID8: getdvideoid8,
				videoTitle8: getdvideotitle8,
				videoID9: getdvideoid9,
				videoTitle9: getdvideotitle9,
				videoID10: getdvideoid10,
				videoTitle10: getdvideotitle10,
				autoPlay: true,
				theme: "dark"
			}, options );

			// Convert some values
			if(settings.autoPlay === true) { settings.autoPlay = 1 } else if(settings.autoPlay === false)  { settings.autoPlay = 0 }
			if(settings.theme === "dark") { settings.theme = "grtyoutube-dark-theme" } else if(settings.theme === "light")  { settings.theme = "grtyoutube-light-theme" }

			// Initialize on click
			if(getdvideoid) {
				$(this).on( "click", function() {
					 $("body").append('<div class="grtyoutube-popup '+settings.theme+'">'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle2+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID2+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle3+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID3+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle4+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID4+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle5+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID5+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle6+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID6+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle7+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID7+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle8+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID8+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle9+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID9+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle10+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID10+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
							'</div>');
							$('body').css({'overflow-y': 'hidden'});
							$('#element').on('scroll touchmove mousewheel', function(event) {
								event.preventDefault();
								event.stopPropagation();
			
								return false;
							});
				});
			}

			// Close the box on click or escape
			$(this).on('click', function (event) {
				event.preventDefault();
				$(".grtyoutube-popup-close").click(function(){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				});
			});

			$(document).keyup(function(event) {
				if (event.keyCode == 27){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				}
			});
		});
	};

}( jQuery ));


$(".drive-link10").grtdrive10({
	autoPlay:true,
	theme: "dark"
});

/*!
 * GRT Youtube Popup - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2017 GRT107
 * Released under the MIT license
*/

(function ( $ ) {

	$.fn.grtdrive11 = function( options ) {

		return this.each(function() {

			// Get video ID
			var getdvideoid = $(this).attr("driveid");

			var getdvideotitle = $(this).attr("drivetitle");

			var getdvideoid2 = $(this).attr("driveid2");

			var getdvideotitle2 = $(this).attr("drivetitle2");

			var getdvideoid3 = $(this).attr("driveid3");

			var getdvideotitle3 = $(this).attr("drivetitle3");

			var getdvideoid4 = $(this).attr("driveid4");

			var getdvideotitle4 = $(this).attr("drivetitle4");

			var getdvideoid5 = $(this).attr("driveid5");

			var getdvideotitle5 = $(this).attr("drivetitle5");

			var getdvideoid6 = $(this).attr("driveid6");

			var getdvideotitle6 = $(this).attr("drivetitle6");

			var getdvideoid7 = $(this).attr("driveid7");

			var getdvideotitle7 = $(this).attr("drivetitle7");

			var getdvideoid8 = $(this).attr("driveid8");

			var getdvideotitle8 = $(this).attr("drivetitle8");

			var getdvideoid9 = $(this).attr("driveid9");

			var getdvideotitle9 = $(this).attr("drivetitle9");

			var getdvideoid10 = $(this).attr("driveid10");

			var getdvideotitle10 = $(this).attr("drivetitle10");

			var getdvideoid11 = $(this).attr("driveid11");

			var getdvideotitle11 = $(this).attr("drivetitle11");

			// Default options
			var settings = $.extend({
				videoID: getdvideoid,
				videoTitle: getdvideotitle,
				videoID2: getdvideoid2,
				videoTitle2: getdvideotitle2,
				videoID3: getdvideoid3,
				videoTitle3: getdvideotitle3,
				videoID4: getdvideoid4,
				videoTitle4: getdvideotitle4,
				videoID5: getdvideoid5,
				videoTitle5: getdvideotitle5,
				videoID6: getdvideoid6,
				videoTitle6: getdvideotitle6,
				videoID7: getdvideoid7,
				videoTitle7: getdvideotitle7,
				videoID8: getdvideoid8,
				videoTitle8: getdvideotitle8,
				videoID9: getdvideoid9,
				videoTitle9: getdvideotitle9,
				videoID10: getdvideoid10,
				videoTitle10: getdvideotitle10,
				videoID11: getdvideoid11,
				videoTitle11: getdvideotitle11,
				autoPlay: true,
				theme: "dark"
			}, options );

			// Convert some values
			if(settings.autoPlay === true) { settings.autoPlay = 1 } else if(settings.autoPlay === false)  { settings.autoPlay = 0 }
			if(settings.theme === "dark") { settings.theme = "grtyoutube-dark-theme" } else if(settings.theme === "light")  { settings.theme = "grtyoutube-light-theme" }

			// Initialize on click
			if(getdvideoid) {
				$(this).on( "click", function() {
					 $("body").append('<div class="grtyoutube-popup '+settings.theme+'">'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle2+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID2+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle3+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID3+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle4+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID4+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle5+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID5+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle6+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID6+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle7+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID7+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle8+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID8+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle9+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID9+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle10+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID10+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle11+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID11+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
							'</div>');
							$('body').css({'overflow-y': 'hidden'});
							$('#element').on('scroll touchmove mousewheel', function(event) {
								event.preventDefault();
								event.stopPropagation();
			
								return false;
							});
				});
			}

			// Close the box on click or escape
			$(this).on('click', function (event) {
				event.preventDefault();
				$(".grtyoutube-popup-close").click(function(){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				});
			});

			$(document).keyup(function(event) {
				if (event.keyCode == 27){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				}
			});
		});
	};

}( jQuery ));


$(".drive-link11").grtdrive11({
	autoPlay:true,
	theme: "dark"
});

/*!
 * GRT Youtube Popup - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2017 GRT107
 * Released under the MIT license
*/

(function ( $ ) {

	$.fn.grtdrive12 = function( options ) {

		return this.each(function() {

			// Get video ID
			var getdvideoid = $(this).attr("driveid");

			var getdvideotitle = $(this).attr("drivetitle");

			var getdvideoid2 = $(this).attr("driveid2");

			var getdvideotitle2 = $(this).attr("drivetitle2");

			var getdvideoid3 = $(this).attr("driveid3");

			var getdvideotitle3 = $(this).attr("drivetitle3");

			var getdvideoid4 = $(this).attr("driveid4");

			var getdvideotitle4 = $(this).attr("drivetitle4");

			var getdvideoid5 = $(this).attr("driveid5");

			var getdvideotitle5 = $(this).attr("drivetitle5");

			var getdvideoid6 = $(this).attr("driveid6");

			var getdvideotitle6 = $(this).attr("drivetitle6");

			var getdvideoid7 = $(this).attr("driveid7");

			var getdvideotitle7 = $(this).attr("drivetitle7");

			var getdvideoid8 = $(this).attr("driveid8");

			var getdvideotitle8 = $(this).attr("drivetitle8");

			var getdvideoid9 = $(this).attr("driveid9");

			var getdvideotitle9 = $(this).attr("drivetitle9");

			var getdvideoid10 = $(this).attr("driveid10");

			var getdvideotitle10 = $(this).attr("drivetitle10");

			var getdvideoid11 = $(this).attr("driveid11");

			var getdvideotitle11 = $(this).attr("drivetitle11");

			var getdvideoid12 = $(this).attr("driveid12");

			var getdvideotitle12 = $(this).attr("drivetitle12");

			// Default options
			var settings = $.extend({
				videoID: getdvideoid,
				videoTitle: getdvideotitle,
				videoID2: getdvideoid2,
				videoTitle2: getdvideotitle2,
				videoID3: getdvideoid3,
				videoTitle3: getdvideotitle3,
				videoID4: getdvideoid4,
				videoTitle4: getdvideotitle4,
				videoID5: getdvideoid5,
				videoTitle5: getdvideotitle5,
				videoID6: getdvideoid6,
				videoTitle6: getdvideotitle6,
				videoID7: getdvideoid7,
				videoTitle7: getdvideotitle7,
				videoID8: getdvideoid8,
				videoTitle8: getdvideotitle8,
				videoID9: getdvideoid9,
				videoTitle9: getdvideotitle9,
				videoID10: getdvideoid10,
				videoTitle10: getdvideotitle10,
				videoID11: getdvideoid11,
				videoTitle11: getdvideotitle11,
				videoID12: getdvideoid12,
				videoTitle12: getdvideotitle12,
				autoPlay: true,
				theme: "dark"
			}, options );

			// Convert some values
			if(settings.autoPlay === true) { settings.autoPlay = 1 } else if(settings.autoPlay === false)  { settings.autoPlay = 0 }
			if(settings.theme === "dark") { settings.theme = "grtyoutube-dark-theme" } else if(settings.theme === "light")  { settings.theme = "grtyoutube-light-theme" }

			// Initialize on click
			if(getdvideoid) {
				$(this).on( "click", function() {
					 $("body").append('<div class="grtyoutube-popup '+settings.theme+'">'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle2+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID2+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle3+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID3+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle4+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID4+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle5+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID5+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle6+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID6+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle7+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID7+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle8+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID8+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle9+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID9+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle10+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID10+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle11+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID11+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<div class="grtyoutube-title">'+settings.videoTitle12+'</div>'+
									'<iframe class="grtyoutube-iframe" src="https://drive.google.com/file/d/'+settings.videoID12+'/preview" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
							'</div>');
							$('body').css({'overflow-y': 'hidden'});
							$('#element').on('scroll touchmove mousewheel', function(event) {
								event.preventDefault();
								event.stopPropagation();
			
								return false;
							});
				});
			}

			// Close the box on click or escape
			$(this).on('click', function (event) {
				event.preventDefault();
				$(".grtyoutube-popup-close").click(function(){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				});
			});

			$(document).keyup(function(event) {
				if (event.keyCode == 27){
					$(".grtyoutube-popup").remove();
					$('body').css({'overflow-y': 'scroll'});
					$('#element').off('scroll touchmove mousewheel');
				}
			});
		});
	};

}( jQuery ));


$(".drive-link12").grtdrive12({
	autoPlay:true,
	theme: "dark"
});


function reload() {
	document.getElementById("livestreaming").remove();
	$(".streaming").prepend('<iframe id="livestreaming" src="https://docs.google.com/spreadsheets/d/1ktqZoC5PUE98yyB89qxOsy8Dc5vckjYor9nj8wOGito/pubhtml/sheet?headers=false&gid=0&range=A10:N11"></iframe>');
};


let waklendar = document.querySelector('.wak-calendar','.wak-header-menu','.header-name');
let wakmon = document.querySelector('.mon.wak-weeks');
let waktue = document.querySelector('.tue.wak-weeks');
let wakwed = document.querySelector('.wed.wak-weeks');
let wakthu = document.querySelector('.thu.wak-weeks');
let wakfri = document.querySelector('.fri.wak-weeks');
let waksat = document.querySelector('.sat.wak-weeks');
let waksun = document.querySelector('.sun.wak-weeks');

waklendar.addEventListener('mouseover', function() {
	wakmon.classList.add('wak-weeks-hover');
	waktue.classList.add('wak-weeks-hover');
	wakwed.classList.add('wak-weeks-hover');
	wakthu.classList.add('wak-weeks-hover');
	wakfri.classList.add('wak-weeks-hover');
	waksat.classList.add('wak-weeks-hover');
	waksun.classList.add('wak-weeks-hover');
});

waklendar.addEventListener('mouseout', function() {
	wakmon.classList.remove('wak-weeks-hover');
	waktue.classList.remove('wak-weeks-hover');
	wakwed.classList.remove('wak-weeks-hover');
	wakthu.classList.remove('wak-weeks-hover');
	wakfri.classList.remove('wak-weeks-hover');
	waksat.classList.remove('wak-weeks-hover');
	waksun.classList.remove('wak-weeks-hover');
});

let agree = document.querySelector('#agreement');
let terms = document.querySelector('.terms-of-service');
let vods = document.querySelector('.help-vods');

$(document).ready(function() {
	$("input:checkbox").on('click', function() {
		if ( $('#agreement').prop('checked') ) {
			$('.calendar-disagree').attr("class", "calendar-disagree agree");
			$('.color-vods').attr("class", "help-content color-vods color-vods-hover");
			$("body").append('<style class="body-style">.f{border: 2px solid #198754!important;cursor: pointer;}.p {border: 2px solid #ffc107!important;cursor: pointer;}.e {border: 2px solid #fd7e14!important;cursor: not-allowed;}.u {border: 2px solid #0d6efd!important;cursor: default;}.r {border: 2px solid #dc3545!important;cursor: not-allowed;}.h {border: 2px solid #212529;cursor: not-allowed;}.hh {border: 2px solid #212529;cursor: not-allowed;}</style>');
			//terms.classList.add('closed');
			vods.classList.add('view-help');
		} else {
			$('.calendar-disagree').attr("class", "calendar-disagree");
			$('.color-vods').attr("class", "help-content color-vods");
			$(".body-style").remove();
			//terms.classList.remove('closed');
			vods.classList.remove('view-help');
		}
	});
});

window.addEventListener('load', function () {
	if($('#agreement').is(':checked')){
		$('.calendar-disagree').attr("class", "calendar-disagree agree");
		$('.color-vods').attr("class", "help-content color-vods color-vods-hover");
		$("body").append('<style class="body-style">.f{border: 2px solid #198754!important;cursor: pointer;}.p {border: 2px solid #ffc107!important;cursor: pointer;}.e {border: 2px solid #fd7e14!important;cursor: not-allowed;}.u {border: 2px solid #0d6efd!important;cursor: default;}.r {border: 2px solid #dc3545!important;cursor: not-allowed;}.h {border: 2px solid #212529;cursor: not-allowed;}.hh {border: 2px solid #212529;cursor: not-allowed;}</style>');
		//terms.classList.add('closed');
		vods.classList.add('view-help');
	}
});

$(document).ready(function(){
            
    $(document).mousemove(function(e){
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        var scroll = window.scrollY;
        
        $('.color-info-hover').css({
            left: mouseX + "px",
            top : mouseY - scroll + "px"
        })
    })
})

$(".help-color").mouseover(function () {
	$('.color-info').attr("class", "color-info color-info-hover");
});

$(".help-color").mouseout(function () {
	$('.color-info').attr("class", "color-info");
});