
let homeRes = document.getElementById("home-div")
let homeCount = 0
let guestRes = document.getElementById("guest-div")
let guestCount = 0
function addOnePointHome(){ 
    homeCount = homeCount + 1
    homeRes.innerText = homeCount  
}
function addTwoPointHome(){ 
    homeCount = homeCount + 2
    homeRes.innerText = homeCount  
}
function addThreePointHome(){ 
    homeCount = homeCount + 3
    homeRes.innerText = homeCount  
}
function addOnePointGuest(){ 
    guestCount = guestCount + 1
    guestRes.innerText = guestCount  
}
function addTwoPointGuest(){ 
    guestCount = guestCount + 2
    guestRes.innerText = guestCount  
}
function addThreePointGuest(){ 
    guestCount = guestCount + 3
    guestRes.innerText = guestCount  
}
