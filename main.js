let smartphone =document.querySelector('.smartphones');
let watch = document.querySelector('.watch');
let headphones = document.querySelector('.headphones');


let laptop = document.querySelector('.laptop');
let game_mouse = document.querySelector('.game_mouse');
let offise_mouse = document.querySelector('.offise_mouse');
let game_headphones = document.querySelector('.game_headphone');
let keybpoard = document.querySelector('.game_keyboard');
let microphone = document.querySelector('.microphone');
let mousepad = document.querySelector('.mousepad');
let monitors = document.querySelector('.monitor');
 
let home_gagets = document.querySelector('.home_gadget');
let Tv = document.querySelector('.Tv');
let ZV = document.querySelector('.ZV');
let router = document.querySelector('.router');
let fridge = document.querySelector('.fridge');
let Mp = document.querySelector('.Mp');


let mani = document.querySelector('.mani');

let content = document.querySelector('.content');

let card_phone = document.querySelector('.card_phonesAll');

let card_watch = document.querySelector('.watchAll');

let  card_headphones = document.querySelector('.headphonesAll');

let card_laptop = document.querySelector('.laptopAll');

let card_game_mouse = document.querySelector('.game_mouseAll');

let card_offise_mouse = document.querySelector('.offise_mouseAll');

let card_game_headphones = document.querySelector('.game_headphonesAll');

let card_game_keybpoard = document.querySelector('.game_keyboardsAll');

let card_microphone = document.querySelector('.microphoneAll');

let card_mousepad = document.querySelector('.mousepadAll');

let card_monitors = document.querySelector('.monitorsAll');

let card_Tv = document.querySelector('.TvAll');

let card_ZV = document.querySelector('.ZvAll');

let card_router = document.querySelector('.routerAll');

let card_fridge = document.querySelector('.fridgeAll');

let card_Mp = document.querySelector('.MpAll');



let phones_card = document.querySelectorAll('.card_phones');

let watch_card = document.querySelectorAll('.card_watch');

let headphones_card = document.querySelectorAll('.card_headphones');

let laptop_card = document.querySelectorAll('.card_laptop');

let game_mouse_card = document.querySelectorAll('.card_game_mouse');

let offise_mouse_card = document.querySelectorAll('.card_offise_mouse');

let game_headphones_card = document.querySelectorAll('.card_game_headphones');

let game_keybpoard_card = document.querySelectorAll('.card_game_keybpoard');

let microphone_card = document.querySelectorAll('.card_microphone');

let mousepad_card = document.querySelectorAll('.card_mousepad');

let monitors_card = document.querySelectorAll('.card_monitor');

let Tv_card = document.querySelectorAll('.card_Tv');

let Zv_card = document.querySelectorAll('.card_Zv');

let router_card = document.querySelectorAll('.card_router');

let fridge_card = document.querySelectorAll('.card_fridge');

let Mp_card = document.querySelectorAll('.card_Mp');




let karusel = document.querySelector('.karusel');

let homes  = document.querySelector('.home');

function home(){
      content.style.display = 'block';
   
    card_game_headphones.style.display = 'none';
	card_game_keybpoard.style.display = 'none';
	card_microphone.style.display = 'none';
	card_mousepad.style.display = 'none';
	card_monitors.style.display = 'none';

	card_Tv.style.display = 'none';

	card_ZV.style.display = 'none';

	card_router.style.display = 'none';

	card_fridge.style.display = 'none';

	card_Mp.style.display = 'none';
    
    card_phone.style.display = 'none';

    card_watch.style.display = 'none';

    card_headphones.style.display = 'none';

	card_laptop.style.display = 'none';

	 card_offise_mouse.style.display = 'none';

	card_game_mouse.style.display = 'none';

	karusel.style.display = 'block';
}

homes.addEventListener('click', home)



function type(){
      content.style.display = 'none';
   
	  card_game_headphones.style.display = 'none';
	card_game_keybpoard.style.display = 'none';
	card_microphone.style.display = 'none';
	card_mousepad.style.display = 'none';
	card_monitors.style.display = 'none';

	card_Tv.style.display = 'none';

	card_ZV.style.display = 'none';

	card_router.style.display = 'none';

	card_fridge.style.display = 'none';

	card_Mp.style.display = 'none';

	
    
    card_phone.style.display = 'block';

    card_watch.style.display = 'none';

    card_headphones.style.display = 'none';

	card_laptop.style.display = 'none';

	 card_offise_mouse.style.display = 'none';
	
	card_game_mouse.style.display = 'none';

	karusel.style.display = 'none';
}

smartphone.addEventListener('click', type)




