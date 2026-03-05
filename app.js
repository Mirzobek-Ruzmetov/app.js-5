// TAKRORLASH OPERATORLARI
// while
// do
// do while
// for
// for each
// for of

let num = 10;

// while(num>0){
//     console.log(num);
//     num = num-1 // agar bu yozilmasa cheksiz qiymat beradi
// }

do {
    console.log(num);
    num = num-1
} while (num>0)


const arr = [1,2,3,4,5]

// for - array elementlari va index muhim bolganda

for(let i = 0; i< arr.length; i++){
    console.log(i) // array indexlari 
    console.log(arr[i]) // array elementlari
    
}

// for of - index muhim bolmaganda
for(key of arr) {
    console.log(key); // array elementlari
    
}