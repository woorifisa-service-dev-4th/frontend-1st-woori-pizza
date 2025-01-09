let nameArr = [
  [
    '구본훈',
    '김승호',
    '김소민',
    '김성준',
    '윤영찬',
    '김새봄',
    '권지윤',
    '권민지',
  ],
  [
    '서용준',
    '배승혁',
    '박찬진',
    '마서영',
    '노영재',
    '남승현',
    '김지연',
    '이정민',
  ],
  [
    '이서연',
    '윤태경',
    '윤예진',
    '윤선영',
    '유승한',
    '여은동',
    '신희원',
    '서채연',
  ],
  [
    '조현식',
    '조윤주',
    '임지섭',
    '이현경',
    '이한비',
    '이원빈',
    '이승준',
    '이소연',
  ],
  ['황혜영', '황유환', '허연규', '차승훈'],
];

const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.close_btn');
const profileFrame = document.querySelector('iframe');

modalClose.addEventListener('click', () => {
  modal.classList.remove('on');
  profileFrame.src = '';
});

const checkLine = (num) => {
  switch (num) {
    case 1:
      return 'first_line';
    case 2:
      return 'second_line';
    case 3:
      return 'third_line';
    case 4:
      return 'fourth_line';
    case 5:
      return 'fifth_line';
    default:
      return '';
  }
};

window.onload = () => {
  const seatSection = document.getElementById('seat-section');
  let line;
  let leftTable;
  let rightTable;
  let seat;
  let pizza;
  let nameTag;
  let nameArea;

  for (let i = 0; i < 5; i += 1) {
    line = document.createElement('div');
    line.setAttribute('class', 'line');
    line.setAttribute('id', checkLine(i + 1));

    leftTable = document.createElement('div');
    rightTable = document.createElement('div');
    leftTable.setAttribute('class', 'leftTable');
    rightTable.setAttribute('class', 'rightTable');

    for (let index = 0; index < nameArr[i].length; index += 1) {
      seat = document.createElement('div');
      seat.setAttribute('class', 'seat');

      pizza = document.createElement('img');
      pizza.addEventListener('click', () => {
        // const selectedName = nameArr[i][index]; // 클릭한 이름
        profileFrame.src = `profile.html?name=${encodeURIComponent(nameArr[i][index])}`; // iframe src 설정
        modal.classList.add('on'); // 모달 열기
      });
      pizza.setAttribute('class', 'pizza_box');
      pizza.setAttribute('src', 'images/pizza_box.png');
      pizza.setAttribute('alt', 'closed pizza box');

      nameArea = document.createElement('div');
      nameArea.setAttribute('class', 'name_area');

      nameTag = document.createElement('div');
      nameTag.setAttribute('class', 'name_tag');
      nameTag.innerText = nameArr[i][index];

      nameArea.appendChild(nameTag);
      seat.appendChild(pizza);
      seat.appendChild(nameArea);

      if (index < nameArr[i].length / 2) {
        leftTable.appendChild(seat);
      } else {
        rightTable.appendChild(seat);
      }
    }

    line.appendChild(leftTable);

    if (i === 4) {
      const deskBell = document.createElement('div');
      deskBell.setAttribute('class', 'desk_bell');
      line.appendChild(deskBell);
    }

    line.appendChild(rightTable);
    seatSection.appendChild(line);
  }
};

function fisherYatesShuffle(arr) {
  // 2D 배열을 1D 배열 형태로 변환
  const nameArr2 = arr.flat();

  // Fisher-Yates 알고리즘으로 배열 섞기
  for (let i = nameArr2.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [nameArr2[i], nameArr2[j]] = [nameArr2[j], nameArr2[i]]; // Swap elements
  }

  // 1D 배열을 원래의 2D 배열 형태로 복원
  const result = [];
  for (let i = 0; i < arr.length - 1; i += 1) {
    result.push(nameArr2.slice(i * 8, (i + 1) * 8)); // 각 하위 배열에 8명씩 넣기
  }

  result.push(nameArr2.slice((arr.length - 1) * 8));
  nameArr = result;
  return result;
}

// 이름 표시
function nameSet(arr) {
  // 'nameArr'가 섞였으므로 각 nameTag의 innerText를 새롭게 갱신
  const nameTags = document.querySelectorAll('.name_tag'); // 모든 nameTag 요소 선택
  nameTags.forEach((nameTag, index) => {
    // 수정하려는 값으로 업데이트
    nameTag.innerText = arr[Math.floor(index / 8)][index % 8];
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const bellButton = document.querySelector('.desk_bell');
    console.log(bellButton);
    if (bellButton) {
      bellButton.addEventListener('click', () => {
        // 이름 섞기
        const nameArr2 = fisherYatesShuffle(nameArr);
        // 결과를 웹페이지에 표시
        nameSet(nameArr2);
      });
    }
  }, 100); // 0ms 후에 실행 (조정 가능)
});
