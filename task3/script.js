const trafficLightUp = document.querySelector('#trafficLight1');
const trafficLightMid = document.querySelector('#trafficLight2');
const trafficLightLow = document.querySelector('#trafficLight3');


function makeGreen(event) {
    if (event.target.className ==='trafficLights') {
    trafficLightLow.style.background = "";
    trafficLightUp.style.background = ('green');
    }  
    document.removeEventListener('click', makeGreen);
    document.addEventListener('click', makeYellow);
}
function makeYellow(event) {
    if (event.target.className ==='trafficLights') {
        trafficLightUp.style.background = "";
        trafficLightMid.style.background = ('yellow');
        } 
    document.removeEventListener('click', makeYellow);
    document.addEventListener('click', makeRed);
}
function makeRed(event) {
    if (event.target.className ==='trafficLights') {
        trafficLightMid.style.background = "";
        trafficLightLow.style.background = ('red');
        } 
    document.removeEventListener('click', makeRed);
    document.addEventListener('click', makeGreen);
}
document.addEventListener('click', makeGreen);
