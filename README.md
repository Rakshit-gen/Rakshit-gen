<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&pause=1000&color=F75C7E&center=true&vCenter=true&random=false&width=600&lines=Hey+there%2C+I'm+Rakshit+%F0%9F%91%8B;Applied+AI+Engineer+%7C+Backend+Systems;Shipping+Production-Grade+Software;Building+at+50M%2B+User+Scale" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=Rakshit-gen&label=Profile%20views&color=F75C7E&style=flat-square" alt="profile views" />
</p>

<h3 align="center">Applied AI Engineer | Backend Systems</h3>

<p align="center">
  <a href="https://rakshitsisodiya.xyz/"><img src="https://img.shields.io/badge/Portfolio-e75480?style=for-the-badge&logo=rocket&logoColor=black" alt="Portfolio" /></a>
  <a href="https://www.linkedin.com/in/rakshit-sisodiya/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=googlechrome&logoColor=black" alt="LinkedIn" /></a>
  <a href="https://leetcode.com/sisodiarakshit456/"><img src="https://img.shields.io/badge/LeetCode_1828-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" alt="Leetcode" /></a>
</p>

<br />

<p align="center">
  <a href="#who-am-i">Who Am I</a> •
  <a href="#open-source-contributions">Open Source</a> •
  <a href="#featured-projects">Projects</a> •
  <a href="#technical-arsenal">Tech Stack</a> •
  <a href="#github-analytics">GitHub</a>
</p>

## Who Am I?

Applied AI engineer and backend systems builder. I ship production AI systems (RAG, LLM evaluation harnesses, agentic workflows) and the distributed backend infrastructure underneath them, in **Go and Python**, at **50M+ daily events** (Kafka/Pub/Sub into BigQuery, sub-30s end-to-end latency) for a platform serving **50M+ users**. I care about the number after the optimization, not the one before it:

- **78%** search latency reduction (to under 280ms across 10M+ records) by partitioning indexes and rewriting high-cost queries
- **42%** quiz response latency reduction (2.1s → 1.2s across 1M+ daily quizzes) via Redis pipelining in Go and Python
- **100 req/sec sustained, 200-request bursts** load-tested on a Go API gateway I built from scratch (VantageEdge, below)

Active open-source contributor to **DeepSpeed** (Microsoft Research) and **Cal.com**, fixing real bugs in codebases other people run in production, not toy issues.

**Focus:** vector search internals, distributed systems and event pipelines, multi-agent AI, performance tuning across DB/cache/network layers.

<hr/>

## Open Source Contributions (Selected)

### DeepSpeed (Microsoft Research)
High-performance training infrastructure used at scale for large models.

