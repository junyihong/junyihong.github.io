---
title: "게시판 서비스 만들기 - AuditingField 작성"
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
toc_label: "게시판 서비스 만들기 - AuditingField 작성"
date: 2023-09-19
last_modified_at: 2023-09-19
---

## /domain/AuditingFields.java

<script src="https://gist.github.com/junyihong/af169c7e1a6fbb5b2ffd53be495fb24a.js"></script>

1. **createdAt**: 엔티티의 생성일시를 나타내는 필드입니다. **`@CreatedDate`** 어노테이션이 부여되어 있으며, 이 어노테이션은 Spring Data JPA에 의해 엔티티가 생성될 때 자동으로 값이 설정됩니다.
2. **createdBy**: 엔티티를 생성한 사용자의 정보를 나타내는 필드입니다. **`@CreatedBy`** 어노테이션이 부여되어 있으며, 엔티티를 생성한 사용자의 이름 또는 식별자가 자동으로 설정됩니다.
3. **modifiedAt**: 엔티티의 최종 수정일시를 나타내는 필드입니다. **`@LastModifiedDate`** 어노테이션이 부여되어 있으며, 엔티티가 수정될 때마다 자동으로 값이 갱신됩니다.
4. **modifiedBy**: 엔티티를 최종 수정한 사용자의 정보를 나타내는 필드입니다. **`@LastModifiedBy`** 어노테이션이 부여되어 있으며, 엔티티를 최종 수정한 사용자의 이름 또는 식별자가 자동으로 설정됩니다.
5. **@EntityListeners(AuditingEntityListener.class)**: 이 어노테이션은 **`AuditingEntityListener`** 클래스를 리스너로 등록합니다. 이 리스너는 엔티티의 생성 및 수정 시간 및 사용자 정보를 관리하는 데 사용됩니다.
6. **@MappedSuperclass**: 이 어노테이션은 이 클래스가 상속 관계에서 사용될 수 있는 공통 엔티티의 부모 클래스임을 나타냅니다. 따라서 이 클래스의 필드와 기능은 다른 엔티티 클래스에서 상속될 수 있습니다.

이 클래스를 상속받는 다른 엔티티 클래스들은 이 클래스에 정의된 필드와 리스너를 상속받아 사용하여, 데이터베이스 레코드의 생성 및 수정 시간 및 사용자 정보를 자동으로 관리할 수 있습니다. 이것은 주로 로그 추적 및 감사(Audit) 기능을 구현하는 데 유용합니다.

<aside>
💡 생성자, 생성일시, 수정자, 수정일시는 반복적으로 엔티티 클래스에 들어가는 요소이고, 도메인과 직접 연관이 없는 요소이므로 추출이 가능합니다.

`@MappedSuperclass`를 이용해서 상속 방식으로 추출하였습니다.

그 외 `@DateTimeFormat`요소를 추가하고 jpa 옵션 개선하였습니다.

</aside>

## /domain/Article.java

<script src="https://gist.github.com/junyihong/ba1401d7a510f307a7764a8c3819757d.js"></script>

## /domain/ArticleComment.java

<script src="https://gist.github.com/junyihong/bc8f2d48b5e3b69d1861ce6edbb5d0fe.js"></script>
