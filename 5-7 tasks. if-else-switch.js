// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

let a = 30;
let b = 20;
let c = 10;

if( b < a){
    if(a < c){
        console.log(`The avarage value is a ${a}`)
    }else if(c > b){
        console.log(`The avarage value is c ${c}`)
    }else{
        console.log(`The avarage value is b ${b}`)
    }
}else if(b < c){
    console.log(`The avarage value is b ${b}`)
}else if(a < c){
    console.log(`The avarage value is c ${c}`)
}else{
    console.log(`The avarage value is a ${a}`)
}


// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

let dayWeekNumber = 7;

switch(dayWeekNumber){
    case 1:
        console.log("It's Monday");
        break;
    case 2:
        console.log("It's Tuesday");
        break;
    case 3:
        console.log("It's Wednesday");
        break;
    case 4:
        console.log("It's Thursday");
        break;
    case 5:
        console.log("It's Friday");
        break;
    case 6:
        console.log("It's Saturday");
        break;
    case 7:
        console.log("It's Sunday");
        break;
    default:
        console.log("Someting went wrong. Try numbers 1,2,3,4,5,6 or 7");
        break;
}

// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

let operation = "*";
let first = 10;
let second = 15;
let result;

switch(operation){
    case "-":
        result = first-second;
        console.log(first+" - "+second+" = "+result);
        break;
    case "+":
        result = first+second;
        console.log(first+" + "+second+" = "+result);
        break;
    case "*":
        result = first*second;
        console.log(first+" * "+second+" = "+result);
        break;
    case "/":
        if(second!=0){
            result = first/second;
            console.log(first+" / "+second+" = "+result);
        }else{
            console.log("Deviding by zero is forbidden")
        }
        break;
    default:
        console.log("Someting went wrong. Operation can be +, -, *, / ");
        break;
}