function type_watch(){
      content.style.display = 'none';
   
     karusel.style.display = 'none';

	 card_game_headphones.style.display = 'none';
	card_game_keybpoard.style.display = 'none';
	card_microphone.style.display = 'none';
	card_mousepad.style.display = 'none';
	card_monitors.style.display = 'none';

	card_Tv.style.display = 'none';

	card_ZV.style.display = 'none';

	card_router.style.display = 'none';

	card_fridge.style.display = 'none';

	card_Mp.style.display = 'none';

    card_watch.style.display = 'block';

    card_phone.style.display = 'none';

    card_headphones.style.display = 'none';

	 card_game_mouse.style.display = 'none';

	 card_offise_mouse.style.display = 'none';

	card_laptop.style.display = 'none';
}
watch.addEventListener('click', type_watch)

function type_headphones(){
      content.style.display = 'none';

	  card_game_headphones.style.display = 'none';
	card_game_keybpoard.style.display = 'none';
	card_microphone.style.display = 'none';
	card_mousepad.style.display = 'none';
	card_monitors.style.display = 'none';

	card_Tv.style.display = 'none';

	card_ZV.style.display = 'none';

	card_router.style.display = 'none';

	card_fridge.style.display = 'none';

	card_Mp.style.display = 'none';
   
    karusel.style.display = 'none';
    card_headphones.style.display = 'block';

    card_phone.style.display = 'none';

    card_watch.style.display = 'none';

	card_game_mouse.style.display = 'none';
	
	 card_offise_mouse.style.display = 'none';

	card_laptop.style.display = 'none';
}
headphones.addEventListener('click', type_headphones)

function type_laptop(){
	  content.style.display = 'none';

	  card_game_headphones.style.display = 'none';
	card_game_keybpoard.style.display = 'none';
	card_microphone.style.display = 'none';
	card_mousepad.style.display = 'none';
	card_monitors.style.display = 'none';

	card_Tv.style.display = 'none';

	card_ZV.style.display = 'none';

	card_router.style.display = 'none';

	card_fridge.style.display = 'none';

	card_Mp.style.display = 'none';
   
	karusel.style.display = 'none';

	card_laptop.style.display = 'block';

	card_phone.style.display = 'none';

	

	card_game_mouse.style.display = 'none';

	card_watch.style.display = 'none';

	 card_offise_mouse.style.display = 'none';

	card_headphones.style.display = 'none';
}

laptop.addEventListener('click', type_laptop)

function type_game_mouse(){
	  content.style.display = 'none';

	  card_game_headphones.style.display = 'none';
	card_game_keybpoard.style.display = 'none';
	card_microphone.style.display = 'none';
	card_mousepad.style.display = 'none';
	card_monitors.style.display = 'none';

	card_Tv.style.display = 'none';

	card_ZV.style.display = 'none';

	card_router.style.display = 'none';

	card_fridge.style.display = 'none';

	card_Mp.style.display = 'none';
   
	karusel.style.display = 'none';

	card_game_mouse.style.display = 'block';

	card_phone.style.display = 'none';

	card_laptop.style.display = 'none';

	 card_offise_mouse.style.display = 'none';

	card_watch.style.display = 'none';

	card_headphones.style.display = 'none';
}

game_mouse.addEventListener('click', type_game_mouse)

function type_offise_mouse(){
	  content.style.display = 'none';

	  card_game_headphones.style.display = 'none';
	card_game_keybpoard.style.display = 'none';
	card_microphone.style.display = 'none';
	card_mousepad.style.display = 'none';
	card_monitors.style.display = 'none';

	card_Tv.style.display = 'none';

	card_ZV.style.display = 'none';

	card_router.style.display = 'none';

	card_fridge.style.display = 'none';

	card_Mp.style.display = 'none';

   
	karusel.style.display = 'none';

	 card_offise_mouse.style.display = 'block';

	card_game_mouse.style.display = 'none';

	card_phone.style.display = 'none';

	card_laptop.style.display = 'none';

	card_watch.style.display = 'none';

	card_headphones.style.display = 'none';
}

offise_mouse.addEventListener('click', type_offise_mouse)

function type_game_headphones(){
	  content.style.display = 'none';

	  card_game_headphones.style.display = 'block';
	card_game_keybpoard.style.display = 'none';
	card_microphone.style.display = 'none';
	card_mousepad.style.display = 'none';
	card_monitors.style.display = 'none';

	card_Tv.style.display = 'none';

	card_ZV.style.display = 'none';

	card_router.style.display = 'none';

	card_fridge.style.display = 'none';

	card_Mp.style.display = 'none';
   
	karusel.style.display = 'none';

	card_game_mouse.style.display = 'none';

	card_phone.style.display = 'none';

	card_laptop.style.display = 'none';

	 card_offise_mouse.style.display = 'none';

	card_watch.style.display = 'none';

	card_headphones.style.display = 'none';
}
game_headphones.addEventListener('click', type_game_headphones)

