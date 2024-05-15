document.addEventListener('DOMContentLoaded', init);

const boxElement = document.querySelector('.box');
const colorInput = document.querySelectorAll('input');

let colorValue = '#000000';
let colorOpacity = 1;

colorInput.forEach(function(element) {
    element.addEventListener('change', function(e) {
        if(e.target.getAttribute('name') === 'opacity') {
            colorOpacity = e.target.value / 100;
        } else {
            colorValue = e.target.value;
        }
        setBoxShadow(boxElement, colorValue, colorOpacity);
    })
})

function init() {
    setBoxShadow(boxElement, '#000000', 1);
}

function setBoxShadow(element, colorInHex, opacity) {
    const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, 'red')}, 
        ${getChannelColor(colorInHex, 'green')}, 
        ${getChannelColor(colorInHex, 'blue')}, 
        ${opacity}
    )`;

    element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
}


function getChannelColor(colorInHex, channelName) {
    let start;
    switch(channelName) {
        case 'red':
            start = 1;
            break;
        case 'green':
            start = 3;
            break;
        case 'blue':
            start = 5;
            break;
    }

    const channelColorHex = colorInHex.substr(start, 2);
    const channelColorDec = parseInt(channelColorHex, 16);

    return channelColorDec; 
}