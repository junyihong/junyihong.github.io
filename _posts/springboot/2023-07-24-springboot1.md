---
title: "스프링 부트 개요"
categories:
  - springboot
tags:
  - 스프링
  - 부트
  - 프레임워크
  - sts4
toc: true
toc_sticky: true
toc_label: "스프링 부트 개요"
date: 2023-07-24
last_modified_at: 2023-07-24
---


# **스프링 부트 (Spring Boot)**

<div style=" display : flex; justify-content: center;">
	<img src="{{site.baseurl}}/images/springboot/1.jpg" alt="Image description" style="width: 80%; height: 40%; margin-bottom: 20px; box-shadow: 3px 3px 6px rgba(0,0,0,0.4);">
</div>

<br/>

## **소개**

스프링 부트는 스프링 프레임워크를 기반으로 한 독립적으로 실행 가능한 애플리케이션을 빠르고 쉽게 생성하고 구성할 수 있도록 도와주는 프로젝트입니다. 스프링 부트를 사용하면 별도의 설정 없이도 자동 설정과 기본 값을 사용하여 웹 애플리케이션 및 서비스를 빠르게 구축할 수 있습니다.

<br/>

## 구조

<div style=" display : flex; justify-content: center;">
	<img src="{{site.baseurl}}/images/springboot/2.png" alt="Image description" style="width: 80%; height: 40%; margin-bottom: 20px; box-shadow: 3px 3px 6px rgba(0,0,0,0.4);">
</div>

스프링 프레임워크의 런타임 구조를 이해하기 위해서는 주요 구성 요소와 그들 간의 상호작용을 살펴볼 필요가 있습니다. 스프링 프레임워크는 다양한 모듈로 구성되어 있으며, 이러한 모듈은 애플리케이션 개발 시에 필요한 다양한 기능과 라이브러리를 제공합니다. 아래는 스프링 프레임워크의 주요 런타임 구조를 설명한 것입니다:

1. **Bean Container (빈 컨테이너):** 스프링은 IoC (Inversion of Control) 컨테이너를 제공합니다. 이 컨테이너는 빈(Bean) 객체의 생명주기를 관리하고, 빈들의 의존성 주입을 처리합니다. 빈 컨테이너는 XML 설정 파일이나 Java 어노테이션을 통해 빈의 정의와 설정을 관리합니다.
2. **ApplicationContext (애플리케이션 컨텍스트):** ApplicationContext는 Bean Container의 구현체로서, 스프링 애플리케이션의 전반적인 구성 정보와 빈 정의를 포함하고 있습니다. 애플리케이션 컨텍스트는 빈의 라이프사이클을 관리하며, 빈들 간의 의존성 주입을 수행하여 느슨한 결합(Loose coupling)을 가능하게 합니다.
3. **Bean (빈):** 빈은 스프링 프레임워크가 관리하는 객체를 의미합니다. 이러한 빈들은 빈 컨테이너에 등록되어 있으며, 개발자가 필요에 따라 빈을 정의하고 사용할 수 있습니다. 빈들은 의존성 주입을 받아서 다른 빈과 협력하면서 애플리케이션의 비즈니스 로직을 수행합니다.
4. **AOP Proxy (AOP 프록시):** 스프링은 AOP(Aspect-Oriented Programming)를 지원합니다. AOP 프록시는 관점 지향 프로그래밍을 통해 애플리케이션의 핵심 비즈니스 로직과 부가적인 기능(로깅, 보안 등)을 분리하여 모듈화합니다. AOP 프록시는 빈들의 메소드 호출을 가로채어 부가적인 작업을 수행합니다.
5. **Data Access Layer (데이터 액세스 계층):** 스프링은 다양한 데이터 액세스 기술(JDBC, JPA, Hibernate 등)을 지원합니다. 이러한 기술을 사용하여 데이터베이스와의 연동을 간편하게 처리할 수 있습니다.
6. **Web Layer (웹 계층):** 스프링은 웹 애플리케이션 개발을 위한 MVC 웹 프레임워크를 제공합니다. DispatcherServlet을 통해 클라이언트 요청을 처리하고, Controller를 통해 비즈니스 로직을 수행하여 뷰(View)를 생성하여 클라이언트에 응답합니다.
7. **Transaction Management (트랜잭션 관리):** 스프링은 선언적인 방식으로 트랜잭션을 관리합니다. @Transactional 어노테이션을 사용하여 메소드 레벨에서 트랜잭션을 설정하고, 트랜잭션의 시작, 커밋, 롤백 등을 자동으로 처리합니다.
8. **Security (보안):** 스프링은 보안 기능을 제공하여 애플리케이션의 인증과 권한 부여를 지원합니다. 사용자 인증과 권한 체크를 수행하여 보안을 강화할 수 있습니다.

