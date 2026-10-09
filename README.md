<h1 align="center">Rakshit Sisodiya</h1>
<p align="center">Backend engineer working on distributed systems and applied AI</p>

<p align="center">
  <a href="https://rakshitsisodiya.xyz/one">Portfolio</a> ·
  <a href="https://www.linkedin.com/in/rakshit-sisodiya/">LinkedIn</a> ·
  <a href="https://leetcode.com/sisodiarakshit456/">LeetCode</a> ·
  <a href="mailto:sisodiarakshit456@gmail.com">Email</a>
</p>

## About

I work on backend services, event pipelines, and AI applications. Most of my work uses Go, Python, and TypeScript.

At HSV Digital, I built the document pipeline behind an AI sales-coaching product: signed uploads, virus scanning, PDF processing, and ingestion for retrieval. I also worked on chat citations, checks for unsupported answers, and an evaluation harness for testing prompts against product data.

At Wayground, I worked on an analytics pipeline moving 50M+ events a day through Kafka and Pub/Sub into BigQuery, with end-to-end latency under 30 seconds. My work also included search across 10M+ records and quiz-response performance.

Outside work, I build tools to learn how their internals work and contribute fixes to open-source projects.

## Open source

Selected merged pull requests. Each link includes the change and review discussion.

| Project | PR | Change |
| --- | --- | --- |
| DeepSpeed | [#8758](https://github.com/deepspeedai/DeepSpeed/pull/8758) | Fixed an indexing error when DataAnalyzer runs a selected subset of workers. |
| DeepSpeed | [#8421](https://github.com/deepspeedai/DeepSpeed/pull/8421) | Skipped missing metrics when selecting the best autotuning result. |
| DeepSpeed | [#7742](https://github.com/deepspeedai/DeepSpeed/pull/7742) | Added bounded waits and cleanup for checkpoint subprocess failures. |
| DeepSpeed | [#7736](https://github.com/deepspeedai/DeepSpeed/pull/7736) | Prevented empty parameters from introducing NaNs into OneBitLamb scaling. |
| DeepSpeed | [#7740](https://github.com/deepspeedai/DeepSpeed/pull/7740) | Passed the expected commit-info object to the Nebula checkpoint engine. |
| DeepSpeed | [#7737](https://github.com/deepspeedai/DeepSpeed/pull/7737) | Fixed model-config handling for PEFT-wrapped models. |
| DeepSpeed | [#7735](https://github.com/deepspeedai/DeepSpeed/pull/7735) | Fixed a float/Tensor mismatch in dynamic-batch learning-rate scaling. |
| Expo | [#49302](https://github.com/expo/expo/pull/49302) | Fixed a CORS hostname regex accepting non-loopback hosts. |
| Expo | [#49305](https://github.com/expo/expo/pull/49305) | Used UTF-8 byte length for the inspector response's Content-Length. |
| Hugging Face Accelerate | [#4217](https://github.com/huggingface/accelerate/pull/4217) | Restored RNG state independently for available accelerator backends. |
| Cal.com / Cal.diy | [#25941](https://github.com/calcom/cal.diy/pull/25941) | Scoped signup username checks to the organization. |

<details>
<summary>Currently open DeepSpeed PRs</summary>

| PR | Proposed change |
| --- | --- |
| [#8788](https://github.com/deepspeedai/DeepSpeed/pull/8788) | Save and restore the data sampler's own RNG state when resuming training. |
| [#8751](https://github.com/deepspeedai/DeepSpeed/pull/8751) | Preserve each parameter group's beta2 in OneCycle. |
| [#8753](https://github.com/deepspeedai/DeepSpeed/pull/8753) | Make the initial learning rate available before OneCycle's first step. |
| [#8755](https://github.com/deepspeedai/DeepSpeed/pull/8755) | Report a clear error when --exclude removes every launch slot. |

</details>

## Projects

### [NuclaDB](https://github.com/Rakshit-gen/NuclaDB)

A vector search engine written in Go, with HNSW indexing, a write-ahead log, mmap snapshots, tenant isolation, and gRPC/REST APIs.

The repository also includes product quantization and Raft-based sharding packages, tested separately. Neither is wired into the running server yet.

On a 10,000-vector SIFT benchmark at efSearch=50: **10.7K queries/s, 0.996 recall@10, and about 46 MB RSS**. Qdrant used about 115 MB in the same comparison. Results use the median of five measured passes.

[Demo](https://nucladb-web.vercel.app/) · [Benchmark details](https://github.com/Rakshit-gen/NuclaDB/blob/main/bench/results.md)

### [VantageEdge](https://github.com/Rakshit-gen/vantageEdge)

A Go API gateway that routes requests by tenant and path. Routes have their own authentication, rate limits, cache settings, and origin pools. The control plane pushes configuration changes to gateway instances over gRPC.

Local benchmarks measured **about 70K req/s for passthrough**, 37K for Redis cache hits, and 16K with Redis rate limiting. Passthrough added about 0.5ms p50 over a direct origin call. The gateway, load generator, mock origin, PostgreSQL, and Redis shared one 10-core machine.

[Demo](https://vantageedge.vercel.app/) · [Benchmark details](https://github.com/Rakshit-gen/vantageEdge#performance)

### [inferoute](https://github.com/Rakshit-gen/inferoute)

A Go gateway for OpenAI-compatible LLM endpoints. It routes by model, retries healthy backends after failures, forwards SSE chunks as they arrive, and supports rate limiting and a NuclaDB-backed response cache.

Cache hits averaged **0.8ms** in a local test. Misses averaged 706ms against a mock backend with an artificial 700ms delay.

[Demo](https://inferoute-lime.vercel.app/) · [Benchmark details](https://github.com/Rakshit-gen/inferoute#benchmarks)

### [Auralis](https://github.com/Rakshit-gen/auralis)

An audio streaming platform with eight Go/Python services for accounts, content, playback, recommendations, audio generation, and analytics.

State changes and their events are written together through a transactional outbox, then relayed to Kafka. Audio streams from object storage as HLS. The generation pipeline writes scripts, synthesizes speech, and packages audio with FFmpeg.

[Demo](https://auralis-web-topaz.vercel.app/) · [Architecture](https://github.com/Rakshit-gen/auralis/blob/master/docs/ARCHITECTURE.md)

<details>
<summary>More projects</summary>

#### [OpenSkill](https://github.com/Rakshit-gen/openskill)

A Go CLI for creating, editing, validating, and versioning AI coding-agent skills. Skills are stored as Markdown files. Generation supports OpenAI, Anthropic, Groq, and Ollama.

[Website](https://www.openskill.online/)

#### [SentralQ](https://github.com/Rakshit-gen/API_Analyse)

A FastAPI/LangGraph application for investigating API errors. It examines requests, responses, authentication, and schemas, and returns suggested fixes. Tools support HTTP requests and JWT inspection.

[Demo](https://api-analyse-fe.vercel.app/)

</details>

## Stack

| Area | Tools |
| --- | --- |
| Languages | Go, Python, TypeScript, SQL |
| Backend | NestJS, FastAPI, Node.js, REST, gRPC |
| Data and messaging | PostgreSQL, Redis, MongoDB, OpenSearch, Kafka, Pub/Sub |
| Infrastructure | AWS, GCP, Docker, GitHub Actions, OpenTelemetry, Prometheus |
| Applied AI | Retrieval, embeddings, vector search, LangGraph, prompt evaluation |

<details>
<summary>GitHub activity</summary>

<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=Rakshit-gen&theme=react-dark&hide_border=true" alt="Rakshit's GitHub contribution activity" width="800" />
</p>

</details>

