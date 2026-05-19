const phrases = [
    "Hi, I'm BMO!", 
    "Beep boop",
    "You're ugly",
    "Today is...just look at my stomach"
];

let phraseIndex = 0;
let popupTimer = null;

function handleStar() {
    const face = document.querySelector('.bmoSmile');
    const popup = document.getElementById('bmo-popup');
    const text = document.getElementById('popup-text');

    // cycle through phrases
    text.textContent = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;

    // swap face
    face.src = 'assets/tongue.png';

    //show popup
    popup.classList.remove('hidden');
    console.log('popup shown');

    // reset after 2 seconds
    clearTimeout(popupTimer);
    popupTimer = setTimeout(() => {
        popup.classList.add('hidden');
        face.src = 'assets/smile.png';
    }, 1600);
};

function updateCalendar() {
    const now = new Date();
    const day = now.getDate();
    const monthNames = ["Janurary", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const month = monthNames[now.getMonth()];

    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;

}



// Initalize/call the calendar function 
updateCalendar();