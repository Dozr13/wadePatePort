console.log('its working!')

let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        console.log('Option Clicked', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'style.css'
    } 

        if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }
    
        if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }
    
        if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css'
    } 

    localStorage.setItem('theme', mode)
    
}

//
var mybutton = document.getElementById("topBtn");

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//

var scroll = new SmoothScroll('.intro-wrapper a[href*="#"]', {
    speed: 850
});