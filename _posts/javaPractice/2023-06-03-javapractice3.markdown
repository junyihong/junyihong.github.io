---
layout: post
title: 'JavaPractice - 3'
date: 2023-06-03 12:30:00 +0900
image: /javapractice/door.jpg
tags: [java, javapractice, 자바실습]
categories: JAVA-Practice
---

### 비밀번호 초기화 메서드에 대한 테스트 - BDD ( 행위 주도 개발 )

- **User.java**

```java
package org.example;

public class User {
    private String password;
    public void initPassword(PasswordGenerator passwordGenerator) {
        // as-is 방식 ( 강한결합 )
        // RandomPasswordGenerator randomPasswordGenerator = new RandomPasswordGenerator();

        // to-be 방식 ( 약한 결합 )
        // String password = passwordGenerator.generatePassword();

        String password = passwordGenerator.generatePassword();
        // 비밀번호는 최소 8자 이상 12자 이하여야 한다.
        if(password.length() >= 8 && password.length() <= 12){
            this.password = password;
        }
    }

    public String getPassword() {
        return password;
    }
}
```

**`User`** 클래스는 비밀번호 초기화를 담당하는 클래스입니다. **`initPassword`** 메서드를 통해 비밀번호를 초기화할 수 있습니다. 이 메서드는 **`PasswordGenerator`** 인터페이스를 매개변수로 받아 비밀번호를 생성합니다.

기존의 "강한 결합" 방식에서는 **`RandomPasswordGenerator`** 클래스를 직접 생성하여 사용했지만, "약한 결합" 방식에서는 **`PasswordGenerator`** 인터페이스를 통해 의존성을 주입받아 사용합니다. 이렇게 함으로써 클래스 간의 의존성을 줄이고 유연성과 확장성을 향상시킬 수 있습니다.

비밀번호는 길이가 8 이상 12 이하여야 합니다. 이 조건을 만족하는 경우에만 비밀번호가 초기화되고, 그렇지 않은 경우에는 초기화되지 않습니다. 초기화된 비밀번호는 **`getPassword`** 메서드를 통해 조회할 수 있습니다.

---

- RandomPasswordGenerator.java (랜덤 비밀번호 생성기)

```java
package org.example;

import org.passay.CharacterData;
import org.passay.CharacterRule;
import org.passay.EnglishCharacterData;
import org.passay.PasswordGenerator;

public class RandomPasswordGenerator implements org.example.PasswordGenerator {
    /**
     * Special characters allowed in password.
     * */
    public static final String ALLOWED_SPL_CHARACTERS = "!@#$%^&*()-+";

    public static final String ERROR_CODE = "ERRONEOUS_SPECIAL_CHARS";

    public String generatePassword() {
        PasswordGenerator gen = new PasswordGenerator();

        CharacterData lowerCaseChars = EnglishCharacterData.LowerCase;
        CharacterRule lowerCaseRule = new CharacterRule(lowerCaseChars);
        lowerCaseRule.setNumberOfCharacters(2);

        CharacterData upperCaseChars = EnglishCharacterData.UpperCase;
        CharacterRule upperCaseRule = new CharacterRule(upperCaseChars);
        lowerCaseRule.setNumberOfCharacters(2);

        CharacterData digitChars = EnglishCharacterData.Digit;
        CharacterRule digitRule = new CharacterRule(digitChars);
        digitRule.setNumberOfCharacters(2);

        CharacterData specialChars = new CharacterData() {
            public String getErrorCode() {
                return ERROR_CODE;
            }
            public String getCharacters() {
                return ALLOWED_SPL_CHARACTERS;
            }
        };
        CharacterRule splCharRule = new CharacterRule(specialChars);
        splCharRule.setNumberOfCharacters(2);

        // 0 ~ 12
        return gen.generatePassword((int)(Math.random() * 13), splCharRule, lowerCaseRule, upperCaseRule, digitRule);
    }
}
```

