const generateArray = function(amount) {
    let returnArray = []; 

    /*
    let amountConverted = parseInt(amount);
    amount = amountConverted;
*/

    amount = parseInt(amount);
//    console.log(amount);
    if (!Number.isNaN(amount)) {
//        console.log("Az amount egy szám");
        for ( let i = 0; i < amount; i++) {
            returnArray.push(`${i}`);        }
        }
        else {
            //        console.log("Az amount nem egy szám");  
            returnArray.push("error");   
        }
        return returnArray;
    }

const loadEvent = function() {
    console.log("betöltődött");
/*
    console.log(generateArray(100));
    console.log(generateArray(15));
    console.log(generateArray("kiskutya"));
    console.log(generateArray([2]));
*/
const root = document.getElementById("root");
//const list = generateArray(14);
const list = generateArray(11250);

// ********** Begin of Make string with plus "0"s before the number

let digits = 0;
let diff= 0 ;
let zero="0";
digits=(list.length-1).toString().length;

for (const item of list){
        diff = digits - list[item].toString().length;
        list[item]=zero.repeat(diff) + list[item].toString();
}

// ********** End of Make string with plus "0"s before the number*/

if (list[0] !== "error") {
    for (const item of list){
        root.insertAdjacentHTML("beforeend", `<div class="card">${item}</div>`);
    } 
}
}

window.addEventListener("load", loadEvent);