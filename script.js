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
const list = generateArray(1400);
    length = (list.length-1);

// Begin of Make string with plus "0"s before the number

    let zero = 0;
    let ten = 10;

    if(list[length].toString().length === 1){
        list[j]=list[j].toString();

    }else if(list[length].toString().length === 2){
        fors (zero, ten, string);

    }else if(list[length].toString().length === 3){
        fors (ten, ten*10, "0");
        fors (zero, ten, "00");
        
    }else if(list[length].toString().length === 4){
        fors (ten*10, ten*100, "0");
        fors (ten, ten*10, "00");
        fors (zero, ten, "000");
    }else {
        let error = "4-nél több számjegy van";
    }

// End of Make string with plus "0"s before the number*/

if (list[0] !== "error") {
    for (const item of list){
        root.insertAdjacentHTML("beforeend", `<div class="card">${item}</div>`);
    } 
}
function fors (from, till, zeros){
    for (let k=from; k<till; k++){
        list[k]=zeros+list[k].toString();
    }
} 
}

window.addEventListener("load", loadEvent);