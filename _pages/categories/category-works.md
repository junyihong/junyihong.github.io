---
title: "작업물"
layout: archive
permalink: categories/works
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories.works %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}
