var p1, p2, p3, p4, p5, p6; // 플레이어가 뽑는 숫자 추첨

p1 = Math.floor(Math.random()*45) + 1;

 // 앞의 숫자와 일치하면 불일치할 때까지 재부여
p2 = Math.floor(Math.random()*45) + 1;
while(p1 == p2) {
    p2 = Math.floor(Math.random()*45) + 1; }
    
p3 = Math.floor(Math.random()*45) + 1;
while(p1 == p3 || p2 == p3) {
    p3 = Math.floor(Math.random()*45) + 1; }

p4 = Math.floor(Math.random()*45) + 1;
while(p1 == p4 || p2 == p4 || p3 == p4) {
    p4 = Math.floor(Math.random()*45) + 1; }

p5 = Math.floor(Math.random()*45) + 1;
while(p1 == p5 || p2 == p5 || p3 == p5 || p4 == p5) {
    p5 = Math.floor(Math.random()*45) + 1; }
    
p6 = Math.floor(Math.random()*45) + 1;
while(p1 == p6 || p2 == p6 || p3 == p6 || p4 == p6 || p5 == p6) {
    p6 = Math.floor(Math.random()*45) + 1; }

var p = [p1, p2, p3, p4, p5, p6];

document.write("플레이어가 추첨한 번호는<br>: " + p + "<br><br>");

var r1, r2, r3, r4, r5, r6, r7; // 컴퓨터가 뽑는 숫자 추첨

r1 = Math.floor(Math.random()*45) + 1;

r2 = Math.floor(Math.random()*45) + 1;
while(r1 == r2) {
    r2 = Math.floor(Math.random()*45) + 1; }
    
r3 = Math.floor(Math.random()*45) + 1;
while(r1 == r3 || r2 == r3) {
    r3 = Math.floor(Math.random()*45) + 1; }

r4 = Math.floor(Math.random()*45) + 1;
while(r1 == r4 || r2 == r4 || r3 == r4) {
    r4 = Math.floor(Math.random()*45) + 1; }

r5 = Math.floor(Math.random()*45) + 1;
while(r1 == r5 || r2 == r5 || r3 == r5 || r4 == r5) {
    r5 = Math.floor(Math.random()*45) + 1; }
    
r6 = Math.floor(Math.random()*45) + 1;
while(r1 == r6 || r2 == r6 || r3 == r6 || r4 == r6 || r5 == r6) {
    r6 = Math.floor(Math.random()*45) + 1; }

r7 = Math.floor(Math.random()*45) + 1;
while(r1 == r7 || r2 == r7 || r3 == r7 || r4 == r7 || r5 == r7 || r6 == r7) {
    r7 = Math.floor(Math.random()*45) + 1; }
var r = [r1, r2, r3, r4, r5, r6];

document.write("컴퓨터가 추첨한 번호는<br>: " + r + "<br>" + "보너스 번호는 '" + r7 + "' 입니다. <br><br>");

// 일치하는치 체크, 몇개가 일치하는지 세기 위한 변수 생성
// z와 a 변수를 만들어 각각 p와 r의 배열순서를 바꿔준다
var co = 0;
for(var z = 0; z <= 5; z++) {
for(var a = 0; a <= 5; a++) {
    if(p[z] == r[a]) {
    co = co + 1; // 일치하면 카운트
    document.write(p[z] + " "); }
} }   document.write("가 일치합니다. <br>")

document.write("일치한 번호는 총 " + co + "개로, ");

if(co <= 2) {
    document.write("당첨되지 않았습니다..."); }
if(co == '3') {
    document.write("5등 당첨입니다."); }
if(co == '4') {
    document.write("4등 당첨입니다."); }
if(co == '5') {
    document.write("3등 당첨입니다.<br>")
    for(var i = 0; i <=5; i++) {
        if(p[i] == r7) {
            document.write("만!! 보너스 일치로 최종 2등 당첨입니다!!");}
        };   }
if(co == '6') {
    document.write("1등 당첨!!"); }