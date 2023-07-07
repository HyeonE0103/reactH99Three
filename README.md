# 모달, 버튼을 포함한 웹페이지 연습하기

## 구현 사진

![image](https://github.com/hyeon12/reactH99Three/assets/56420106/6a9e714e-0998-4ac4-99c4-4b945698f30c)

## 요구사항

- Button

  - styled-components를 이용해 구현하며, props를 적절하게 활용할 것
  - 버튼 label에 선택적으로 아이콘을 넣을 수 있도록 구현

- Modal

  - 취소, 확인이 있고 overlay 클릭 시 모달이 닫히지 않음
  - 닫기 버튼만 있고, overlay 클릭 시 모달이 닫힘
  - 모달을 on 시키는 버튼의 형태는 각각 달라야 하며 위에서 만든 버튼 재사용 가능

- Input

  - 일반 형식의 input
  - 숫자를 넣었을 때 3자리 숫자마다 ,가 찍히는 input
  - form을 구현하고 각 input에 값 입력 후 저장버튼 클릭 시 {name: '아무 텍스트', price: '콤마가 없는 금액'}을 alert에 표시

- Select
  - select 클릭 시 option들이 나오고 해당 option 클릭 시 select 값 변경
  - 부모 요소에 overflow: hidden이 있더라도 자식 컴포넌트가 부모 컴포넌트를 넘어갔을 때 가려지지 않아야 함
