var HappyImages = ["https://www.mariowiki.com/images/2/2e/Superhappytree.png","https://www.pinclipart.com/picdir/middle/182-1828495_inside-out-clip-art-character-joy-inside-out.png","https://t5.rbxcdn.com/a99eb2dedec5f0bc8b0a57e1d1b78fbf"];

var SadImages = ["https://vignette.wikia.nocookie.net/characters/images/8/82/SADNESS_Fullbody_Render.png/revision/latest?cb=20190406232316"];

var AngryImages = ["http://www.stickpng.com/assets/images/5862951a3796e30ac4468737.png","http://www.stickpng.com/assets/thumbs/5a0c691a82e02d31ecb8d002.png","https://i.ytimg.com/vi/D87K8X6t1r8/maxresdefault.jpg"];

var DisgustImages = ["http://www.stickpng.com/assets/thumbs/5a0c694782e02d31ecb8d006.png","https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/91/face-with-open-mouth-vomiting_1f92e.png"];

function Happy() {
    ChangeBackground("yellow");
    DisplayImages(HappyImages);
}

function Sad() {
    ChangeBackground("blue");
    ChangeColor("white");
    DisplayImages(SadImages);
}

function Angry() {
    ChangeBackground("red");
    ChangeColor("white");
    DisplayImages(AngryImages);
}

function Disgusted() {
    ChangeBackground("green");
    ChangeColor("white");
    DisplayImages(DisgustImages);
}

function DisplayImages(imageArray) {
    $(".displayMood").html("");
    imageArray.forEach(function(image) {
        $(".displayMood").append("<img src=" + image + ">");
    });
}

function ChangeBackground(color) {
    $("body").css("background-color",color);
}

function ChangeColor(color) {
    $("body").css("color",color);
}

function Reset() {
    $("body").css("background-color","white");
    $("body").css("color","black");
    $(".displayMood").hide();
}

$("#sm").click(function() {
    var mood= $("input").val();
    if (mood === "happy") {
        $(".displayMood").show();
        Happy();
    }
    else if (mood === "sad") {
        $(".displayMood").show();
        Sad();
    }
    else if (mood === "angry") {
        $(".displayMood").show();
        Angry();
    }
    else if (mood === "disgusted") {
        $(".displayMood").show();
        Disgusted();
    }
    else {
        alert("Please choose one of the four moods mentioned above.");
    }
});

$("#rtn").click(function() {
    Reset();
});