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
  btnPopClose[j].addEventListener('click', function(){
    this.parentNode.parentNode.style.display = 'none';
  });
}


function email() {
    if(document.querySelector('#btn-email').value === '인증코드 발급'){
        const name = document.getElementById('inpemail').value;
        document.getElementById("valueprint").innerText = name;
        document.querySelector('#btn-email').value = '인증코드 재발급';

     }
   else{ document.querySelector('#btn-email').value = '인증코드 재발급';}

}

var target = document.querySelectorAll('.btn_open');
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
    btnPopClose[j].addEventListener('click', function(){
      this.parentNode.parentNode.style.display = 'none';
    });
}



$function() {
    $('#form-register').submit(function(e) {
        e.preventDefault();

        $(this).find('.txt-warning').empty().hide();
    })
};

$('#form-register').submit(function(e) {
    e.preventDefault();

    $(this).find('.txt-warning').empty().hide();

    var email = $('#inp-email').val();

    if(!validateEmail(email)) {
        $('#inp-email').next().html('잘못된 형식입니다').show();
        return;
    }
}

/*
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.^<>()[\].,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\._+[a-zA-Z]{2,}))$/;

    return re.test(email);
}
*/


function btn_email(self){
    var target = document.querySelector('body');
    if(self.value === '확인'){
        self.value = '재발급';  
    } 
    else{
        self.value = '확인';
    }
}