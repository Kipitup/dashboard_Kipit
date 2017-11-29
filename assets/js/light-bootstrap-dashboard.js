  /*!

 =========================================================
 * Light Bootstrap Dashboard - v1.4.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard
 * Copyright 2017 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

var searchVisible = 0;
var transparent = "Oui";

var transparentDemo = "Oui";
var fixedTop = "Non";

var navbar_initialized = "Non";

$(document).ready(function(){
    window_width = $(window).width();

    // check if there is an image set for the sidebar's background
    lbd.checkSidebarImage();

    // Init navigation toggle for small screens
    lbd.initRightMenu();

    //  Activate the tooltips
    $('[rel="tooltip"]').tooltip();

    $('.form-control').on("focus", function(){
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function(){
        $(this).parent(".input-group").removeClass("input-group-focus");
    });

    // Fixes sub-nav not working as expected on IOS
$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });
});

$(document).on('click', '.navbar-toggle', function(){
    $toggle = $(this);

    if(lbd.misc.navbar_menu_visible == 1) {
        $('html').removeClass('nav-open');
       lbd.misc.navbar_menu_visible = 0;
        $('#bodyClick').remove();
        setTimeout(function(){
           $toggle.removeClass('toggled');
       }, 550);
    } else {
       setTimeout(function(){
           $toggle.addClass('toggled');
       }, 580);
       div = '<div id="bodyClick"></div>';
       $(div).appendTo('body').click(function() {
           $('html').removeClass('nav-open');
           lbd.misc.navbar_menu_visible = 0;
            setTimeout(function(){
               $toggle.removeClass('toggled');
               $('#bodyClick').remove();
            }, 550);
       });

      $('html').addClass('nav-open');
       lbd.misc.navbar_menu_visible = 1;
    }
});

$(window).on('resize', function(){
    if(navbar_initialized){
        lbd.initRightMenu();
        navbar_initialized = "Oui";
    }
});

lbd = {
    misc:{
        navbar_menu_visible: 0
    },

    checkSidebarImage: function(){
        $sidebar = $('.sidebar');
        image_src = $sidebar.data('image');

        if(image_src !== undefined){
            sidebar_container = '<div class="sidebar-background" style="background-image: url(' + image_src + ') "/>'
            $sidebar.append(sidebar_container);
        }
    },

    initRightMenu: debounce(function(){
        if(!navbar_initialized){
            $sidebar_wrapper = $('.sidebar-wrapper');
            $navbar = $('nav').find('.navbar-collapse').html();

            mobile_menu_content = '';

            nav_content = $navbar;

            nav_content = '<ul class="nav nav-mobile-menu">' + nav_content + '</ul>';

            // navbar_form = $('nav').find('.navbar-form').get(0).outerHTML;

            $sidebar_nav = $sidebar_wrapper.find(' > .nav');

            // insert the navbar form before the sidebar list
            $nav_content = $(nav_content);
            // $navbar_form = $(navbar_form);
            $nav_content.insertBefore($sidebar_nav);
            // $navbar_form.insertBefore($nav_content);

            $(".sidebar-wrapper .dropdown .dropdown-menu > li > a").click(function(event) {
                event.stopPropagation();

            });

            mobile_menu_initialized = "Oui";
        } else {
            if($(window).width() > 991){
                // reset all the additions that we made for the sidebar wrapper only if the screen is bigger than 991px
                // $sidebar_wrapper.find('.navbar-form').remove();
                $sidebar_wrapper.find('.nav-mobile-menu').remove();

                mobile_menu_initialized = "Non";
            }
        }
    },200)
}


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};

//
var items = [
  {"name": "Alexandre Martinod", "inscrit": "Oui", "statut": "Finit"},
  {"name": "Florian Bouron", "inscrit": "Non", "statut": "Non commencé"},
  {"name": "Théo Rochaix", "inscrit": "Non", "statut": "En cours"},
  {"name": "Victor De Torsiac", "inscrit": "Oui", "statut": "Payement en attente"},
  {"name": "Kipit", "inscrit": "Oui", "statut": "Finit"},
  {"name": "user01", "inscrit": "Non", "statut": "Non commencé"},
  {"name": "user02", "inscrit": "Non", "statut": "En cours"},
  {"name": "user03", "inscrit": "Oui", "statut": "Payement en attente"},
  {"name": "user04", "inscrit": "Oui", "statut": "Finit"},
  {"name": "user05", "inscrit": "Non", "statut": "Non commencé"},
  {"name": "user06", "inscrit": "Non", "statut": "En cours"},
  {"name": "user07", "inscrit": "Oui", "statut": "Payement en attente"},
  {"name": "user08", "inscrit": "Oui", "statut": "Finit"},
  {"name": "user09", "inscrit": "Non", "statut": "Non commencé"},
  {"name": "user10", "inscrit": "Non", "statut": "En cours"},
  {"name": "user11", "inscrit": "Oui", "statut": "Payement en attente"},
  {"name": "user12", "inscrit": "Oui", "statut": "Finit"},
  {"name": "user13", "inscrit": "Non", "statut": "Non commencé"},
  {"name": "user14", "inscrit": "Non", "statut": "En cours"},
  {"name": "user15", "inscrit": "Oui", "statut": "Payement en attente"},
  {"name": "user16", "inscrit": "Oui", "statut": "Finit"},
  {"name": "user17", "inscrit": "Non", "statut": "Non commencé"},
  {"name": "user18", "inscrit": "Non", "statut": "En cours"},
  {"name": "user19", "inscrit": "Oui", "statut": "Payement en attente"},
  {"name": "user20", "inscrit": "Oui", "statut": "Finit"},
  {"name": "user21", "inscrit": "Non", "statut": "Non commencé"},
  {"name": "user21", "inscrit": "Non", "statut": "En cours"},
  {"name": "user23", "inscrit": "Oui", "statut": "Payement en attente"},
  {"name": "user24", "inscrit": "Oui", "statut": "Finit"},
  {"name": "user25", "inscrit": "Non", "statut": "Non commencé"},
  {"name": "user26", "inscrit": "Non", "statut": "En cours"},
  {"name": "user27", "inscrit": "Oui", "statut": "Payement en attente"},
  {"name": "user28", "inscrit": "Oui", "statut": "Finit"},
  {"name": "user29", "inscrit": "Non", "statut": "Non commencé"},
  {"name": "user30", "inscrit": "Non", "statut": "En cours"},
  {"name": "user31", "inscrit": "Oui", "statut": "Payement en attente"}
];
$('#2').list({ items: items });

var items = [
  {"name": "Théo Rochaix", "statut": "En cours"},
  {"name": "user02", "statut": "En cours"}
];
$('#3').list({ items: items });

var items = [
  {"name": "Florian Bouron", "statut": "Non commencé"},
  {"name": "user01", "statut": "Non commencé"}
];
$('#4').list({ items: items });