function type_game_keybpoard(){
	  content.style.display = 'none';

	  card_game_headphones.style.display = 'none';
	card_game_keybpoard.style.display = 'block';
	card_microphone.style.display = 'none';
	card_mousepad.style.display = 'none';
	card_monitors.style.display = 'none';

	card_Tv.style.display = 'none';

	card_ZV.style.display = 'none';

	card_router.style.display = 'none';

	card_fridge.style.display = 'none';

	card_Mp.style.display = 'none';
   
	karusel.style.display = 'none';

	card_game_mouse.style.display = 'none';

	card_phone.style.display = 'none';

	card_laptop.style.display = 'none';

	 card_offise_mouse.style.display = 'none';

	card_watch.style.display = 'none';

	card_headphones.style.display = 'none';
}
 keybpoard.addEventListener('click', type_game_keybpoard)

function type_microphone(){
 content.style.display = 'none';

	  card_game_headphones.style.display = 'none';
	card_game_keybpoard.style.display = 'none';
	card_microphone.style.display = 'block';
	card_mousepad.style.display = 'none';
	card_monitors.style.display = 'none';

	card_Tv.style.display = 'none';

	card_ZV.style.display = 'none';

	card_router.style.display = 'none';

	card_fridge.style.display = 'none';

	card_Mp.style.display = 'none';
   
	karusel.style.display = 'none';

	card_game_mouse.style.display = 'none';

	card_phone.style.display = 'none';

	card_laptop.style.display = 'none';

	 card_offise_mouse.style.display = 'none';

	card_watch.style.display = 'none';

	card_headphones.style.display = 'none';
}
microphone.addEventListener('click', type_microphone)

function type_mousepad(){
 content.style.display = 'none';

 card_game_headphones.style.display = 'none';
	card_game_keybpoard.style.display = 'none';
	card_microphone.style.display = 'none';
	card_mousepad.style.display = 'block';
	card_monitors.style.display = 'none';

	card_Tv.style.display = 'none';

	card_ZV.style.display = 'none';

	card_router.style.display = 'none';

	card_fridge.style.display = 'none';

	card_Mp.style.display = 'none';
   
	karusel.style.display = 'none';

	card_game_mouse.style.display = 'none';

	card_phone.style.display = 'none';

	card_laptop.style.display = 'none';

	 card_offise_mouse.style.display = 'none';

	card_watch.style.display = 'none';

	card_headphones.style.display = 'none';
}
mousepad.addEventListener('click', type_mousepad)

function type_monitors(){
	 content.style.display = 'none';

	card_game_headphones.style.display = 'none';
	card_game_keybpoard.style.display = 'none';
	card_microphone.style.display = 'none';
	card_mousepad.style.display = 'none';
	card_monitors.style.display = 'block';

	card_Tv.style.display = 'none';

	card_ZV.style.display = 'none';

	card_router.style.display = 'none';

	card_fridge.style.display = 'none';

	card_Mp.style.display = 'none';
   
	karusel.style.display = 'none';

	card_game_mouse.style.display = 'none';

	card_phone.style.display = 'none';

	card_laptop.style.display = 'none';

	 card_offise_mouse.style.display = 'none';

	card_watch.style.display = 'none';

	card_headphones.style.display = 'none';
}
monitors.addEventListener('click', type_monitors)

function type_Tv(){
	 content.style.display = 'none';

	card_game_headphones.style.display = 'none';
	card_game_keybpoard.style.display = 'none';
	card_microphone.style.display = 'none';
	card_mousepad.style.display = 'none';
	card_monitors.style.display = 'none';

	card_Tv.style.display = 'block';

	card_ZV.style.display = 'none';

	card_router.style.display = 'none';

	card_fridge.style.display = 'none';

	card_Mp.style.display = 'none';
   
	karusel.style.display = 'none';

	card_game_mouse.style.display = 'none';

	card_phone.style.display = 'none';

	card_laptop.style.display = 'none';

	 card_offise_mouse.style.display = 'none';

	card_watch.style.display = 'none';

	card_headphones.style.display = 'none';}

Tv.addEventListener('click', type_Tv)

function type_ZV(){
	 content.style.display = 'none';

	card_game_headphones.style.display = 'none';
	card_game_keybpoard.style.display = 'none';
	card_microphone.style.display = 'none';
	card_mousepad.style.display = 'none';
	card_monitors.style.display = 'none';

	card_Tv.style.display = 'none';

	card_ZV.style.display = 'block';

	card_router.style.display = 'none';

	card_fridge.style.display = 'none';

	card_Mp.style.display = 'none';
   
	karusel.style.display = 'none';

	card_game_mouse.style.display = 'none';

	card_phone.style.display = 'none';

	card_laptop.style.display = 'none';

	 card_offise_mouse.style.display = 'none';

	card_watch.style.display = 'none';

	card_headphones.style.display = 'none';}
