(function() {

	const header = document.querySelector('.header');
	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			header.classList.add('header-active');
		}
		else {
			header.classList.remove('header-active');
		}
	};

}());


// Burger Handler
(function() {
	const burger = document.querySelector('.header-burger');
	const menu = document.querySelector('.header_nav');
	burger.addEventListener('click', ()=>{
		menu.classList.add('header_nav_active');
	});
}());

// Nav Close Handler
(function(){
	const button = document.querySelector('.header-nav-close');
	const menu = document.querySelector('.header_nav');
	button.addEventListener('click', ()=>{
		menu.classList.remove('header_nav_active');
	});
}());

// Smooth Scroll
(function(){

	const smoothScroll = function(targetSelector, duration) {

		const headerHeight = document.querySelector('.header').clientHeight;
		let currentTarget = document.querySelector(targetSelector);
		let targetPosition = currentTarget.getBoundingClientRect().top - headerHeight;
		let startPosition = window.pageYOffset;
		let startTime = null;


		const easeTimeFunction = function(t,b,c,d) {
			
			t /= d / 2;
			if (t < 1) {
				return c / 2 * t * t + b;
			}
			t--;

			return -c / 2 * (t * (t - 2) - 1) + b;
		};


		const animation = function(currentTime) {

			if (startTime === null) {
				startTime = currentTime;
			}

			const timeElapsed = currentTime - startTime;
			const run = easeTimeFunction(timeElapsed, startPosition, targetPosition, duration);
			window.scrollTo(0, run);

			if (timeElapsed < duration) {
				requestAnimationFrame(animation);
			}

		};

		requestAnimationFrame(animation);
	};

	const scrollTo = function() {
		const links = document.querySelectorAll('.js-scroll');
		links.forEach( each => {
			each.addEventListener('click', function() {
				const currentTarget = this.getAttribute('href');
				smoothScroll(currentTarget, 1000);
			});
			}
		);
	};

	scrollTo();

}());