---
title: "스프링 레거시 개요"
categories:
  - springlegacy
tags:
  - 스프링
  - 레거시
  - 프레임워크
  - sts3
toc: true
toc_sticky: true
toc_label: "스프링 레거시 개요"
date: 2023-07-24
last_modified_at: 2023-07-24
---


## **스프링 레거시 (Spring Legacy)**
<div style=" display : flex; justify-content: center;">
	<img src="{{site.baseurl}}/images/springlegacy/1.png" alt="Image description" style="width: 80%; height: 40%; margin-bottom: 20px; box-shadow: 3px 3px 6px rgba(0,0,0,0.4);">
</div>

<br/>

### **소개**
스프링 레거시는 Spring Framework의 초기 버전을 가리키는 용어로, 현재의 Spring Framework와는 구별되는 이전 버전의 스프링 프레임워크를 지칭합니다. 스프링 레거시는 Rod Johnson이 처음으로 개발한 Spring Framework 1.x 시리즈와 2.x 시리즈를 포함하며, 초기 버전에서는 경량 컨테이너로서의 기능과 의존성 주입(Dependency Injection)이 주요한 특징이었습니다.

스프링 레거시는 Java 플랫폼 기반의 오픈 소스 애플리케이션 개발에 사용되는 강력하고 유연한 프레임워크로서, 기업용 애플리케이션 개발에 널리 사용되어왔습니다. 초기 버전부터 Spring Framework는 IoC (Inversion of Control) 컨테이너를 제공하여 객체 간의 의존성을 느슨하게 연결하고 애플리케이션의 유연성과 확장성을 높이는데 주력했습니다.

<br/>

### **주요 특징**
스프링 레거시 버전들은 다음과 같은 주요 특징을 가지고 있습니다:

1. **의존성 주입(Dependency Injection):** 스프링 레거시는 IoC (Inversion of Control) 컨테이너를 통해 의존성 주입을 지원합니다. 객체 간의 관계를 직접 코드에서 정의하는 대신, 스프링 컨테이너가 객체들의 의존성을 자동으로 주입하여 객체 간의 결합을 줄이는 방법을 제공합니다. 이를 통해 유연한 애플리케이션 개발이 가능하며, 테스트 용이성도 향상됩니다.
2. **AOP(Aspect-Oriented Programming):** 스프링 레거시는 AOP를 지원하여 애플리케이션의 핵심 비즈니스 로직과 부가적인 기능(로깅, 보안 등)을 분리하여 모듈화할 수 있습니다. 공통된 관심사를 하나의 모듈로 분리하고, 여러 곳에서 재사용할 수 있도록 합니다.
3. **데이터 액세스 지원:** 스프링 레거시는 JDBC, JPA, Hibernate 등 다양한 데이터 액세스 기술을 지원하여 데이터베이스와의 통합을 용이하게 합니다. 데이터베이스와의 상호작용을 추상화하여 개발자가 데이터 액세스를 간편하게 처리할 수 있도록 돕습니다.
4. **트랜잭션 관리:** 스프링 레거시는 선언적인 방식으로 트랜잭션을 관리하여 데이터베이스 연산의 일관성과 안정성을 보장합니다. 트랜잭션 설정을 어노테이션 또는 XML 설정으로 처리할 수 있으며, 개발자가 트랜잭션 관리에 대해 신경쓰지 않도록 합니다.
5. **MVC 웹 프레임워크:** 스프링 레거시는 웹 애플리케이션 개발을 위한 MVC 웹 프레임워크를 제공합니다. 웹 애플리케이션의 구성 요소를 Model, View, Controller로 나누어 개발하고, 웹 요청과 응답을 처리합니다. 이를 통해 애플리케이션의 개발과 유지보수가 용이해집니다.
6. **보안:** 스프링 레거시는 보안 기능을 제공하여 애플리케이션의 인증과 권한 부여를 지원합니다. 다양한 인증 및 권한 모델을 지원하고, 보안 설정을 쉽게 구성할 수 있도록 합니다.
7. **테스트 지원:** 스프링 레거시는 JUnit과 같은 테스트 프레임워크와 통합되어 테스트를 쉽게 작성하고 실행할 수 있습니다. 스프링의 테스트 지원을 통해 단위 테스트부터 통합 테스트까지 다양한 테스트 수준을 지원합니다.

<br/>

### **스프링 부트와의 비교**
스프링 레거시 버전들은 초기에는 주로 XML 기반의 설정과 간결한 구성을 강조하여 개발자들이 빠르게 개발할 수 있도록 하였습니다. 하지만 시간이 흐름에 따라 애플리케이션의 규모와 복잡성이 증가함에 따라 스프링 프레임워크를 사용하는 개발자들은 더욱 유연하고 간편한 개발 방법을 찾고자 하였습니다.

스프링 부트는 스프링 프레임워크의 최신 버전들을 기반으로 개발된 프로젝트로, 스프링 레거시 버전들에 비해 더욱 간편한 설정과 개발 방법을 제공합니다. 스프링 부트는 내장형 서버와 자동 설정을 통해 개발자들이 복잡한 설정을 하지 않아도 쉽고 빠르게 애플리케이션을 개발할 수 있도록 도와줍니다.

<br/>

### **결론**
스프링 레거시는 초기에 많은 개발자들에게 사랑받았고, 현재도 일부 레거시 시스템에서 사용되고 있습니다. 하지만 스프링의 지속적인 발전과 성장으로 인해 최신 버전들이 더욱 향상된 기능과 성능을 제공하며, 레거시 버전들에 비해 더욱 많은 기능과 유연성을 제공합니다.