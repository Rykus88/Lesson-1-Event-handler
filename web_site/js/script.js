"use strict"

const buttons = document.querySelectorAll(`.btn`);


const handleClick = (event) => {
	console.log("CURTACKA >", event.target);
	console.log("CURT>", event.currentTarget);	
	console.log(event.target === event.currentTarget);
	// event.stopPropagation()
}

window.addEventListener('click', function (event) {
	console.log(`Window Click`, event.target);
	event.stopPropagation()
}, { capture: true})


buttons.forEach(button => {
	button.addEventListener(`click`, handleClick)
})

const img = document.querySelectorAll(`img`);
img.addEventListener(`mousover`,(event) => {
	console.log(event.currentTarget)
	console.log(this);
	
})