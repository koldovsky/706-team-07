// --------------SCROLL UP DOWN------------------------------------------------
var lastScrollPosition = 0; 

$('#scroll-up').click( function(){
	if ( $(document).scrollTop() > 0 ) {
		$('html,body').animate({scrollTop:0},500);
		lastScrollPosition = $(document).scrollTop();
	} else {
		$('html,body').animate({scrollTop:lastScrollPosition},500);
	}	
});


/*let a = 'DOWN';
let b = '▼';
a = a.concat(b);*/


$(document).scroll( function() {   
	if ( $(document).scrollTop() > 0 ) {
		$('#scroll-up').fadeIn();
		$('#scroll-up').text('▲');
	} else {
		$('#scroll-up').text('▼');
	}
});
