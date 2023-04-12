// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// users들 중 1번째 user에 대한 정보를 불러와달라는 의미
// axios.get('/users/1'); 
// 1번 글 혹은 1번 유저가 작성한 게시글을 모두 불러와라
// axios.get('/articles/1');
// users에 해당 user 객체를 신규 등록해달라
// axios.post('/users', { username: 'blabla', name: 'blabla', password: '1234567', email: 'donot@have.th.at',});
// articles에 해당 article을 등록해달라 
// axios.post('/articles', { username: 'aaaaa', contents: 'react is good~!',});
// 회원가입
// axios.post('www.onezeromate.com:8080/api/v1/accounts', { email: 'jiyun@gmail.com', password: 'efub1234!', nickname: '지윤'});

// 이메일 중복 확인
// axios.post('www.onezeromate.com:8080/api/v1/accounts', { email: 'ziyun1612@naver.com'});

// 인증번호 확인 
// axios.post('www.onezeromate.com:8080/api/v1/accounts', { certiCode: '1FDL4QW20G', email: 'ziyun1612@naver.com'});

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// axios.post('www.onezeromate.com:8080/api/v1/accounts', { email: 'yeppi6050@gmail.com', nickname: '지혜', password: '5678!'});


import { useReducer, useEffect, useCallback } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

