// при прокрутке вниз добавляем в .navbar класс .scrolled
$(document).scroll(function(){
	$('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());
});