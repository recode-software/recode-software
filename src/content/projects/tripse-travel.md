---
slug: tripse-travel
date: 2026-03-15
title: Tripse Travel
titlePl: Tripse Travel
technologies: [Nuxt 4, Vue 3, TypeScript, NestJS, PostgreSQL, Tailwind CSS, Redis, Kubernetes]
url: tripse-travel.pl
numberOfScreenshots: 5
descriptionPl: Kompleksowa platforma dla biura podróży specjalizującego się w wyprawach przygodowych. System składa się ze strony publicznej z katalogiem wycieczek, kalendarzem wypraw, profilami przewodników oraz panelu administracyjnego CMS. Zaimplementowano zaawansowany system filtrowania, interaktywne mapy, edytor wizualny z podglądem na żywo oraz integracje z OpenAI i Google APIs.
---

Comprehensive adventure travel agency platform for a Polish travel company based in Wroclaw. The system follows a monorepo architecture with three main components: a public-facing website built with Nuxt 4, a full-featured admin CMS panel, and a NestJS backend API.

Key features include an advanced trip catalog with multi-criteria filtering (destination, category, duration, price, difficulty level), interactive calendar view, trip leader profiles with reviews, and a visual page editor with live preview. The platform supports multiple trip formats including group trips, corporate events, and self-guide packages.

Technical highlights: Server-side rendering with configurable modes, Schema.org structured data for SEO, real-time content editing bridge between admin and public site, BullMQ job queues for email processing, and Kubernetes deployment with ArgoCD.
