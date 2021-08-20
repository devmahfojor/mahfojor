$(function(){
	$('.menu-container a, .down-arrow a').on('click', function(){
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		},1000)
		return false
	});
});

function openMenu(){
	document.getElementById('navbar').style.width="100%";
}
function closeMenu(){
	document.getElementById('navbar').style.width="0%";
}
var mixer = mixitup('.portfolio-grid');

lightbox.option({
	'resizeDuration': 0,
	'wrapAround': true
    })

