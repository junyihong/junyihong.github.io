---
title: "게시판 서비스 만들기 - 필요한 기술 정리하기"
categories:
  - springboot
tags:
  - 스프링
  - 부트
  - 프레임워크
  - IntelliJ
toc: true
toc_sticky: true
toc_label: "게시판 서비스 만들기 - 필요한 기술 정리하기"
date: 2023-08-08
last_modified_at: 2023-08-08
---

## 필요 세부 기술 목록을 뽑는 방법은

- 미리 사용 기술을 모두 파악한 후 처음부터 프로젝트에 넣는 방법
- 기능 하나를 만들 때마다 필요한 기술을 추가해 나가는 방법
  - (이 방법을 사용할 예정)

## 예상하는 세부 기능들

- 게시판, 댓글 도메인의 설계
- 도메인 데이터를 DB에 저장
- JSON API로 데이터 제공
- 사용자에게 웹 화면으로 서비스 제공 + 디자인 요소
  - 게시판 페이지
  - 게시글 페이지
  - 로그인 페이지
- 적절한 입출력 데이터의 검증
- 인증 기능
- 생산성에 도움이 되는 도구들 선택

## 세부 기능으로부터 선택을 예상하는 기술들

- Java + Spring Boot 기반에서 선택
- 웹 서비스 제공 → Spring Web
- 도메인의 설계와 DB 저장 →
  - Spring Data JPA, H2 Database, MySQL Driver
- JSON API로 데이터 제공 →
  - Rest Repositories, Rest Repositories HAL Explorer
- 웹 화면 : 서버사이드 렌더링으로 접근 → 템플릿 엔진 → Thtmeleaf
- 디자인 요소 → 부트스트랩 5
- 적절한 입출력 데이터의 검증 → Validation
- 인증 기능 → Spring Security
- 생산성 → Lombok, Spring Boot DevTools, Spring Boot Actuator

## Spring Boot Initializr 에서 dependency 추가

```java
dependencies {
  implementation 'org.springframework.boot:spring-boot-starter-actuator'
  implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
  implementation 'org.springframework.boot:spring-boot-starter-data-rest'
  implementation 'org.springframework.boot:spring-boot-starter-security'
  implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'
  implementation 'org.springframework.boot:spring-boot-starter-validation'
  implementation 'org.springframework.boot:spring-boot-starter-web'
  implementation 'org.springframework.data:spring-data-rest-hal-explorer'
  implementation 'org.thymeleaf.extras:thymeleaf-extras-springsecurity5'
  compileOnly 'org.projectlombok:lombok'
  developmentOnly 'org.springframework.boot:spring-boot-devtools'
  runtimeOnly 'com.h2database:h2'
  runtimeOnly 'com.mysql:mysql-connector-j'
  annotationProcessor 'org.projectlombok:lombok'
  testImplementation 'org.springframework.boot:spring-boot-starter-test'
  testImplementation 'org.springframework.security:spring-security-test'
}
```
