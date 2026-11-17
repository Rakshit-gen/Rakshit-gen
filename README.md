
<h1 align="center">Rakshit Sisodiya</h1>

<p align="center">
  Software Engineer · Backend Systems, Infrastructure & Applied AI
</p>

<p align="center">
  <a href="https://rakshitsisodiya.xyz/one">Portfolio</a> ·
  <a href="https://www.linkedin.com/in/rakshit-sisodiya/">LinkedIn</a> ·
  <a href="https://leetcode.com/sisodiarakshit456/">LeetCode</a> ·
  <a href="mailto:sisodiarakshit456@gmail.com">Email</a>
</p>

## About

I'm a software engineer interested in distributed systems, databases,
infrastructure, and applied AI. I primarily work with Go, Python,
and TypeScript, and increasingly with Rust.

Previously, I worked at:

- **HSV Digital:** Built backend services for an AI sales-coaching
  platform, including document ingestion, asynchronous processing,
  retrieval, tool calling, and evaluation pipelines. Worked on
  citation enforcement and response validation, reducing unsupported
  AI responses from 18% to below 0.3% in internal evaluations.
- **Wayground (formerly Quizizz):** Worked on an analytics pipeline
  processing 50M+ events per day through Kafka, Pub/Sub, and BigQuery
  with end-to-end latency under 30 seconds. Improved search p95
  latency from 1.2 seconds to below 280 milliseconds across
  10M+ records.

Outside work, I build systems from scratch to understand their
internals, benchmark their behavior, and contribute fixes to
open-source infrastructure.

## Selected projects

### [NuclaDB](https://github.com/Rakshit-gen/NuclaDB) | Go

A vector search engine built from scratch with HNSW indexing,
write-ahead logging, mmap-backed snapshots, tenant isolation,
resource quotas, and gRPC/REST APIs.

Benchmarked against Qdrant on SIFT-1M using one million
128-dimensional vectors and 10,000 ground-truth queries.

| Metric (efSearch = 50) | NuclaDB | Qdrant |
| --- | ---: | ---: |
| Recall@10 | 0.9550 | 0.9535 |
| Queries/sec | 5,259 | 2,390 |
| p95 latency | 0.29 ms | 0.50 ms |
| Resident memory | 1,469 MB | 668 MB |

Both engines ran locally over gRPC. Qdrant was configured with
one indexed segment. NuclaDB achieved higher throughput in this
configuration but consumed more memory.

Product quantization and Raft-replicated sharding exist as
separately tested packages and are not integrated into the
running server.

