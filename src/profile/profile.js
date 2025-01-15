let storedProf;

// 저장된 이미지를 로드하는 함수
function loadProfileImages() {
  storedProf = JSON.parse(localStorage.getItem('profileImages')) || {};
  document.querySelectorAll('.seat').forEach((seat) => {
    const name = seat.querySelector('.name_tag').textContent; // 이름 가져오기
    const profileImage = storedProf[name]; // 저장된 이미지 불러오기
    if (profileImage) {
      seat.querySelector('.pizza_box').src = profileImage; // 이미지 업데이트
    }
  });
}

// 특정 이름에 해당하는 프로필 이미지를 저장하는 함수
function saveProfileImage(name, imageData) {
  storedProf = JSON.parse(localStorage.getItem('profileImages'));
  // || {};
  storedProf[name] = imageData; // 이름을 키로 저장
  localStorage.setItem('profileImages', JSON.stringify(storedProf));
}

// 페이지 로드 시 저장된 이미지를 불러오기
document.addEventListener('DOMContentLoaded', () => {
  loadProfileImages();

  const modal = document.querySelector('.modal');
  const profileNameElement = document.querySelector('.profile-name');

  // 모달창 열릴 때 name_tag 값 설정
  document.querySelectorAll('.seat').forEach((seat) => {
    // 각 seat에 name 값을 data-name 속성으로 설정
    const name = seat.querySelector('.name_tag').textContent.trim();
    seat.setAttribute('data-name', name);

    seat.querySelector('.pizza_box').addEventListener('click', () => {
      const selectedName = seat.getAttribute('data-name'); // data-name에서 이름 가져오기
      console.log(`Selected name: ${selectedName}`); // 디버깅 로그
      profileNameElement.textContent = selectedName; // profile-name 업데이트
      modal.classList.add('on'); // 모달 활성화
    });
  });

  // 프로필 사진 변경 이벤트
  document.getElementById('profile-picture').addEventListener('click', () => {
    document.getElementById('file-input').click();
  });

  document.getElementById('file-input').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;

        // 프로필 사진 변경
        document.getElementById('profile-picture').src = imageData;

        // 로컬 스토리지에 저장 (현재 프로필 이름 기준)
        const name = document.querySelector('.profile-name').textContent;
        saveProfileImage(name, imageData);
      };
      reader.readAsDataURL(file);
    }
  });
});