**`RandomPasswordGenerator`** 클래스는 비밀번호 생성을 담당하는 클래스입니다. 해당 클래스는 **`org.example.PasswordGenerator`** 인터페이스를 구현하고 있습니다.

먼저, 클래스 상단에 **`org.passay`** 패키지에서 제공되는 클래스들을 import하고 있습니다. 이는 **`RandomPasswordGenerator`**가 **`passay`** 라이브러리를 사용하여 비밀번호를 생성한다는 것을 나타냅니다.

**`RandomPasswordGenerator`** 클래스 내부에는 **`generatePassword`** 메서드가 있습니다. 이 메서드는 **`PasswordGenerator`** 객체를 사용하여 비밀번호를 생성합니다. 비밀번호 생성 규칙으로는 소문자, 대문자, 숫자, 특수 문자 등이 포함되어야 합니다. 각각의 규칙에 대한 **`CharacterData`**와 **`CharacterRule`** 객체를 생성하여 비밀번호 생성 규칙을 정의합니다.

또한, 특수 문자에 대한 규칙은 별도로 정의되어 있으며, **`ALLOWED_SPL_CHARACTERS`**와 **`ERROR_CODE`** 상수를 활용하여 특수 문자를 지정하고, 에러 코드를 설정합니다.

마지막으로, **`gen.generatePassword()`** 메서드를 호출하여 비밀번호를 생성합니다. 이때, 지정한 규칙에 따라 비밀번호의 길이와 구성 요소들이 결정됩니다.

---

**PasswordGenerator.java** (인터페이스)

```java
package org.example;

public interface PasswordGenerator {
    String generatePassword();
}
```

**`PasswordGenerator`** 인터페이스는 비밀번호를 생성하는 기능을 정의한 인터페이스입니다.

인터페이스는 메서드의 시그니처(선언)만을 포함하며, 구현 내용은 각각의 구현 클래스에서 제공됩니다. **`PasswordGenerator`** 인터페이스에는 **`generatePassword()`** 메서드가 선언되어 있습니다. 이 메서드는 문자열 형태의 비밀번호를 생성하는 기능을 수행합니다.

따라서 **`PasswordGenerator`** 인터페이스를 구현하는 구체적인 클래스에서는 **`generatePassword()`** 메서드를 재정의하여 해당 클래스에 맞는 비밀번호 생성 로직을 구현해야 합니다. 이를 통해 비밀번호 생성 로직을 유연하게 변경하고, 다양한 비밀번호 생성 방식을 지원할 수 있습니다.

여기서는 `**RandomPasswordGenerator**` 클래스의 generatePassword()를 받아와서 사용합니다.

---

- 인터페이스 사용의 이점

**`RandomPasswordGenerator`** 클래스를 **`PasswordGenerator`** 인터페이스로 사용하면 다음과 같은 이점을 얻을 수 있습니다:

1. 약한 결합 (Loose Coupling): **`User`** 클래스에서 **`PasswordGenerator`** 인터페이스를 사용함으로써, 실제로 어떤 비밀번호 생성기 구현체를 사용하는지에 대한 의존성을 줄일 수 있습니다. 이는 코드의 유연성과 확장성을 향상시킵니다. 예를 들어, 나중에 다른 비밀번호 생성기가 필요하다면, 해당 인터페이스를 구현하는 새로운 클래스를 만들어 쉽게 교체할 수 있습니다.
2. 단위 테스트 용이성: **`PasswordGenerator`** 인터페이스를 구현한 **`RandomPasswordGenerator`** 클래스는 실제 비밀번호 생성을 담당하는 로직을 포함하고 있습니다. 이로 인해 **`User`** 클래스의 **`initPassword`** 메서드를 테스트할 때, 실제 비밀번호 생성 로직을 모의(mock) 또는 가짜(fake) 객체로 대체하여 테스트할 수 있습니다. 이는 의존성을 격리시키고, 테스트의 일관성과 격리성을 보장합니다.
3. 코드 재사용성: **`PasswordGenerator`** 인터페이스를 정의함으로써, 비밀번호 생성 로직을 독립적으로 구현하고 재사용할 수 있습니다. 다른 클래스에서도 동일한 인터페이스를 사용하여 비밀번호를 생성하고자 할 때, 기존의 **`RandomPasswordGenerator`** 클래스를 그대로 활용할 수 있습니다.

