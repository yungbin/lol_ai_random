// 테스트
//alert('테스트');
var btn1 = document.querySelector('.btn-main');
var btnImg1 = document.querySelector('.btnImg1');

btnImg1.setAttribute('src', 'images/button.png');

function randomRollDice(){

    var img1 = document.querySelector('.img1'); // 특성
    var img2 = document.querySelector('.img2'); // ap, ad
    var ab1 = document.querySelector('.Ability'); // 특성 p tag 이름
    var ab2 = document.querySelector('.damage'); // 데미지 유형 p tag 이름


    //랜덤 숫자 2개를 만든다.(1~6사이 정수값)
    var num1 = Math.floor(Math.random() * 17) + 1; // 17가지 특성에서 랜덤으로 고르기
    var num2 = Math.floor(Math.random() * 2) + 1; // AP, AD 고르기

    console.log('넘1은:', num1);
    console.log('넘2은:', num2);

    // 특성, 데미지 유형 사진 호출
    img1.setAttribute('src', 'images/' + num1 + '.png');
    img2.setAttribute('src', 'images/A' + num2 + '.png');

    // 이미지 화일의 이름을 출력

    switch(num1) {
        case 1:
            ab1.textContent = "집중 공격";
            break;
        case 2:
            ab1.textContent = "치명적 속도";
            break;
        case 3:
            ab1.textContent = "기민한 발놀림";
            break;
        case 4:
            ab1.textContent = "정복자";
            break;
        case 5:
            ab1.textContent = "감전";
            break;
        case 6:
            ab1.textContent = "포식자";
            break;
        case 7:
            ab1.textContent = "어둠의 수확";
            break;
        case 8:
            ab1.textContent = "칼날비";
            break;
        case 9:
            ab1.textContent = "콩콩이 소환";
            break;
        case 10:
            ab1.textContent = "신비로운 유성";
            break;
        case 11:
            ab1.textContent = "난입";
            break;
        case 12:
            ab1.textContent = "착취의 손아귀";
            break;
        case 13:
            ab1.textContent = "여진";
            break;
        case 14:
            ab1.textContent = "수호자";
            break;
        case 15:
            ab1.textContent = "빙결 강화";
            break;
        case 16:
            ab1.textContent = "봉인 풀린 주문서";
            break;
        case 17:
            ab1.textContent = "선제 공격";
            break;
        default:
            ab1.textContent = "알 수 없음";
             break;
    }

    switch(num2){
        case 1:
            ab2.textContent = "AD";
            break;
        case 2:
            ab2.textContent = "AP";
            break;
        default:
            ab2.textContent = "알 수 없음";
            break;
    }

    /*if (num1 > num2) {
      h1.textContent = "🚀Player 1 Win!";
    }
    else if (num1 < num2) {
      h1.textContent = "Player 2 Win!🚀";
    }
    else { //서로 같을때
      h1.textContent = "Draw!";
    }*/
}



