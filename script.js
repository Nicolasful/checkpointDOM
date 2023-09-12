//NOW AM ADO FUNCTIONS TO BUTTON INCREMENT AND DECREMENT TOTAL PRICE//
//LETS STAT JS//
let valueCount= 1;
let increment=document.querySelector(".btn-increment");
let decrement=document.querySelector(".btn-decrement");
let count =document.querySelector("#quantity");
let totalcount =document.querySelector("#price");
let prixTotal = document.querySelector('#prix')
//NOW AM CREATING A ARROW FUNTION
increment.addEventListener("click", ()=>{
    let add= valueCount++;
    count.value=add;
    totalcount.innerHTML=add*250000;     //ADDING FUCTION IS COMPLETED  
    prixTotal.innerHTML= add*250000
    
})
    decrement.addEventListener("click", ()=>{
        if(valueCount=>2){
            let sub=--valueCount;
            count.value=sub;
            totalcount.innerHTML=sub*250000;
            prixTotal.innerHTML= sub*250000

        }
    })


let valueCount1= 1;
let increment1=document.querySelector(".btn-increment1");
let decrement1=document.querySelector(".btn-decrement1");
let count1 =document.querySelector("#quantity1");
let totalcount1 =document.querySelector("#price1");
//NOW AM CREATING A ARROW FUNTION
increment1.addEventListener("click", ()=>{
    let add1= valueCount1++;
    count1.value=add1;
    totalcount1.innerHTML=add1*7000;    //ADDING FUCTION IS COMPLETED  
    prixTotal.innerHTML= add1*7000
})
    decrement1.addEventListener("click", ()=>{
        if(valueCount1=>2){
            let sub1=--valueCount1;
            count1.value=sub1;
            totalcount1.innerHTML=sub1*7000;
            prixTotal.innerHTML= sub1*7000

        }
    })
    
  



    

   
    