ZV.addEventListener('click', type_ZV)
function type_router(){
	 content.style.display = 'none';

	card_game_headphones.style.display = 'none';
	card_game_keybpoard.style.display = 'none';
	card_microphone.style.display = 'none';
	card_mousepad.style.display = 'none';
	card_monitors.style.display = 'none';

	card_Tv.style.display = 'none';

	card_ZV.style.display = 'none';

	card_router.style.display = 'block';

	card_fridge.style.display = 'none';

	card_Mp.style.display = 'none';
   
	karusel.style.display = 'none';

	card_game_mouse.style.display = 'none';

	card_phone.style.display = 'none';

	card_laptop.style.display = 'none';

	 card_offise_mouse.style.display = 'none';

	card_watch.style.display = 'none';

	card_headphones.style.display = 'none';}
router.addEventListener('click', type_router)
 
function type_fridge(){
	 content.style.display = 'none';

	card_game_headphones.style.display = 'none';
	card_game_keybpoard.style.display = 'none';
	card_microphone.style.display = 'none';
	card_mousepad.style.display = 'none';
	card_monitors.style.display = 'none';

	card_Tv.style.display = 'none';

	card_ZV.style.display = 'none';

	card_router.style.display = 'none';

	card_fridge.style.display = 'block';

	card_Mp.style.display = 'none';
   
	karusel.style.display = 'none';

	card_game_mouse.style.display = 'none';

	card_phone.style.display = 'none';

	card_laptop.style.display = 'none';

	 card_offise_mouse.style.display = 'none';

	card_watch.style.display = 'none';

	card_headphones.style.display = 'none';}
fridge.addEventListener('click', type_fridge)

function type_Mp(){
	 content.style.display = 'none';

	card_game_headphones.style.display = 'none';
	card_game_keybpoard.style.display = 'none';
	card_microphone.style.display = 'none';
	card_mousepad.style.display = 'none';
	card_monitors.style.display = 'none';

	card_Tv.style.display = 'none';

	card_ZV.style.display = 'none';

	card_router.style.display = 'none';

	card_fridge.style.display = 'none';

	card_Mp.style.display = 'block';
   
	karusel.style.display = 'none';

	card_game_mouse.style.display = 'none';

	card_phone.style.display = 'none';

	card_laptop.style.display = 'none';

	 card_offise_mouse.style.display = 'none';

	card_watch.style.display = 'none';

	card_headphones.style.display = 'none';}
Mp.addEventListener('click', type_Mp)
 

