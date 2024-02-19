const seats = document.querySelectorAll('.seat-key');
let selectedCount = 0;
let totalPrice = 0;
let discountedPrice = 0;
let grandTotal = 0;
 
for(let i = 0;i<seats.length;i++){
    const seat = seats[i];
   
    seat.addEventListener('click', function(){

    if(selectedCount >= 4){
        alert('You can book 4 tickets maximum.')
    }
    else{
    selectedCount++;
    seat.disabled=true;
    seat.style.backgroundColor = "green";
    seat.style.color = "white";
    const seatsLeft = document.getElementById('seats-left');
    seatsLeft.innerText = Number(seatsLeft.innerText) - 1;
    const seatsSelected = document.getElementById('seats-selected');
    seatsSelected.innerText=Number(seatsSelected.innerText)+1;
    const title = seat.innerText;
    const titleContainer = document.getElementById('selected-list-container');
    
    const div  = document.createElement("div");
    titleContainer.appendChild(div);
    const span = document.createElement('span');
    span.innerText =  title;
    div.appendChild(span);
    const span2 = document.createElement('span');
    span2.innerText = 'Economy';
    div.appendChild(span2);
    const span3 = document.createElement('span');
    span3.innerText = 550;
    div.appendChild(span3);
    div.classList.add('flex');
    div.classList.add('justify-between');
    
    totalPrice+=550;
    document.getElementById('total-price').innerText= totalPrice;

    
    }
    })
    
}





function coupon(){
    const inputValue= document.getElementById('coupon-value').value.split("").join("").toLowerCase();
    if(inputValue==='new15'){
        discountedPrice = totalPrice * 0.15 ;
        const hideCouponDiv = document.getElementById('coupon-div');
        hideCouponDiv.classList.add('hidden');
    }
    else if(inputValue === 'couple20'){
       discountedPrice = totalPrice * 0.20;
       const hideCouponDiv = document.getElementById('coupon-div');
        hideCouponDiv.classList.add('hidden');
    }
    else{
        alert('Invalid Coupon Code');
        document.getElementById('coupon-value').value = "";
    }
 grandTotal = totalPrice - discountedPrice;
 document.getElementById('grand-total').innerText= grandTotal;

}


const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click',function(){
    if(document.getElementById('required').value === ''){
        alert('Fill your Phone Number ');
    }
})





 


