
<h1 align="center">Rakshit Sisodiya</h1>

<p align="center">
  Software Engineer | Backend, Distributed Systems & AI Infrastructure
</p>

<p align="center">
  <a href="https://rakshitsisodiya.xyz/one">Portfolio</a> ·
  <a href="https://www.linkedin.com/in/rakshit-sisodiya/">LinkedIn</a> ·
  <a href="mailto:sisodiarakshit456@gmail.com">Email</a>
</p>

## About

I build backend systems, databases, infrastructure tools, and AI applications. Previously at HSV Digital and Wayground (Quizizz).

- **HSV Digital:** Document ingestion, retrieval, AI evaluation, and asynchronous processing. Reduced unsupported AI responses from 18% to below 0.3% in internal evaluations.
- **Wayground:** Worked on analytics infrastructure processing 50M+ events daily and reduced search p95 latency from 1.2s to below 280ms across 10M+ records.

## Projects

| Project | Description |
| --- | --- |
| [NuclaDB](https://github.com/Rakshit-gen/NuclaDB) | Go vector search engine with HNSW, WAL and mmap persistence. 5.2K QPS at 95.5% recall@10 on SIFT-1M. |
| [shortcut](https://github.com/Rakshit-gen/shortcut) | Go road-routing engine using Contraction Hierarchies. 26.8M nodes, 0.98ms median query latency. |
| [presign](https://github.com/Rakshit-gen/presign) | Rust-based Ethereum signature risk analyzer covering Permit2, EIP-712, Safe delegatecalls and wallet-draining patterns. |
| [VantageEdge](https://github.com/Rakshit-gen/vantageEdge) | Multi-tenant API gateway with distributed rate limiting, caching and a gRPC control plane. 70K req/s in local passthrough benchmarks. |
| [Inferoute](https://github.com/Rakshit-gen/inferoute) | LLM inference gateway with backend failover, SSE streaming and semantic caching. 0.8ms mean cache-hit latency in local tests. |
| [Auralis](https://github.com/Rakshit-gen/auralis) | Audio streaming platform with nine Go, Python and Java services, Kafka, transactional outbox and HLS. |
| [firstlook](https://github.com/Rakshit-gen/firstlook) | Incident investigation agent with tool calling, evidence validation and human-approved remediation in a simulated environment. |

Benchmark methodology, implementation status and limitations are documented in each repository.

## Open Source

Selected merged contributions:

| Project | Contributions |
| --- | --- |
| DeepSpeed | Checkpoint reliability, optimizer correctness, autotuning and distributed training fixes. [7 merged PRs](https://github.com/deepspeedai/DeepSpeed/pulls?q=is%3Apr+author%3ARakshit-gen+is%3Amerged) |
| Hugging Face Accelerate | [RNG state restoration across accelerator backends](https://github.com/huggingface/accelerate/pull/4217) |
| Expo | [CORS validation](https://github.com/expo/expo/pull/49302), [HTTP Content-Length correction](https://github.com/expo/expo/pull/49305) |
| Future AGI | [Evaluation failure handling](https://github.com/future-agi/future-agi/pull/2415), [Invitation expiry](https://github.com/future-agi/future-agi/pull/2448) |
| Cal.diy | [Organization-scoped username validation](https://github.com/calcom/cal.diy/pull/25941) |

Additional open contributions across Temporal, Ollama, Supabase, Prometheus and HydraDB.

[13 selected merged PRs](https://github.com/pulls?q=is%3Apr+author%3ARakshit-gen+is%3Amerged) · [Open PRs](https://github.com/pulls?q=is%3Apr+author%3ARakshit-gen+is%3Aopen)

## Technologies

**Languages:** Go, Python, TypeScript, Java, Rust, SQL

**Systems:** PostgreSQL, Redis, Kafka, OpenSearch, gRPC

**Infrastructure:** AWS, GCP, Docker, Kubernetes, Terraform, OpenTelemetry

**AI:** LangGraph, RAG, vector search, tool calling, LLM evaluation