function zoomProductCard(card) {
    // Зберігаємо початкові стилі
    const prevStyles = {};
    for (let prop of [
        "position", "zIndex", "width", "height", "left", "top", "boxShadow", "background",
        "transition", "borderRadius", "padding", "display", "flexDirection", "justifyContent",
        "alignItems", "transform"
    ]) prevStyles[prop] = card.style[prop];

    // Фон як у сайту
    card.style.transition = "all 0.3s ease";
    card.style.position = "fixed";
    card.style.zIndex = "1001";
    card.style.left = "50%";
    card.style.top = "50%";
    card.style.transform = "translate(-50%, -50%)";
    card.style.width = "700px";
    card.style.height = "auto";
    card.style.background = "#232f3e";
    card.style.boxShadow = "0 8px 32px rgba(16, 22, 39, 0.4)";
    card.style.borderRadius = "20px";
    card.style.padding = "30px";
    card.style.display = "flex";
    card.style.flexDirection = "row";
    card.style.justifyContent = "center";
    card.style.alignItems = "center";

    // Фото зліва
    const img = card.querySelector("img");
    if (img) {
        img.style.width = "320px";
        img.style.height = "320px";
        img.style.objectFit = "contain";
        img.style.marginRight = "30px";
        img.style.marginLeft = "0";
        img.style.borderRadius = "15px";
        img.style.display = "block";
        img.style.order = "0";
    }

    // Детальний опис для кожного товару (за alt картинки)
const details = {
    // Телефони
    "iPhone 14 Pro": "Преміальний смартфон Apple з потужною камерою, дисплеєм ProMotion та сучасним дизайном.",
    "Samsung Galaxy S23 Ultra": "Флагман Samsung з топовою камерою 200 Мп, підтримкою S Pen і великим AMOLED-дисплеєм.",
    "Xiaomi 13 Pro": "Флагман Xiaomi з камерою Leica, потужним процесором Snapdragon та швидкою зарядкою.",
    "OnePlus 11": "Потужний смартфон з AMOLED-дисплеєм 120 Гц, Snapdragon 8 Gen 2 та швидкою зарядкою.",
    "Huawei P50 Pro": "Камерафон з унікальним дизайном, якісним OLED-екраном та потужною камерою.",
    "Samsung Galaxy A05s": "Доступний смартфон Samsung з великим екраном, ємною батареєю та сучасним дизайном.",
    // Годинники
    "Apple Watch Series 8": "Смарт-годинник Apple з датчиками здоров'я, Always-On дисплеєм та підтримкою екосистеми Apple.",
    "Samsung Galaxy Watch 6": "Новий смарт-годинник Samsung з розширеними фітнес-функціями та яскравим AMOLED-екраном.",
    "Garmin Forerunner 955": "Професійний спортивний годинник з GPS, тривалим часом роботи та розширеною аналітикою тренувань.",
    "Fossil Gen 6": "Стильний смарт-годинник на Wear OS з датчиками здоров'я та підтримкою Google Pay.",
    "Amazfit GTR 4": "Годинник з AMOLED-екраном, автономністю до 2 тижнів та розширеним моніторингом здоров'я.",
    "Huawei Watch GT 3": "Годинник з GPS, моніторингом здоров'я, довгою автономністю та стильним дизайном.",
    // Навушники
    "Sony WH-1000XM4": "Навушники з найкращим шумозаглушенням, якісним звуком та тривалою автономністю.",
    "Apple AirPods Pro": "TWS-навушники Apple з активним шумозаглушенням, простим підключенням до iPhone та захистом від вологи.",
    "Bose QuietComfort 35 II": "Зручні навушники з активним шумозаглушенням та комфортною посадкою.",
    "Sennheiser Momentum 3": "Преміальні навушники з чудовим звуком, стильним дизайном та якісними матеріалами.",
    "Jabra Elite 85h": "Bluetooth-навушники з довгою автономністю, захистом від вологи та якісним мікрофоном.",
    "Bang & Olufsen Beoplay H9": "Стильні навушники з преміальними матеріалами, чудовим звуком та активним шумозаглушенням.",
    // Ноутбуки
    "Apple MacBook Pro 16": "Потужний ноутбук Apple для професіоналів з дисплеєм Retina та процесором Apple Silicon.",
    "Dell XPS 13": "Компактний ультрабук з якісним дисплеєм, тонкими рамками та тривалою автономністю.",
    "Lenovo ThinkPad X1 Carbon": "Легкий бізнес-ноутбук з міцним корпусом, якісною клавіатурою та тривалим часом роботи.",
    "HP Spectre x360": "Трансформер з сенсорним екраном, стилусом та преміальним дизайном.",
    "Asus ZenBook 14": "Тонкий ноутбук з тривалою автономністю, яскравим дисплеєм та легким корпусом.",
    "Microsoft Surface Laptop 4": "Стильний ноутбук з сенсорним екраном, якісною клавіатурою та довгою автономністю.",
    // Ігрові мишки
    "Logitech G502 HERO": "Ігрова миша з налаштовуваною вагою, 11 програмованими кнопками та сенсором HERO.",
    "Razer DeathAdder V2": "Ергономічна миша для FPS-ігор з точним сенсором та швидкою реакцією.",
    "SteelSeries Rival 600": "Миша з двома сенсорами для точного контролю та налаштовуваною вагою.",
    "Corsair Scimitar RGB": "Миша з 12 бічними кнопками для MMO, RGB-підсвіткою та ергономічним дизайном.",
    "HyperX Pulsefire FPS Pro": "Миша для шутерів з RGB-підсвіткою, точним сенсором та зручною формою.",
    "Glorious Model O": "Надлегка миша для кіберспорту з низькою вагою та гнучким кабелем.",
    // Офісні мишки
    "Logitech MX Master 3": "Офісна миша з ергономічною формою, програмованими кнопками та підтримкою декількох пристроїв.",
    "Microsoft Surface Mouse": "Стильна миша для роботи з Windows, плавним скролом та мінімалістичним дизайном.",
    "Logitech M720 Triathlon": "Миша для роботи з кількома пристроями, тривалою автономністю та зручною формою.",
    "Razer Pro Click Mini": "Компактна бездротова миша для офісу з тихими кнопками та тривалою роботою.",
    "Apple Magic Mouse 2": "Мінімалістична миша Apple з сенсорним керуванням та акумулятором.",
    "Logitech Pebble M350": "Тиха та компактна миша для ноутбука з сучасним дизайном.",
    // Ігрові навушники
    "SteelSeries Arctis 7": "Бездротова гарнітура з комфортною посадкою, якісним звуком та тривалою автономністю.",
    "Razer Kraken X": "Легка гарнітура з якісним мікрофоном, комфортною посадкою та чистим звуком.",
    "HyperX Cloud II": "Популярна гарнітура з віртуальним 7.1, зручними амбушурами та міцною конструкцією.",
    "Corsair Void Elite": "Гарнітура з RGB-підсвіткою, об'ємним звуком та зручним мікрофоном.",
    "Logitech G Pro X": "Професійна гарнітура для кіберспорту з якісним мікрофоном та змінними амбушурами.",
    "ASUS ROG Strix Fusion 300": "Гарнітура з віртуальним 7.1, підсвіткою та комфортною посадкою.",
    // Ігрові клавіатури
    "SteelSeries Apex Pro": "Клавіатура з регульованою чутливістю клавіш, RGB-підсвіткою та алюмінієвим корпусом.",
    "Razer Huntsman Elite": "Клавіатура з оптичними перемикачами, підсвіткою та зручною підставкою для рук.",
    "HyperX Alloy Origins": "Механічна клавіатура з алюмінієвим корпусом, RGB-підсвіткою та компактним форм-фактором.",
    "Corsair K95 RGB Platinum": "Клавіатура з макро-клавішами, RGB-підсвіткою та зручною підставкою для рук.",
    "Logitech G915 TKL": "Бездротова клавіатура з низькопрофільними клавішами, RGB-підсвіткою та компактним дизайном.",
    "ASUS ROG Strix Scope RX": "Клавіатура з оптичними перемикачами, захистом від води та RGB-підсвіткою.",
    // Мікрофони
    "Blue Yeti": "USB-мікрофон для стрімінгу, запису подкастів та відеоконференцій.",
    "Shure SM7B": "Професійний динамічний мікрофон для студійного запису та подкастів.",
    "Rode NT-USB": "Конденсаторний USB-мікрофон для запису голосу, вокалу та інструментів.",
    "Audio-Technica AT2020USB+": "Студійний USB-мікрофон для вокалу, інструментів та подкастів.",
    "Sennheiser Profile USB": "USB-мікрофон для подкастів, відеоконференцій та стрімінгу.",
    "Blue Snowball iCE": "Доступний USB-мікрофон для початківців, стрімінгу та відеозв'язку.",
    // Килимки для миші
    "SteelSeries QcK": "Популярний ігровий килимок з м'якою поверхнею та оптимальним ковзанням.",
    "Razer Goliathus": "Килимок з текстурованою поверхнею для точності та контролю.",
    "Logitech G240": "Тонкий килимок для FPS-ігор з рівномірною поверхнею.",
    "HyperX Fury S": "Килимок з прошитими краями для довговічності та комфортної гри.",
    "Corsair MM300": "Великий текстильний килимок для геймерів з якісною поверхнею.",
    "Xiaomi Mi Mouse Pad": "Практичний килимок з водостійким покриттям та сучасним дизайном.",
    // Монітори
    "Dell UltraSharp U2720Q": "27-дюймовий 4K-монітор для професіоналів з точним відтворенням кольорів.",
    "LG 27GN950": "4K ігровий монітор з частотою 144 Гц, HDR та швидким відгуком.",
    "Samsung Odyssey G7": "Вигнутий QHD-монітор з частотою 240 Гц, яскравими кольорами та швидким відгуком.",
    "ASUS ProArt PA278QV": "Професійний монітор для роботи з кольором, IPS-матрицею та розширеним охопленням палітри.",
    "AOC 24G2U": "Ігровий монітор з IPS-матрицею, частотою 144 Гц та низьким часом відгуку.",
    "Philips 346B1C": "Ультраширокий монітор для роботи та розваг з високою роздільною здатністю.",
    // Телевізори
    "Samsung QLED 4K": "Яскравий 4K телевізор з QLED-матрицею, підтримкою HDR та Smart TV.",
    "LG OLED 4K": "Телевізор з ідеальним чорним, Dolby Vision та сучасним дизайном.",
    "Sony Bravia 4K": "4K телевізор з процесором Sony XR, якісним зображенням та Android TV.",
    "TCL 4K UHD": "Доступний 4K телевізор з Android TV та підтримкою HDR.",
    "Philips Ambilight 4K": "Телевізор з підсвіткою Ambilight, 4K-роздільною здатністю та Smart TV.",
    "Hisense ULED 4K": "Яскравий телевізор з ULED-матрицею, підтримкою HDR та сучасним дизайном.",
    // Зволожувачі повітря
    "Xiaomi Mi Smart Humidifier": "Розумний зволожувач з керуванням через додаток, великим баком та фільтрацією.",
    "Philips Series 2000": "Зволожувач з фільтрацією повітря, тихою роботою та простим керуванням.",
    "Dyson Pure Humidify+Cool": "Зволожувач, очищувач та вентилятор 3-в-1 з сучасним дизайном.",
    "Trotec B 400": "Потужний зволожувач для великих приміщень з простим керуванням.",
    "Boneco U700": "Ультразвуковий зволожувач з великим баком, нічним режимом та високою продуктивністю.",
    "Levoit LV600HH": "Зволожувач з теплим і холодним паром, великим баком та зручним керуванням.",
    // Роутери
    "TP-Link Archer AX50": "Wi-Fi 6 роутер з високою швидкістю, широким покриттям та простим налаштуванням.",
    "ASUS RT-AX86U": "Геймерський роутер з Wi-Fi 6, високою продуктивністю та розширеними функціями.",
    "Netgear Nighthawk AX12": "Потужний роутер для великого будинку з підтримкою Wi-Fi 6 та багатьох пристроїв.",
    "Linksys MR9600": "Дводіапазонний роутер з Mesh-підтримкою, високою швидкістю та простим налаштуванням.",
    "D-Link DIR-X5460": "Wi-Fi 6 роутер з 6 антенами, широким покриттям та високою швидкістю.",
    "Huawei WiFi AX3": "Доступний Wi-Fi 6 роутер для дому з простим налаштуванням та стабільною роботою.",
    // Холодильники
    "Samsung RB34T602ESA": "Сучасний холодильник з No Frost, економічним споживанням енергії та стильним дизайном.",
    "LG GBB72PZEFN": "Холодильник з інверторним компресором, великим об'ємом та сучасним виглядом.",
    "Bosch KGN39VLEA": "Енергоефективний холодильник з VitaFresh, No Frost та зручним розташуванням полиць.",
    "Whirlpool W7X92ND": "Холодильник з системою 6th Sense, великим об'ємом та сучасним дизайном.",
    "Beko RCSA300K30W": "Двокамерний холодильник для сім'ї з економічним споживанням енергії.",
    "Beko RCNA400E20ZX": "Холодильник з системою NeoFrost, великим об'ємом та сучасним дизайном.",
    // Мікрохвильові печі
    "Samsung MG23K3515AK": "Samsung MG23K3515AK — мікрохвильова піч з грилем, об'ємом 23 л, функцією розморожування та керамічним покриттям.",
    "LG MH6535GIB": "LG MH6535GIB — мікрохвильова піч з технологією Smart Inverter, грилем та об'ємом 25 л.",
    "Bosch HMB50152": "Bosch HMB50152 — вбудована мікрохвильова піч з об'ємом 25 л, електронним керуванням та функцією гриля.",
    "Panasonic NN-GD37H": "Panasonic NN-GD37H — мікрохвильова піч з грилем, інверторною технологією та об'ємом 23 л.",
    "Whirlpool MWP 253 SB": "Whirlpool MWP 253 SB — мікрохвильова піч з грилем, об'ємом 25 л, функцією Crisp та автоматичними програмами.",
    "Sharp R-21LVF": "Sharp R-21LVF — професійна мікрохвильова піч з об'ємом 28 л, потужністю 1000 Вт та простим механічним керуванням.",
};
    // Витягуємо alt зображення як ключ
    let alt = img ? img.alt : "";

    // Текст справа (створюємо або знаходимо)
    let textBlock = card.querySelector(".zoom-text-block");
    let createdTextBlock = false;
    if (!textBlock) {
        textBlock = document.createElement("div");
        textBlock.className = "zoom-text-block";
        textBlock.style.width = "320px";
        textBlock.style.display = "flex";
        textBlock.style.flexDirection = "column";
        textBlock.style.justifyContent = "center";
        textBlock.style.padding = "10px";
        textBlock.style.color = "#fff";
        textBlock.style.order = "1";
        card.appendChild(textBlock);
        createdTextBlock = true;
    }

    // Додаємо детальний опис
    let detailElem = textBlock.querySelector(".zoom-detail-description");
    let prevDetail = "";
    if (!detailElem) {
        detailElem = document.createElement("div");
        detailElem.className = "zoom-detail-description";
        detailElem.style.fontSize = "18px";
        detailElem.style.color = "#fff";
        detailElem.style.marginTop = "10px";
        detailElem.style.lineHeight = "1.5";
        textBlock.appendChild(detailElem);
    } else {
        prevDetail = detailElem.textContent;
    }
    if (details[alt]) {
        detailElem.textContent = details[alt];
        detailElem.style.display = "block";
    } else {
        detailElem.textContent = "Детальний опис недоступний.";
        detailElem.style.display = "block";
    }

    // Додаємо кнопку закриття, якщо її ще немає
    let closeBtn = card.querySelector(".close_card");
    if (!closeBtn) {
        closeBtn = document.createElement("button");
        closeBtn.className = "close_card";
        closeBtn.innerHTML = `
            <svg width="36" height="36" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="#222" stroke="#fff" stroke-width="2"/>
                <line x1="12" y1="12" x2="24" y2="24" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
                <line x1="24" y1="12" x2="12" y2="24" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;
        closeBtn.style.position = "absolute";
        closeBtn.style.top = "15px";
        closeBtn.style.right = "20px";
        closeBtn.style.width = "36px";
        closeBtn.style.height = "36px";
        closeBtn.style.cursor = "pointer";
        closeBtn.style.zIndex = "10000";
        closeBtn.style.background = "transparent";
        closeBtn.style.border = "none";
        closeBtn.style.display = "flex";
        closeBtn.style.alignItems = "center";
        closeBtn.style.justifyContent = "center";
        card.appendChild(closeBtn);
    } else {
        closeBtn.style.display = "flex";
    }

    // Закриття картки
    function closeZoom() {
        for (let key in prevStyles) card.style[key] = prevStyles[key] || "";
        if (img) {
            img.style.width = "";
            img.style.height = "";
            img.style.objectFit = "";
            img.style.marginRight = "";
            img.style.marginLeft = "";
            img.style.borderRadius = "";
            img.style.display = "";
            img.style.order = "";
        }
        if (createdTextBlock && textBlock) {
            card.removeChild(textBlock);
        } else if (detailElem) {
            detailElem.textContent = prevDetail || "";
            detailElem.style.display = "none";
        }
        closeBtn.style.display = "none";
        closeBtn.removeEventListener("click", closeZoom);
        document.removeEventListener("keydown", escHandler);
        document.removeEventListener("mousedown", outsideHandler);
    }

    closeBtn.addEventListener("click", closeZoom);

    function escHandler(e) {
        if (e.key === "Escape") closeZoom();
    }
    document.addEventListener("keydown", escHandler);

    function outsideHandler(e) {
        if (!card.contains(e.target)) closeZoom();
    }
    setTimeout(() => {
        document.addEventListener("mousedown", outsideHandler);
    }, 0);
}

for (let i = 0; i < phones_card.length; i++) {
	phones_card[i].addEventListener("click", function () {
		zoomProductCard(phones_card[i]);
	});
}
for (let i = 0; i < watch_card.length; i++) {
	watch_card[i].addEventListener("click", function () {
		zoomProductCard(watch_card[i]);
	});
}
for (let i = 0; i < headphones_card.length; i++) {
	headphones_card[i].addEventListener("click", function () {
		zoomProductCard(headphones_card[i]);
	});
}
for (let i = 0; i < laptop_card.length; i++) {
	laptop_card[i].addEventListener("click", function () {
		zoomProductCard(laptop_card[i]);
	});
}
for (let i = 0; i < game_mouse_card.length; i++) {
	game_mouse_card[i].addEventListener("click", function () {
		zoomProductCard(game_mouse_card[i]);
	});
}
for (let i = 0; i < offise_mouse_card.length; i++) {
	offise_mouse_card[i].addEventListener("click", function () {
		zoomProductCard(offise_mouse_card[i]);
	});
}
for (let i = 0; i < game_headphones_card.length; i++) {
	game_headphones_card[i].addEventListener("click", function () {
		zoomProductCard(game_headphones_card[i]);
	});
}
for (let i = 0; i < game_keybpoard_card.length; i++) {
	game_keybpoard_card[i].addEventListener("click", function () {
		zoomProductCard(game_keybpoard_card[i]);
	});
}
for (let i = 0; i < microphone_card.length; i++) {
	microphone_card[i].addEventListener("click", function () {
		zoomProductCard(microphone_card[i]);
	});
}
for (let i = 0; i < mousepad_card.length; i++) {
	mousepad_card[i].addEventListener("click", function () {
		zoomProductCard(mousepad_card[i]);
	});
}
for (let i = 0; i < monitors_card.length; i++) {
	monitors_card[i].addEventListener("click", function () {
		zoomProductCard(monitors_card[i]);
	});
}
for (let i = 0; i < Tv_card.length; i++) {
	Tv_card[i].addEventListener("click", function () {
		zoomProductCard(Tv_card[i]);
	});
}
for (let i = 0; i < Zv_card.length; i++) {
	Zv_card[i].addEventListener("click", function () {
		zoomProductCard(Zv_card[i]);
	});
}
for (let i = 0; i < router_card.length; i++) {
	router_card[i].addEventListener("click", function () {
		zoomProductCard(router_card[i]);
	});
}
for (let i = 0; i < fridge_card.length; i++) {
	fridge_card[i].addEventListener("click", function () {
		zoomProductCard(fridge_card[i]);
	});
}
for (let i = 0; i < Mp_card.length; i++) {
	Mp_card[i].addEventListener("click", function () {
		zoomProductCard(Mp_card[i]);
	});
	}
	












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
