const profiles = [
    { id: 1, imgSrc: "images/pizza_box.png", description: "구본훈님의 상세 정보입니다." },
    { id: 2, imgSrc: "images/pizza_box.png", description: "김승호님의 상세 정보입니다." },
    { id: 3, imgSrc: "images/pizza_box.png", description: "김소민님의 상세 정보입니다." },
    { id: 4, imgSrc: "images/pizza_box.png", description: "김성준님의 상세 정보입니다." },
    { id: 5, imgSrc: "images/pizza_box.png", description: "서용준님의 상세 정보입니다." },
    { id: 6, imgSrc: "images/pizza_box.png", description: "배승혁님의 상세 정보입니다." },
    { id: 7, imgSrc: "images/pizza_box.png", description: "박찬진님의 상세 정보입니다." },
    { id: 8, imgSrc: "images/pizza_box.png", description: "마서영님의 상세 정보입니다." },
    { id: 9, imgSrc: "images/pizza_box.png", description: "윤영찬님의 상세 정보입니다." },
    { id: 10, imgSrc: "images/pizza_box.png", description: "김새봄님의 상세 정보입니다." },
    { id: 11, imgSrc: "images/pizza_box.png", description: "권지윤님의 상세 정보입니다." },
    { id: 12, imgSrc: "images/pizza_box.png", description: "권민지님의 상세 정보입니다." },
    { id: 13, imgSrc: "images/pizza_box.png", description: "노영재님의 상세 정보입니다." },
    { id: 14, imgSrc: "images/pizza_box.png", description: "남승현님의 상세 정보입니다." },
    { id: 15, imgSrc: "images/pizza_box.png", description: "김지연님의 상세 정보입니다." },
    { id: 16, imgSrc: "images/pizza_box.png", description: "이정민님의 상세 정보입니다." },
    { id: 17, imgSrc: "images/pizza_box.png", description: "이서연님의 상세 정보입니다." },
    { id: 18, imgSrc: "images/pizza_box.png", description: "윤태경님의 상세 정보입니다." },
    { id: 19, imgSrc: "images/pizza_box.png", description: "윤예진님의 상세 정보입니다." },
    { id: 20, imgSrc: "images/pizza_box.png", description: "윤선영님의 상세 정보입니다." },
    { id: 21, imgSrc: "images/pizza_box.png", description: "유승한님의 상세 정보입니다." },
    { id: 22, imgSrc: "images/pizza_box.png", description: "여은동님의 상세 정보입니다." },
    { id: 23, imgSrc: "images/pizza_box.png", description: "신희원님의 상세 정보입니다." },
    { id: 24, imgSrc: "images/pizza_box.png", description: "서채연님의 상세 정보입니다." },
    { id: 25, imgSrc: "images/pizza_box.png", description: "조현식님의 상세 정보입니다." },
    { id: 26, imgSrc: "images/pizza_box.png", description: "조윤주님의 상세 정보입니다." },
    { id: 27, imgSrc: "images/pizza_box.png", description: "임지섭님의 상세 정보입니다." },
    { id: 28, imgSrc: "images/pizza_box.png", description: "이현경님의 상세 정보입니다." },
    { id: 29, imgSrc: "images/pizza_box.png", description: "이한비님의 상세 정보입니다." },
    { id: 30, imgSrc: "images/pizza_box.png", description: "이원빈님의 상세 정보입니다." },
    { id: 31, imgSrc: "images/pizza_box.png", description: "이승준님의 상세 정보입니다." },
    { id: 32, imgSrc: "images/pizza_box.png", description: "이소연님의 상세 정보입니다." },
    { id: 33, imgSrc: "images/pizza_box.png", description: "황혜영님의 상세 정보입니다." },
    { id: 34, imgSrc: "images/pizza_box.png", description: "황유환님의 상세 정보입니다." },
    { id: 35, imgSrc: "images/pizza_box.png", description: "허연규님의 상세 정보입니다." },
    { id: 36, imgSrc: "images/pizza_box.png", description: "차승훈님의 상세 정보입니다." }
  ];
  

// 저장된 이미지를 로드하는 함수
function loadProfileImages() {
    const storedProfiles = JSON.parse(localStorage.getItem("profileImages")) || {};
    document.querySelectorAll(".seat").forEach((seat) => {
      const name = seat.querySelector(".name_tag").textContent; // 이름 가져오기
      const profileImage = storedProfiles[name]; // 저장된 이미지 불러오기
      if (profileImage) {
        seat.querySelector(".pizza_box").src = profileImage; // 이미지 업데이트
      }
    });
  }
  
  // 특정 이름에 해당하는 프로필 이미지를 저장하는 함수
  function saveProfileImage(name, imageData) {
    const storedProfiles = JSON.parse(localStorage.getItem("profileImages")) || {};
    storedProfiles[name] = imageData; // 이름을 키로 저장
    localStorage.setItem("profileImages", JSON.stringify(storedProfiles));
  }
  
  // 페이지 로드 시 저장된 이미지를 불러오기
  document.addEventListener("DOMContentLoaded", () => {
    loadProfileImages();
  
    document.getElementById("profile-picture").addEventListener("click", () => {
      document.getElementById("file-input").click();
    });
  
    document.getElementById("file-input").addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imageData = e.target.result;
  
          // 프로필 사진 변경
          document.getElementById("profile-picture").src = imageData;
  
          // 로컬 스토리지에 저장 (이름은 "김철수"로 가정)
          const name = document.querySelector(".profile-name").textContent;
          saveProfileImage(name, imageData);
        };
        reader.readAsDataURL(file);
      }
    });
  
    // 각 자리 프로필 사진 클릭 이벤트 추가
    document.querySelectorAll(".profile-picture").forEach((box) => {
      box.addEventListener("click", (event) => {
        const seat = event.target.closest(".seat");
        const name = seat.querySelector(".name_tag").textContent; // 이름 가져오기
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
  
        fileInput.addEventListener("change", (e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              const imageData = e.target.result;
              saveProfileImage(name, imageData); // 저장
              event.target.src = imageData; // 이미지 업데이트
            };
            reader.readAsDataURL(file);
          }
        });
  
        fileInput.click();
      });
    });
  });