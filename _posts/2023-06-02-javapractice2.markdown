---
layout: post
title: 'JavaPractice - 2'
date: 2023-06-02 09:30:00 +0900
image: /javapractice/door.jpg
tags: [java, javapractice, 자바실습]
categories: JAVA-Practice
---
<hr/>
### Gradle(빌드 자동화 도구) 소개

<br/>

Gradle은 프로젝트 빌드 자동화 도구로서, 소프트웨어 개발 프로세스에서 프로젝트의 컴파일, 테스트, 패키징, 배포 등을 관리하는 데 사용됩니다. 다양한 프로그래밍 언어와 프레임워크에 대한 빌드를 지원하며, Java, Kotlin, Groovy 등을 포함한 다양한 환경에서 사용할 수 있습니다.

Gradle은 프로젝트의 의존성 관리, 태스크 정의, 빌드 스크립트 작성 등을 위한 강력한 기능을 제공합니다. 다음은 Gradle의 주요 특징과 개념에 대한 설명입니다:

빌드 스크립트: Gradle은 Groovy 또는 Kotlin 언어를 사용하여 작성된 스크립트를 기반으로 빌드를 구성합니다. 이 스크립트는 프로젝트의 구성, 의존성, 태스크 등을 정의하고 실행됩니다.

의존성 관리: Gradle은 프로젝트의 의존성 관리를 편리하게 지원합니다. 의존하는 외부 라이브러리, 모듈, 프레임워크 등을 명시하고 필요한 의존성을 자동으로 해결해줍니다.

태스크(Task): Gradle은 빌드 과정에서 수행되는 작업을 태스크라는 단위로 정의합니다. 태스크는 컴파일, 테스트, 패키징, 배포 등 다양한 작업을 나타내며, 필요에 따라 사용자 정의 태스크를 추가할 수도 있습니다.

플러그인(Plugin): Gradle은 다양한 플러그인을 제공하여 프로젝트를 특정 환경이나 프레임워크에 맞게 구성할 수 있습니다. 플러그인은 추가적인 빌드 기능, 태스크, 설정 등을 제공하며, Java 개발, Android 애플리케이션 개발, 웹 애플리케이션 등 다양한 분야에서 사용될 수 있습니다.

멀티프로젝트 빌드: Gradle은 여러 프로젝트를 하나의 빌드로 관리하는 멀티프로젝트 빌드를 지원합니다. 이를 통해 여러 하위 프로젝트 간의 의존성, 빌드 순서 등을 관리할 수 있습니다.

Gradle은 강력하면서도 유연한 빌드 도구로써, 개발자가 프로젝트를 더 효과적으로 관리하고 자동화할 수 있도록 도와줍니다. 많은 개발자와 프로젝트에서 사용되고 있으며, 풍부한 생태계를 갖고 있어 다양한 플러그인과 확장 기능을 활용할 수 있습니다.

<hr/>

### Junit 소개

<br/>

JUnit은 Java 언어를 위한 단위 테스트 프레임워크입니다. JUnit은 개발자가 자신이 작성한 코드의 동작을 검증하고 테스트하는 데 도움을 주는 강력한 도구입니다. 단위 테스트는 소스 코드의 작은 부분(일반적으로 메서드 또는 함수)을 격리하여 독립적으로 테스트하고, 예상된 동작과 실제 동작이 일치하는지 확인하는 작업입니다.

JUnit은 다음과 같은 핵심 기능을 제공합니다:

애너테이션 기반 테스트: JUnit은 애너테이션을 사용하여 테스트 메서드와 관련된 정보를 제공합니다. @Test 애너테이션을 사용하여 단위 테스트 메서드를 정의할 수 있으며, @BeforeEach, @AfterEach, @BeforeAll, @AfterAll 등의 애너테이션을 사용하여 테스트 실행 전후에 실행할 코드를 지정할 수 있습니다.

단언문(Assertions): JUnit은 다양한 단언문(assertion) 메서드를 제공하여 테스트 결과를 검증합니다. 예를 들어, assertEquals(expected, actual)를 사용하여 예상되는 값과 실제 값이 일치하는지 확인할 수 있습니다.

