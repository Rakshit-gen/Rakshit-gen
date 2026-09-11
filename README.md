<h1 align="center">Rakshit Sisodiya</h1>
<h3 align="center">Backend Engineer, Applied AI / RAG Systems</h3>

<p align="center">
  <a href="https://rakshitsisodiya.xyz/">Portfolio</a> ·
  <a href="https://www.linkedin.com/in/rakshit-sisodiya/">LinkedIn</a> ·
  <a href="https://leetcode.com/sisodiarakshit456/">LeetCode</a>
</p>

<br/>

## About

I build production AI systems and the backend infrastructure underneath them, mostly in Go and Python.

At HSV Digital I built a document-intelligence layer end to end, including signed uploads, virus scanning, PDF normalization, vector and graph ingestion, and a citation-enforced chat system that refuses ungrounded answers. I also built an LLM evaluation harness that scores production prompts against live data using AI-judge rubrics.

At Wayground I worked on event infrastructure moving 50M+ daily events through Kafka/Pub/Sub into BigQuery at sub-30s latency on a platform serving 50M+ users.

Selected results:

| Metric | Result |
|---|---|
| Search latency | 78% reduction, under 280ms across 10M+ records |
| Quiz response latency | 42% reduction, 2.1s to 1.2s across 1M+ daily quizzes |
| API gateway throughput | 100 req/sec sustained, 200-req bursts, load-tested |
| Evaluation architecture | 6 methodologies, 34 competencies, 136 criteria |

I also contribute to open source, with merged fixes in Hugging Face Accelerate, DeepSpeed, and Cal.com.

---

## Open Source Contributions

### Hugging Face Accelerate

| PR | Fix |
|---|---|
| [#4217](https://github.com/huggingface/accelerate/pull/4217) | Fixed checkpoint RNG state restoration across multiple accelerator backends and added regression coverage |

### DeepSpeed

| PR | Fix |
|---|---|
| [#7742](https://github.com/deepspeedai/DeepSpeed/pull/7742) | Deadlock in checkpoint engine during subprocess failure |
| [#7736](https://github.com/deepspeedai/DeepSpeed/pull/7736) | NaN propagation in OneBitLamb from a 0/0 edge case |
| [#7740](https://github.com/deepspeedai/DeepSpeed/pull/7740) | Runtime crash in Nebula checkpoint commit from an API mismatch |
| [#7737](https://github.com/deepspeedai/DeepSpeed/pull/7737) | Crash in PEFT/LoRA-wrapped models during initialization |
| [#7735](https://github.com/deepspeedai/DeepSpeed/pull/7735) | Incorrect learning-rate scaling under dynamic batching |

### Cal.com

| PR | Fix |
|---|---|
| [#25941](https://github.com/calcom/cal.com/pull/25941) | Organization signup blocked by a pre-existing username constraint |

---

## Projects

### [Auralis](https://github.com/Rakshit-gen/auralis)

Distributed audio streaming platform built as 8 independently deployable Go/Python services with database-per-service isolation, event-driven architecture, transactional outbox, Kafka, asynchronous workers, and direct object-storage HLS streaming. Includes an AI media pipeline for story generation, neural TTS, FFmpeg processing, adaptive bitrate streaming, and recommendation read models rebuilt through event replay.

`Go, Python, Distributed Systems, Microservices, Kafka, PostgreSQL, Redis, HLS, S3/R2, AI/ML`

[Live](https://auralis-web-topaz.vercel.app/)

### [NuclaDB](https://github.com/Rakshit-gen/NuclaDB)

Distributed vector database built from scratch in Go with HNSW indexing, product quantization, crash-safe WAL, mmap-backed storage, per-shard Raft replication, automatic failover, and gRPC/REST APIs. Benchmarked against a live Qdrant instance at 99.7% recall@10 and 4.9K QPS with 53% less memory at comparable recall.

`Go, Distributed Systems, Vector Database, HNSW, Raft, WAL, mmap, gRPC, Prometheus`

[Live](https://nucladb-web.vercel.app/)

### [VantageEdge](https://github.com/Rakshit-gen/vantageEdge)

Production-style multi-tenant API gateway in Go with distributed request routing, JWT/API-key authentication, per-route rate limiting, Redis-backed caching, origin health checks, and end-to-end OpenTelemetry instrumentation. Load-tested at 100 req/sec sustained with 200-req bursts.

`Go, Distributed Systems, API Gateway, Redis, PostgreSQL, Rate Limiting, OpenTelemetry`

[Live](https://vantageedge.vercel.app/)

### [Inferoute](https://github.com/Rakshit-gen/inferoute)

OpenAI-compatible LLM inference gateway with health-checked model routing, automatic backend failover, unbuffered SSE streaming, semantic response caching backed by NuclaDB, and Prometheus observability. Cache hits measured at 0.8ms versus 706ms for uncached requests.

`Go, AI Infrastructure, LLM Gateway, Model Routing, SSE, Redis, Vector Search, Prometheus`

[Live](https://inferoute-lime.vercel.app/)

### [OpenSkill](https://github.com/Rakshit-gen/openskill)

CLI for managing reusable AI coding-agent skills across Claude, OpenAI, Groq, and Ollama, with provider abstraction and sub-100ms local command resolution.

`Go, AI Infrastructure, CLI, Provider Abstraction, Cobra`

[Live](https://www.openskill.online/)

### [SentralQ](https://github.com/Rakshit-gen/API_Analyse)

Agentic API debugger that combines LLM reasoning with executable diagnostics to identify authentication, schema, and network failures and generate fixes.

`Python, FastAPI, AI Agents, LangGraph, LLMs, Tool Calling, Groq`

[Live](https://api-analyse-fe.vercel.app/)

---

## Stack

**Backend:** Go, Python, FastAPI, TypeScript, Node.js, NestJS, Express  
**APIs:** REST, gRPC, WebSockets, SSE  
**Data:** PostgreSQL, Redis, MongoDB, OpenSearch, Qdrant, S3, R2, Supabase  
**Messaging:** Kafka, Pub/Sub  
**Cloud/Infra:** AWS, GCP, Docker, GitHub Actions, OpenTelemetry, Prometheus  
**AI/ML:** RAG, embeddings, vector search, LangGraph, multi-agent systems, LLM evaluation  
**LLM Providers:** OpenAI, Anthropic, Groq, Ollama

---

<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=Rakshit-gen&theme=react-dark&hide_border=true" alt="GitHub activity graph" width="800"/>
</p>
