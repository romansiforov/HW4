// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.
//     Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)

// 1 km == 1000m

let metersAmount = 2000; 
let kilometersAmount;
let metr = "метр";
let kilometr = "кiлометр";

kilometersAmount = metersAmount/1000;



function ending(numberValue) {
    if(String(numberValue).match(/[.]/)){
        return "a";
    }else if(String(numberValue).match(/0$/) || String(numberValue).match(/[5-9]$/)  || String(numberValue).match(/[1][1-9]$/) || String(kilometersAmount).match(/[2-9][5-9]$/)){
        return "iв";
    }else if(String(numberValue).match(/1$/)){
        return "";
    }else if(String(numberValue).match(/[2-4]$/) && !String(numberValue).match(/[1][1-9]$/)){
        return "a";
    }
}



console.log(metersAmount+" "+metr+ending(metersAmount)+" it's = "+kilometersAmount+" "+kilometr+ending(kilometersAmount));