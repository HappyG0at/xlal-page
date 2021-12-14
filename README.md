<br>

 <h2 align="center">거꾸로 캠퍼스 개인 포폴</h2>

<br>

## 🌱 나의 개인 포폴 소개 

<div align="center">

안녕 내 포폴이야

</div>

</br>

</br>


 <h1 align="center"> SETTING </h1>
<br>


### 📱 컴포넌트


메뉴바
- 버튼 누르면 해당 파이지로 이동(완성)

Already Read
- 책 소개하는 섹션 만들고 규브 돌아가는 느낌 주는 기능
- 더 보기 버튼 누르면 책 더 보여주는 기능

Yet to Read
- 화면 왼쪽에 읽고 있는 책 소개하는 자동 케러셀
- 오른쪽에는 가로 스크롤로 읽을 책 나열
- 추천 책을 적는 인풋 칸 만들기

About 티미

<br>
<br>

 <h1 align="center"> 컴포넌트 소개 </h1>
 
## 📱 로그인 버튼 

<br>

| 이미지 | |
|:-----:|:----|
| <img src="https://media.giphy.com/media/5faqNWwEWRL0zxHoct/giphy.gif" width= 300> | <h2>Splash </h2> <br> 스플래시 화면을 `lottie-ios` 를 통해 적용하였습니다. <br>한 Loop 가 재생되고 로그인 화면으로 넘어갑니다. <br> splash 에서는 토큰의 세션이 만료되었는지에 대해 서버통신을 통해 확인합니다. <br> 만료가 되었거나 토큰이 없다면 로그인 화면으로, 유효한 토큰을 소유한 유저라면 바로 홈화면으로 넘어갑니다.  |
|<img src="https://media.giphy.com/media/QHi2ABdgVFYzxLLmjZ/giphy.gif" width= 300> | <h2>Login </h2> <br> 더 나은 레이아웃을 위해 로그인 버튼을 누르면 애니메이션과 함께 아이디, 비밀번호 란이 보여집니다. <br> 아이디 혹은 비밀번호를 적지 않았거나 옳지 않은 값이 들어간다면 빨간 경고 글씨가 띄워집니다. |

<div align="center">

<br>

### 상세 화면
| 로그인 진입 화면 | 로그인 화면 | 값 오류 화면 |
|:-----:|:----:|:-----:|
| <img src= "https://user-images.githubusercontent.com/37579661/104591758-7c9f9c80-56b0-11eb-8d6e-e3df4472f1f6.png" width=300>| <img src= "https://user-images.githubusercontent.com/37579661/104591980-dacc7f80-56b0-11eb-9146-e9eae41300a3.png" width=300> |<img src= "https://user-images.githubusercontent.com/37579661/104592112-0cdde180-56b1-11eb-9463-1b12542f5acf.png" width=300> |

<br>
<br>

<br>

## 🎉 새롭게 도전해본 기능

<br>  


## 1.스크롤 애니메이션 구현하기

- meaning에서는 타임 스탬프 기능을 위해 카메라 위에 현재 시간과 미닝의 로고를 올려 함께 촬영합니다.
- 핸드폰에서 보통 사용하는 기본 카메라 UIImagePickerController가 아닌 AVFoundation를 사용해 새로운 카메라 화면을 구현해주었습니다.

```js
  window.addEventListener
```
