/*
import {coffeeStock, isCoffeeMachineReady} from "./state.js";

const makeCoffee = (type, miligrams) => {
    if (isCoffeeMachineReady){
        if (coffeeStock[type] >= miligrams){
            console.log(`Kopi ${type} telah berhasil dibuat dengan menggunakan ${coffeeStock[type]} mg biji kopi`);
        } else {
            console.log(`Kopi ${type} tidak dapat dibuat karena kekurangan ${miligrams-coffeeStock[type]} mg`);
        }
    } else if(!isCoffeeMachineReady){
        console.log(`Kopi ${type} tidak dapat dibuat karena mesin kopi sedang tidak dapat digunakan`);
    }
}

const arg1 = 1;
let myString = "";

console.log("Selamat datang di Customer Service");
setTimeout(()=>console.log("Terima kasih telah menghubungi kami, apabila tidak terdapat pertanyaan, maka chat akan ditutup"), 3000);
console.log("Apakah ada yang bisa kami bantu?");
*/

import _ from 'lodash';
 
const myArray = [1, 2, 3, 4];
const sum = _.sum(myArray);
 
console.log(sum);