예외 처리: JUnit은 특정 조건에서 예외가 발생하는지 테스트하는 기능을 제공합니다. @Test 애너테이션의 expected 속성을 사용하거나, assertThrows() 메서드를 사용하여 특정 예외가 발생하는지 확인할 수 있습니다.

매개변수화 테스트(Parameterized Testing): JUnit은 @ParameterizedTest 애너테이션을 통해 매개변수화된 테스트를 지원합니다. 여러 다른 입력 값에 대해 동일한 테스트를 반복하여 실행하고 결과를 확인할 수 있습니다.

JUnit은 개발자들이 자동화된 테스트 스위트를 작성하여 코드 변경에 따른 부작용을 신속하게 감지하고 디버깅하는 데 도움을 줍니다. 이는 코드의 신뢰성과 유지보수성을 높이는 데 도움이 됩니다. JUnit은 Java 개발 생태계에서 표준으로 채택되어 널리 사용되고 있으며, 다양한 개발 도구 및 프레임워크와 통합할 수 있는 확장성을 가지고 있습니다.

<hr/>

### 도커 및 도커 컴포즈 소개


- 도커
    - 컨테이너 기반의 가상화 플랫폼
    - 컨테이너 기반의 가상화 vs 하이퍼바이저 기반의 가상화 (OS 가상화)
- 도커 허브
    - 도커에서 제공하는 이미지 저장소
    - https://hub.docker.com/
- 도커 컴포즈
    - 다중 컨테이너를 정의하고 실행하기 위한 도구
    - YAML 파일을 사용하여 다중 컨테이너를 구성함
    - https://docs.docker.com/compose/
    
<hr/>

## 객체지향 패러다임

<br/>

### 1. 테스트 코드 실습

<br/>

- 자바 단위 테스팅 프레임워크인 JUnit5 를 사용
- 테스트 코드 가독성을 높여주는 자바 라이브러리인 AssertJ를 사용

테스트 코드를 작성하는 이유는,

1. 문서화 역할
2. 코드에 결함을 발견하기 위함
3. 리팩토링 시 안정성 확보
4. 테스트하기 쉬운 코드를 작성하다 보면 더 낮은 결합도를 가진 설계를 얻을 수 있음.

**TDD**

- Test Driven Development (테스트 주도 개발)
- 프로덕션 코드보다 테스트 코드를 먼저 작성하는 개발 방법
- TFD (Test First Development ) + 리팩토링
- 기능 동작을 검증 (메소드 단위)

**BDD**

- Behavior Driven Development ( 행위 주도 개발 )
- 시나리오 기반으로 테스트 코드를 작성하는 개발 방법
- 하나의 시나리오는 Given, When, Then 구조를 가짐.

<br/>

### 비밀번호 유효성 검증 - TDD (Test-Driven Development, 테스트 주도 개발)

<br/>

- 요구사항
    - 비밀번호는 최소 8자 이상 12자 이하여야 한다.
    - 비밀번호가 8자 미만 또는 12자 초과인 경우 IllegalArgumentException 예외를 발생시킨다.
    - 경계조건에 대해 테스트 코드를 작성해야 한다.
    
1. 새로운 프로젝트를 gradle로 빌드하고 Test 폴더의 구조를 java 폴더와 맞춰준다.
2. 의존성 설치
    
    ```java
    dependencies {
        implementation 'org.passay:passay:1.6.1'
        //패스워드 유효성 검사 라이브러리
    
        testImplementation platform('org.junit:junit-bom:5.9.1')
        testImplementation 'org.junit.jupiter:junit-jupiter'
    
        testImplementation 'org.junit.jupiter:junit-jupiter-params:5.8.2'
        // JUnit Jupiter 프레임워크의 확장 모듈로, 매개 변수화된 테스트를 지원하는 기능
    
        testImplementation 'org.assertj:assertj-core:3.23.1'
        // 테스트 코드의 가독성과 유지 보수성을 향상시키기 위해 설계된 오픈 소스 라이브러리
    }
    ```
    

