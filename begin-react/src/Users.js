import React, { useState, useEffect, useReducer, useRef } from "react";
import axios from 'axios';
import API from "../utils/api";

const DiaryService = {
  postsignup: () => API.post('/api/v1/accounts/signup'),
  postemail: () => API.post('/api/v1/accounts/signup/email'),
  postwithdrawal: () => API.delete('/api/v1/accounts/withdrawal'),
  postsends: () => API.post('/api/v1/accounts/certification/sends'),
  postconfirms: () => API.post('/api/v1/accounts/certification/comfirms'),
  postnewpassword: () => API.post('/api/v1/accounts/certification/new-password'),

  getCategoryDiarySticker: () =>
    API.get("/api/v1/diaries/edit/stickers/category"),
  likeToggleDiary: (date, diaryId) =>
    API.post(`/api/v1/diaries/${date}/like`, {
      diaryId: diaryId,
    }),
  getDiary: (date, nickname) =>
    API.get(`/api/v1/diaries/${date}?nickname=${nickname}`),
  createDiary: (date) =>
    API.post(`/api/v1/diaries/${date}`, {
      message: "",
    }),
  deleteDiary: (date) => API.delete(`/api/v1/diaries/${date}`),
};

export default Users;