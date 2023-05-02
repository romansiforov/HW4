// 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let regExpGolosny = "AEIOUYaeiouy";

let testWord = "Synchronization"; 

console.log("The word BEFORE regExp applying---------- "+testWord);
testWord = testWord.replace(/[AEIOUYaeiouy]/g, "")
console.log("The word After regExp applying ---------- "+testWord);


// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.
//     Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)

// 1 km == 1000m

let metersAmount = 3; 
let kilometersAmount;
let metr = "метр";
let kilometr = "кiлометр";

kilometersAmount = metersAmount/1000;

if (String(metersAmount).match(/0$/) || String(metersAmount).match(/[1][1-9]$/) || String(metersAmount).match(/[2-9][5-9]$/)){
    if(String(kilometersAmount).match(/0$/) || String(kilometersAmount).match(/[1][1-9]$/) || String(kilometersAmount).match(/[2-9][5-9]$/)){
        console.log(metersAmount+" "+metr+"iв це "+kilometersAmount+" "+kilometr+"iв");
    }else if(String(kilometersAmount).match(/1$/)){
        console.log(metersAmount+" "+metr+"iв це "+kilometersAmount+" "+kilometr+"");
    }else if(String(kilometersAmount).match(/[2-4]$/) && !String(kilometersAmount).match(/[1][1-9]$/)){
        console.log(metersAmount+" "+metr+"iв це "+kilometersAmount+" "+kilometr+"a");
    }
} else if(String(metersAmount).match(/1$/)){
    if(String(kilometersAmount).match(/0$/) || String(kilometersAmount).match(/[1][1-9]$/) || String(kilometersAmount).match(/[2-9][5-9]$/)){
        console.log(metersAmount+" "+metr+" це "+kilometersAmount+" "+kilometr+"iв");
    }else if(String(kilometersAmount).match(/1$/)){
        console.log(metersAmount+" "+metr+" це "+kilometersAmount+" "+kilometr+"");
    }else if(String(kilometersAmount).match(/[2-4]$/) && !String(kilometersAmount).match(/[1][1-9]$/)){
        console.log(metersAmount+" "+metr+" це "+kilometersAmount+" "+kilometr+"a");
    }
} else if(String(metersAmount).match(/[2-4]$/) && !String(metersAmount).match(/[1][1-9]$/)){
    if (String(kilometersAmount).match(/0$/) || String(kilometersAmount).match(/[1][1-9]$/) || String(kilometersAmount).match(/[2-9][5-9]$/)){
        console.log(metersAmount+" "+metr+" a це "+kilometersAmount+" "+kilometr+"iв");
    } else if(String(kilometersAmount).match(/1$/)){
        console.log(metersAmount+" "+metr+"a це "+kilometersAmount+" "+kilometr+"");
    } else if(String(kilometersAmount).match(/[2-4]$/) && !String(kilometersAmount).match(/[1][1-9]$/)){
        console.log(metersAmount+" "+metr+"a це "+kilometersAmount+" "+kilometr+"a");
    }
}



















if (String(metersAmount).match(/0$/) || String(metersAmount).match(/[1][1-9]$/) || String(metersAmount).match(/[2-9][5-9]$/)){
    console.log(metersAmount+" "+metr+"iв це "+kilometersAmount+" "+kilometr+"");
} else if(String(metersAmount).match(/1$/)){
    console.log(metersAmount+" "+metr+" це "+kilometersAmount+" "+kilometr+"");
} else if(String(metersAmount).match(/[2-4]$/) && !String(metersAmount).match(/[1][1-9]$/)){
    console.log(metersAmount+" "+metr+"а це "+kilometersAmount+" "+kilometr+"");
}



if (String(kilometersAmount).match(/0$/) || String(kilometersAmount).match(/[1][1-9]$/) || String(kilometersAmount).match(/[2-9][5-9]$/)){
    console.log(metersAmount+" "+metr+" це "+kilometersAmount+" "+kilometr+"iв");
} else if(String(kilometersAmount).match(/1$/)){
    console.log(metersAmount+" "+metr+" це "+kilometersAmount+" "+kilometr+"");
} else if(String(kilometersAmount).match(/[2-4]$/) && !String(kilometersAmount).match(/[1][1-9]$/)){
    console.log(metersAmount+" "+metr+" це "+kilometersAmount+" "+kilometr+"a");
}