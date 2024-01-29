let ticketPrice = 800;
let age = 9;
let isStudent = false;

// simple else if

if (age < 10){
    console.log("free ticket")
}
else if (isStudent == true){
    let discount = ticketPrice * 50 / 100;
    let payAmount = ticketPrice - discount;
    console.log(payAmount);
}
    
    
else if (age >= 60){
    let discount = ticketPrice * 15 / 100;
    let payAmount = ticketPrice - discount;
    console.log(payAmount);
}
else {
    console.log("pay full 800 tk");
}

// turnery operator

// age < 10 ? console.log(ticketPrice = 0) : age >= 60 ? console.log(ticketPrice = ticketPrice * 15 / 100) : isStudent == true ? console.log(ticketPrice = ticketPrice / 2) : console.log(ticketPrice = 800);
