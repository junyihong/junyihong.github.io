---
title: "게시판 서비스 만들기 - 레퍼지토리 & 컨트롤러 작성"
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
toc_label: "게시판 서비스 만들기 - 레퍼지토리 & 컨트롤러 작성"
date: 2023-09-20
last_modified_at: 2023-09-20
---

# 게시판 서비스 만들기 - 레퍼지토리 & 컨트롤러 작성

<br/>
<br/>

## repository/ArticleRepository.java

<script src="https://gist.github.com/junyihong/775584eb5c960cac83d71119f70b074e.js"></script>

1. **`ArticleRepository`** 인터페이스는 **`JpaRepository<Article, Long>`**를 확장합니다. 이것은 Spring Data JPA가 제공하는 JpaRepository를 활용하여 Article 엔티티에 대한 기본적인 CRUD 작업을 수행할 수 있도록 합니다.
2. **`QuerydslPredicateExecutor<Article>`**를 확장합니다. 이 인터페이스는 QueryDSL을 사용하여 동적 쿼리를 생성하고 실행하는 데 도움을 줍니다.
3. **`QuerydslBinderCustomizer<QArticle>`**를 확장합니다. 이 인터페이스는 QueryDSL을 사용하여 동적 쿼리를 커스터마이징할 때 필요한 메서드를 제공합니다.
4. **`@RepositoryRestResource`** 어노테이션은 Spring Data REST를 사용하여 Article 엔티티를 RESTful 웹 서비스로 노출하도록 설정합니다. 이렇게 하면 Article 엔티티와 관련된 REST 엔드포인트를 자동으로 생성하고 제공합니다.
5. **`customize`** 메서드는 QuerydslBindings를 사용하여 동적 쿼리를 커스터마이징하는 메서드입니다. 이 메서드 내에서는 다양한 필드에 대한 바인딩 설정을 정의하고, 검색 조건을 지정합니다. 예를 들어, **`containsIgnoreCase`**를 사용하여 제목(title), 내용(content), 해시태그(hashtag) 등을 대소문자 구분 없이 검색할 수 있도록 설정하고, **`eq`**를 사용하여 생성일(createdAt)과 생성자(createdBy)에 정확한 값으로 검색할 수 있도록 설정합니다.

## repository/ArticleCommentRepository.java

<script src="https://gist.github.com/junyihong/5a87e66fcc6f4811e79447f9be6eb862.js"></script>

1. **`ArticleCommentRepository`** 인터페이스는 **`JpaRepository<ArticleComment, Long>`**를 확장합니다. 이것은 Spring Data JPA가 제공하는 JpaRepository를 활용하여 ArticleComment 엔티티에 대한 기본적인 CRUD 작업을 수행할 수 있도록 합니다.
2. **`QuerydslPredicateExecutor<ArticleComment>`**를 확장합니다. 이 인터페이스는 QueryDSL을 사용하여 동적 쿼리를 생성하고 실행하는 데 도움을 줍니다.
3. **`QuerydslBinderCustomizer<QArticleComment>`**를 확장합니다. 이 인터페이스는 QueryDSL을 사용하여 동적 쿼리를 커스터마이징할 때 필요한 메서드를 제공합니다.
4. **`@RepositoryRestResource`** 어노테이션은 Spring Data REST를 사용하여 ArticleComment 엔티티를 RESTful 웹 서비스로 노출하도록 설정합니다. 이렇게 하면 ArticleComment 엔티티와 관련된 REST 엔드포인트를 자동으로 생성하고 제공합니다.
5. **`customize`** 메서드는 QuerydslBindings를 사용하여 동적 쿼리를 커스터마이징하는 메서드입니다. 이 메서드 내에서는 다양한 필드에 대한 바인딩 설정을 정의하고, 검색 조건을 지정합니다. 예를 들어, **`containsIgnoreCase`**를 사용하여 댓글 내용(content)을 대소문자 구분 없이 검색할 수 있도록 설정하고, **`eq`**를 사용하여 생성일(createdAt)과 생성자(createdBy)에 정확한 값으로 검색할 수 있도록 설정합니다.

## dto/ArticleDto.java

<script src="https://gist.github.com/junyihong/8b6693e2b5c4f1cb951158a5698db1bb.js"></script>

1. **record 키워드**: Java 16부터 도입된 **`record`** 키워드를 사용하여 클래스를 정의합니다. **`record`** 클래스는 불변(immutable)하며, 자동으로 생성자, **`equals()`**, **`hashCode()`**, **`toString()`** 메서드를 생성해줍니다. 이것은 데이터 전송 객체(DTO)로 사용하기에 편리합니다.