3. **비밀번호 유효성 검사 테스트코드 작성**

```java
package org.example;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.assertj.core.api.Assertions.assertThatCode;

//- 비밀번호는 최소 8자 이상 12자 이하여야 한다.
//- 비밀번호가 8자 미만 또는 12자 초과인 경우 IllegalArgumentException 예외를 발생시킨다.
//- 경계조건에 대해 테스트 코드를 작성해야 한다.
public class PasswordValidatorTest {
    @DisplayName("비밀번호가 최소 8자 이상, 12자 이하면 예외가 발생하지 않는다.")
    @Test
    void validatePasswordTest() {
        assertThatCode(() -> PasswordValidator.validate("serverwizard"))
                                                //  password가 "serverwizard"(12글자)일 경우를 테스트한다.
                .doesNotThrowAnyException();    //  어떠한 예외도 발생하지 않아야 함을 검증한다.
    }

    @DisplayName("비밀번호가 8자 미만 또는 12자를 초과하는 경우 IllegalArgumentException 예외가 발생한다.")
    @ParameterizedTest  // 경계값 분석을 위한 의존성, 매개 변수화된 테스트를 정의
    @ValueSource(strings = {"aabbccee", "aabbccddeeffg"})
    void validatePasswordTest2(String password) {

        assertThatCode(() -> PasswordValidator.validate("aabb")) //패스워드가 "aabb"(4글자)일 경우를 테스트한다.
                .isInstanceOf(IllegalArgumentException.class)   // 발생하는 예외가 오직 'IllegalArgumentException'인지 검증한다.
                .hasMessage("비밀번호는 최소 8자 이상 12자 이하여야 한다."); // 예외 메세지가 출력되는지 검증한다.
    }
}

```

   1. 패키지 및 필요한 임포트: **`org.example`** 패키지에 테스트 클래스를 작성하며, JUnit Jupiter 및 AssertJ의 관련 클래스들을 임포트합니다.
   2. **`validatePasswordTest`** 메서드: 비밀번호가 최소 8자 이상, 12자 이하인 경우 예외가 발생하지 않는지를 검증하는 테스트입니다. **`assertThatCode`** 메서드를 사용하여 **`PasswordValidator.validate`** 메서드를 호출하는 코드 블록을 검증하고, 어떠한 예외도 발생하지 않아야 함을 검사합니다.
   3. **`validatePasswordTest2`** 메서드: 비밀번호가 8자 미만 또는 12자를 초과하는 경우 **`IllegalArgumentException`** 예외가 발생하는지를 검증하는 테스트입니다. **`@ParameterizedTest`** 어노테이션을 사용하여 경계값 테스트를 수행하며, **`@ValueSource`** 어노테이션을 사용하여 테스트에 사용할 여러 입력 값을 제공합니다. **`assertThatCode`** 메서드를 사용하여 **`PasswordValidator.validate`** 메서드를 호출하는 코드 블록을 검증하고, **`IllegalArgumentException`** 예외가 발생하며, 해당 예외의 메시지가 "비밀번호는 최소 8자 이상 12자 이하여야 한다."인지를 확인합니다.
   4. **`@DisplayName`** 어노테이션: 테스트 메서드의 이름을 지정하는 어노테이션입니다. 테스트 실행 시 보여질 테스트 이름을 지정할 수 있습니다.

위의 코드 예제는 비밀번호 유효성 검사기의 특정 동작을 검증하는 JUnit Jupiter 테스트의 예시입니다. 테스트 메서드에서 **`assertThatCode`** 메서드를 사용하여 예상되는 예외 발생 여부나 예외 메시지를 검증하고 있습니다.


<span>4.</span> **비밀번호 유효성 검사 코드 작성**

```java
package org.example;

public class PasswordValidator {
    public static final String WRONG_PASSWORD_LENGTH_EXCEPTION_MESSAGE = "비밀번호는 최소 8자 이상 12자 이하여야 한다.";

    public static void validate(String password) {
    int length = password.length();

    if(length < 8 || length > 12) {
        throw new IllegalArgumentException(WRONG_PASSWORD_LENGTH_EXCEPTION_MESSAGE);
        }
    }
}
```

