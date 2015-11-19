//navbar-collapse hide if select
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});


$(function(){
        // Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('#main-nav-fixed').offset().top;

        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyHeaderTop ) {
                        $('#main-nav-fixed ').css({position: 'fixed', top: '0px'});
                        $('#nav-seperator').css('display', 'block');
                } else {
                        $('#main-nav-fixed ').css({position: 'static', top: '0px'});
                        $('#nav-seperator').css('display', 'none');
                }
        });
  });
