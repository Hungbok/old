/*!
 * GRT Youtube Popup - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2017 GRT107
 * Released under the MIT license
*/

(function ( $ ) {

	$.fn.qrcode = function( options ) {

		return this.each(function() {

			// Get video ID
			var qrimg = $(this).attr("qr-img");

			var qrname = $(this).attr("qr-name");

			var qrbackimg = $(this).attr("qr-backimg");

			// Default options
			var settings = $.extend({
				qrcodeImg: qrimg,
				qrcodeName: qrname,
				qrcodeBackimg: qrbackimg,
				autoPlay: true,
				theme: "dark"
			}, options );

			// Initialize on click
			if(qrimg) {
				$(this).on( "click", function() {
					 $("body").append($('<div class="qr-popup qr-background">'+
                                '<span class="qr-close"></span>'+
								'<div class="qr-content">'+
									'<div class="qr-name">'+settings.qrcodeName+'</div>'+
									'<img src="'+settings.qrcodeImg+'" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                    '<div class="qr-background-image">'+
                                        '<img src="'+settings.qrcodeBackimg+'" onerror="this.src=`/image/error-icon.svg`">'+
                                    '</div>'+
								'</div>'+
							'</div>')
                            .hide()
                            .fadeIn()
                            );
							$('body').css({'overflow-y': 'hidden', 'margin-right': '8px'});
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
				$(".qr-close, .qr-popup").click(function(){
					$(".qr-popup").fadeOut("normal", function() { $(this).remove();});
					$('body').css({'overflow-y': 'scroll', 'margin-right': '0px'});
					$('#element').off('scroll touchmove mousewheel');
				});
			});

			$(document).keyup(function(event) {
				if (event.keyCode == 27){
					$(".qr-popup").fadeOut("normal", function() { $(this).remove();});
					$('body').css({'overflow-y': 'scroll', 'margin-right': '0px'});
					$('#element').off('scroll touchmove mousewheel');
				}
			});
		});
	};

}( jQuery ));


$(".qr-code").qrcode({
	autoPlay:true,
	theme: "dark"
});