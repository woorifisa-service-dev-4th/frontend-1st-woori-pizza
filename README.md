# 🍕 **Woori-Pizza**

우리 피사 자리 배치도 서비스

---

## 🚧 **프로젝트 규칙**

1. **이슈 이름**

   ```
   Feature: Some feature add and problem solve
   ```

2. **브랜치 이름**

   ```
   type/#Issue No.
   ex) feat/3-(feature이름)
   ```

3. **PR 이름**
   ```
   Feat: 000구현
   ```

---

## 👻 **팀 소개**

| ![yj](https://avatars.githubusercontent.com/u/99820610?v=4) | ![ye](https://avatars.githubusercontent.com/u/193202528?v=4) | ![sh](https://avatars.githubusercontent.com/u/128762057?v=4) | ![sb](https://avatars.githubusercontent.com/u/58865827?v=4) |
| ----------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ----------------------------------------------------------- |
| [이한비](https://github.com/AlmondBreez3)                   | [허연규](https://github.com/dpdms529)                        | [이원빈](https://github.com/Lwonbin)                         | [차승훈](https://github.com/eratchacha)                     |
| 팀원                                                        | 팀원                                                         | 팀원                                                         | 팀원                                                        |

---

## 🍦 **서비스 소개**

**우리FISA 클라우드 서비스 개발 교과과정 토이 프로젝트**  
랜덤 자리 배치 서비스를 제공합니다.

### 기능 소개

1. **(1차) 자리 배치도**  
   버튼을 클릭해 랜덤 자리 배치도를 생성합니다.  
   ![자리 배치도](/images/readme1.png)

2. **(1차) 개인 프로필 화면**  
   자신의 아이콘을 클릭해 개인 프로필 화면에 접속합니다.  
   ![개인 프로필 화면](/images/readme2.png)

3. **(2차) 개인 프로필 화면**
   - 모달창으로 변경
   - 상세 설명 입력 가능
   - 아이콘 설정 가능  
     ![개인 프로필 화면2](/images/profile2.png)

---

## ⚡ **성능 분석**

1. **HTML & CSS만 적용했을 때 성능**  
   ![HTML 성능](/images/lighthouse1.png)

2. **JS까지 적용했을 때 성능**  
   ![JS 성능](/images/lighthouse2.png)

3. **React까지 적용했을 때 성능**
   ![React 성능](/images/lighthouse3.png)

---

## ✨ **Eslint 적용**

- 코딩 스타일과 품질을 유지하기 위해 Eslint를 적용했습니다.  
  ![Eslint 적용 화면](/images/es.png)

---

## 📂 **로컬 스토리지 적용**

1. **새로고침 후에도 데이터 유지**

   - 초기화되는 내용을 방지하기 위해 로컬 스토리지를 활용합니다.  
     ![로컬 스토리지 적용 화면](/images/localstorage.png)

2. **로컬 스토리지란?**  
    로컬스토리지(localStorage)를 사용하면 브라우저를 닫았다가 다시 열더라도 데이터를 유지할 수 있습니다.

   - **활용 방법**:
     - `useEffect` 훅을 이용해 상태 변경 시 로컬 스토리지에 저장
     - 컴포넌트 첫 렌더링 시 로컬 스토리지에서 데이터를 불러오기
   - 예시 코드:

     ```jsx
     const initialUserArr = localStorage.getItem("userArr")
       ? JSON.parse(localStorage.getItem("userArr"))
       : data.users;

     useEffect(() => {
       localStorage.setItem("userArr", JSON.stringify(userArr));
     }, [userArr]);
     ```