1. **Serializable 인터페이스**: **`ArticleDto`** 클래스는 **`Serializable`** 인터페이스를 구현하고 있습니다. 이것은 객체 직렬화(serialization)를 지원하며, 객체를 이동하거나 저장하기 위해 필요한 인터페이스입니다.

**`ArticleDto`** 클래스는 게시글 엔티티의 필요한 데이터를 포함하고 있으며, 해당 데이터를 전송하거나 전달하는 데 사용될 수 있습니다. 이 클래스를 사용하면 엔티티와 DTO 간의 데이터 전달 및 통신이 편리해집니다.

## controller/ArticleController.java

<script src="https://gist.github.com/junyihong/61a1f68da5435d623cf9ab8564fc3d34.js"></script>

1. **`@Controller`** 어노테이션: 이 클래스가 Spring의 컨트롤러 역할을 하는 클래스임을 나타냅니다. 즉, 이 클래스는 HTTP 요청을 처리하고 뷰를 반환하는 역할을 합니다.
2. **`@RequestMapping("/articles")`**: 이 어노테이션은 "/articles" 경로로 들어오는 HTTP 요청을 이 컨트롤러에서 처리하도록 매핑합니다. 즉, "/articles" 엔드포인트에 대한 요청을 이 컨트롤러에서 처리합니다.
3. **`@GetMapping`**: HTTP GET 요청을 처리하는 핸들러 메서드를 정의합니다.
   - **`articles(ModelMap map)`**: "/articles" 경로로 들어오는 GET 요청을 처리하는 메서드입니다. **`ModelMap`** 객체를 사용하여 데이터를 뷰로 전달합니다.
     - **`map.addAttribute("articles", List.of())`**: "articles"라는 속성에 빈 리스트를 추가합니다. 이 데이터는 뷰에서 사용될 수 있습니다. 현재는 더미 데이터로 빈 리스트를 사용하고 있습니다.
   - **`article(@PathVariable Long articleId, ModelMap map)`**: "/articles/{articleId}" 경로로 들어오는 GET 요청을 처리하는 메서드입니다. **`{articleId}`**는 경로 변수로, 실제 요청에서 해당 변수에 대한 값을 가져옵니다.
     - **`map.addAttribute("article", "article")`**: "article"라는 속성에 문자열 "article"을 추가합니다. 이것은 실제 데이터로 대체해야 할 부분입니다.
     - **`map.addAttribute("articleComments", List.of())`**: "articleComments"라는 속성에 빈 리스트를 추가합니다. 이것도 더미 데이터로 빈 리스트를 사용하고 있습니다.
4. 뷰 반환: 각 핸들러 메서드는 문자열 값을 반환하며, 이 값은 해당 뷰 템플릿을 나타냅니다. 예를 들어, "articles/index"는 "articles" 경로의 인덱스 뷰를 나타냅니다. "articles/detail"은 게시글 상세 정보를 보여주는 뷰를 나타냅니다.

## controller/ArticleControllerTest.java

<script src="https://gist.github.com/junyihong/9338594c856fd7cb57a9c389c8747dac.js"></script>

1. **`@WebMvcTest(ArticleController.class)`** 어노테이션: 이 어노테이션은 **`ArticleController`** 클래스에 대한 웹 MVC 테스트를 설정합니다. 이것은 스프링 MVC 컨트롤러에 대한 테스트를 수행하고, 해당 컨트롤러의 동작을 검증하는 데 사용됩니다.
2. **`@Autowired MockMvc mvc`**: MockMvc 객체를 주입받습니다. MockMvc는 웹 애플리케이션의 컨트롤러를 모의(mock)로 테스트할 때 사용하는 도구입니다.
3. 테스트 메서드들: 각 테스트 메서드는 특정 엔드포인트에 대한 테스트를 수행합니다.
   - 예를 들어, **`givenNothing_whenRequestingArticlesView_thenReturnsArticlesView`** 테스트는 "/articles" 경로로 GET 요청을 보내고, 응답 상태가 200 OK이며 뷰가 HTML 형식임을 검증합니다. 또한 모델에 "articles" 속성이 존재하는지 확인합니다.
   - **`givenNothing_whenRequestingArticleView_thenReturnsArticleView`** 테스트는 "/articles/1" 경로로 GET 요청을 보내고, 응답 상태가 200 OK이며 뷰가 HTML 형식임을 검증합니다. 또한 모델에 "article" 속성이 존재하는지 확인합니다.
   - 나머지 두 테스트도 비슷한 방식으로 해당 엔드포인트에 대한 동작을 테스트합니다.
4. **`@DisplayName`** 어노테이션: 테스트 메서드에 대한 이름을 지정하는 어노테이션입니다. 이를 사용하여 테스트 결과 리포트에서 보다 의미 있는 이름을 표시할 수 있습니다.

<br/>
<hr/>
<br/>
<br/>
