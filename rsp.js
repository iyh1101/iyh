var ply = "";
var random = "";

var rpcInputText;
var rpcResultScreen;
var rpcResultImage;

var resultString = "";
var resultPicture = "";

//a.innerHTML = "<img src=' '>"
// 해당 아이디의 html태그 사이에 값이 들어간다
// <a> img src = ' ' </a>로 입력된다.

window.onload = function() {
    rpcInputText = document.getElementById("rpc_input_text");
    rpcResultScreen = document.getElementById("rpc_result_screen");
    rpcResultImage = document.getElementById("rpc_result_picture");
}

// 그림을 출력하는 함수
// function scissorsimg() {
//     rpc_result_picture.innerHTML = "<img src = 'scissors.png'>";
// }
// function rockimg() {
//     rpc_result_picture.innerHTML = "<img src = 'rock.png'>";
// }
// function paperimg() {
//     rpc_result_picture.innerHTML = "<img src = 'paper.png'>";
// }


//가위바위보 버튼 눌렀을때 텍스트로 출력되는 결과값
function rpcInputButtonClick() {

    //컴퓨터 가위 바위 보 랜덤
random = Math.floor(Math.random()*3) + 1;
if(random == 1) {
    random = "가위";
}
if(random == 2) {
    random = "바위";
}
if(random == 3) {
    random = "보";
}


    resultString = "";
    // rpcResultScreen.value = resultString;

    while(true) {
        ply = rpcInputText.value;
        if(ply == "가위" || ply == "바위" || ply == "보") {
            break;
        } else {
            alert("' 가위 바위 보 '중에 하나를 입력하세요..")
            return;
            // 리턴을 안하면 경고문이 무한...
        }
    }


resultString += "내가 내민 손 : " + ply;
resultString += "\n"
resultString += "컴퓨터가 내민 손 : " + random;
resultString += "\n"

var result = "";
if(ply == "가위" && random == "가위") {
    result = "비겼습니다."
}
if(ply == "가위" && random == "바위") {
    result = "졌습니다..."
} 
if(ply == "가위" && random == "보") {
    result = "이겼습니다!"
} 
if(ply == "바위" && random == "가위") {
    result = "이겼습니다!"
} 
if(ply == "바위" && random == "바위") {
    result = "비겼습니다."
} 
if(ply == "바위" && random == "보") {
    result = "졌습니다..."
} 
if(ply == "보" && random == "가위") {
    result = "졌습니다..."
} 
if(ply == "보" && random == "바위") {
    result = "이겼습니다!"
} 
if(ply == "보" && random == "보") {
    result = "비겼습니다."
}
                        
resultString += "결과는~ " + result;
rpcResultScreen.value = resultString;

}


// 그림보기 버튼을 눌렀을때 그림 출력
function ButtonClick() {

var plyimg, comimg;

switch(ply) {
    case "가위" :
        plyimg = "<img src='scissors.png'>";
        break;
    case "바위" :
        plyimg = "<img src='rock.png'>";
        break;
    case "보" :
        plyimg = "<img src='paper.png'>";
        break;
    default:
        document.write("무슨 문제지..");
}

switch(random) {
    case "가위" :
        comimg = "<img src='scissors.png'>";
        break;
    case "바위" :
        comimg = "<img src='rock.png'>";
        break;
    case "보" :
        comimg = "<img src='paper.png'>";
        break;
    default:
        document.write("에러..");
}

function imgalert() {
    rpc_result_picture.innerHTML = plyimg + comimg;
}

resultPicture = imgalert();
rpcResultImage.value = resultPicture;

}