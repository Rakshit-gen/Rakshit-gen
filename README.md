<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&pause=1000&color=F75C7E&center=true&vCenter=true&random=false&width=600&lines=Hey+there%2C+I'm+Rakshit+%F0%9F%91%8B;Backend+Engineer+%7C+System+Designer;Shipping+Production-Grade+Software;Building+at+50K%2B+DAU+Scale" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=Rakshit-gen&label=Profile%20views&color=F75C7E&style=flat-square" alt="profile views" />
</p>

<h3 align="center">AI Backend Engineer</h3>

<p align="center">
  <a href="https://rakshit-portfolio-one.vercel.app/"><img src="https://img.shields.io/badge/Portfolio-e75480?style=for-the-badge&logo=rocket&logoColor=black" alt="Portfolio" /></a>
  <a href="https://www.linkedin.com/in/rakshit-sisodiya/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=googlechrome&logoColor=black" alt="LinkedIn" /></a>
  <a href="https://leetcode.com/sisodiarakshit456/"><img src="https://img.shields.io/badge/LeetCode_1828-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" alt="Leetcode" /></a>
  <a href="https://www.codechef.com/users/rakshit1110"><img src="https://img.shields.io/badge/CodeChef_5⭐-5B4638?style=for-the-badge&logo=codechef&logoColor=black" alt="CodeChef" /></a>
</p>

<br />

<p align="center" display="flex">
  <a href="#who-am-i">Who Am I</a> •
  <a href="#open-source-contributions">Open Source</a> •
  <a href="#competitive-programming-edge">Competitive Programming</a> •
  <a href="#featured-projects">Projects</a> •
  <a href="#technical-arsenal">Tech Stack</a> •
  <a href="#github-analytics">GitHub</a>
</p>




## Who Am I?

AI Backend Engineer who has built and operated microservices handling **1M+ events/day** and powering platforms with **50K+ daily active users**. I design and ship production systems in **Go** and **Python**, optimize queries over millions of records, and build APIs that stay fast under load.  

What sets me apart: I focus on performance, clean architecture, and shipping features that move real metrics—like cutting critical query times by **40%** and delivering gateways with **sub-50ms p50 latency**.

**Current focus:**
- Distributed systems and high-throughput event pipelines  
- Multi-agent AI systems for real products  
- Deep performance tuning across DB, cache, and network layers  

<hr/>

## Open Source Contributions
<table>
<thead>
<tr>
<th width="18%">Repository</th>
<th width="42%">Pull Request</th>
<th width="25%">Impact</th>
<th width="15%">Status</th>
</tr>
</thead>
<tbody>

<tr>
<td rowspan="3">
<a href="https://github.com/deepspeedai/DeepSpeed"><b>DeepSpeed</b></a><br/>
<sub>Microsoft Research</sub>
</td>
<td>
<a href="https://github.com/deepspeedai/DeepSpeed/pull/7737">
Fix crash when using PEFT-wrapped Hugging Face models
</a>
</td>
<td>
Prevents runtime crashes when using LoRA / PEFT with DeepSpeed attention
</td>
<td>
<img src="https://img.shields.io/badge/Merged-28a745?style=flat-square" />
</td>
</tr>

<tr>
<td>
<a href="https://github.com/deepspeedai/DeepSpeed/pull/7735">
Fix TypeError in sqrt LR scaling with dynamic batching
</a>
</td>
<td>
Restores correct learning-rate scaling and training stability
</td>
<td>
<img src="https://img.shields.io/badge/Merged-28a745?style=flat-square" />
</td>
</tr>

<tr>
<td>
<a href="#">
Fix NaN propagation in OnebitLamb optimizer with empty parameters
</a>
</td>
<td>
Improves numerical stability in distributed optimizer edge cases
</td>
<td>
<img src="https://img.shields.io/badge/Merged-28a745?style=flat-square" />
</td>
</tr>

