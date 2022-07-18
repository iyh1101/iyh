var id;
var password;
var passwordCheck;
var u_name;
var email;
var b_year, b_month, b_date;
var te1, tel2;
var m_w;
var link = 'q77.html';
window.onload = function() {
    id = document.getElementById("id");
    password = document.getElementById("password");
    passwordCheck = document.getElementById("passwordCheck");
    u_name = document.getElementById("name");
    email = document.getElementById("e_mail");
    b_year = document.getElementById("b_year");
    b_month = document.getElementById("b_month");
    b_date = document.getElementById("b_date");
    tel1 = document.getElementById("tel1");
    tel2 = document.getElementById("tel2");
    m_w = document.getElementsByName("m_w");
}

function c_account() {

    if(id.value.length < 4) {
        alert("아이디는 4자 이상 12자 이하로 작성해주세요.");
        console.log("아이디 양식 실패");
    } else {
        if(password.value.length < 6 || passwordCheck.value.length < 6) {
        alert("비밀번호는 6자 이상 15자 이하로 작성해주세요.");
        console.log("비밀번호 양식 실패");
    } else {
    if(passwordCheck.value != password.value) {
        alert("입력하신 비밀번호와 일치하지 않습니다.");
        console.log("비밀번호 불일치");
    } else {
    if(u_name.value.length < 2) {
        alert("성함을 2자 이상 작성해주세요.");
        console.log("성함 양식 실패");
    } else {
    if(b_year.value > 2022 || b_year.value < 1901) {
        alert("생년을 잘못 기입하셨습니다.");
        console.log("생년 입력 실패");
    } else {
    if(tel2.value.length < 8) {
        alert("전화번호를 입력해주세요.") }
      else {
    if(email.value.length < 4) {
        alert("이메일을 다시 작성해주세요.")
        console.log("이메일 입력 실패");
    } else {
        alert("ID : " + id.value + "\nPW: " + password.value + "\n성함: " +u_name.value + "\n생년월일: " + b_year.value + b_month.value + b_date.value + "\n핸드폰번호: " + tel1.value + tel2.value + "\nE-mail: " + email.value);
        window.open(link);
                            }
                        }
                    }
                }
            }
        }
    }
// for(var i = 0; i < m_w.length; i++) {
//     if(m_w[i].checked == true) {
//         m_w = m_w[i].value;
//     }
// }

}

