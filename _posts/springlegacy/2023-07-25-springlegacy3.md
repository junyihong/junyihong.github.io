---
title: "스프링 레거시 공통 모듈 만들기"
categories:
  - springlegacy
tags:
  - 스프링
  - 레거시
  - 프레임워크
  - sts3
toc: true
toc_sticky: true
toc_label: "스프링 레거시 공통 모듈 만들기"
date: 2023-07-24
last_modified_at: 2023-07-24
---


# **스프링 레거시 (Spring Legacy)**

<div style=" display : flex; justify-content: center;">
	<img src="{{site.baseurl}}/images/springlegacy/1.png" alt="Image description" style="width: 80%; height: 40%; margin-bottom: 20px; box-shadow: 3px 3px 6px rgba(0,0,0,0.4);">
</div>

<br/>

# 계층적 공통 모듈만들기

<div style=" display : flex; justify-content: center;">
	<img src="{{site.baseurl}}/images/springlegacy/3.jpg" alt="Image description" style="width: 80%; height: 40%; margin-bottom: 20px; box-shadow: 3px 3px 6px rgba(0,0,0,0.4);">
</div>

<br/>

웹 애플리케이션을 개발할 때 보편적인 설계 방식인 계층적 구조를 구축할 도서 쇼핑몰 애플리케이션에 적용하여 프레젠테이션 계층, 서비스 계층, 퍼시스턴스 계층과 도메인 객체 등의 클래스를 작성해 보겠습니다.

간단한 도서 쇼핑몰 페이지를 구현할 예정입니다.

<br/>

### 도서 쇼핑몰 프로젝트 구조

<div style=" display : flex; justify-content: center;">
	<img src="{{site.baseurl}}/images/springlegacy/5.jpg" alt="Image description" style="width: 80%; height: 40%; margin-bottom: 20px; box-shadow: 3px 3px 6px rgba(0,0,0,0.4);">
</div>

<br/>

### 계층적 구조를 구현하는 과정

<div style=" display : flex; justify-content: center;">
	<img src="{{site.baseurl}}/images/springlegacy/6.jpg" alt="Image description" style="width: 80%; height: 40%; margin-bottom: 20px; box-shadow: 3px 3px 6px rgba(0,0,0,0.4);">
</div>

<br/>

### 도서 기본 정보가 담긴 도메인 객체

도메인 객체는 애플리케이션에서 다른 계층들의 토대가 되는 역할을 하는 데이터 객체입니다.
우리가 만드는 도서 쇼핑몰 애플리케이션에서 도메인 객체는 도서 목록을 표시하는 개별 도서들의 정보를 의미합니다. 
또한 도서 주문 처리에서 필요한 주문 고객의 정보, 배송 주소, 주문 항목 등을 도메인 객체로 이해할 수 있습니다.

도메인 객체는 데이터 모델로, 필요한 속성(필드)들을 정의하고 각 속성에 Setter()와 Getter() 메서드를 만들어 주어야 합니다.

<aside>
💡 <br/>
도메인 객체의 속성에 Setter()와 Getter() 메서드를 만들어야 하나요?<br/>

Setter()와 Getter() 메서드를 사용하는 주요 목적은 도메인 객체의 속성에 아무 클래스나 접근하지 못하도록 하는 것입니다.<br/> 
즉, Setter()와 Getter()에 제한을 두어 각 계층의 제한된 범위 안에서만 Setter()와 Getter() 메서드로 접근이 가능하도록 하는 것입니다.<br/>

또한 스프링 MVC에서 뷰인 웹 페이지가 도메인 객체의 속성을 접근할 때 Setter()와 Getter() 메서드로<br/> 
직접 접근할 수 있도록 한 것으로 꼭 필요한 부분이니 번거롭더라도 작성하기 바랍니다.

</aside>{: .notice--info}