<tr>
<td>
<a href="https://github.com/calcom/cal.com"><b>Cal.com</b></a><br/>
<sub>Scheduling Infrastructure</sub>
</td>
<td>
<a href="https://github.com/calcom/cal.com/pull/25941">
Allow organizations to sign up with existing usernames
</a>
</td>
<td>
Unblocked enterprise onboarding and production integrations
</td>
<td>
<img src="https://img.shields.io/badge/Merged-28a745?style=flat-square" />
</td>
</tr>

<tr>
<td>
<a href="https://github.com/langchain-ai/langgraph"><b>LangGraph</b></a><br/>
<sub>LangChain AI</sub>
</td>
<td>
<a href="https://github.com/langchain-ai/langgraph/pull/6602">
Preserve StrEnum types during checkpoint serialization
</a>
</td>
<td>
Ensures correct state recovery for production agent workflows
</td>
<td>
<img src="https://img.shields.io/badge/Under_Review-FFA116?style=flat-square" />
</td>
</tr>

</tbody>
</table>



<br/>

---

## Competitive Programming Edge

- **LeetCode:** 1828 rating (Top 6.5% globally)
- **CodeChef:** 5⭐ rating
- **Philosophy:** Algorithmic problem-solving isn't just a hobby—it's how I approach system design, optimize database queries, and debug production issues.

---

## Featured Projects


### 🎙️ [NevraAI](https://nervaai.vercel.app/) – AI-Generated Podcast Platform

Fully automated pipeline that transforms any topic into a complete podcast episode with AI-generated scripts, voice synthesis, and downloadable audio. Features vector search for context-aware content, Redis queue workers for async processing, and real-time progress tracking.

**Tech:** FastAPI, Next.js, PostgreSQL, Redis RQ, Qdrant Vector DB, HuggingFace, GCP TTS, AWS S3

