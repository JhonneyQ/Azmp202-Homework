// function hesab(a, b){
//     console.log(b**a)
    
// }

// console.log(hesab(a = prompt("derece"),b= prompt("eded")))

// function sil(a){
//     let b = []
//     for (let index = 0; index < a.length; index++) {
//         if(a[index]!=b){
//             b+=a[index]
//         }else if(a[index]==b){
//             a[index].pop()
//         }
        
//     }
//     console.log(b)
    
// }

// console.log(sil([1, 2, 2, 3, 4, 4, 5]))

// function bol(a) {
//     const words = a.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         c = words[i].toUpperCase()
//     }
//     return c
// }

// console.log(a = prompt("cumle daxil et"))

// function concatArray(arr1, arr2) {
//     return [...arr1, ...arr2];
// }

// function say(a){
//     count = 0
//     for (let index = 0; index < a.length; index++) {
//         count++
        
//     }
//     return count
// }

// console.log(say("salamammmam"))


// function sil(a,b){
//     for (let index = 0; index < a.length; index++) {
//         for (let index = 0; index < b.length; index++) {
//             c =a[index].push(b[index])
            
//         }
        
//     }
//     return c
    
// }

// console.log(sil([1, 2, 1, 2, 3],[1, 2, 3]))


// function  boy(a) {
//     a = a.split(" ").reverse().join(" ").toUpperCase()
//     return a
// }

// console.log(boy("hello world"))

let a = [12,56,96,47,65,15,20,5]
a.sort((a,b) => a-b);
console.log(a)