window.addEventListener('load', function() {
  var nickbtn = document.querySelector('.nickbtn');
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

  const regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const regPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;


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

    if(!regEmail(email)) {
        $('#inp-email').next().html('잘못된 형식입니다').show();
        return;
    }
  }
  
  const onClick = (e) => {
    e.preventDefault();
    if (!email || !nickname || !password || !confirmPassword) return;
    if (password !== confirmPassword) {
      dispatch({
        type: "confirmPasswordCheck",
        confirmPasswordAlert: {
          msg: "비밀번호가 일치하지 않습니다.",
          status: "warning",
        },
      });
      return;
    }
    getPostUser();
  };

  function btn_email(self){
    var target = document.querySelector('body');
    if(self.value === '확인'){
        self.value = '재발급';  
    } 
    else{
        self.value = '확인';
    }
  }


  //signup버튼을 클릭했을때
  nickbtn.addEventListener('click', function() {
    // 아이디와 비번,성별,취미,생일,나이,이메일,메모 객체 셋팅  
    //var id = document.querySelector('.id');
    //var email = document.querySelector('#email');
    //var conf = document.querySelector('#conf');
    var nickbtn = document.querySelector('#inp-nick');
    //var pw1 = document.querySelector('.password');
    //var pw2 = document.querySelector('.password2');
    
    const regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const regPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  
  
    // 전체 검사
    // 아이디가 공백이거나 4글자 미만이면
    if (nickbtn.value == '' || nickbtn.value.length < 4) {
      alert('아이디를 4자이상 해주세요');
      //id포커스
      id.focus();
    // 비밀번호가 4자리 미만이거나 숫자가 아닐때
    } else if (pw1.value.length < 4 || isNaN(pw1.value)) {
      alert('비번 숫자로 4자이상쓰셈');
      //비밀번호 포커스
      pw1.focus();
    // 비밀번호가 처음입력한 값과 다를시
    } else if (pw1.value != pw2.value) {
      alert('패스워드가 일치하지 않습니다.');
      pw2.focus();
    // 성별이 체크가 안되었을시
    } else if (genderVal == false) {
      alert("성별을 입력하세요!");
      gender[0].focus();
    // 취미가 2개이상 체크되지 않았을시
    } else if (count < 2) {
      alert("취미를 2개이상 체크하세요!");
      hobby[0].focus();
    // 생년월일이 입력되지 않았을시
    } else if (birth.value == '') {
      alert('생일입력!');
      birth.focus();
    // 전부완료되면 jjdev카페로 이동
    } else {
      location.href = "http://cafe.naver.com/jjdev";
    }

  });
});



