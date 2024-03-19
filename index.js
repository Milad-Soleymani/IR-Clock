const body = document.getElementById("body")

body.style.backgroundImage = 'url(bg0.jpg)';

// setInterval( ,3000)
setInterval(() => {
  let indexImg = Math.random() * 5
  indexImg.toFixed(2)
  
  console.log(indexImg.toFixed(0))

  body.style.backgroundImage = `url(bg${indexImg.toFixed(0)}.jpg)`
}
  , 2000)

function updateClock() {
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, 0);
  const minute = now.getMinutes().toString().padStart(2, 0);
  const secenod = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hour}:${minute}:${secenod}`
  document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000)
// setInterval(bgImg, 1000)