"use strict"

// let lesson = ['cup', 'plate', 'spoon', 'knife', 'fork'];

// let i = 0;

// while (i < lesson.length) {
//     console.log(lesson);
//     ++i
//     break;
// }
// ---------------------lesson1 end-----------------------------


// let vagetables = ['xiyar', 'pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni'];
// let i = 1;
// while (i < vagetables.length) {
//     if (vagetables[i][0].toLowerCase() == "s") {
//         console.log(vagetables[i]);

//     }
//     ++i
// }
// ---------------------lesson2 end-----------------------------
// let lesson = ['cup', 'plate', 'spoon', 'knife', 'fork'];

// for (let i = 0; i < lesson.length; i++) {
//     console.log(lesson[i]);
// }

// let lesson = ['cup', 'plate', 'spoon', 'knife', 'fork'];

// for (let i in lesson) {
//     console.log(lesson[index]);

// }


// let lesson = ['cup', 'plate', 'spoon', 'knife', 'fork'];

// for (let i = 0; i < lesson.length; i++) {
//     console.log(lesson[i]);
// }

// let lesson = ['cup', 'plate', 'spoon', 'knife', 'fork'];

// for (let i in lesson) {
//     console.log(lesson[i]);
// }

// let lesson = ['cup', 'plate', 'spoon', 'knife', 'fork'];

// for (let i of lesson) {
//     console.log(i);
// }

// let vagetables = ['xiyar', 'pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni'];
// for (let i = 0; i < vagetables.length; i++) {
//     if (vagetables[i][0].toLowerCase() == "s")
//         console.log(vagetables[i]);
// }

// function people(ad){
//     return `Salam hormetli ${ad}`
// }

// console.log(people("Maqa"));

// ---------------------------------settime------------------------------------------------------------------------


// setTimeout(() => {
//     console.log("bes sayine bitdi");





// }, 5000);
// let a=65.4345;
// console.log(Math.round(a));







// let a=Math.round(Math.random()*(10-0)+1);
// console.log(a);






// let dt=new Date();
// console.log(dt);






// let dt = new Date();
// console.log(dt.getHours());
// console.log(dt.getMinutes());
// console.log(dt.getMilliseconds());







// let dt = new Date('2025,11,12');
// console.log(dt.getDay());





// let a = 100;
// for (let i = 0; i <= a; i--) { 
// }                                       sehv
// setInterval(() => {
//     console.log(a);

// }, 1000);




// ------------------------Array-----------------------------------------------------


// let a = ['kitab', 'defter', 'qelem', 'pozan'];

// let b = a.splice(2, 1, 'jurnal', 'karandas');                     1

// console.log(a);




// let a = [2, 5, 32, 12, 6];

// for (let i = 0; i < a.length; i++) {                             2
//     if (a[i] % 2 != 0)
//         console.log(a[i]);

// }



// let save = "save"
// let cancel = "cancel"
// let uptade = "uptade"

// let parents = save;

// switch (parents) {
//     case save:
//         console.log('yadda saxlandi');
//         break;

//     case cancel:
//         console.log('cixildi');                             4
//         break;

//     case uptade:
//         console.log('deysiylikler yadda saxlandi');
//         break;

//     default:
//         console.log("Qebul edilmedi");

// }


// let a='abcfdeg'

// console.log(Array.from(a));                                   6



// const a = { cloud: 'bulud', book: 'kitab', juice: 'meyve siresi' };

// const b = { phone: 'telefon', window: 'pencere' };

// const cem =Object.entries(Object.values(Object.assign(a, b)) )   ;

// // let c = Object.values(cem)                                       7

// // let d = Object.entries(c)

// console.log(cem);


// ------------------------------DOM BOM----------------------------------------------------------

// const btn = document.querySelector(".btn")

// btn.addEventListener('click',function () {
//     this.nextElementSibling.classList.toggle("mr")
// })
// const start = document.querySelector(".start")

// start.addEventListener('click',function () {
//     this.nextElementSibling.classList.toggle("car")
//     this.innerHTML='<p>Qazandiniz</p>'
// })
const wo = new Audio("woooooaah-199849.mp3")
const sound = new Audio("ambulance-in-city-traffic-139030.mp3")
const person = document.querySelector(".person");
const tibb = document.querySelector(".tibb")
const people = document.querySelector(".people")
const p = document.querySelector(".p")
const yol =document.querySelector(".yol")

person.addEventListener('click', function () {
    this.classList.add("a")
    setTimeout(() => {
        person.classList.add("b")
        wo.play()
    }, 2000);
    setTimeout(() => {
        tibb.classList.add("c")
        sound.play()
    }, 4000);
    setTimeout(() => {
        sound.pause()
        people.classList.add("man")
    }, 8000);
    setTimeout(() => {
        people.classList.add("m");
        person.classList.add("g")
    }, 11000);
    setTimeout(() => {
        person.classList.remove("a")
        people.classList.remove("man")
        person.classList.add("hidden");
    }, 13000);
    setTimeout(() => {
        tibb.classList.add("ambulance")
        sound.play()
    }, 15000);
    setTimeout(() => {
        sound.pause()
        p.classList.add("the")
        yol.classList.add("hid")
    }, 19000);
   
})

