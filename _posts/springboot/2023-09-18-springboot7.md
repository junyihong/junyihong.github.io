---
title: "게시판 서비스 만들기 - Jpa 설정 및 엔티티 작성"
categories:
  - springboot
tags:
  - 스프링
  - 부트
  - 프레임워크
  - IntelliJ
  - 게시판
  - 설계
toc: true
toc_sticky: true
toc_label: "게시판 서비스 만들기 - Jpa 설정 및 엔티티 작성"
date: 2023-09-18
last_modified_at: 2023-09-18
---

<br/>
<br/>

## /Config/JpaConfig.java

<script src="https://gist.github.com/junyihong/0161c5ab00b67c8886c20c594c5b2eda.js"></script>

- **`@EnableJpaAuditing`** : Spring Data JPA의 감사 기능을 활성화하는 데 사용됩니다. 이것은 감사 기능을 사용하려는 JPA 리포지토리와 연결된 설정 클래스에 적용됩니다.
- **`@Configuration`** : 이 어노테이션은 이 클래스가 Spring 애플리케이션의 설정 클래스임을 나타냅니다. 즉, 이 클래스는 Spring 컨테이너에 빈(bean)으로 등록됩니다
- **`auditorAware()`** : **`AuditorAware`** 인터페이스를 구현하는 Bean을 반환합니다. **`AuditorAware`**는 JPA 감사 기능에서 사용되며, 데이터베이스 엔터티의 감사 정보를 제공합니다. 현재 코드에서는 감사자(Auditor) 정보로 "junyihong"을 사용하도록 설정했습니다. 나중에 Spring Security와 통합할 때 실제로 인증된 사용자 정보를 제공하도록 수정할 예정입니다.

<br/>
<br/>

## /domain/Article.java

<script src="https://gist.github.com/junyihong/86ccd3e04eb56d5e12df040c28e22d1d.js"></script>

- **`@EntityListeners(AuditingEntityListener.class)`**: JPA 감사(Entity Auditing) 기능을 활성화합니다. **`AuditingEntityListener`**는 엔터티의 생성일, 수정일, 생성자, 수정자 정보를 자동으로 관리하기 위해 사용됩니다.
- **`@Id`**: 엔터티의 기본 키(primary key)를 나타냅니다.
- **`@GeneratedValue(strategy = GenerationType.IDENTITY)`**는 자동으로 생성되는 기본 키를 사용한다는 것을 나타냅니다.
- **`articleComments`**: 이 속성은 게시글과 연결된 댓글(comment) 엔터티를 나타냅니다. **`@OneToMany`** 를 통해 게시글과 댓글 간의 일대다 관계를 정의하고, **`mappedBy`** 속성은 연관 관계의 주인이 댓글 엔터티임을 나타냅니다.
- `of**()**` : 게시글 객체를 생성하기 위한 정적 팩토리 메서드입니다.

<br/>
<br/>

## /domain/ArticleComment.java

<script src="https://gist.github.com/junyihong/b25bef12409067a6e572b843d6618ba4.js"></script>

- **`article`**: 게시글 댓글과 연결된 게시글(article) 엔터티를 나타냅니다. **`@ManyToOne`** 를 통해 댓글과 게시글 간의 다대일 관계를 정의하고, **`optional = false`**는 게시글이 반드시 연결되어야 함을 나타냅니다.