[Demo](https://nucladb-web.vercel.app/) ·
[Benchmark results](https://github.com/Rakshit-gen/NuclaDB/blob/main/bench/results-sift1m.md)

### [shortcut](https://github.com/Rakshit-gen/shortcut) | Go

A road-routing engine built on OpenStreetMap data. Implements
Dijkstra, bidirectional Dijkstra, A*, landmark-based search
(ALT), and Contraction Hierarchies.

Uses compressed sparse row graph storage, spatial indexing,
indexed priority queues, and shortcut preprocessing.

Benchmarked on a South India road network containing
26.86 million nodes and 55.85 million directed edges.

| Algorithm | Median query latency |
| --- | ---: |
| Dijkstra | 2.56 s |
| Bidirectional Dijkstra | 1.83 s |
| A* | 1.59 s |
| ALT | 134 ms |
| Contraction Hierarchies | 0.98 ms |

Contraction Hierarchies recorded 4.13 ms p99 across 10,000
random routing queries. All four optimized algorithms matched
Dijkstra on 100 correctness-check queries.

Measurements were collected locally on an Apple M4 with 16 GB RAM.
Turn restrictions and explicit road speed-limit tags are not
supported yet.

[Implementation and benchmarks](https://github.com/Rakshit-gen/shortcut)

### [VantageEdge](https://github.com/Rakshit-gen/vantageEdge) | Go

A multi-tenant API gateway with per-route authentication,
rate limiting, response caching, origin pools, and a gRPC
configuration control plane.

Local load-test results:

- Passthrough proxy: approximately 70K requests/sec.
- Redis-backed response cache: approximately 37K requests/sec.
- Redis-backed rate limiting: approximately 16K requests/sec.
- Additional passthrough latency: approximately 0.5 ms p50.

The gateway, load generator, mock origin, PostgreSQL, and
Redis shared a single 10-core machine.

[Demo](https://vantageedge.vercel.app/) ·
[Benchmarks](https://github.com/Rakshit-gen/vantageEdge#performance)

### [presign](https://github.com/Rakshit-gen/presign) | Rust

An offline Ethereum transaction and signature analyzer that
explains what a wallet is being asked to authorize before signing.

Decodes and inspects:

- ERC-20 allowances and NFT operator approvals.
- EIP-2612 Permit and Permit2 signatures.
- EIP-712 typed data and signing hashes.
- Safe delegatecalls, MultiSend batches, and ownership changes.
- Seaport orders, EIP-7702 delegations, and blind signatures.

Available as a CLI and Rust library, with structured JSON output
for integration into other tools.

The test suite verifies verdicts across 22 handcrafted fixtures,
including a reconstruction of the delegatecall pattern used in
the February 2025 Bybit incident.

The current implementation performs static analysis. It does not
simulate transactions, and real-world detection accuracy and
false-positive rates have not been measured.

[Source and detection rules](https://github.com/Rakshit-gen/presign)

### [Inferoute](https://github.com/Rakshit-gen/inferoute) | Go

An OpenAI-compatible inference gateway with model-based routing,
health-checked failover, SSE streaming, API-key authentication,
distributed rate limiting, and semantic response caching
through NuclaDB.

Local benchmarks:

- Approximately 65K requests/sec against mock inference backends.
- Approximately 0.5 ms median proxy overhead.
- Zero failed requests across approximately 700K requests
  in a controlled two-backend failover test.
- Semantic cache hits averaged 0.8 ms versus 705.7 ms on misses
  against a mock backend with an artificial 700 ms delay.

These measurements characterize gateway behavior, rather than
GPU inference throughput.

[Demo](https://inferoute-lime.vercel.app/) ·
[Benchmarks](https://github.com/Rakshit-gen/inferoute#benchmarks)

### [Auralis](https://github.com/Rakshit-gen/auralis) | Go, Python, Java

A serialized audio streaming platform built across nine
independently deployable backend services.

- Go services for authentication, content, playback,
  user activity, analytics, and API routing.
- Python services for recommendations and AI audio generation.
- Java Spring Boot service for episode notifications.
- Kafka-based asynchronous communication and transactional outbox.
- Service-owned PostgreSQL databases.
- HLS streaming through S3-compatible object storage.
- Asynchronous script generation, speech synthesis,
  and FFmpeg audio processing.

[Demo](https://auralis-web-topaz.vercel.app/) ·
[Architecture](https://github.com/Rakshit-gen/auralis/blob/master/docs/ARCHITECTURE.md)

### [firstlook](https://github.com/Rakshit-gen/firstlook) | Python

An incident investigation agent built with LangGraph that
examines metrics, logs, deployments, dependencies, and runbooks
to identify potential root causes.

Implements bounded tool execution, structured outputs,
evidence validation, persistent execution state, and
human approval before remediation.

Includes eight reproducible incident scenarios and
90 automated tests requiring no external API calls.

Verified using scripted model execution and a rules-based
baseline. Live model evaluation results are not published,
and remediation against real infrastructure is dry-run only.

<details>
<summary>Other projects</summary>

#### [OpenSkill](https://github.com/Rakshit-gen/openskill)

A Go CLI for creating, validating, editing, and versioning
AI coding-agent skills stored as Markdown.

Supports OpenAI, Anthropic, Groq, and Ollama.

[Website](https://www.openskill.online/)

#### [SentralQ](https://github.com/Rakshit-gen/API_Analyse)

A FastAPI and LangGraph application for investigating API
failures through request inspection, response analysis,
authentication checks, and schema validation.

[Demo](https://api-analyse-fe.vercel.app/)

</details>

## Open-source contributions

Selected merged contributions across machine learning
infrastructure, developer tooling, and backend systems.

| Project | Pull request | Contribution |
| --- | --- | --- |
| DeepSpeed | [#8758](https://github.com/deepspeedai/DeepSpeed/pull/8758) | Fixed indexing when DataAnalyzer runs a selected subset of workers. |
| DeepSpeed | [#8421](https://github.com/deepspeedai/DeepSpeed/pull/8421) | Fixed autotuning failures when experiments produce no metric. |
| DeepSpeed | [#7742](https://github.com/deepspeedai/DeepSpeed/pull/7742) | Added bounded waits and failure cleanup for checkpoint subprocesses. |
| DeepSpeed | [#7736](https://github.com/deepspeedai/DeepSpeed/pull/7736) | Prevented empty parameters from introducing NaNs into OneBitLamb scaling. |
| DeepSpeed | [#7740](https://github.com/deepspeedai/DeepSpeed/pull/7740) | Fixed the Nebula checkpoint engine commit API mismatch. |
| DeepSpeed | [#7737](https://github.com/deepspeedai/DeepSpeed/pull/7737) | Fixed configuration handling for PEFT-wrapped models. |
| DeepSpeed | [#7735](https://github.com/deepspeedai/DeepSpeed/pull/7735) | Fixed a float/Tensor mismatch in learning-rate scaling. |
| Hugging Face Accelerate | [#4217](https://github.com/huggingface/accelerate/pull/4217) | Restored RNG state independently across available accelerator backends. |
| Expo | [#49302](https://github.com/expo/expo/pull/49302) | Fixed a CORS hostname regex accepting non-loopback origins. |
| Expo | [#49305](https://github.com/expo/expo/pull/49305) | Corrected HTTP Content-Length for UTF-8 response bodies. |
| Future AGI | [#2415](https://github.com/future-agi/future-agi/pull/2415) | Contributed the original fix for missing evaluation failure records. |
| Future AGI | [#2448](https://github.com/future-agi/future-agi/pull/2448) | Fixed inconsistent invitation expiry handling across resend endpoints. |
| Cal.diy | [#25941](https://github.com/calcom/cal.diy/pull/25941) | Scoped signup username checks to the organization. |

<details>
<summary>Selected open contributions</summary>

These pull requests are proposals and have not been counted
as merged contributions.

| Project | PR | Proposed change |
| --- | --- | --- |
| DeepSpeed | [#8788](https://github.com/deepspeedai/DeepSpeed/pull/8788) | Restore data sampler RNG state when resuming training. |
| DeepSpeed | [#8751](https://github.com/deepspeedai/DeepSpeed/pull/8751) | Preserve each optimizer parameter group's beta2 in OneCycle. |
| DeepSpeed | [#8753](https://github.com/deepspeedai/DeepSpeed/pull/8753) | Expose the initial learning rate before the first scheduler step. |
| DeepSpeed | [#8755](https://github.com/deepspeedai/DeepSpeed/pull/8755) | Handle launcher configurations with no remaining execution slots. |
| Supabase Auth | [#2811](https://github.com/supabase/auth/pull/2811) | Recognize PostgreSQL unique-constraint violations correctly. |
| Supabase Auth | [#2813](https://github.com/supabase/auth/pull/2813) | Prevent internal refresh-token errors from leaking to clients. |
| Prometheus | [#19985](https://github.com/prometheus/prometheus/pull/19985) | Correct metric prefix selection after numeric rounding. |
| HydraDB | [#226](https://github.com/hydra-db/hydradb/pull/226) | Tighten certificate-chain verification for pinned mTLS certificates. |
| Temporal | [#11752](https://github.com/temporalio/temporal/pull/11752) | Bound schedule-to-close timeouts for worker deployment activities. |
| Temporal | [#11777](https://github.com/temporalio/temporal/pull/11777) | Preserve resource-exhaustion errors from the search attribute provider. |
| Ollama | [#18194](https://github.com/ollama/ollama/pull/18194) | Preserve context configuration when requests omit num_ctx. |
| Ollama | [#18191](https://github.com/ollama/ollama/pull/18191) | Resolve Torch model paths through the supplied filesystem abstraction. |

</details>

[All merged pull requests](https://github.com/pulls?q=is%3Apr+author%3ARakshit-gen+is%3Amerged) ·
[Open pull requests](https://github.com/pulls?q=is%3Apr+author%3ARakshit-gen+is%3Aopen)

## Technical stack

| Area | Technologies |
| --- | --- |
| Languages | Go, Python, TypeScript, Java, Rust, SQL |
| Backend | NestJS, FastAPI, Spring Boot, Node.js, REST, gRPC |
| Databases | PostgreSQL, Redis, MongoDB, OpenSearch, BigQuery |
| Messaging | Kafka, Pub/Sub, BullMQ |
| Infrastructure | AWS, GCP, Docker, Kubernetes, Terraform, GitHub Actions |
| Observability | OpenTelemetry, Prometheus, Grafana |
| Applied AI | LangGraph, RAG, embeddings, vector search, tool calling, prompt evaluation |

<details>
<summary>GitHub contribution activity</summary>

<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=Rakshit-gen&theme=react-dark&hide_border=true" alt="GitHub contribution activity" width="800" />
</p>

</details>
