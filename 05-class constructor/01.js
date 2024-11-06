// class rectangle{
//     constructor(teref1,teref2){
//         this.teref1=teref1
//         this.teref2=teref2
//     }
//     getsahe(){
//         return this.teref1*this.teref2
//     }
//     getperimetr(){
//         return (this.teref1+this.teref2)*2
//     }
// }

// const rectangle1 = new rectangle(5, 10);

// console.log(rectangle1.getsahe())
// console.log(rectangle1.getperimetr())

// class bankaccount{
//     constructor(hesabn,balans){
//         this.hesabn=hesabn
//         this.balans=balans
//     }
//     deposit(num){
//         if(this.balans>num){
//             this.balans+=num
//             return this
//         }else if(num<=0 && this.balans<num){
//             return "error"
//         }
//     }
//     cixart(num2){
//         if(this.balans>num2){
//             this.balans-=num2
//             return this
//         }else if(num2<=0 && this.balans<num2){
//             return "error"
//         }
       
//     }
//     getBalance() {
//         return this.balans;
//     }
// }

// class bob extends bankaccount{
    
// }
// class alice extends bankaccount{
    
// }

// const bobAccount = new bob(101, 1000);
// bobAccount.deposit(700).cixart(100);
// console.log(bobAccount.getBalance());

// const aliceAcoount = new alice(101, 1000);
// aliceAcoount.deposit(500).cixart(200);
// console.log(aliceAcoount.getBalance());
