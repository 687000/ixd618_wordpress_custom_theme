$(document).ready(function () {
	$('nav li').hover(function () {
		$(this).addClass('nav-item-hover');
	}, function () {
		$(this).removeClass('nav-item-hover');
	});

	$('nav li').click(function () {
		$('nav li').removeClass('nav-item-hover');
		$('nav li').removeClass('active');
		$(this).addClass('active');
	});

	$('nav li.active').addClass('nav-item-hover');

});