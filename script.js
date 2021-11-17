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
const list = generateArray(250);

// Begin of Make string with plus "0"s before the number

length = (list.length-1);
    if(list[length].toString().length === 1){
        list[j]=list[j].toString();

    }else if(list[length].toString().length === 2){
        for (let k=0; k<10; k++){
 
            list[k]="0"+list[k].toString();

        }

    }else if(list[length].toString().length === 3){
        for (let k=0; k<10; k++){
            list[k]="00"+list[k].toString();
        }
        for (let k=11; k<100; k++){
            list[k]="0"+list[k].toString();
        }

    }else if(list[length].toString().length === 4){
        for (let k=0; k<10; k++){
            list[k]="000"+list[k].toString();
        }
        for (let k=11; k<100; k++){
            list[k]="00"+list[k].toString();

        }
        for (let k=101; k<1000; k++){
            list[k]="0"+list[k].toString();
        }

    }else {
        let error = "4-nél több számjegy van";
    }
// End of Make string with plus "0"s before the number

if (list[0] !== "error") {
    for (const item of list){
        root.insertAdjacentHTML("beforeend", `<div class="card">${item}</div>`);
    } 
}
}


window.addEventListener("load", loadEvent);

/*
window.addEventListener("load", function(){
    ez ugyanaz, mint a fenti
})

window.addEventListener("load", () => {
    ez ugyanaz, mint a fenti
})
*/