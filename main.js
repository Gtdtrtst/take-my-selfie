var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

 function start(){
    document.getElementById("text_box").innerHTML= "" ;
    recognition.start();
}
recognition.onresult= function (event) {
    console.log(event);
    var content= event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML= content;
    console.log(content);
    if(content=="take my selfie"){
        console.log("taking selfie");
        speak();
    }
}
function speak(){
    var synth = window.speechSynthesis;
    speakdata = "taking your selfie in five seconds";
    var utterThis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);

    Webcam.attach(camera);
    setTimeout(function(){
        takeSnapShot();
        save();
    },5000)
}
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    Imageformat:"jpeg",
    jpegquality:90
});

function takeSnapShot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img src="'+data_uri+'" id="final_selfie">';
    });

}

function save(){
var link= document.getElementById("link");
var final= document.getElementById("final_selfie").src;
link.href= final;
link.click()
}