스프링 프레임워크의 런타임 구조는 이러한 구성 요소들의 상호작용을 통해 유연하고 확장 가능한 애플리케이션을 개발할 수 있도록 도와줍니다. 개발자는 이러한 구성 요소들을 조합하여 애플리케이션의 아키텍처를 설계하고 개발할 수 있습니다.

<br/>

## **주요 특징**

스프링 부트는 다음과 같은 주요 특징을 가지고 있습니다:

1. **자동 설정 (Auto-configuration):** 스프링 부트는 클래스패스에 있는 설정, 라이브러리, 애노테이션 등을 기반으로 자동으로 애플리케이션을 설정합니다. 개발자는 별도의 설정 파일 작성 없이도 기본적인 설정을 사용할 수 있습니다.
2. **내장형 서버 (Embedded Server):** 스프링 부트는 서버를 별도로 설치하지 않아도 자체적으로 내장형 서버를 제공합니다. 이를 통해 애플리케이션을 쉽게 실행하고 배포할 수 있습니다.
3. **스타터 (Starters):** 스프링 부트는 의존성을 관리하기 쉽도록 스타터라고 하는 미리 구성된 의존성 집합을 제공합니다. 개발자는 필요한 스타터를 선택하여 원하는 기능을 간편하게 추가할 수 있습니다.
4. **Actuator:** 애플리케이션 운영과 관리를 위한 기능을 제공합니다. Actuator를 통해 애플리케이션의 상태를 모니터링하고, 메트릭 정보를 수집하며, 애플리케이션을 관리하는 데 도움이 됩니다.
5. **외부 설정 (Externalized Configuration):** 스프링 부트는 애플리케이션의 설정을 외부에 있는 속성 파일이나 환경 변수를 통해 관리할 수 있습니다.

<br/>

## **사용 예시**

간단한 스프링 부트 애플리케이션의 예시를 보겠습니다:

```java
@SpringBootApplication
public class MyApplication {

    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }

    @RestController
    public class MyController {
        @GetMapping("/hello")
        public String hello() {
            return "Hello, Spring Boot!";
        }
    }
}
```

이 예시는 스프링 부트의 주요 애노테이션인 **`@SpringBootApplication`**을 사용하여 간단한 웹 애플리케이션을 구축하고 있습니다. **`@RestController`**를 사용하여 간단한 웹 컨트롤러를 정의하고, **`@GetMapping`**을 사용하여 "/hello" 엔드포인트를 정의하고 있습니다. 이렇게 간단한 설정으로 애플리케이션을 실행하면 내장형 서버가 기동되고, "/hello" 엔드포인트로 접속하면 "Hello, Spring Boot!"이 반환됩니

<br/>

## **결론**

스프링 부트는 스프링 프레임워크를 기반으로 하여 개발자들이 빠르고 편리하게 독립적인 실행 가능한 애플리케이션을 구축할 수 있도록 도와줍니다. 자동 설정, 내장형 서버, 스타터 등의 특징을 통해 스프링 부트는 현대적인 웹 애플리케이션 개발을 지원합니다.