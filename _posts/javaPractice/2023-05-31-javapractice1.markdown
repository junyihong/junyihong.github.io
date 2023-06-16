---
permalink: /javapractice/1
title: "JavaPractice - 1"
categories:
  - JavaPractice
tags:
  - tomcat
  - javapractice
  - 자바실습
  - IntelliJ
toc: true
toc_sticky: true
toc_label: "JavaPractice - 1"
---

![img](/images/javapractice/door.jpg)

## 웹 프로젝트 환경 구성

<hr/>
준비물

- JDK11
  - https://www.oracle.com/kr/java/technologies/javase/jdk11-archive-downloads.html
- 인텔리 J ultimate
  - https://www.jetbrains.com/ko-kr/idea/download/#section=windows // 윈도우
- tomcat 9
  - https://tomcat.apache.org/download-90.cgi // Core 의 zip파일을 다운

<hr/>

jdk와 인텔리제이는 설치가 쉬우니 tomcat 부분에 대해 조금 부가설명 하겠습니다.

tomcat이 잘 설치되었는지 확인하기 위해 tomcat 폴더 > bin 폴더로 들어갑니다.

그 안의 startup.bat 파일을 powershell이나 cmd로 실행합니다.

<img src="{{site.baseurl}}/images/javapractice/1.png" alt="Image description" style="width: 100%; height: 100%; margin-bottom: 20px">

다음과 같은 내용이 출력되며 새로운 cmd 창이 켜지면 설치 완료입니다.

정확하게 확인하기 위해 [localhost:8080](http://localhost:8080) 을 주소에 쳐봅니다.

(이때 새롭게 켜진 cmd 창을 닫지 않아야 합니다.)

<img src="{{site.baseurl}}/images/javapractice/2.png" alt="Image description" style="width: 90%; height: 90%; margin-bottom: 20px">

8080포트로 접속했을 때 이렇게 tomcat의 화면이 나오면 **설치 완료**.

<br/>

tomcat은 잠시 놔두고, 인텔리제이를 실행합니다.

인텔리제이에서 new procject 버튼으로 새로운 프로젝트를 하나 생성해줍니다.

이때, 빌드 도구는 **Gradle**, Gradle DSL은 **Groovy** 로 선택합니다.

<img src="{{site.baseurl}}/images/javapractice/3.png" alt="Image description" style="width: 220px; height: 600px; margin-bottom: 20px">

Gradle의 빌드가 끝나면 이러한 프로젝트의 형태가 만들어지고, 그 안에 Main 클래스가 생성됩니다.
WebApplicationServer를 만들 것이기 때문에 의미부여를 위해 Main클래스의 이름을 WebApplicationServer로 변경해줍니다.

tomcat을 활용하기 위해, 목록에 있던 build.gradle파일을 열어서 dependencies를 추가해주어야 합니다.

```java
  implementation 'org.apache.tomcat.embed:tomcat-embed-core:8.5.42'
  implementation 'org.apache.tomcat.embed:tomcat-embed-jasper:8.5.42'
  // tomcat-embed 관련

  implementation 'javax.servlet:javax.servlet-api:4.0.1'
  implementation 'javax.servlet:jstl:1.2'
  // servlet 관련

  implementation 'ch.qos.logback:logback-classic:1.2.3'
  // log 출력 관련
```

우측 상단에

<img src="{{site.baseurl}}/images/javapractice/4.png" alt="Image description" style="width: 10%; height: 10%; margin-bottom: 20px">

요런 아이콘이 뜨는데, 이걸 누르게 되면 입력한 dependencies가 설치가 됩니다.

설치가 된 dependencies는 목록에 있던 외부 라이브러리에도 추가가 됩니다.

이제 tomcat을 활용해 서버를 만듭니다.

```java
package org.example;

import org.apache.catalina.startup.Tomcat;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.io.File;

public class WebApplicationServer {
    private static final Logger log = LoggerFactory.getLogger(WebApplicationServer.class);
    public WebApplicationServer(){

    }
    public static void main(String[] args) throws Exception {
    String webappDirLocation = "webapps/";
    Tomcat tomcat = new Tomcat();
    tomcat.setPort(8080);
    tomcat.addWebapp( "/",(new File(webappDirLocation)).getAbsolutePath());
    log.info("configuring app with basedir: {}", new File("./" + webappDirLocation).getAbsolutePath());

    tomcat.start();
    tomcat.getServer().await();
    }
}
```

**tomcat을 서버로 사용하려면 해당 코드가 기본적으로 들어가야 합니다.**

`webappDirLocation` 을 “webapps/”로 설정했으므로, 프로젝트 폴더에 ‘webapps’라는 폴더를 하나 만들어주고, tomcat 공식문서의 지침대로 **webapps폴더 안에 ‘WEB-INF’ 폴더**를 추가로 생성 합니다.

그리고 이 모듈을 통해서 생성될 빌드파일들이 만들어질 경로를 수정해주어야 하는데, 프로젝트 폴더를 우클릭하면 나오는 모듈 설정 열기를 클릭하고

<img src="{{site.baseurl}}/images/javapractice/5.png" alt="Image description" style="width: 100%; height: 100%; margin-bottom: 20px">

다음과 같이 \webapps\WEB-INF\classes 로 경로를 설정 해줍니다.
main 아래의 test에서도 마찬가지로 수정해주면 됩니다.

모든 설정이 완료되었으면 WebApplicationServer를 실행 해줍니다.

그러면 안좋은 기억이 떠오르는 붉은 글씨들이 다음과 같이 나타납니다.

<img src="{{site.baseurl}}/images/javapractice/6.png" alt="Image description" style="width: 100%; height: 100%; margin-bottom: 20px">

리액트에서 겪었던 끔찍한 일들이 떠오르지만, 자세히 읽어보면 정상적으로 실행되고 있다는 문구들 입니다…

중간에 `INFO: Starting service [Tomcat]` 이라는 문구가 있다.

<img src="{{site.baseurl}}/images/javapractice/7.png" alt="Image description" style="width: 40%; height: 40%; margin-bottom: 20px">

빌드 파일들도 webapps → WEB-INF 안에 잘 생성된 모습입니다.

⚠️ 경로설정을 마쳤는데도 webapps\WEB-INF 안에 파일이 생성되지 않는다면 이렇게 해봅시다.

`preference - Gradle 검색 - ‘다음을 실행하여 ~’ 부분을 IntelliJ IDEA로 변경`

<img src="{{site.baseurl}}/images/javapractice/8.png" alt="Image description" style="width: 100%; height: 100%; margin-bottom: 20px">
