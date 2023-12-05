let video = document.getElementById('webcam')
let liveView = document.getElementById('liveView')
let demoSection = document.getElementById('demos')
let enableWebcamButton = document.getElementById('webCamButton')

// Check if web access is supported

function getUserMediaSupported(){
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
}

// If webcam is supported, add event listener to button when user wants to activate

if(getUserMediaSupported()){
    enableWebcamButton.addEventListener('click', enableCam)
} else {
    console.log('getUserMedia() is not supported');
}

// placeholder function 
function enableCam(){}

// enable the live webcam and start classification
 function enableCam(event){
    // Only continue if COCO-SSD has finished loading
    if(!model){
        return
    }
    // Hide the enable button
    event.target.classList.add('remove')

    // getUserMedia parameters to force video but not audio
    let constraints = {
        video: true
    }

    // activate the webcam stream 
    navigator.mediaDevices.getUserMedia(constraints).then(function(stream){
        video.srcObject = stream
        video.addEventListener('loadeddata', predictWebcam)
    });
 }
// placeholder function
function predictWebcam(){}

// Pretend our model has loaded
var model = true
demoSection.classList.remove('invisible')

// store result in a global varibale
var model = undefined

cocoSsd.load().then(function(loadedModel){
    model = loadedModel

    // Show demo section that model is ready to go
    demoSection.classList.remove('invisible')
});

var children = []

function predictWebcam(){
    model.detect(video).then(function(predictions){
        for (let i=0; i < children.length; i++){
            liveView.removeChild(children[i])
        }
        children.splice(0)

        // looping through our prediction and draw line if prediction higher then 66%

        for (let n = 0; n <predictions.length; n++){
            if(predictions[n].score > 0.66){
                let p = document.createElement('p')
                p.innerText = predictions[n].class + ' - with' + Math.round(parseFloat(predictions[n].score) * 100) + '% confidence';

                p.style = 'margin-left: ' + predictions[n].bbox[0] + 'px; margin-top: ' + (
                    predictions[n].bbox[1] - 10) + 'px; width: ' + (predictions[n].bbox[2] - 10) + 'px; top: 0; left: 0;';

                let highlighter = document.createElement('div')
                highlighter.setAttribute('class', 'highlighter')
                highlighter.style = 'left: ' + predictions[n].bbox[0] + 'px; top: ' + predictions[n].bbox[1] + 'px; width: ' + predictions[n].bbox[2] + 'px; height: ' + predictions[n].bbox[3] + 'px;';

                liveView.appendChild(highlighter)
                liveView.appendChild(p)
                children.push(highlighter)
                children.push(p)
            }
        }
        // Call this function
        window.requestAnimationFrame(predictWebcam)
    });
}
