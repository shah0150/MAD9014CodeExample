const inputImageElement = document.getElementById('inputImage');
const canvasElement = document.getElementById('outputCanvas');
const canvasCtx = canvasElement.getContext('2d');

let objectDetector;

// Initialize the object detector
async function initializeObjectDetector() {
    const vision = await mediapipe.solutions.FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2/wasm"
    );

    objectDetector = await mediapipe.solutions.ObjectDetection.create({
        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float16/1/efficientdet_lite0.tflite`,
        delegate: "GPU",
        scoreThreshold: 0.5,
        runningMode: "IMAGE"
    });

    // Show demos section after initialization
    document.getElementById("demos").classList.remove("invisible");
}

// Handle image upload
inputImageElement.addEventListener('change', handleImageUpload);

// Function to handle image upload event
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                // Draw the image on the canvas
                canvasCtx.drawImage(img, 0, 0, canvasElement.width, canvasElement.height);
                // Perform object detection on the image
                detectObjects(img);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Function to perform object detection on the image
async function detectObjects(image) {
    // Ensure that objectDetector is properly initialized
    if (!objectDetector) {
        console.error('Object Detector is not initialized.');
        return;
    }

    try {
        // Clear previous results
        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

        // Perform object detection
        const results = await objectDetector.process(image);

        // Display the detection results on the canvas
        displayDetections(results, image);
    } catch (error) {
        console.error('Error during object detection:', error);
    }
}

// Function to display the detection results on the canvas
function displayDetections(results, image) {
    const ratio = canvasElement.width / image.width;

    for (const detection of results.detections) {
        // Draw bounding box
        canvasCtx.strokeStyle = 'red';
        canvasCtx.lineWidth = 2;
        canvasCtx.strokeRect(
            detection.locationData.relativeBoundingBox.xmin * image.width * ratio,
            detection.locationData.relativeBoundingBox.ymin * image.height * ratio,
            detection.locationData.relativeBoundingBox.width * image.width * ratio,
            detection.locationData.relativeBoundingBox.height * image.height * ratio
        );

        // Display object information
        const infoText = `${detection.label[0].toUpperCase() + detection.label.slice(1)} - ${Math.round(detection.score * 100)}% confidence.`;
        canvasCtx.fillStyle = 'red';
        canvasCtx.font = '16px Arial';
        canvasCtx.fillText(
            infoText,
            detection.locationData.relativeBoundingBox.xmin * image.width * ratio,
            detection.locationData.relativeBoundingBox.ymin * image.height * ratio - 5
        );
    }
}

// Initialize the object detector on page load
initializeObjectDetector();
