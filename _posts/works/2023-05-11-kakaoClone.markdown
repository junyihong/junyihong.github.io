---
title: "카카오톡 클론코딩"
categories:
  - works
tags:
  - html
  - css
  - portfolio
toc: true
toc_sticky: true
toc_label: "카카오톡 클론코딩"
date: 2023-05-11
last_modified_at: 2023-06-17
---

![img](/images/kakaoclone.jpg)

# '카카오톡 클론코딩'

<br/>
📌 코딩 처음 시작할 때 html과 css만 사용해서 만들었던 페이지
<br/>

<!--The Main Thing-->
<div id="wrapper">
  <div class="phone view_1" id="phone_1">
    <iframe src="https://junyihong.github.io/kakao-clone/" id="frame_1"></iframe>
  </div>
</div>

<!--Controls etc.-->
<div id="controls">
<div id="views">
  <button value="1">View - 정면</button>
  <button value="2">View 2 - 옆</button>
  <button value="3">View 3 - 눕히기</button>
</div>
  <div>
    <label for="iframeURL">URL:</label>
    <input type="text" id="iframeURL" placeholder="https://junyihong.github.io/kakao-clone/" value="https://junyihong.github.io/kakao-clone/" />
  </div>
  <div>
    <label for="iframeWidth">Width:</label>
    <input type="number" id="iframeWidth" placeholder="400" value="400" />
  </div>
  <div>
    <label for="iframeHeight">Height:</label>
    <input type="number" id="iframeHeight" placeholder="750" value="750" />
  </div>
  <!--Idea by /u/aerosole-->
  <div>
    <label for="iframePerspective">Add perspective:</label>
    <input type="checkbox" id="iframePerspective" checked="true" />
  </div>
</div>
<div id="linkBack" style="position:absolute;right:0px;bottom:0px;background-color:#333;margin:0;width:60px;padding:5px"><a href="http://www.f-rilling.com/projects/" target="_blank" style="font-size:14px;text-decoration:none;color:#fff;padding:0 0 0 5px;font-family:sans-serif">My Site</a></div>
<script src="/assets/js/kakao.js"></script>
