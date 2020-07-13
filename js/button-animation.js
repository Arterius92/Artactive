// Анимация кнопки при клике

let animateButton = (e) => {
	e.preventDefault;
	e.target.classList.remove('animate');
	e.target.classList.add('animate');
	setTimeout(function () {
		e.target.classList.remove('animate');
	}, 700);
};

let buttons = document.getElementsByClassName('button');

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', animateButton, false);
}
//-----------------------------------------------------------------------------------