- **Fixed deadlocks in DecoupledCheckpointEngine during checkpointing failures**
  Prevented indefinite training hangs by adding timeouts, process health checks, and robust cleanup logic, replacing unsafe assertions and ensuring checkpoint reliability even when subprocesses crash.
  [PR #7742](https://github.com/deepspeedai/DeepSpeed/pull/7742) · 🟣 **Merged**

- **Prevented NaN propagation in OneBitLamb with empty parameter tensors**
  Fixed a numerical edge case where `sqrt(numel)` caused `0.0/0.0 → NaN`, corrupting the global scaling coefficient and destabilizing all optimizer state; guarded the denominator to ensure safe scaling.
  [PR #7736](https://github.com/deepspeedai/DeepSpeed/pull/7736) · 🟣 **Merged**

- **Fixed runtime crash in NebulaCheckpointEngine during checkpoint commit**
  Resolved an API mismatch by passing `CheckpointCommitInfo` instead of a raw tag string, unblocking Nebula-based checkpointing without breaking TorchCheckpointEngine.
  [PR #7740](https://github.com/deepspeedai/DeepSpeed/pull/7740) · 🟣 **Merged**

- **Prevented runtime crash with PEFT / LoRA-wrapped Hugging Face models**
  Fixed an incompatibility between DeepSpeed attention and PEFT adapters that caused crashes during training initialization.
  [PR #7737](https://github.com/deepspeedai/DeepSpeed/pull/7737) · 🟣 **Merged**

- **Restored correct LR scaling under dynamic batching**
  Fixed `sqrt` computation on non-tensor inputs to prevent `TypeError` and training instability when using dynamic batch sizes.
  [PR #7735](https://github.com/deepspeedai/DeepSpeed/pull/7735) · 🟣 **Merged**

---

### Cal.com
Open-source scheduling infrastructure powering production teams and enterprises.

- **Unblocked organization signup with pre-existing usernames**
  Fixed a constraint in the org signup flow that prevented enterprise users from onboarding with reserved or existing handles.
  [PR #25941](https://github.com/calcom/cal.com/pull/25941) · 🟣 **Merged**

---

## Featured Projects

**NuclaDB** — Vector search engine built from scratch in Go
HNSW indexing, product quantization, crash-safe WAL, mmap-backed snapshots, tenant isolation with quotas and rate limiting, per-shard Raft replication with automatic failover, gRPC/REST APIs, Prometheus/OpenTelemetry observability. Benchmarked head-to-head against a real Qdrant instance on the same SIFT dataset and recall target: **99.7% recall@10 at 4.9K QPS**, **53% less memory** than Qdrant at comparable recall, every number published in the repo including where NuclaDB loses.
*(Go, HNSW, Raft, WAL, mmap, gRPC, REST, Prometheus, OpenTelemetry)*
Docs: [Live](https://nucladb-demo.onrender.com/docs) · Repo: [GitHub](https://github.com/Rakshit-gen/NuclaDB)

**VantageEdge** — Multi-tenant API gateway in Go
Routes requests to tenant-registered origins by subdomain, JWT and scoped API-key auth, per-route rate limiting (load-tested at **100 req/sec sustained, 200-request bursts**), per-route Redis cache policies, origin health checks, full OpenTelemetry instrumentation.
*(Go, Redis, PostgreSQL, OpenTelemetry, Next.js)*
Demo: [Live](https://vantageedge.vercel.app/) · Repos: [Backend](https://github.com/Rakshit-gen/vantageEdge) | [Frontend](https://github.com/Rakshit-gen/vantageedge-fe)

**OpenSkill** — Claude skill manager CLI (open source)
Go CLI for defining and sharing reusable AI coding-agent skills across Claude, OpenAI, Groq, and Ollama, with a modular execution framework and sub-100ms local command resolution.
*(Go, Cobra CLI, LLMs: Claude/OpenAI/Groq/Ollama, Next.js)*
Demo: [Live](https://www.openskill.online/) · Repo: [GitHub](https://github.com/Rakshit-gen/openskill)

**SynthForce** — Multi-agent startup simulator
AI agents collaborate to generate MVP roadmaps and market simulations in real time.
*(FastAPI, Groq, MongoDB, WebSockets, Next.js)*
Demo: [Live](https://synth-force-fe.vercel.app/) · Repos: [Backend](https://github.com/Rakshit-gen/SynthForce) | [Frontend](https://github.com/Rakshit-gen/SynthForce-fe)

**SyncLayer** — Real-time collaborative board
Multi-user editing with WebSockets, Redis Pub/Sub, role-based access, and activity logs.
*(Go, PostgreSQL, Redis, Next.js)*
Demo: [Live](https://sync-layer.vercel.app/) · Repos: [Backend](https://github.com/Rakshit-gen/SyncLayer) | [Frontend](https://github.com/Rakshit-gen/SyncLayer-fe)

**SentralQ** — AI API debugger
Agentic system diagnosing auth, schema, and network failures with executable fixes.
*(LangGraph, FastAPI, Next.js, Groq)*
Demo: [Live](https://api-analyse-fe.vercel.app/) · Repos: [Backend](https://github.com/Rakshit-gen/API_Analyse) | [Frontend](https://github.com/Rakshit-gen/api_analyse_fe)

**Aegis** — Autonomous code review agents
LLM-powered agents analyzing codebases for architecture, security, and quality issues.
*(Python, FastAPI, Redis, Groq Llama 3.3)*
Demo: [Live](https://www.aegisagent.online) · Repos: [PR Agent](https://github.com/Rakshit-gen/agent-prm) | [Analyzer](https://github.com/Rakshit-gen/agent-code-manage)

**Slanine** — Production SaaS platform
25+ tools, Stripe payments, Redis caching, sub-200ms APIs.
*(Next.js, PostgreSQL, Docker)*
Demo: [Live](https://www.slanine.online/) · Repo: [GitHub](https://github.com/Rakshit-gen/Slanine)

**Qme** — Community platform
Posts, voting, media uploads with Redis caching (-42% load time).
*(Next.js, Redis, MongoDB)*
Demo: [Live](https://flyuphigh.vercel.app/) · Repo: [GitHub](https://github.com/Rakshit-gen/Questme)

## Technical Arsenal

Only what's backed by a shipped repo above or a production role, nothing untested.

```javascript
const rakshit = {
  backend: {
    languages: ["Go", "Python (FastAPI)", "Node.js/TypeScript (NestJS, Express)"],
    patterns: ["Microservices", "Event-Driven Systems"],
    apis: ["REST", "gRPC", "WebSockets"]
  },
  databases: {
    sql: ["PostgreSQL"],
    nosql: ["Redis", "MongoDB"],
    search: ["OpenSearch", "Qdrant"],
    storage: ["Amazon S3", "Cloudflare R2", "Supabase"]
  },
  frontend: {
    frameworks: ["Next.js", "React"]
  },
  cloud: {
    aws: ["EC2", "S3"],
    gcp: ["Cloud Run", "Pub/Sub", "BigQuery"],
    other: ["Vercel", "Render"]
  },
  devops: {
    container: ["Docker"],
    ci_cd: ["GitHub Actions"],
    observability: ["OpenTelemetry", "Prometheus"]
  },
  ai_ml: {
    frameworks: ["LangGraph"],
    providers: ["Groq (Llama 3.3)", "OpenAI", "Anthropic", "Ollama"],
    rag: ["RAG", "embeddings", "semantic chunking", "vector search (Qdrant, NuclaDB)"],
    agents: ["multi-agent systems", "LLM tool calling", "prompt evaluation (LLM-as-judge)"]
  }
};
```

## GitHub Analytics

<p align="center">
  <a href="https://github.com/ashutosh00710/github-readme-activity-graph">
    <img src="https://github-readme-activity-graph.vercel.app/graph?username=Rakshit-gen&theme=react-dark&hide_border=true" alt="Rakshit's github activity graph" />
  </a>
</p>

---

<p align="center">
  <i>"It's not who I am underneath, but what I do that defines me."</i>
</p>