위의 코드는 **`PasswordValidator`** 클래스의 예제입니다. 이 클래스는 비밀번호 유효성을 검사하는 정적 메서드 **`validate`**를 가지고 있습니다.

1. **`WRONG_PASSWORD_LENGTH_EXCEPTION_MESSAGE`** 상수는 비밀번호 길이가 잘못된 경우에 발생하는 예외의 메시지를 정의합니다.
2. **`validate`** 메서드는 입력으로 받은 비밀번호의 길이를 검사합니다.
3. 만약 비밀번호의 길이가 8보다 작거나 12보다 큰 경우, 즉 최소 8자 이상 12자 이상이 아닌 경우에는 **`IllegalArgumentException`** 예외를 발생시킵니다. 예외의 메시지로는 **`WRONG_PASSWORD_LENGTH_EXCEPTION_MESSAGE`** 상수에 정의된 내용이 사용됩니다.

이렇게 작성된 **`PasswordValidator`** 클래스는 비밀번호의 길이를 검사하여 최소 8자 이상 12자 이하인지를 확인하고, 그에 따라 예외를 발생시킵니다. 이를 통해 비밀번호 유효성 검사를 수행할 수 있습니다.

<hr/>

테스트 모습입니다.

**validatePasswordTest()** 실행
<img src="{{site.baseurl}}/images/javapractice/9.png" alt="Image description" style="width: 85%; height: 60%; margin-bottom: 20px">

**validatePasswordTest2()** 실행
<img src="{{site.baseurl}}/images/javapractice/10.png" alt="Image description" style="width: 85%; height: 60%; margin-bottom: 20px">

<hr/>

테스트 주도 개발(Test-Driven Development, TDD)은 테스트 코드를 먼저 작성하고 그 다음에 실제 구현 코드를 작성하는 방식입니다.

   - TDD에서는 다음과 같은 이점이 있습니다:

   1. 명확한 요구사항 정의: 테스트를 먼저 작성하면 구현해야 할 기능이 무엇인지 명확하게 정의할 수 있습니다.
     각 테스트는 하나의 기능 또는 요구사항을 대표하며, 테스트 코드를 작성하면서 요구되는 동작을 명확히 이해하고 구현에 반영할 수 있습니다.
<br/>

   1.  안정적인 코드: 테스트를 먼저 작성하면 테스트 가능한 코드를 작성하게 됩니다.
     테스트 코드는 코드의 동작을 명시적으로 검증하므로, 테스트 가능한 코드를 작성하면 오류를 줄이고 안정적인 코드를 구현할 수 있습니다.
<br/>

   1. 리팩토링 용이성: 테스트 코드를 먼저 작성하고 나서 구현 코드를 작성하면, 기능이 동작하는지를 테스트 코드로 검증할 수 있습니다.
     따라서 리팩토링을 수행할 때도 테스트를 실행하여 코드 변경이 기능에 영향을 주지 않는지 확인할 수 있습니다.
      이는 코드의 구조 개선, 가독성 향상, 성능 최적화 등을 더 쉽게 수행할 수 있도록 도와줍니다.
<br/>

   1. 신뢰성 있는 변경: 테스트 코드가 있으면 새로운 기능을 추가하거나 기존 기능을 수정할 때 신뢰성 있는 변경이 가능합니다.
    테스트 코드가 통과한다는 것은 해당 기능이 정상적으로 동작한다는 것을 의미하므로, 코드 변경 후에도 테스트가 통과되는지 확인함으로써 기능의 안정성을 보장할 수 있습니다.
<br/>

   1. 문서화 및 협업 도구: 테스트 코드는 소프트웨어의 동작을 설명하는 문서로서의 역할을 합니다.
    테스트 코드를 작성하면 요구사항이나 기능에 대한 문서화를 자동으로 수행하게 되며, 코드를 읽는 다른 개발자나 팀원들에게 소프트웨어의 동작을 이해시키는 데 도움을 줍니다.