---
title: "게시판 서비스 만들기 - .gitignore 생성하기"
categories:
  - springboot
tags:
  - 스프링
  - 부트
  - 프레임워크
  - IntelliJ
toc: true
toc_sticky: true
toc_label: "게시판 서비스 만들기 - .gitignore 생성하기"
date: 2023-08-10
last_modified_at: 2023-08-10
---

## Gitignore.io 이용하기

Gitignore.io는 개발자들이 Git 저장소에 업로드하지 않을 파일들을 자동으로 생성해주는 온라인 도구입니다. Gitignore.io는 사용자가 프로젝트에 사용하는 프로그래밍 언어, 프레임워크, 개발 환경 등을 입력하면, 해당 환경에서 생성되는 임시 파일, 빌드 결과물, 개인 설정 파일 등을 자동으로 Gitignore 파일에 추가해줍니다.

일반적으로 개발자들은 Git 저장소에 불필요한 파일들을 업로드하지 않는 것이 좋습니다. 이러한 파일들은 Git 저장소를 복잡하게 만들고, 코드 리뷰를 어렵게하며, 저장소 용량을 증가시킬 수 있습니다. 따라서 .gitignore 파일을 사용하여 이러한 파일들을 Git의 추적 대상에서 제외시키는 것이 중요합니다.

Gitignore.io는 사용하기 쉽고, 빠르며, 다양한 프로그래밍 언어와 프레임워크를 지원합니다. 사용자가 필요한 환경을 선택하고, 해당 내용을 복사하여 자신의 프로젝트의 .gitignore 파일에 붙여넣기만 하면 됩니다.

사용 방법:

1. gitignore.io 웹 사이트로 이동합니다. (**https://www.toptal.com/developers/gitignore**)
2. 검색 상자에 프로그래밍 언어, 프레임워크, 개발 환경 등을 입력합니다. 예를 들면, "Python", "Node", "React", "VisualStudioCode" 등을 입력할 수 있습니다.
3. 입력한 내용을 기반으로 .gitignore 파일에 추가할 내용이 나열됩니다.
4. "Create" 버튼을 클릭하여 .gitignore 파일 내용을 생성합니다.
5. 생성된 내용을 복사하여 프로젝트의 .gitignore 파일에 붙여넣기합니다.

이렇게 하면 프로젝트에 해당하는 불필요한 파일들이 Git 저장소에 업로드되지 않도록 설정됩니다. Gitignore.io는 유지보수되며 계속해서 새로운 환경과 기능들이 추가될 수 있습니다.

## .gitignore 파일

```
# Created by https://www.toptal.com/developers/gitignore/api/java,windows,macos,intellij+all,visualstudiocode,gradle
# Edit at https://www.toptal.com/developers/gitignore?templates=java,windows,macos,intellij+all,visualstudiocode,gradle

### Intellij+all ###
# Covers JetBrains IDEs: IntelliJ, RubyMine, PhpStorm, AppCode, PyCharm, CLion, Android Studio, WebStorm and Rider
# Reference: https://intellij-support.jetbrains.com/hc/en-us/articles/206544839

# User-specific stuff
.idea/**/workspace.xml
.idea/**/tasks.xml
.idea/**/usage.statistics.xml
.idea/**/dictionaries
.idea/**/shelf

# AWS User-specific
.idea/**/aws.xml

# Generated files
.idea/**/contentModel.xml

# Sensitive or high-churn files
.idea/**/dataSources/
.idea/**/dataSources.ids
.idea/**/dataSources.local.xml
.idea/**/sqlDataSources.xml
.idea/**/dynamic.xml
.idea/**/uiDesigner.xml
.idea/**/dbnavigator.xml

# Gradle
.idea/**/gradle.xml
.idea/**/libraries

# Gradle and Maven with auto-import
# When using Gradle or Maven with auto-import, you should exclude module files,
# since they will be recreated, and may cause churn.  Uncomment if using
# auto-import.
# .idea/artifacts
# .idea/compiler.xml
# .idea/jarRepositories.xml
# .idea/modules.xml
# .idea/*.iml
# .idea/modules
# *.iml
# *.ipr

# CMake
cmake-build-*/

# Mongo Explorer plugin
.idea/**/mongoSettings.xml

# File-based project format
*.iws

# IntelliJ
out/

# mpeltonen/sbt-idea plugin
.idea_modules/

# JIRA plugin
atlassian-ide-plugin.xml

# Cursive Clojure plugin
.idea/replstate.xml

# SonarLint plugin
.idea/sonarlint/

# Crashlytics plugin (for Android Studio and IntelliJ)
com_crashlytics_export_strings.xml
crashlytics.properties
crashlytics-build.properties
fabric.properties

# Editor-based Rest Client
.idea/httpRequests

# Android studio 3.1+ serialized cache file
.idea/caches/build_file_checksums.ser

### Intellij+all Patch ###
# Ignore everything but code style settings and run configurations
# that are supposed to be shared within teams.

.idea/*

!.idea/codeStyles
!.idea/runConfigurations

### Java ###
# Compiled class file
*.class

# Log file
*.log

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
hs_err_pid*
replay_pid*

### macOS ###
# General
.DS_Store
.AppleDouble
.LSOverride

# Icon must end with two \r
Icon

# Thumbnails
._*

# Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk

### macOS Patch ###
# iCloud generated files
*.icloud

### VisualStudioCode ###
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/*.code-snippets

# Local History for Visual Studio Code
.history/

# Built Visual Studio Code Extensions
*.vsix

### VisualStudioCode Patch ###
# Ignore all local history of files
.history
.ionide

### Windows ###
# Windows thumbnail cache files
Thumbs.db
Thumbs.db:encryptable
ehthumbs.db
ehthumbs_vista.db

# Dump file
*.stackdump

# Folder config file
[Dd]esktop.ini

# Recycle Bin used on file shares
$RECYCLE.BIN/

# Windows Installer files
*.cab
*.msi
*.msix
*.msm
*.msp

# Windows shortcuts
*.lnk

### Gradle ###
.gradle
**/build/
!src/**/build/

# Ignore Gradle GUI config
gradle-app.setting

# Avoid ignoring Gradle wrapper jar file (.jar files are usually ignored)
!gradle-wrapper.jar

# Avoid ignore Gradle wrappper properties
!gradle-wrapper.properties

# Cache of project
.gradletasknamecache

# Eclipse Gradle plugin generated files
# Eclipse Core
.project
# JDT-specific (Eclipse Java Development Tools)
.classpath

### Gradle Patch ###
# Java heap dump
*.hprof

# End of https://www.toptal.com/developers/gitignore/api/java,windows,macos,intellij+all,visualstudiocode,gradle
```
