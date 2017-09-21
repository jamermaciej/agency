const navToggle = document.querySelector(".nav-toggle");
const header = document.querySelector(".header");

navToggle.addEventListener('click', function(){

	header.classList.toggle('open');

	if( header.classList.contains('open') ){

		this.setAttribute('aria-expended', true);

	} else{

		this.setAttribute('aria-expended', false);

	}

},false);

$(document).ready(function(){
	$('a[href^="#"]').click(function(e){
		e.preventDefault(); 

		var headerHeight = $('.header').outerHeight();
		var target = $(this).attr('href');
		$('body,html').animate({
			scrollTop: $(target).offset().top - headerHeight,
		}, 1000);
		location.hash = target;
		$('.header').removeClass('open');
		$('.nav-toggle').removeClass('open');
	});
});

window.addEventListener('scroll', function(){

    var header = document.querySelector('.header');
    var headerHeight = header.offsetHeight;

    if( document.body.scrollTop > headerHeight) {

        header.classList.add('fixed');

    } else {

        header.classList.remove('fixed');
    }

}, false);


