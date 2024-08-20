export function increaseNumberAnimation(elementId, endNumber, speed = 10) {
    // const element = document.getElementById(elementId)
    // // let element = elementId

    // if(!element) return

    // /* A dataset variable that is added to the animated element*/
    // const animationRunning = JSON.parse(element.dataset.animationRunning ?? false)

    // if(animationRunning) return

    // element.dataset.animationRunning = true

    // incNbrRec(0, endNumber, element, speed)

    let valueDisplay = document.getElementById(elementId);
    let interval = 4000;
    // valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = 2700;
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
        clearInterval(counter);
        }
    }, duration);
    // });
}
  
/*A recursive function to increase the number.*/
function incNbrRec(currentNumber, endNumber, element, speed) {
    if (currentNumber <= endNumber) {
        element.innerHTML = currentNumber
        setTimeout(function() {
        incNbrRec(currentNumber + 1, endNumber, element, speed)
        }, speed) //Delay a bit before calling the function again.
    } else {
        element.dataset.animationRunning = false
    }
}
  
  