이러한 이점들은 유지 보수성, 테스트 용이성, 확장성, 재사용성 등의 측면에서 좋은 소프트웨어 설계와 개발을 지원합니다.

---

- **UserTest.java**

```java
package org.example;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class UserTest {
    @DisplayName("패스워드를 초기화한다.")
    @Test
    void passwordTest() {
        // given
        User user = new User();
        // when
        user.initPassword(new CorrectFixedPasswordGenerator());
        // then
        assertThat(user.getPassword()).isNotNull();
    }
    @DisplayName("패스워드가 요구사항에 부합되지 않아 초기화가 되지 않는다.")
    @Test
    void passwordTest2() {
        // given
        User user = new User();
        // when
        user.initPassword(new WrongFixedPasswordGenerator());
        // then
        assertThat(user.getPassword()).isNull();
    }
}
```

**`UserTest`** 클래스는 **`User`** 클래스의 비밀번호 초기화 메서드를 테스트하는 코드입니다.

첫 번째 테스트인 **`passwordTest`**는 올바른 비밀번호 생성기(**`CorrectFixedPasswordGenerator`**)를 사용하여 비밀번호를 초기화하고, 초기화된 비밀번호가 **`null`**이 아닌지를 검증합니다. 이를 통해 올바른 비밀번호 생성기가 제대로 작동하는지 확인합니다.

두 번째 테스트인 **`passwordTest2`**는 잘못된 비밀번호 생성기(**`WrongFixedPasswordGenerator`**)를 사용하여 비밀번호를 초기화하고, 초기화된 비밀번호가 **`null`**인지를 검증합니다. 이를 통해 잘못된 비밀번호 생성기가 요구사항에 부합하지 않아 비밀번호가 초기화되지 않는지 확인합니다.

각각의 테스트는 **`@Test`** 애너테이션을 통해 테스트 메서드임을 나타내고, **`@DisplayName`** 애너테이션을 사용하여 테스트의 이름을 지정합니다. 테스트는 **`assertThat`** 메서드를 사용하여 예상되는 결과를 검증합니다.

---

- CorrectFixedPasswordGenerator.java

```java
package org.example;

public class CorrectFixedPasswordGenerator implements PasswordGenerator{
    @Override
    public String generatePassword() {
        return "abcdefgh";
    }
}
```

`**"abcdefgh"**` 로 고정된 비밀번호를 설정해서 테스트합니다.

이 클래스의 **`generatePassword()`** 메서드는 고정된 값을 반환하며, **`"abcdefgh"`**라는 문자열을 항상 반환합니다. 이는 비밀번호를 무작위로 생성하는 대신에 고정된 값을 사용하여 비밀번호를 초기화하고자 할 때 유용합니다.

---

- WrongFixedPasswordGenerator.java

```java
package org.example;

public class WrongFixedPasswordGenerator implements PasswordGenerator{
    @Override
    public String generatePassword() {
        return "ab";
    }
}
```

`**"ab"**` 로 고정된 비밀번호를 설정해서 테스트합니다.

이 클래스의 **`generatePassword()`** 메서드는 **`"ab"`**라는 고정된 값을 항상 반환합니다. 이는 비밀번호의 길이가 최소 요구사항인 8자 이상이어야 한다는 조건에 부합하지 않으며, 비밀번호 초기화를 실패시키기 위해 사용될 수 있습니다.

---

**passwordTest() 실행**

<img src="{{site.baseurl}}/images/javapractice/11.png" alt="Image description" style="width: 85%; height: 60%; margin-bottom: 20px">

**passwordTest()2 실행**

<img src="{{site.baseurl}}/images/javapractice/12.png" alt="Image description" style="width: 85%; height: 60%; margin-bottom: 20px">
