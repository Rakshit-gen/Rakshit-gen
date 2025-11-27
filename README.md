<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&pause=1000&color=F75C7E&center=true&vCenter=true&random=false&width=600&lines=Hey+there%2C+I'm+Rakshit+%F0%9F%91%8B;Backend+Engineer+%7C+System+Designer;Shipping+Production-Grade+Software;Building+at+50K%2B+DAU+Scale" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=Rakshit-gen&label=Profile%20views&color=F75C7E&style=flat-square" alt="profile views" />
</p>

<h3 align="center">Software Engineer</h3>

<p align="center">
  <a href="https://rakshit-portfolio-one.vercel.app/"><img src="https://img.shields.io/badge/Portfolio-e75480?style=for-the-badge&logo=rocket&logoColor=black" alt="Portfolio" /></a>
  <a href="https://www.linkedin.com/in/rakshit-sisodiya/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=googlechrome&logoColor=black" alt="LinkedIn" /></a>
  <a href="https://leetcode.com/sisodiarakshit456/"><img src="https://img.shields.io/badge/LeetCode_1828-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" alt="Leetcode" /></a>
  <a href="https://www.codechef.com/users/rakshit1110"><img src="https://img.shields.io/badge/CodeChef_5⭐-5B4638?style=for-the-badge&logo=codechef&logoColor=black" alt="CodeChef" /></a>
</p>

<br />

## 👨‍💻 Who Am I?

Backend engineer at **Wayground** (formerly Quizizz) building microservices that process **100K+ events/day**. I architect production systems in **Go** and **Python**, optimize database queries that handle millions of records, and design APIs that power platforms with **50K+ daily active users**.

**What sets me apart:** I don't just write code—I ship features that scale. From reducing query times by 40% to building multi-agent AI systems from scratch, I obsess over performance, reliability, and clean architecture.

**Current focus:** Distributed systems, multi-agentic AI, and high-performance backend engineering.

