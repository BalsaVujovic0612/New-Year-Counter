

function countdown1(){
    let countdown = document.getElementById('countdown')
    let now = Date.now()
    let newYear = new Date("Jan 1, 2025 00:00:00").getTime()

    const difference = newYear - now
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    //countdown.innerText=`${days.toString().padStart(2,'0')}:${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
    countdown.innerText = `${days.toString().padStart(2,'0')} Days ${hours.toString().padStart(2,'0')} Hours ${minutes.toString().padStart(2,'0')} Minutes ${seconds.toString().padStart(2,'0')} Seconds`;
   
    if(difference < 0){
        countdown.innerText = 'Happy New Year'
        clearInterval(interval)
    }
}

let interval = setInterval(countdown1,1000)