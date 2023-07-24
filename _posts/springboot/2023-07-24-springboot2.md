---
title: "스프링 부트 구현과정"
categories:
  - springboot
tags:
  - 스프링
  - 부트
  - 프레임워크
  - sts
toc: true
toc_sticky: true
toc_label: "스프링 부트 구현과정"
date: 2023-07-24
last_modified_at: 2023-07-24
---


# **스프링 부트 (Spring Boot)**

<div style=" display : flex; justify-content: center;">
	<img src="{{site.baseurl}}/images/spring/1.jpg" alt="Image description" style="width: 80%; height: 40%; margin-bottom: 20px; box-shadow: 3px 3px 6px rgba(0,0,0,0.4);">
</div>

<br/>

## 계층적 구조

<div style=" display : flex; justify-content: center;">
	<img src="{{site.baseurl}}/images/spring/3.jpg" alt="Image description" style="width: 80%; height: 40%; margin-bottom: 20px; box-shadow: 3px 3px 6px rgba(0,0,0,0.4);">
</div>

스프링 부트에서는 전통적인 웹 애플리케이션의 구조를 일반적으로 퍼시스턴스 계층, 서비스 계층, 프레젠테이션 계층으로 분리합니다. 이러한 구조는 애플리케이션의 레이어를 각각의 역할과 책임에 맞게 분리하여 유지보수와 확장성을 향상시키기 위해 사용됩니다. 스프링 부트에서는 이러한 구조를 쉽게 구현하고 관리할 수 있도록 지원합니다.

각 계층의 역할을 자세히 살펴보겠습니다:

1. **퍼시스턴스 계층 (Persistence Layer):**
퍼시스턴스 계층은 데이터를 영구적으로 저장하고 검색하는 데 사용됩니다. 주로 데이터베이스와의 상호작용을 담당합니다. 데이터 액세스 기술(JDBC, JPA, Hibernate 등)을 이용하여 데이터베이스와 통신하고, 데이터의 CRUD(Create, Read, Update, Delete) 작업을 수행합니다. 엔티티 객체와 데이터베이스의 테이블을 매핑하고, 데이터의 영속성을 보장하는 역할을 합니다.
2. **서비스 계층 (Service Layer):**
서비스 계층은 비즈니스 로직을 처리하는 데 사용됩니다. 비즈니스 로직은 애플리케이션의 핵심 기능이며, 퍼시스턴스 계층의 단순한 데이터 액세스와 달리 복잡한 데이터 가공과 처리를 포함합니다. 이 계층은 여러 퍼시스턴스 객체를 조합하여 하나의 트랜잭션으로 처리하거나, 특정 비즈니스 규칙을 적용하는 등의 작업을 수행합니다.
3. **프레젠테이션 계층 (Presentation Layer):**
프레젠테이션 계층은 사용자와의 상호작용을 처리하는 데 사용됩니다. 주로 웹 애플리케이션에서는 사용자의 요청을 받고 응답을 보여주는 역할을 합니다. 스프링 부트에서는 프레젠테이션 계층을 스프링 MVC 패턴을 통해 구현합니다. 스프링 MVC는 Model, View, Controller의 약자로, 프레젠테이션 계층의 구성 요소들을 분리하여 개발하는 방식입니다. 컨트롤러(Controller)는 사용자의 요청을 처리하고, 비즈니스 로직이 실행되도록 서비스 계층과 상호작용합니다. 그리고 결과를 뷰(View)에 전달하여 사용자에게 출력됩니다. 뷰는 주로 사용자 인터페이스를 구성하는 역할을 합니다. 스프링 MVC는 이러한 프레젠테이션 계층의 구현을 쉽게 할 수 있도록 지원합니다.

스프링 부트는 이러한 계층적 구조를 지원하여 개발자들이 각 계층을 분리하고 관리하는 데 도움을 줍니다. 이를 통해 애플리케이션의 유지보수성을 향상시키고, 코드의 재사용성과 확장성을 높일 수 있습니다. 또한 스프링 부트는 의존성 주입(Dependency Injection)과 AOP(Aspect-Oriented Programming) 등을 통해 각 계층들을 느슨하게 결합하여 더욱 유연하고 테스트 용이한 애플리케이션을 구축할 수 있도록 도와줍니다.

<br/>

## 구현 과정

애플리케이션의 코드를 계층적 구조로 작성한다면 계층 간 데이터를 전달하기 위해 데이터에 접근하는 것이 먼저입니다. 도메인 객체 > 퍼시스턴스 계층 > 서비스 계층 > 프레젠테이션 계층(컨트롤러 → 뷰) 순으로 개발을 진행합니다.

<div style=" display : flex; justify-content: center;">
	<img src="{{site.baseurl}}/images/spring/4.jpg" alt="Image description" style="width: 80%; height: 40%; margin-bottom: 20px; box-shadow: 3px 3px 6px rgba(0,0,0,0.4);">
</div>

<br/>

일반적으로 퍼시스턴스 계층과 서비스 계층은 스프링의 주요 특징 중 하나인 객체 간 결합을 느슨하게 연결(loosely coupled)하는 데 인터페이스를 사용합니다. 이는 나중에 소스 코드를 변경하거나 유지 보수할 때 유연하게 대응할 수 있도록 하기 위함입니다.

이러한 구조를 스프링 프레임워크에서는 의존성 주입(Dependency Injection)을 통해 구현합니다. 의존성 주입은 객체 간의 관계를 직접 코드에서 정의하는 대신, 스프링 컨테이너가 객체들의 의존성을 자동으로 주입하여 객체 간의 결합을 줄이는 방법입니다. 이를 통해 유연한 애플리케이션 개발이 가능하며, 테스트 용이성도 향상됩니다.

<br/>

간단한 예시로 퍼시스턴스 계층의 인터페이스를 정의하고, 서비스 계층에서 이를 사용하는 방법을 보겠습니다:

<script src="https://gist.github.com/junyihong/66abe17ebb92edafc9f21410fba69658.js"></script>

위 예시에서 UserService는 UserRepository 인터페이스를 통해 퍼시스턴스 계층과 상호작용합니다. UserRepository의 실제 구현은 JpaUserRepository가 담당하고, 스프링 컨테이너가 의존성 주입을 통해 UserService에 UserRepository를 주입합니다. 이렇게 인터페이스를 통해 계층 간의 결합을 느슨하게 하면, 나중에 퍼시스턴스 계층을 다른 기술로 변경하거나 유지보수를 할 때 더욱 편리하게 대응할 수 있습니다.