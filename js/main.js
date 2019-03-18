// This is the intro to javascript. 
// To create go to 'View' > 'Javascript'  and save the file to the folder.

//console.log("Hello " + firstName);

// console.log("javascript linked up");


(() => {
	console.log('fired');

	const targetBox = document.querySelector('.box');

	function runAnimation() {

		// basic greensock animation
		TweenMax.to(targetBox, 0.8, {
			x: 450, 
			rotation: 180, 
			scaleX: 1.5, 
			scaleY: 1.5

		});
	}

	function resetAnimation() {

		// basic greensock animation
		TweenMax.to(targetBox, 0.8, {
			x: 0,
		 	rotation: 0,
		  	scaleX: 1,
		  	scaleY: 1

		});
	}
	

	targetBox.addEventListener("mouseover", runAnimation);
	targetBox.addEventListener("mouseout", resetAnimation);
	
})();