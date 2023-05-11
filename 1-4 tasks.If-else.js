//HomeWork 
// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

let tottalPeopleAmount = 4; // Три друга + Я
let humburgers = 4;         // для всiх
let fries = 0;              // для мене

if((humburgers == tottalPeopleAmount) && fries){
    console.log("Ми поїли");
}
else{
    console.log("Ми йдемо в інше кафе");
}


// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

let priceForProduct = 1000;
let min = 1000;
let max = 1900;

//v1
if(priceForProduct >= min){
    if(priceForProduct <= max){
        console.log("The "+priceForProduct+" is in the necessry diapason");
    }else{
        console.log("The "+priceForProduct+" more than "+max);
    }
}else{
    console.log("The "+priceForProduct+" less than "+min);
}

//v2
if(priceForProduct >= min && priceForProduct <= max){
    console.log("The price "+priceForProduct+" is more than "+min+" and less or equals"+ max);
}else{
    console.log("The price "+priceForProduct+" is out of range");
}

// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

//v3
let priceForProductV2 = 1000;
let minV2 = 1000;
let maxV2 = 1900;

if(!(priceForProductV2 < minV2) && !(priceForProductV2 > maxV2)){
    console.log("The price "+priceForProductV2+" is more than "+minV2+" and less or equals "+ maxV2);
}else{
    console.log("The price "+priceForProductV2+" is out of range");
}


// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

let season = 0;

if(season == 1){
    console.log("It's Winter");
}else if(season == 2){
    console.log("It's Spring");
}else if(season == 3){
    console.log("It's Summer");
}else if(season == 4){
    console.log("It's Autumn");
}else {
    console.log("Incorrect input. Try 1,2,3 or 4");
}