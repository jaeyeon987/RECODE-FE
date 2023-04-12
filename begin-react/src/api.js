// 회원가입 버튼 클릭 시 호출되는 함수
function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
  
    const data = {
      username: username,
      password: password,
      email: email
    };
  
    fetch('http://example.com/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Registration successful:', data);
        // 회원가입 성공 시 처리할 코드 추가
      })
      .catch(error => {
        console.error('Registration failed:', error);
        // 회원가입 실패 시 처리할 코드 추가
      });
}

import axios from 'axios';
// axios 라이브러리 사용을 위한 CDN 추가
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

// 회원가입 버튼 클릭 시 호출되는 함수
function registerUser() {
  const nickname = document.getElementById('nickname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const data = {
    nickname: nickname,
    email: email,
    password: password
  };

  axios.post('http://example.com/api/register', data)
    .then(response => {
      console.log('Registration successful:', response.data);
      // 회원가입 성공 시 처리할 코드 추가
    })
    .catch(error => {
      console.error('Registration failed:', error.response.data);
      // 회원가입 실패 시 처리할 코드 추가
    });
}

  