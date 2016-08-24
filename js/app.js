$(document).ready(function() {
	$('.meow').mousedown(function() {
		playMeow();
		console.log('Meowing?')
		$('a.ticklecat').animate(
			{'top': '400px'},
			300,
			function() {
				$(this).return();
			}
		);
	});

function playMeow () {
	$('#meow-sound')[0].volume = 0.5;
	$('#meow-sound')[0].load();
	$('#meow-sound')[0].play();
};

});