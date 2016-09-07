'use strict';

jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}}});

$(document).ready(function() {

	var currentQuestion = 0;

	var score = 0;

	var questions = [
			{question: 'How many cats do you already have?',
			choices: ['0', '1', '2-4', '5+'],
			points: ['0', '2', '4', '6']
			}, {
			question: 'If you have a cat/cats, are any following your cats name?',
			choices: ['Mr. Fluffy', 'Strippy', 'Sir PurrFurr', 'Dr. Garfield'],
			points: ['4', '0', '6', '2']
			}, {
			question: 'When you leave your house, how much do you care about your appearance?',
		 	choices: ['Everyone sees my cat shirt.', 'I care a lot.', 'As long as my hair looks good...', 'PJs are fine.'],
		 	points: ['4', '0', '2', '6']	
			},	{
			question: 'Who is your favorite cat star?',
			choices: ['Puss in Boots', 'Crookshanks', 'Sylvester', 'Grumpy Cat'],	
			points: ['2', '4', '0', '6']
			}, {
			question: 'What do you or would you call your cat?',
			choices: ['He/She', 'It', 'the Stink', 'Master'],
			points: ['4', '0', '2', '6']
	}];
	
	var currentQuestionIndex = 0;
	var currentQuestion = questions[currentQuestionIndex];
	var count = 0;

	//Submit button actions
	$('.cat').on("click", function() {
		console.log("submit button clicked");
		//must choose an answer to submit ---> not working yet
		if (event.target === "") {
			console.log("Please choose an option!")
			alert("Please choose an option!")
		} 
		else {
			playMeow();
			//animates yarn
			$('img.justyarn').animate({top: '-200'},
				500, "easeOutBounce"
			);
			$('img.justyarn').animate({top: '0'}, 
				500, "easeOutBounce"
			);
			pointTracker();
			//next question placed
			if  (currentQuestionIndex < questions.length) {
				loadQuestion(currentQuestion);
				$('.question').fadeIn("slow");
			} else {
				$('.question').hide();
				$('.finalresults').show();
			};
		};
	});

	//meow sound plays
	function playMeow () {
		$('#meow-sound')[0].volume = 0.5;
		$('#meow-sound')[0].load();
		$('#meow-sound')[0].play();
	};

	function loadQuestion(question, choices) {
		//updates question
		$('h2').text(question.question);
		//updates answers
		$('.questions ul').text('');
	  for ( var i = 0; i < question.choices.length; i++)
			$('.options').append("<li>" + question.choices[i] + "</li>");
	};
	
	//clicking new game
	$(".newgame").on("click", function() {
		console.log("New Game button clicked")
	});

	var points = 0;

	//clicking one of the answers
	$('.options').click(function() {
		//styling button
		$(event.target).css({border: "1px solid #da6a7d", borderRadius: "20px", width: "400px", height: "50px"});
		//make sure only selects 1?!
		console.log(event.target + " which is worth " + points + " points.")
		if ( $(event.target).text() === currentQuestion.correct);
		currentQuestionIndex +=1;
		currentQuestion = questions[currentQuestionIndex];
	});

	//Keeping track of point count
	function pointTracker() {
		//assigns points to each answer
		for ( var p = 0; p < points.length; i++) {
			points += points[p] << 0;
		}; 
		points++;
		console.log("You have " + points + " points.");
	};

	//function generateFeedback() {
		//if (catCount > 24) {
		//	catLady();
		//}
		//else if (catCount > 14 && catCount < 25) {
		//	$('.question') = 'You are kinda a cat lady!';
		//}
		//else if (catCount > 4 && catCount < 15) {
		//	$('.question') = 'You are barely a cat lady!';
		//}
		//else (catCount < 5) {
		//	$('question') = 'You arent a cat lady!';
		//}
	//}

	//What is a cat lady

	//poor dear, you're not a cat lady...
});


//var catLady = {question: "How many cat's do you own?", CLanswer="b", [answer1:"1", answer2:"2-3",answer3:"10+"]}
//var myObj = { question1: { question: 2, CLvalue: 5, bananas: 7, melons: 0 }, question2: { question: 0, oranges: 10, bananas: 0, melons: 0 }, question3: { question: 0, oranges: 0, bananas: 0, melons: 5 } }