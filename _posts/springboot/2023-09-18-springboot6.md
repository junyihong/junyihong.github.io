---
title: "게시판 서비스 만들기 - 사전 설계"
categories:
  - springboot
tags:
  - 스프링
  - 부트
  - 프레임워크
  - IntelliJ
  - 게시판
toc: true
toc_sticky: true
toc_label: "게시판 서비스 만들기 - 사전 설계"
date: 2023-09-15
last_modified_at: 2023-09-18
---

## 1. 유스케이스 다이어그램

<div style=" display : flex; justify-content: center;">
	<img src="{{site.baseurl}}/images/documents/use-case-board.jpg" alt="Image description" style="width: 80%; height: 40%; margin-bottom: 20px; box-shadow: 3px 3px 6px rgba(0,0,0,0.4);">
</div>

`<<include>>` (포함 관계):
ex) <br/>
주 유스케이스: "게시글 보기"
포함 유스케이스: "회원 로그인 필요"
설명: "게시글 보기"를 실행하려면 사용자가 로그인해야 하는 경우가 있을 수 있습니다. 따라서 "회원 로그인 필요"는 "게시글 보기"의 포함 유스케이스로 간주됩니다. 이것은 "게시글 보기"에 대한 전제 조건으로, 사용자가 게시글을 보려면 먼저 로그인해야 합니다.

`<<extend>>` (확장 관계):
ex) <br/>
주 유스케이스: "게시글 보기"
확장 유스케이스 1: "게시글 수정 및 삭제"
확장 유스케이스 2: "댓글 보기 및 쓰기 삭제"
설명: "게시글 보기"는 주 기능입니다. 그러나 사용자에게 선택적인 확장 기능을 제공할 수 있습니다.
"게시글 수정 및 삭제"는 사용자가 게시글을 수정하거나 삭제할 수 있는 확장 기능입니다. 이 기능은 "게시글 보기"가 진행 중에 필요할 때 실행될 수 있습니다.
"댓글 보기 및 쓰기 삭제"는 댓글 관련 기능을 확장합니다. 사용자가 댓글을 보거나 작성하거나 삭제할 수 있는 기능이며, "게시글 보기" 동안 필요할 때 선택적으로 활성화될 수 있습니다.

<br/>
<br/>

## 2. ERD

<div style=" display : flex; justify-content: center;">
	<img src="{{site.baseurl}}/images/documents/erd-board.png" alt="Image description" style="width: 80%; height: 40%; margin-bottom: 20px; box-shadow: 3px 3px 6px rgba(0,0,0,0.4);">
</div>

유저 계정(User Account)과 게시글(Article) 간의 관계:

1:N 관계입니다. 하나의 유저 계정은 여러 개의 게시글을 작성할 수 있지만, 하나의 게시글은 하나의 작성자(유저 계정)를 가집니다.
이 관계는 게시글 엔터티의 userId 속성을 통해 나타납니다. user_account_id는 외래키로, 게시글과 해당 게시글의 작성자(User Account)를 연결합니다.
게시글(Post)과 댓글(Comment) 간의 관계:

댓글과 게시글 간의 관계도 1:N입니다. 하나의 게시글에 여러 개의 댓글이 달릴 수 있습니다.
이 관계는 댓글 엔터티의 articleId 속성을 통해 나타납니다. articleId는 외래키로, 댓글과 해당 댓글이 속한 게시글(Article)을 연결합니다.

유저 계정(User Account)과 댓글(Article Comment) 간의 관계:
1:N 관계입니다. 하나의 유저 계정은 여러 개의 댓글을 작성할 수 있지만, 하나의 댓글은 하나의 작성자(유저 계정)를 가집니다.
이 관계는 댓글 엔터티의 user_account_id 속성을 통해 나타납니다. user_account_id 는 외래키로, 댓글과 해당 댓글의 작성자(User Account)를 연결합니다.

<br/>
<br/>

## 3. api 명세서

<div style=" display : flex; justify-content: center;">
	<img src="{{site.baseurl}}/images/documents/api-board.png" alt="Image description" style="width: 80%; height: 40%; margin-bottom: 20px; box-shadow: 3px 3px 6px rgba(0,0,0,0.4);">
</div>
