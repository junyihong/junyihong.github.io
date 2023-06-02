---
layout: post
title: 'JavaPractice - 2'
date: 2023-06-02 09:30:00 +0900
image: /javapractice/door.jpg
tags: [java, javapractice, 자바실습]
categories: JAVA-Practice
---


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
    

## 객체지향 패러다임

### 1. 테스트 코드 실습

- 자바 단위 테스팅 프레임워크인 JUnit5 를 사용
- 테스트 코드 가독성을 높여주는 자바 라이브러리인 AssertJ를 사용

테스트 코드를 작성하는 이유는,

1. 문서화 역할
2. 코드에 결함을 발견하기 위함
3. 리팩토링 시 안정성 확보
4. 테스트하기 쉬운 코드를 작성하다 보면 더 낮은 결합도를 가진 설계를 얻을 수 있음.

TDD

- Test Driven Development (테스트 주도 개발)
- 프로덕션 코드보다 테스트 코드를 먼저 작성하는 개발 방법
- TFD (Test First Development ) + 리팩토링
- 기능 동작을 검증 (메소드 단위)

BDD

- Behavior Driven Development ( 행위 주도 개발 )
- 시나리오 기반으로 테스트 코드를 작성하는 개발 방법
- 하나의 시나리오는 Given, When, Then 구조를 가짐.

### 비밀번호 유효성 검증 - TDD (Test-Driven Development, 테스트 주도 개발)

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
    

1. **비밀번호 유효성 검사 테스트코드 작성**

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

1. **비밀번호 유효성 검사 코드 작성**

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

테스트 주도 개발(Test-Driven Development, TDD)은 테스트 코드를 먼저 작성하고 그 다음에 실제 구현 코드를 작성하는 방식입니다. TDD에서는 다음과 같은 이점이 있습니다:

<hr/>

   1. 명확한 요구사항 정의: 테스트를 먼저 작성하면 구현해야 할 기능이 무엇인지 명확하게 정의할 수 있습니다. 각 테스트는 하나의 기능 또는 요구사항을 대표하며, 테스트 코드를 작성하면서 요구되는 동작을 명확히 이해하고 구현에 반영할 수 있습니다.
<br/>

   2.  안정적인 코드: 테스트를 먼저 작성하면 테스트 가능한 코드를 작성하게 됩니다. 테스트 코드는 코드의 동작을 명시적으로 검증하므로, 테스트 가능한 코드를 작성하면 오류를 줄이고 안정적인 코드를 구현할 수 있습니다.
<br/>

   3. 리팩토링 용이성: 테스트 코드를 먼저 작성하고 나서 구현 코드를 작성하면, 기능이 동작하는지를 테스트 코드로 검증할 수 있습니다. 따라서 리팩토링을 수행할 때도 테스트를 실행하여 코드 변경이 기능에 영향을 주지 않는지 확인할 수 있습니다. 이는 코드의 구조 개선, 가독성 향상, 성능 최적화 등을 더 쉽게 수행할 수 있도록 도와줍니다.
<br/>

   4. 신뢰성 있는 변경: 테스트 코드가 있으면 새로운 기능을 추가하거나 기존 기능을 수정할 때 신뢰성 있는 변경이 가능합니다. 테스트 코드가 통과한다는 것은 해당 기능이 정상적으로 동작한다는 것을 의미하므로, 코드 변경 후에도 테스트가 통과되는지 확인함으로써 기능의 안정성을 보장할 수 있습니다.
<br/>

   5. 문서화 및 협업 도구: 테스트 코드는 소프트웨어의 동작을 설명하는 문서로서의 역할을 합니다. 테스트 코드를 작성하면 요구사항이나 기능에 대한 문서화를 자동으로 수행하게 되며, 코드를 읽는 다른 개발자나 팀원들에게 소프트웨어의 동작을 이해시키는 데 도움을 줍니다.