---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
categories: ['tech', 'folio']
banner: 'https://images.unsplash.com/photo-1599845537562-65fa74c7f98b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
image: 'https://www.python.org/static/community_logos/python-logo-master-v3-TM.png'
excerpt: 'This is a small summary of this post.'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.