let smartphone =document.querySelector('.smartphones');
let watch = document.querySelector('.watch');
let headphones = document.querySelector('.headphones');


let laptop = document.querySelector('.laptop');
let game_mouse = document.querySelector('.game_mouse');
let offise_mouse = document.querySelector('.offise_mouse');
let game_headphones = document.querySelector('.game_headphones');
let keybpoard = document.querySelector('.keybpoard');
let microphone = document.querySelector('.microphone');
let mousepad = document.querySelector('.mousepad');
let monitors = document.querySelector('.monitors');
 
let Columns = document.querySelector('.Columns');
let home_gagets = document.querySelector('.home_gadget');
let Tv = document.querySelector('.Tv');
let condition = document.querySelector('.condition');
let ZV = document.querySelector('.ZV');
let router = document.querySelector('.router');
let fridge = document.querySelector('.fridge');
let Mp = document.querySelector('.Mp');
let gardens = document.querySelector('.gardens');
let auto_water = document.querySelector('.auto_water');
let light = document.querySelector('.light');
let Lamp = document.querySelector('.Lamp');

let mani = document.querySelector('.mani');

let content = document.querySelector('.content');

let card_phone = document.querySelector('.card_phonesAll');

let card_watch = document.querySelector('.watchAll');

let  card_headphones = document.querySelector('.headphonesAll');

let card_laptop = document.querySelector('.laptopAll');

let card_game_mouse = document.querySelector('.game_mouseAll');

let karusel = document.querySelector('.karusel');

let homes  = document.querySelector('.home');

function home(){
      content.style.display = 'block';
   
    
    card_phone.style.display = 'none';

    card_watch.style.display = 'none';

    card_headphones.style.display = 'none';

	card_laptop.style.display = 'none';

	card_game_mouse.style.display = 'none';

	karusel.style.display = 'block';
}

homes.addEventListener('click', home)



function type(){
      content.style.display = 'none';
   
    
    card_phone.style.display = 'block';

    card_watch.style.display = 'none';

    card_headphones.style.display = 'none';

	card_laptop.style.display = 'none';
	
	card_game_mouse.style.display = 'none';

	karusel.style.display = 'none';
}

smartphone.addEventListener('click', type)




function type_watch(){
      content.style.display = 'none';
   
     karusel.style.display = 'none';

    card_watch.style.display = 'block';

    card_phone.style.display = 'none';

    card_headphones.style.display = 'none';

	 card_game_mouse.style.display = 'none';

	card_laptop.style.display = 'none';
}
watch.addEventListener('click', type_watch)

function type_headphones(){
      content.style.display = 'none';
   
    karusel.style.display = 'none';
    card_headphones.style.display = 'block';

    card_phone.style.display = 'none';

    card_watch.style.display = 'none';

	card_game_mouse.style.display = 'none';

	card_laptop.style.display = 'none';
}
headphones.addEventListener('click', type_headphones)

function type_laptop(){
	  content.style.display = 'none';
   
	karusel.style.display = 'none';

	card_laptop.style.display = 'block';

	card_phone.style.display = 'none';

	card_game_mouse.style.display = 'none';

	card_watch.style.display = 'none';

	card_headphones.style.display = 'none';
}

laptop.addEventListener('click', type_laptop)

function type_game_mouse(){
	  content.style.display = 'none';
   
	karusel.style.display = 'none';

	card_game_mouse.style.display = 'block';

	card_phone.style.display = 'none';

	card_laptop.style.display = 'none';

	card_watch.style.display = 'none';

	card_headphones.style.display = 'none';
}

game_mouse.addEventListener('click', type_game_mouse)
























const teamMembers = [
	{ name: "iPhone 14 Pro", role: "Smartphone" },
	{ name: "Apple Watch Series 8", role: "watch" },
	{ name: "Sony WH-1000XM4", role: "headphones" },
	{ name: "Amazfit GTR 4", role: "Smartwatch" },
	{ name: "Jabra Elite 85h", role: "headphones" },
	{ name: "Samsung Galaxy S23 Ultra", role: "Smartphone" },
];

const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");
const memberName = document.querySelector(".member-name");
const memberRole = document.querySelector(".member-role");
const leftArrow = document.querySelector(".nav-arrow.left");
const rightArrow = document.querySelector(".nav-arrow.right");
let currentIndex = 0;
let isAnimating = false;

function updateCarousel(newIndex) {
	if (isAnimating) return;
	isAnimating = true;

	currentIndex = (newIndex + cards.length) % cards.length;

	cards.forEach((card, i) => {
		const offset = (i - currentIndex + cards.length) % cards.length;

		card.classList.remove(
			"center",
			"left-1",
			"left-2",
			"right-1",
			"right-2",
			"hidden"
		);

		if (offset === 0) {
			card.classList.add("center");
		} else if (offset === 1) {
			card.classList.add("right-1");
		} else if (offset === 2) {
			card.classList.add("right-2");
		} else if (offset === cards.length - 1) {
			card.classList.add("left-1");
		} else if (offset === cards.length - 2) {
			card.classList.add("left-2");
		} else {
			card.classList.add("hidden");
		}
	});

	dots.forEach((dot, i) => {
		dot.classList.toggle("active", i === currentIndex);
	});

	memberName.style.opacity = "0";
	memberRole.style.opacity = "0";

	setTimeout(() => {
		memberName.textContent = teamMembers[currentIndex].name;
		memberRole.textContent = teamMembers[currentIndex].role;
		memberName.style.opacity = "1";
		memberRole.style.opacity = "1";
	}, 300);

	setTimeout(() => {
		isAnimating = false;
	}, 800);
}

leftArrow.addEventListener("click", () => {
	updateCarousel(currentIndex - 1);
});

rightArrow.addEventListener("click", () => {
	updateCarousel(currentIndex + 1);
});

dots.forEach((dot, i) => {
	dot.addEventListener("click", () => {
		updateCarousel(i);
	});
});

cards.forEach((card, i) => {
	card.addEventListener("click", () => {
		updateCarousel(i);
	});
});

document.addEventListener("keydown", (e) => {
	if (e.key === "ArrowLeft") {
		updateCarousel(currentIndex - 1);
	} else if (e.key === "ArrowRight") {
		updateCarousel(currentIndex + 1);
	}
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
	touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
	touchEndX = e.changedTouches[0].screenX;
	handleSwipe();
});

function handleSwipe() {
	const swipeThreshold = 50;
	const diff = touchStartX - touchEndX;

	if (Math.abs(diff) > swipeThreshold) {
		if (diff > 0) {
			updateCarousel(currentIndex + 1);
		} else {
			updateCarousel(currentIndex - 1);
		}
	}
}

updateCarousel(0);
