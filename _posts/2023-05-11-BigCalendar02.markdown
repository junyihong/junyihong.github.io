---
layout: post
title: 'Big Calendar 활용하기 2'
date: 2023-05-11 11:41:00    +0900
image: BigCalendar2.jpg
tags: [리액트, React, BigCalenar]
categories: React Component
---

# 'Big Calendar 활용하기 2'

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

<br/>

## ⭐ **Big Calendar에 events 추가하기**

가장 먼저 BigCalendar에 전달할 events의 내용을 작성한다.

```javascript
const initialEvents = [
  {
    title: '프로젝트 2차 - 리액트',
    name: '3조',
    start: new Date(2023, 4, 7, 0, 0, 0),
    end: new Date(2023, 4, 20, 0, 0, 0),
    desc: '리액트를 활용한 팀 프로젝트 수행',
  },
  {
    title: '국제커리어센터 방문',
    name: '홍준이',
    start: new Date(2023, 4, 4, 0, 0, 0),
    end: new Date(2023, 4, 4, 0, 0, 0),
    desc: '국민취업제도 상담 세번째',
  },
  {
    title: '취업특강',
    name: '성남그린',
    start: new Date(2023, 4, 18, 0, 0, 0),
    end: new Date(2023, 4, 18, 0, 0, 0),
    desc: '취업특강',
  },
];
```

제목과 이름, 시작날짜 및 시간과 종료날짜 및 시간, 설명으로 구성하였다.

이렇게 생성된 initialEvents 객체를 Calendar.js에서 import해오고,
useState를 통해 상태로써 관리한다.

```javascript
import initialEvents from '../components/Calendar/events';

const [events, setEvents] = useState(initialEvents);
```

이렇게 하면 events는 배열의 형태로 initialEvents의 내용을 담고있는 state가 된다.

<br/>

## ⭐ **선택한 이벤트에 대한 함수추가하기**

BigCalendar 태그에 전달한 props에 `onSelectEvent={handleSelectEvent}`가 있다. <br/>

onSelectEvent는 선택된 event에 대해 어떤 행동을 할 것인지 전달하는 것이다.

handleSelectEvent를 통해 선택된 이벤트의 상세정보를 모달을 통해 띄우려고 한다.

다음과 같이 handleSelectEvent와 useState를 작성했다.

```javascript
const [showModal, setShowModal] = useState(false);
const [selectedEvent, setSelectedEvent] = useState(null);

const handleSelectEvent = (event) => {
  setSelectedEvent({
    title: event.title,
    name: event.name,
    start: event.start,
    end: event.end,
    desc: event.desc,
  });
  setShowModal(true);
};
```

선택된 event를 setSelectedEvent를 통해 selectedEvent에 넣고,
setShowModal을 통해 모달의 상태를 변경해준다.

![]({{site.baseurl}}/images/BigCalendar-modal.jpg)

위 모달이 등장하도록 설정.

모달 내부에서 Table을 사용하고,
td의 내용은<br/>
`<td>{moment(selectedEvent.start).format('LL')}</td>` <br/>
`<td>{moment(selectedEvent.start).format('LT')}</td>`<br/>
`<td colSpan={3}>{selectedEvent.desc}</td>`<br/>
이렇게 작성하였다.

selectedEvent에 넣어둔 해당 이벤트 내용들을 불러와서 모달에 나타나도록 설정하였다.

삭제 버튼을 눌렀을 때 실행될 handleDelectEvent 함수의 내용 :

```javascript
const handleDeleteEvent = () => {
  const index = events.findIndex(
    (event) =>
      event.title === selectedEvent.title && event.start === selectedEvent.start
  );
  const newEvents = [...events];
  newEvents.splice(index, 1);
  setEvents(newEvents);
  toggleModal();
  return message.error('일정이 삭제되었습니다.');
};
```

findIndex() 함수를 사용하여 selectedEvent와 동일한 title과 start 값을 가진 일정의 인덱스를 찾는다.

newEvents 배열을 만들고 events 배열을 복사한다.

splice() 함수를 사용하여 index 위치에서 1개의 요소를 제거.

setEvents() 함수를 사용하여 newEvents 배열로 events 배열을 업데이트한다.

toggleModal() 함수를 호출하여 일정 삭제 모달을 닫는다.

message 객체의 error() 함수를 사용하여 삭제되었다는 메시지를 표시하면 완료.

<br/>

![]({{site.baseurl}}/images/BigCalendar-addbtn.jpg)

다음은 이 버튼을 하나 만들고, 모달을 띄워서 일정을 추가하는 함수를 작성한다.

모달에서는 input과 'antd'의 TimePicker를 통해 시작날짜와 시간, 종료날짜와 시간을 입력받는다.

<br/>

![]({{site.baseurl}}/images/BigCalendar-runmodal.jpg)

![]({{site.baseurl}}/images/BigCalendar-runmodal2.jpg)

입력받은 내용을 변수에 넣어서 events배열에 이상 없이 들어갈 수 있도록 가공해준다.

```javascript
const sendData = (e) => {
  e.preventDefault();
  const name = e.target.elements.Name.value;
  const desc = e.target.elements.desc.value;
  const date = moment(startDate).format('YYYY-MM-DD');
  const endDay = moment(endDate).format('YYYY-MM-DD');
  const startTime = moment(selectedStartTime, 'HH:mm').format('HH:mm');
  const endTime = moment(selectedEndTime, 'HH:mm').format('HH:mm');

  // 필드가 모두 채워져 있는지 확인
  if (!name || !desc || !date || !startTime || !endTime || !endDay) {
    toggle();
    return message.error('모든 필드를 입력해주세요.');
  }

  const newEvent = {
    title: name + ' ' + desc,
    name: name,
    start: new Date(
      startDate.year(),
      startDate.month(),
      startDate.date(),
      selectedStartTime.hour(),
      selectedStartTime.minute()
    ),
    end: new Date(
      endDate.year(),
      endDate.month(),
      endDate.date(),
      selectedEndTime.hour(),
      selectedEndTime.minute()
    ),
    desc: desc,
  };

  setEvents([...events, newEvent]);
  toggle();
  console.log(newEvent);
  return message.success('일정이 추가되었습니다.');
};
```

console.log(newEvent)를 통해 newEvent의 형태를 확인해보면,

![]({{site.baseurl}}/images/BigCalendar-console.jpg)

이렇게 생성한 newEvent가 Object로 표현이 되고,

![]({{site.baseurl}}/images/BigCalendar-console2.jpg)

위와 같이 BigCalendar에 새로운 일정이 표시된다.

![]({{site.baseurl}}/images/BigCalendar-console3.jpg)

생성된 새로운 일정도 selectedEvent가 작동하는 모습.