![Snake animation](https://github.com/Rakshit-gen/Rakshit-gen/blob/output/snake.svg)

---

## 🏆 Competitive Programming Edge

- **LeetCode:** 1828 rating (Top 6.5% globally)
- **CodeChef:** 5⭐ rating
- **Philosophy:** Algorithmic problem-solving isn't just a hobby—it's how I approach system design, optimize database queries, and debug production issues.

---

## 🚀 Featured Projects

### 🛡️ [VantageEdge](https://vantageedge.vercel.app/) – Production-Ready API Gateway
> **The Problem:** Most API gateways are either too complex or lack real-time observability.  
> **My Solution:** Built a high-performance distributed gateway with live analytics, request caching, and intelligent rate limiting.

**Impact:**
- Handles high-volume backend traffic with <10ms p50 latency
- Real-time SSE-powered analytics dashboard tracking p95 latency, cache hit ratio, and error rates
- Token-bucket rate limiting with per-key behavior
- Round-robin load balancing across backend instances

**Tech Stack:** Go, Chi Router, Redis, PostgreSQL (Neon), Next.js, Shadcn UI, TanStack Query

**Key Features:**
- ⚡ Sub-10ms reverse proxy with intelligent caching (configurable TTL)
- 🔐 API key authentication with tier-based traffic control
- 📊 Live metrics: latency distribution, traffic volume, failure patterns
- 🔁 Automatic failover and health checks

**Repos:** [Backend](https://github.com/Rakshit-gen/vantageEdge) | [Frontend](https://github.com/Rakshit-gen/vantageedge-fe)

---

### 🧩 [SyncForge](https://sync-layer.vercel.app/) – Real-Time Collaborative Task Board (Trello + Notion Hybrid)

> **The Problem:** Most task tools lack true real-time collaboration and flexible role-driven workflows.  
> **My Solution:** Built a production-grade collaborative board system with live task updates, drag-and-drop workflow, and WebSocket-powered multi-user editing.

**Impact:**
- Real-time updates across users with WebSockets + Redis Pub/Sub
- Clean architecture with clear domains: controllers → services → repositories
- Fully client-side auth (NextAuth + JWT) with backend acting as a trust-based stateless API surface

**Tech Stack:** Go (Fiber), PostgreSQL, Redis, WebSockets, Next.js, Zustand, TailwindCSS, shadcn UI

**Key Features:**
- 🏗️ Drag-and-drop task board with multi-user state sync
- ⚡ Event-driven architecture with Redis Pub/Sub for broadcast operations
- 🔄 Real-time task editing, activity logs, and notification streams
- 🔐 Role-based UI enforcement (admin/editor/viewer) handled entirely on frontend
- 🧱 Clean modular backend architecture with services, repos, and DTO layers

**Repos:** [Backend](https://github.com/Rakshit-gen/SyncLayer) | [Frontend](https://github.com/Rakshit-gen/SyncLayer-fe)


### 🧠 [SentralQ](https://api-analyse-fe.vercel.app/) – AI-Powered API Debugger
> **The Problem:** Debugging API failures wastes hours. Staring at cryptic error messages in Postman isn't productive.  
> **My Solution:** Built a multi-agent AI system that diagnoses integration issues and suggests executable fixes in seconds.

**Impact:**
- Multi-agent reasoning isolates auth errors, schema mismatches, and network faults
- Generates actionable fixes with code snippets
- Secure per-session analysis with Clerk authentication

**Tech Stack:** Next.js, LangGraph, TypeScript, Clerk Auth, Groq LLMs, FastAPI

**What makes it special:**
- 🧩 LangGraph-powered multi-agent system for surgical fault isolation
- ⚡ Real-time diagnosis with streaming responses
- 🔐 Enterprise-grade security with session-based analysis
- 🧠 Learns from common API patterns to improve suggestions

**Repos:** [Backend](https://github.com/Rakshit-gen/API_Analyse) | [Frontend](https://github.com/Rakshit-gen/api_analyse_fe)

---

### 🤖 [Aegis](https://www.aegisagent.online) – Multi-Agentic Code Analysis Platform
> **The Problem:** Manual code reviews are time-consuming and miss architectural issues.  
> **My Solution:** Built an autonomous AI agent system powered by Groq's Llama 3.3 70B that performs comprehensive codebase analysis and PR reviews.

**Impact:**
- Scans entire repositories for architectural flaws, security vulnerabilities, and code quality issues
- Autonomous PR review with actionable recommendations
- Scales to 100+ concurrent requests with async FastAPI + Redis caching

**Tech Stack:** Python, FastAPI, Redis, Groq API (Llama 3.3 70B), Docker, Next.js, Shadcn UI

**Architecture:**
- **Microservice 1:** [PR Review Agent](https://github.com/Rakshit-gen/agent-prm) – Autonomous pull request analysis
- **Microservice 2:** [Codebase Analyzer](https://github.com/Rakshit-gen/agent-code-manage) – Full repository scanning with metrics
- **Infrastructure:** Dockerized deployment with CI/CD pipeline

**Why it matters:** Reduces code review time by 60% while catching issues human reviewers typically miss.

---

### 🎯 [Slanine](https://www.slanine.online/) – Full-Stack SaaS Platform
> **The Challenge:** Build a production SaaS with payments, authentication, and 25+ productivity tools.  
> **The Result:** Full-stack platform with <200ms API responses, Stripe integration, and AI-powered features.

**What I learned:**
- Optimizing PostgreSQL queries for sub-200ms responses under load
- Integrating Stripe payments and webhook handling
- Why rate limiting isn't optional (learned this the expensive way)
- Smart caching strategies with Redis for 3x faster page loads

**Tech Stack:** Next.js, PostgreSQL, Stripe, GenAI APIs, Docker

**Repo:** [Slanine](https://github.com/Rakshit-gen/Slanine)

---

### 🗨️ [Qme](https://flyuphigh.vercel.app/) – Reddit-Style Community Platform
> **Performance Win:** Integrated Redis caching to slash page load times by 42% (from 2.1s to 1.2s average).

Built a full-featured community platform with posts, voting, media uploads, and complete CRUD operations. The real achievement was architecting a caching layer that made the platform feel instant.

**Tech Stack:** Next.js, Redis, MongoDB, REST APIs

**Repo:** [Qme](https://github.com/Rakshit-gen/Questme)

---

## 🛠️ Technical Arsenal

```javascript
const rakshit = {
    backend: {
        primary: ["Go", "Python"],
        frameworks: ["FastAPI", "Chi Router", "Express.js"],
        architecture: ["Microservices", "REST APIs", "GraphQL", "Event-Driven Systems"]
    },
    databases: {
        sql: ["PostgreSQL", "MySQL"],
        nosql: ["MongoDB", "Redis", "Elasticsearch"],
        expertise: ["Query Optimization", "Indexing Strategies", "Caching Layers"]
    },
    frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    cloud: ["AWS (EC2, S3, Lambda, EKS)", "GCP (Compute Engine, BigQuery)"],
    devops: ["Docker", "CI/CD Pipelines", "Jenkins", "GitHub Actions"],
    ai: ["LangChain", "LangGraph", "Groq API", "OpenAI API", "Multi-Agent Systems"],
    
    currentlyMastering: [
        "Distributed Systems Design",
        "Multi-Agent AI Architectures", 
        "High-Performance Go Services",
        "Real-Time Data Processing"
    ]
};
```

---

## 📈 GitHub Analytics

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Rakshit-gen&layout=compact&theme=radical&hide_border=true&langs_count=8" alt="Top Languages" />
</p>

<!-- Activity Graph -->
<p align="center">
  <a href="https://github.com/ashutosh00710/github-readme-activity-graph">
    <img src="https://github-readme-activity-graph.vercel.app/graph?username=Rakshit-gen&theme=react-dark&hide_border=true" alt="Rakshit's github activity graph" />
  </a>
</p>

<!-- Trophy Collection -->
<p align="center">
  <a href="https://github.com/ryo-ma/github-profile-trophy">
    <img src="https://github-profile-trophy.vercel.app/?username=Rakshit-gen&theme=radical&no-frame=true&row=1&column=7" alt="GitHub Trophies" />
  </a>
</p>
---

## 💡 What Drives My Work

**Performance First:** I don't just make things work—I make them fast. Every millisecond counts when you're serving 50K+ daily users.

**Production Mindset:** I build for scale. Error handling, observability, and graceful degradation aren't afterthoughts—they're requirements.

**Learning by Shipping:** Every project teaches something new. Whether it's distributed caching strategies or multi-agent AI systems, I learn by building real solutions.

**Clean Architecture:** Code should be self-documenting. If I can't understand it in 6 months, neither can my team.

---

## 🎯 Open to Opportunities

I'm actively seeking roles where I can:
- Design and build distributed backend systems
- Architect solutions that scale to millions of users
- Work with modern tech stacks (Go, Python, AWS, Kubernetes)
- Collaborate with teams that value code quality and system design

**Ideal roles:** Backend Engineer | System Designer | Full-Stack Engineer (Backend-heavy)

---

## 📫 Let's Connect

Building something interesting? Let's talk.

- 💼 **Portfolio:** [rakshitsisodiya.xyz](https://www.rakshitsisodiya.xyz/)
- 📧 **Email:** sisodiarakshit456@gmail.com
- 🔗 **LinkedIn:** [rakshit-sisodiya](https://www.linkedin.com/in/rakshit-sisodiya/)
- 💻 **GitHub:** You're already here!

---

<p align="center">
  <i>"The best code is no code at all. The second best is code that solves real problems efficiently."</i>
</p>

<p align="center">
  <b>⭐️ If you find my work interesting, consider dropping a star on repos that resonate with you!</b>
</p>

---

<p align="center">
  <sub>Built with ❤️ by Rakshit | Last updated: November 2024</sub>
</p>
