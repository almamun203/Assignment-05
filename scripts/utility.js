const seats = document.querySelectorAll('.seat-key');

for(let i = 0;i<seats.length;i++){
    const seat = seats[i];
    
    seat.addEventListener('click', function(){
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

    const couponValue = document.getElementById('coupon-value').value.toLowerCase() ;
    const couponBtn = document.getElementById('apply-btn');
    })
    
}






let grandTotal =document.getElementById('grand-total').innerText;

 


