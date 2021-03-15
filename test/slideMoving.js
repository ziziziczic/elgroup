// ---------------------------------------------------------
// 모든 슬라이드는 화면 밖, 오른쪽에 있다가 왼쪽으로 이동합니다.
// 슬라이드가 있는 상태에서 다음 슬라이드가 왼쪽으로 이동합니다. 
// 마지막 슬라이드까지 왼쪽으로 이동한 경우, 
// (초기화과정)모든 슬라이드를 오른쪽, 즉 화면밖으로 이동합니다.
// 시작 슬라이드 번호를 0으로 변경합니다. 
// --------------------------------------------------------

const sliders1 = document.querySelectorAll("#slider1 > div");
const slider1Length = sliders1.length-1; // 총 슬라이드 갯수
let slider1Pointer = 1; // 보여질 슬라이드 번호
let interval1 ,intervalOnce;  // timer

// timer. 2초후에 슬라이드를 움직임.
function startTimer(){
    if(interval1) stopTimer(interval1);
    if(intervalOnce) stopTimer(intervalOnce);

    interval1 = setInterval(slider1MoveFunc,2000);
}

// timer off func
function stopTimer(e){
    clearInterval(e);
}

// 슬라이드를 화면밖 오른쪽에서 왼쪽으로 이동하는 함수입니다.
function slider1MoveFunc(){

    // 마지막 슬라이드인지 체크
    if(slider1Pointer > slider1Length){
        sliders1.forEach((e)=>{
            // 모든 슬라이를 화면 밖으로 이동
            e.classList.remove('slideCenter');
            e.classList.add('slideOut'); 
        });

        // 첫 슬라이드로 슬라이드 번호 맞추기
        slider1Pointer = 0;
    }

    // 슬라이드를 화면안으로, 즉 오른쪽에서 왼쪽으로 이동합니다.
    sliders1[slider1Pointer].classList.remove('slideOut');
    sliders1[slider1Pointer].classList.add('slideCenter');

    // 다음 슬라이드 지정
    slider1Pointer = slider1Pointer + 1;
}

// 2초마다 슬라이드가 움직이게 타이머를 작동시킵니다.
startTimer();

//----------------------------------------------------------------------------
// 슬라이드 버튼 누를 때 작동할 함수
//----------------------------------------------------------------------------
const slider1Btns = document.querySelectorAll('.slider-btn1 > .slider-button');

function sliderbtnClickFunc(p){

    // 슬라이드 작동을 멈춥니다.
    stopTimer(interval1);

    // 5초후, 슬라이드 재 작동. 
    intervalOnce = setTimeout(startTimer,5000);

    // 몇번째 슬라이드 번호를 클릭했는지 체크
    const clickPointer = p.target.dataset.cont;

    // (초기화)모든 슬라이드를 화면 밖으로 이동시킵니다.
    sliders1.forEach((e)=>{
            e.classList.remove('slideCenter');
            e.classList.add('slideOut'); 
        });
    
    // 클릭한 슬라이드를 현재 슬라이드로 지정.
    slider1Pointer = Number(clickPointer);

    // 슬라이드 이동 함수 call
    slider1MoveFunc();

}

slider1Btns.forEach((b)=>(b.addEventListener('click',sliderbtnClickFunc)));

// ---------------------------------------------------------------------------