**Repo:** [NevraAI](https://github.com/Rakshit-gen/nerva)

---

### 🧠 [SynthForce](https://synth-force-fe.vercel.app/) – Synthetic Workforce Startup Simulator

Multi-agent AI system that simulates an entire startup workforce—CEO, PM, Engineering Lead, Designer, Sales, and Support—collaborating, debating, and generating complete MVP roadmaps. Supports real-time agent discussions, market “what-if” simulations, and persistent memory timelines powered by Groq-accelerated LLMs.

**Tech:** FastAPI, Groq API, MongoDB, WebSockets, Next.js 15, Clerk Auth, Shadcn UI, TailwindCSS, Zustand, Framer Motion

**Repos:** [Backend](https://github.com/Rakshit-gen/SynthForce) | [Frontend](https://github.com/Rakshit-gen/SynthForce-fe)

---

### 🛡️ [VantageEdge](https://vantageedge.vercel.app/) – Production-Ready API Gateway

High-performance distributed gateway with <10ms p50 latency, real-time SSE-powered analytics dashboard, token-bucket rate limiting, and round-robin load balancing. Tracks p95 latency, cache hit ratio, and error rates in real-time.

**Tech:** Go, Chi Router, Redis, PostgreSQL (Neon), Next.js, Shadcn UI, TanStack Query

**Repos:** [Backend](https://github.com/Rakshit-gen/vantageEdge) | [Frontend](https://github.com/Rakshit-gen/vantageedge-fe)

---

### 🧩 [SyncLayer](https://sync-layer.vercel.app/) – Real-Time Collaborative Task Board

Production-grade collaborative board with WebSocket-powered multi-user editing, drag-and-drop workflows, and Redis Pub/Sub for real-time broadcast. Clean architecture with role-based UI enforcement and activity logging.

**Tech:** Go (Fiber), PostgreSQL, Redis, WebSockets, Next.js, Zustand, TailwindCSS, shadcn UI

**Repos:** [Backend](https://github.com/Rakshit-gen/SyncLayer) | [Frontend](https://github.com/Rakshit-gen/SyncLayer-fe)

---

### 🧠 [SentralQ](https://api-analyse-fe.vercel.app/) – AI-Powered API Debugger

Multi-agent AI system that diagnoses API integration issues and suggests executable fixes in seconds. LangGraph-powered reasoning isolates auth errors, schema mismatches, and network faults with streaming responses.

**Tech:** Next.js, LangGraph, TypeScript, Clerk Auth, Groq LLMs, FastAPI

**Repos:** [Backend](https://github.com/Rakshit-gen/API_Analyse) | [Frontend](https://github.com/Rakshit-gen/api_analyse_fe)

---

### 🤖 [Aegis](https://www.aegisagent.online) – Multi-Agentic Code Analysis Platform

Autonomous AI agent system powered by Groq's Llama 3.3 70B for comprehensive codebase analysis and PR reviews. Scans repositories for architectural flaws, security vulnerabilities, and code quality issues. Reduces code review time by 60%.

**Tech:** Python, FastAPI, Redis, Groq API (Llama 3.3 70B), Docker, Next.js, Shadcn UI

**Repos:** [PR Review Agent](https://github.com/Rakshit-gen/agent-prm) | [Codebase Analyzer](https://github.com/Rakshit-gen/agent-code-manage)

---

### 🎯 [Slanine](https://www.slanine.online/) – Full-Stack SaaS Platform

Production SaaS with 25+ productivity tools, Stripe payments, and AI-powered features. Optimized PostgreSQL queries for <200ms API responses and implemented Redis caching for 3x faster page loads.

**Tech:** Next.js, PostgreSQL, Stripe, GenAI APIs, Docker

**Repo:** [Slanine](https://github.com/Rakshit-gen/Slanine)

---

### 🗨️ [Qme](https://flyuphigh.vercel.app/) – Reddit-Style Community Platform

Full-featured community platform with posts, voting, and media uploads. Integrated Redis caching to reduce page load times by 42% (from 2.1s to 1.2s average).

**Tech:** Next.js, Redis, MongoDB, REST APIs

**Repo:** [Qme](https://github.com/Rakshit-gen/Questme)

---


## Technical Arsenal

```javascript
const rakshit = {
  backend: {
    languages: ["Go", "Python (FastAPI)", "Node.js (Express)"],
    patterns: ["Microservices", "Event-Driven", "CQRS", "Saga"],
    apis: ["REST", "GraphQL", "gRPC", "WebSockets"]
  },
  databases: {
    sql: ["PostgreSQL", "MySQL"],
    nosql: ["Redis", "MongoDB", "DynamoDB"],
    search: ["Elasticsearch/OpenSearch", "Qdrant"],
    optimization: ["Query Rewriting", "Materialized Views", "Connection Pooling"]
  },
  frontend: {
    frameworks: ["Next.js", "React", "Vue.js"],
    styling: ["Tailwind CSS", "Shadcn UI"],
    state: ["Zustand", "TanStack Query"]
  },
  cloud: {
    aws: ["EKS", "ECS", "Lambda", "S3", "API Gateway", "OpenSearch"],
    gcp: ["Cloud Run", "Compute Engine", "BigQuery", "Cloud TTS", "Pub/Sub"],
    other: ["Vercel", "Render"]
  },
  devops: {
    container: ["Docker", "Kubernetes"],
    ci_cd: ["GitHub Actions", "CircleCI"]
  },
  ai_ml: {
    frameworks: ["LangChain", "LangGraph", "LlamaIndex"],
    models: ["Groq", "GPT‑4o", "Llama"],
    rag: ["Qdrant", "Chroma", "Hybrid Search"],
    agents: ["Multi-Agent Systems", "Tool Calling", "ReAct"]
  }
};


```

---

## GitHub Analytics

<!-- Activity Graph -->
<p align="center">
  <a href="https://github.com/ashutosh00710/github-readme-activity-graph">
    <img src="https://github-readme-activity-graph.vercel.app/graph?username=Rakshit-gen&theme=react-dark&hide_border=true" alt="Rakshit's github activity graph" />
  </a>
</p>

<!-- Trophy Collection -->
<p align="center">
  <a href="https://github.com/ryo-ma/github-profile-trophy">
    ![Rakshit's GitHub Stats](https://github-readme-stats.vercel.app/api?username=rakshit-gen&show_icons=true&theme=dark&hide_border=true&include_all_commits=true&count_private=true)
  </a>
</p>

---

<p align="center">
  <i>"It’s not who I am underneath, but what I do that defines me."</i>
</p>


---
