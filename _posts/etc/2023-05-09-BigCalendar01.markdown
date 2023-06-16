---
permalink: /etc/2
title: "Big Calendar 활용하기 1"
categories:
  - etc
tags:
  - 리액트
  - React.js
  - Component
toc: true
toc_sticky: true
toc_label: "Big Calendar 활용하기 1"
---

![img](/images/BigCalendar.jpg)

<br/>

## ⭐ **Big Calendar Component 사용하기**

BigCalendar 라이브러리는 React를 기반으로 한 대형 캘린더 컴포넌트를 제공한다. moment 라이브러리는 날짜 및 시간을 다루는 데 사용되는 유용한 라이브러리이다.

BigCalendar를 사용하기 위해서는 npm을 사용해서 react-big-calendar와 moment를 설치해야 한다.

```powershell
npm install react-big-calendar
npm install moment
```

터미널에 위 명령어를 입력하여 설치한다.
<br/>
<br/>

```javascript
moment.locale("ko");
BigCalendar.momentLocalizer(moment);
```

momentLocalizer 함수는 moment 라이브러리에서 제공하는 로컬 시간을 사용하여 BigCalendar에서 날짜와 시간을 다루는 데 필요한 기능을 제공한다.
즉, moment 객체를 BigCalendar에서 사용가능한 형식으로 변환한다는 것.
<br/>
<br/>

```javascript
const allViews = Object.keys(BigCalendar.Views).map(
  (k) => BigCalendar.Views[k]
);
```

이 코드는 react-big-calendar 라이브러리에서 사용할 수 있는 모든 뷰를 가져와서 allViews 상수에 할당하는 것이다.

BigCalendar.Views 객체는 react-big-calendar 라이브러리에서 사용할 수 있는 뷰를 나타내는 상수들의 집합이다. 이 객체에는 MONTH, WEEK, WORK_WEEK, DAY, AGENDA 등의 상수들이 정의되어 있다.

Object.keys() 함수를 사용하여 BigCalendar.Views 객체의 키(상수 이름)들을 배열 형태로 가져옵니다. 그리고 map() 함수를 사용하여 각 키(상수 이름)를 BigCalendar.Views 객체의 상수 값으로 변환한다.

이 코드는 react-big-calendar 라이브러리에서 사용할 수 있는 모든 뷰를 가져와서 allViews 상수에 할당하는 것이다.

BigCalendar.Views 객체는 react-big-calendar 라이브러리에서 사용할 수 있는 뷰를 나타내는 상수들의 집합이다. 이 객체에는 MONTH, WEEK, WORK_WEEK, DAY, AGENDA 등의 상수들이 정의되어 있다.

Object.keys() 함수를 사용하여 BigCalendar.Views 객체의 키(상수 이름)들을 배열 형태로 가져오고, map() 함수를 사용하여 각 키(상수 이름)를 BigCalendar.Views 객체의 상수 값으로 변환한다.

결과적으로 allViews 상수에는 BigCalendar.Views 객체에서 가져온 모든 상수 값들이 배열 형태로 저장된다.

<br/>
<br/>
이제 `<BigCalendar />` 컴포넌트를 사용할 수 있게 되었다.

이 컴포넌트를 사용할 때 전달해야 하는 props들이 몇 가지 있는데 나는 그 중에 일부만 사용하려고 한다.

<b>events</b> : 캘린더에 표시될 이벤트들의 배열이다. <br/>
<b>step</b> : 캘린더에서 시간 축을 표시할 때 각 단계의 크기(분 단위)를 나타내는 정수이다.<br/>
<b>views</b> : 캘린더에서 사용할 수 있는 뷰들의 배열이다. allViews 상수로부터 생성된 배열을 전달받는다.<br/>
<b>defaultDate</b> : 캘린더가 처음 로드될 때 표시되는 날짜이다.<br/>
<b>popup</b> : true이면, 캘린더에서 이벤트를 클릭하면 팝업창이 열리도록 설정한다. false이면, 이벤트를 클릭했을 때 다른 동작을 수행할 수 있도록 설정한다.<br/>
<b>onShowMore</b> : "더 보기"를 클릭할 때 실행되는 콜백 함수이다. 이벤트들과 클릭된 날짜가 인자로 전달된다.<br/>
<br/>

```javascript
<BigCalendar
  events={events}
  step={60}
  views={allViews}
  defaultDate={new Date()}
  onSelectEvent={handleSelectEvent}
  onShowMore={handleShowMore}
/>
```

추가로, BigCalendar에서 제공하는 기본적인 css 를 임포트해준다.

```javascript
import "react-big-calendar/lib/css/react-big-calendar.css";
```

다음 게시글에는 BigCalendar에서 활용할 state와 function들에 대해 다룰 예정이다.
