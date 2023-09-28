function classification_starter()
{
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Md10z-36M/model.json", ModelLoaded)
}

function ModelLoaded() 
{
    classifier.classify(gotResults);
}