window.onload = function () {

    let today = new Date();
    const calendarBody = document.querySelector('.calendar-body');
    const createDate = document.querySelector('.createDate');
    const bgblack = document.querySelector('.bgblack');
    const closedBtn = document.querySelector('.closed');
    let currentDate;
    
    
    buildCalendar(); //달력 생성 
    function buildCalendar() {
      let firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
      const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      const notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      
      const mainYear = document.querySelector('.main-year');
      const mainMonth = document.querySelector('.main-month');

      //const headerYear = document.querySelector('.current-year-month');



      //mainYear.innerHTML = today.getYear();
      //mainMonth.innerHTML = today.getMonth();
      //mainDate.innerHTML = today.getDate();
      // 윤년 체크하기
      if (firstDate.getFullYear() % 4 === 0) {
        pageYear = leapYear;
      } else {
        pageYear = notLeapYear;
      }

      mainYear.innerHTML = `&nbsp;&nbsp;${today.getFullYear()}&nbsp;년`;
      mainMonth.innerHTML = `&nbsp;&nbsp;${today.getMonth()}&nbsp;월`;

      //달력창에서 html에 입력하는 코드 headerYear.innerHTML = `${monthList[firstDate.getMonth()]}&nbsp;&nbsp;&nbsp;&nbsp;${today.getFullYear()}`;
      makeElement(firstDate);
      showMain();
      currentDateget();
      resetInsert();
    }
    
    function showMain() {
        const mainDate = document.querySelector('.main-date');
        mainDate.innerHTML = today.getDate()`&nbsp;일`;
        //요일const mainDay = document.querySelector('.main-day');
        //요일const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        //요일mainDay.innerHTML = dayList[today.getDay()];
    }

    function makeElement(firstDate) {
      let weekly = 100;
      let dateSet = 1;

      for (let i = 0; i < 6; i++) {
        let weeklyEl = document.createElement('div');
        weeklyEl.setAttribute('class', weekly);
        weeklyEl.setAttribute('id', "weekly");
        for (let j = 0; j < 7; j++) {
          // i === 0이여야 하는 이유는 첫 날짜를 찍고 그 다음 날짜가 0번째 칸부터 다시 그려져야 하기 때문
          // firstDate.getMonth() => 현재 달의 일수가 몇일인지 반환해주고, 이 조건은 반환 된 값에 따라 출력해 준 후, 달력 출력 종료조건이다.
          
          if (i === 0 && j < firstDate.getDay() || dateSet > pageYear[firstDate.getMonth()]) {
            // 만약 해당 칸에 날짜가 없으면 div엘리먼트만 생성한다.
            let dateEl = document.createElement('div');
            weeklyEl.appendChild(dateEl);
          } 
          
          else {
            // 해당 칸에 날짜가 있으면 div엘리먼트 생성 후 해당 날짜 넣어주기
            let dateEl = document.createElement('div');
            let emotioncircle = document.createElement('emotion'); 
            //emotion 엘리먼트 생성 
            dateEl.textContent = dateSet;
            dateEl.setAttribute('class', dateSet);
            dateEl.setAttribute('id', `${today.format2()}-${dateSet}<div class="circle" style="align-items: center"></div>`);
            dateEl.setAttribute('emotion', `${'hello'}`);
            //emotioncircle.setAttribute('circle');
            weeklyEl.appendChild(dateEl);
            //dateEl.appendChild(emotioncircle);
            //weeklyEl.append(dateEl, emotioncircle);
            dateSet++;
          }
        }
        weekly++;
        calendarBody.appendChild(weeklyEl);
      }
      // 현재 내가 선택한 날짜가 있으면 이전 달, 다음 달로 넘어가도 화면에 보여주기 위해 써줌
      let clickedDate = document.getElementsByClassName(today.getDate());
      clickedDate[0].classList.add('active');
    }
    
    function removeCalendar() {
      let divEls = document.querySelectorAll('.calendar-body > #weekly > div');
      for (let i = 0; i < divEls.length; i++) {
        divEls[i].remove();
      }
    }
    
    
    prevEl.addEventListener('click', function () {
      today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
      removeCalendar();
      buildCalendar();
      resetInsert();
      redrawLi()
    });

    nextEl.addEventListener('click', function () {
      today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
      removeCalendar();
      buildCalendar();
      resetInsert();
      redrawLi()
    });
    
    function currentDateget() {
      // format()을 이용해서 현재 날짜를 보기좋게 출력해주기 위해 사용.
      currentDate = today.format();
    }
    
    calendarBody.addEventListener('click', function (e) {
      let target = e.target;
      let eachDate = document.querySelectorAll('.calendar-body > #weekly > div');
      if (e.target.innerHTML === '') return;
      for (let i = 0; i < eachDate.length; i++) {
        eachDate[i].classList.remove('active');
      }
      target.classList.add('active');
      today = new Date(today.getFullYear(), today.getMonth(), target.innerHTML);
      showMain();
      currentDateget();
      redrawLi();
      resetInsert();
    });
    
    inputBtn.addEventListener('click', function (e) {
      e.preventDefault();
      let inputValue = inputBox.value;
      insertTodo(inputValue);
    });


    function redrawLi() {
      // 다른 날짜를 클릭했을때 그 전에 작성한 totolist목록을 먼저 다 지우기 위해 li와 span을 찾아와 for문으로 지워주고 다시 그려준다.
      let liEl = document.querySelectorAll('LI');
      for (let i = 0; i < liEl.length; i++) {
        inputList.removeChild(liEl[i]);
      }
      for (let todoList in DATA) {
        if (todoList === currentDate) {
          for (let i = 0; i < DATA[todoList].length; i++) {
            const liEl2 = document.createElement('li');
            const spanEl2 = document.createElement('span');
            const delBtn2 = document.createElement('button');
            delBtn2.innerText = "DEL";
            delBtn2.setAttribute('class', 'del-data');
            spanEl2.innerHTML = DATA[todoList][i].todo;
            liEl2.appendChild(spanEl2);
            liEl2.appendChild(delBtn2);
            inputList.appendChild(liEl2);
            liEl2.setAttribute('id', DATA[todoList][i].id);
            delBtn2.addEventListener('click', delWork);
            liEl2.addEventListener('dblclick', showTodo);
          }
        }
      }
    }
    
    // 다음달,이전달 다른날, 첫 로드 될 때 마다 todo 목록이 있으면(if로 조건문 처리) 다 지우고 다시 그려주는 함수 

    function resetInsert() {
      let storeObj = localStorage.getItem(currentDate);
      if (storeObj !== null) {
        let liEl = document.querySelectorAll('LI');
        for (let i = 0; i < liEl.length; i++) {
          inputList.removeChild(liEl[i]);
        }
        // parse 해주기 전에는 localStorage는 string만 가져오니까 parse해준다.
        const parsed = JSON.parse(localStorage.getItem(currentDate));
        // forEach로 작성되있는 모든 todolist의 항목들을 돌면서 로컬에 저장되어 있는 목록을 화면에 만들어준다.
        parsed.forEach(function (todo) {
          if (todo) {
            let lili = document.createElement('li');
            let spanspan = document.createElement('span');
            let deldel = document.createElement('button');
            deldel.setAttribute('class', 'del-data');
            deldel.innerText = "DEL";
            lili.setAttribute('id', todo.id);
            spanspan.innerHTML = todo.todo;
            lili.appendChild(spanspan);
            lili.appendChild(deldel);
            inputList.appendChild(lili);
            deldel.addEventListener('click', delWork);
            lili.addEventListener('dblclick', showTodo);
          }
        });
      }
    }
    resetInsert();

    
    function showTodo(e){
      showList.style.display = "block"
      bgblack.style.display = "block"
      listText.textContent = e.target.textContent;
      createDate.textContent = currentDate;
    }
    
    closedBtn.addEventListener('click', function(e){
      showList.style.display = "none";
      bgblack.style.display = "none";
    });
    
    function save() {
      localStorage.setItem(currentDate, JSON.stringify(DATA[currentDate]));
    }
    
    }