---
title: "기타"
layout: archive
permalink: categories/etc
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories.etc %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}
