function emailcheck(){
    var useremail = document.getElementById("inpemail");
    
    // 이화인 계정만
    //var pattern = /^[A-Za-z0-9_\.\-]+@[ewahian]+\.[net]+/; 
    // 모든 이메일 계정 가능 
    var pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/; 
    
    //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자
    if (pattern.test(useremail.value)==false){
        alert("이메일 주소가 올바르지 않습니다");
        useremail.focus();
        return false;
    }
    else {
        console.log("통과"); 
        return true;
     }
}

//인증번호 백엔드

//닉네임
function nickcheck() {
    var nick = document.getElementById("nick");
    //var nick = $("#nick").val();
    if(nick.value.length < 2 || nick.value.length > 6){
        alert("2자리 ~ 6자리 이내로 입력해주세요.");
        return false;
       }
       else {
          console.log("통과"); 
          return true;
       }
}  


function pwdcheck() {
    //var pw = document.getElementById("passwd");
    var pw = $("#passwd").val();
    var num = pw.search(/[0-9]/g);
    var eng = pw.search(/[a-z]/ig);
    var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if(pw.length < 8 || pw.length > 16){

        alert("8자리 ~ 16자리 이내로 입력해주세요.");
        return false;
    }else if(pw.search(/\s/) != -1){
        alert("비밀번호는 공백 없이 입력해주세요.");
        return false;
    }else if(num < 0 || eng < 0 || spe < 0 ){
        alert("영문, 숫자, 특수문자를 혼합하여 입력해주세요.");
        return false;
    }else {
          console.log("통과"); 
          return true;
    }
}  

//비밀번호 확인
function pwd2check() {
    var pw = document.getElementById("passwd");
    //var userpw = document.getElementById("inp-passwd");
    var userpw2 = document.getElementById("passwd2"); 

    if(userpw.value != userpw2.value){
        alert("패스워드를 확인해주세요");
        userpw.focus();
        return;
    }
}  

function regi(){
    alert("가입을 축하드립니다.");
    window.location = 'login.html';
}


function regi2(){
    var target = document.querySelectorAll('.btn_open');
    var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
    var targetID;

    // 팝업 열기
    for(var i = 0; i < target.length; i++){
        target[i].addEventListener('click', function(){
            targetID = this.getAttribute('href');
            document.querySelector(targetID).style.display = 'block';
        });
    }

    // 팝업 닫기
    for(var j = 0; j < target.length; j++){
        btnPopClose[j].addEventListener('click', 
        function(){
        this.parentNode.parentNode.style.display = 'none';
        window.location = 'login.html';

        });
    }
}

