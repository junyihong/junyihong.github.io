---
title: "스프링 레거시 - 도메인 객체 Book 클래스 생성하기"
categories:
  - springlegacy
tags:
  - 스프링
  - 레거시
  - 프레임워크
  - sts3
toc: true
toc_sticky: true
toc_label: "스프링 레거시 - 도메인 객체 Book 클래스 생성하기"
date: 2023-07-25
last_modified_at: 2023-07-25
---

<div style=" display : flex; justify-content: center;">
	<img src="{{site.baseurl}}/images/springlegacy/1.png" alt="Image description" style="width: 80%; height: 40%; margin-bottom: 20px; box-shadow: 3px 3px 6px rgba(0,0,0,0.4);">
</div>

<br/>

# 도메인 객체 Book 클래스 생성하기


<br/>

### Book 클래스 만들기

<br/>

 **1.** BookMarket 프로젝트의 src/main/Java를 클릭한 후 마우스 오른쪽 버튼을 눌러 **New** → **Class**를 선택합니다.

<div style=" display : flex; justify-content: center;">
	<img src="{{site.baseurl}}/images/springlegacy/7.jpg" alt="Image description" style="width: 70%; height: 30%; margin-bottom: 20px; box-shadow: 3px 3px 6px rgba(0,0,0,0.4);">
</div>

<br/>

**2.** New Java Class 창에서 Package 항목에는 ‘com.springmvc.domain’을, Name 항목에는 ‘Book’을 입력한 후 **Finish**를 클릭합니다.

<div style=" display : flex; justify-content: center;">
	<img src="{{site.baseurl}}/images/springlegacy/8.jpg" alt="Image description" style="width: 70%; height: 30%; margin-bottom: 20px; box-shadow: 3px 3px 6px rgba(0,0,0,0.4);">
</div>

<br/>

**3.** 생성한 Book 클래스 안에 다음과 같이 필드를 선언합니다.

`BookMarket/src/main/java/com.springmvc.domain/Book.java`

<script src="https://gist.github.com/junyihong/3b41b4535330bb1d67ef8c6e663d8266.js"></script>


<br/>

### *기본 생성자 추가하기*

Book 클래스에 기본 생성자를 추가하고, 선언된 필드 중 bookId, name, unitPrice를 매개변수로 하여 생성자를 추가하겠습니다.

**4.** 기본 생성자를 추가하기 위해 이클립스에서 **Source** → **Generate Constructors from Superclass**를 선택합니다. 창이 뜨면 Object에 체크된 것을 확인하고 **Generate**를 클릭합니다.

<div style=" display : flex; justify-content: center;">
	<img src="{{site.baseurl}}/images/springlegacy/9.jpg" alt="Image description" style="width: 80%; height: 40%; margin-bottom: 20px; box-shadow: 3px 3px 6px rgba(0,0,0,0.4);">
</div>


<br/>

### *일반 생성자 추가하기*

**5.** **Source** → **Generate Constructor using Fields**를 선택합니다. 창이 뜨면 bookId, name, unitPrice 필드만 체크한 후 **Generate**를 클릭하여 일반 생성자를 자동으로 추가합니다.

<div style=" display : flex; justify-content: center;">
	<img src="{{site.baseurl}}/images/springlegacy/10.jpg" alt="Image description" style="width: 80%; height: 40%; margin-bottom: 20px; box-shadow: 3px 3px 6px rgba(0,0,0,0.4);">
</div>

<br/>

**6.** Book 클래스를 보면 기본 생성자와 생성자가 추가된 것을 확인할 수 있습니다.

`BookMarket/src/main/java/com.springmvc.domain/Book.java`

<script src="https://gist.github.com/junyihong/407638596f0a2136a51ef759e2466b8d.js"></script>

*Setter( )와 Getter( ) 메서드 추가하기*

**7.** **Source** → **Generate Getters and Setters**를 선택해서 창이 나타나면 모든 필드를 선택하거나 **Select All**을 클릭합니다. 모두 선택되었다면 **Generate**를 클릭합니다.

<div style=" display : flex; justify-content: center;">
	<img src="{{site.baseurl}}/images/springlegacy/11.jpg" alt="Image description" style="width: 80%; height: 40%; margin-bottom: 20px; box-shadow: 3px 3px 6px rgba(0,0,0,0.4);">
</div>

<br/>

**8.** Book 클래스에서 모든 필드의 Setter()와 Getter() 메서드가 자동으로 추가됩니다.

<script src="https://gist.github.com/junyihong/f0415e234866ac3534387d4c6439a457.js"></script>