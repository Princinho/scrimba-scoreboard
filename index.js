let guestScore=0
let homeScore=0
let homeScoreDisplay=document.getElementById('home-score');
let guestScoreDisplay=document.getElementById('guest-score');
function  addOneToHome(){
    homeScore+=1;
    refreshDisplay();
}
function  addTwoToHome(){
    homeScore+=2;
    refreshDisplay();
}
function  addThreeToHome(){
    homeScore+=3;
    refreshDisplay();
}
function  addOneToGuest(){
    guestScore+=1;
    refreshDisplay();
}
function  addTwoToGuest(){
    guestScore+=2;
    refreshDisplay();
}
function  addThreeToGuest(){
    guestScore+=3;
    refreshDisplay();
}
function refreshDisplay(){
    homeScoreDisplay.textContent=homeScore;
    guestScoreDisplay.textContent=guestScore;
    if(guestScore>homeScore){
        guestScoreDisplay.classList.add('leading')
        homeScoreDisplay.classList.remove('leading')
    }
    if(guestScore<homeScore){
        homeScoreDisplay.classList.add('leading')
        guestScoreDisplay.classList.remove('leading')
    }
    if(guestScore==homeScore){
        guestScoreDisplay.classList.remove('leading')
        homeScoreDisplay.classList.remove('leading')
    }
}
function resetBoard(){
    guestScore=0;
    homeScore=0;
    refreshDisplay();
    console.log('resetting...')
}