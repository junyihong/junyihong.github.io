---
permalink: /javapractice/4
title: "JavaPractice - 4"
categories:
  - javapractice
tags:
  - 계산기
  - javapractice
  - 자바실습
  - 인텔리제이
toc: true
toc_sticky: true
toc_label: "JavaPractice - 4"
---

![img](/images/javapractice/door.jpg)

### 객체지향 개념 다지기

객체지향 4가지 특징

1. 추상화 (Abstraction)
2. 다형성 (Polymorphism)
3. 캡슐화 (Encapsulation)
4. 상속 (Inheritance)

객체지향의 5가지 설계 원칙 (SOLID)

1. SRP : Single Responsibility Priciple (단일책임의 원칙)
2. OCP : Open/Closed Principle (개방 폐쇄의 원칙)
3. LSP : Liskov’s Substitution Principle (리스코프 치환의 원칙)
4. ISP : Interface Segregation Principle (인터페이스 분리의 원칙)
5. DIP : Dependency Inversion Principle (의존석 역전의 원칙)

객체지향 패러다임

- 적절한 객체에게 적절한 책임을 할당하여 서로 메시지를 주고 받으며 협력하도록 하는 것
- 점점 증가하는 SW 복잡도를 낮추기 위해 객체지향 패러다임이 대두
- 개인적으로 생각하는 두 가지 중요 포인트
  - 클래스가 아닌, 객체에 초점을 맞추는 것
  - 객체들에게 얼마나 적절한 역할과 책임을 할당하는지

객체지향 설계 및 구현

1. 도메인을 구성하는 객체에는 어떤 것들이 있을까 고민
2. 객체들 간의 관계를 고민
3. 동적인 객체를 정적인 타입으로 추상화해서 도메인 모델링 하기
4. 협력을 설계
5. 객체들을 포괄하는 타입에 적절한 책임을 할당
6. 구현하기

### 객체지향 프로그래밍 실습 - 사칙 연산 계산기

TDD(테스트 주도 개발)를 연습하기 위해 테스트 코드 먼저 작성

### CalculateTest.java

<script src="https://gist.github.com/junyihong/eed09e03bcc371262e0f97ee739a747f.js"></script>

첫 번째 테스트 케이스는 "덧셈 연산을 수행한다"라는 이름으로 작성되었습니다. 이 테스트 케이스에서는 **`Calculator.calculate(1, "+", 2)`**를 호출하여 1과 2를 더한 결과가 3인지 확인합니다. 예상 결과와 실제 결과를 **`assertThat`**을 사용하여 비교하고, 두 값이 같은지를 **`isEqualTo`**을 사용하여 검증합니다.

두 번째 테스트 케이스는 "뺄셈 연산을 수행한다"라는 이름으로 작성되었습니다. 이 테스트 케이스에서는 **`Calculator.calculate(1, "-", 2)`**를 호출하여 1에서 2를 뺀 결과가 -1인지 확인합니다. 마찬가지로 예상 결과와 실제 결과를 **`assertThat`**을 사용하여 비교하고, 두 값이 같은지를 **`isEqualTo`**을 사용하여 검증합니다.

이러한 단위 테스트를 작성하고 실행함으로써 **`Calculator`** 클래스의 **`calculate`** 메서드가 예상대로 동작하는지 확인할 수 있습니다. 테스트를 통과하면 해당 메서드가 올바르게 동작한다는 확신을 갖고 코드를 계속 개발할 수 있습니다.

---

먼저 이렇게 작성해서 테스트를 통과하는지 확인해봅니다.

이후 통과한다면 리팩토링을 통해 더 나은 코드로 수정합니다.

### CalculateTest.java - 수정 후

<script src="https://gist.github.com/junyihong/cc42f4fa9174c46707be7c5d4a2d2c8e.js"></script>

**`@ParameterizedTest`** 어노테이션을 사용하여 여러 개의 테스트 케이스를 한 번에 실행할 수 있도록 하였습니다.

**`@MethodSource("formulaAndResult")`** 어노테이션은 **`formulaAndResult`** 메서드를 사용하여 테스트 케이스 데이터를 제공하는 것을 의미합니다.

**`formulaAndResult`** 메서드는 **`Stream<Arguments>`**를 반환하며, **`arguments`** 메서드를 사용하여 각 테스트 케이스의 입력 값과 예상 결과를 반환합니다. 따라서 해당 테스트 메서드는 **`operand1`**, **`operator`**, **`operand2`**, **`result`**를 매개변수로 받고, **`Calculator.calculate`**를 호출하여 실제 결과와 예상 결과를 비교합니다.

---

### main 폴더 속 Calculate.java

<script src="https://gist.github.com/junyihong/5622d39b7c98fc5ec80acfee0e3e33f4.js"></script>

---

### ArithmeticOperator.java - 열거형 클래스 (enum)

<script src="https://gist.github.com/junyihong/95b52265f5b48ee225685b0141ff7d5c.js"></script>

네 가지의 산술 연산(**`+`**, **`-`**, **`*`**, **`/`**)에 대한 동작을 구현하고 있습니다.

**`ArithmeticOperator`** 클래스는 **`calculate`** 정적 메서드를 제공하여 주어진 **`operator`**에 해당하는 연산을 수행할 수 있습니다. 이 메서드는 주어진 **`operator`**를 이용하여 해당 연산을 식별하고, 해당하는 **`ArithmeticOperator`** 인스턴스를 찾아서 **`arithmeticCalculate`** 메서드를 호출하여 결과를 반환합니다.

따라서, **`Calculator`** 클래스의 **`calculate`** 메서드는 주어진 **`operator`**에 따라 **`ArithmeticOperator`** 클래스의 적절한 연산을 수행하고 그 결과를 반환합니다. 이를 통해 **`Calculator`** 클래스는 산술 연산을 모듈화하고 캡슐화하여 코드의 가독성과 유지 보수성을 향상시킬 수 있습니다.

<img src="{{site.baseurl}}/images/javapractice/13.png" alt="Image description" style="width: 40%; height: 50%; margin-bottom: 20px">
<img src="{{site.baseurl}}/images/javapractice/14.png" alt="Image description" style="width: 100%; height: 70%; margin-bottom: 20px">
