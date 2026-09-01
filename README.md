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

At HSV Digital I built a document-intelligence layer end to end (signed uploads, virus scanning, PDF normalization, vector/graph ingestion), feeding a citation-enforced chat that refuses ungrounded answers. I also built an LLM evaluation harness that scores production prompts against live data using AI-judge rubrics. At Wayground I moved 50M+ daily events through Kafka/Pub-Sub into BigQuery at sub-30s latency, on a platform serving 50M+ users.

Selected results:

| Metric | Result |
|---|---|
| Search latency | 78% reduction, to under 280ms across 10M+ records |
| Quiz response latency | 42% reduction, 2.1s to 1.2s across 1M+ daily quizzes |
| API gateway throughput | 100 req/sec sustained, 200-req bursts, load-tested |
| Evaluation architecture | Migrated to rubric-first scoring: 6 methodologies, 34 competencies, 136 criteria |

I also ship open source, with merged fixes in DeepSpeed (Microsoft Research) and Cal.com.

---

## Open Source Contributions

**DeepSpeed (Microsoft Research)**
| PR | Fix |
|---|---|
| [#7742](https://github.com/deepspeedai/DeepSpeed/pull/7742) | Deadlock in checkpoint engine during subprocess failure |
| [#7736](https://github.com/deepspeedai/DeepSpeed/pull/7736) | NaN propagation in OneBitLamb from a 0/0 edge case |
| [#7740](https://github.com/deepspeedai/DeepSpeed/pull/7740) | Runtime crash in Nebula checkpoint commit (API mismatch) |
| [#7737](https://github.com/deepspeedai/DeepSpeed/pull/7737) | Crash in PEFT/LoRA-wrapped models during init |
| [#7735](https://github.com/deepspeedai/DeepSpeed/pull/7735) | Incorrect LR scaling under dynamic batching |

**Cal.com**
| PR | Fix |
|---|---|
| [#25941](https://github.com/calcom/cal.com/pull/25941) | Org signup blocked by pre-existing username constraint |

---

## Projects

**[NuclaDB](https://github.com/Rakshit-gen/NuclaDB)**
Vector search engine built from scratch in Go. HNSW indexing, product quantization, crash-safe WAL, mmap-backed snapshots, per-shard Raft replication with automatic failover, gRPC/REST APIs, Prometheus/OpenTelemetry observability. Benchmarked against a live Qdrant instance: 99.7% recall@10 at 4.9K QPS, 53% less memory at comparable recall. Full methodology and results, including where it loses, are published in the repo.
`Go, HNSW, Raft, WAL, gRPC, Prometheus`  
[Live](https://nucladb-web.vercel.app/)

**[VantageEdge](https://github.com/Rakshit-gen/vantageEdge)**
Multi-tenant API gateway in Go. Subdomain-based tenant routing, JWT/API-key auth, per-route rate limiting (load-tested at 100 req/sec sustained, 200-req bursts), per-route Redis cache policies, origin health checks, full OpenTelemetry instrumentation.
`Go, Redis, PostgreSQL, OpenTelemetry`  
[Live demo](https://vantageedge.vercel.app/)

**[Inferoute](https://github.com/Rakshit-gen/inferoute)**
OpenAI-compatible LLM inference gateway. Health-checked failover across backends, unbuffered SSE streaming, semantic response caching backed by NuclaDB, 880x faster on a cache hit (0.8ms vs 706ms).
`Go, Redis, NuclaDB, Prometheus`  
[Live](https://inferoute-lime.vercel.app/)

**[OpenSkill](https://github.com/Rakshit-gen/openskill)**
CLI for managing reusable AI coding-agent skills across providers (Claude, OpenAI, Groq, Ollama), with sub-100ms local command resolution.
`Go, Cobra CLI`  
[Live](https://www.openskill.online/)

**[SentralQ](https://github.com/Rakshit-gen/API_Analyse)**
Agentic API debugger that diagnoses auth, schema, and network failures with executable fixes.
`LangGraph, FastAPI, Groq`  
[Live](https://api-analyse-fe.vercel.app/)

**[SyncLayer](https://github.com/Rakshit-gen/SyncLayer)**
Real-time collaborative board with multi-user editing over WebSockets, Redis pub/sub, and role-based access.
`Go, PostgreSQL, Redis`  
[Live](https://sync-layer.vercel.app/)

---

## Stack

**Backend:** Go, Python (FastAPI), TypeScript/Node (NestJS, Express). REST, gRPC, WebSockets
**Data:** PostgreSQL, Redis, MongoDB, OpenSearch, Qdrant, S3/R2/Supabase
**Cloud/Infra:** AWS (EC2, S3), GCP (Cloud Run, Pub/Sub, BigQuery), Docker, GitHub Actions, OpenTelemetry, Prometheus
**AI/ML:** RAG, embeddings, vector search (Qdrant, NuclaDB), LangGraph, multi-agent systems, LLM-as-judge evaluation
**LLM providers:** OpenAI, Anthropic, Groq, Ollama

---

<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=Rakshit-gen&theme=react-dark&hide_border=true" alt="GitHub activity graph" width="800"/>
</p>
