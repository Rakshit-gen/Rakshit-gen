<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&pause=1000&color=F75C7E&center=true&vCenter=true&random=false&width=600&lines=Hey+there%2C+I'm+Rakshit+%F0%9F%91%8B;Backend+Engineer+%7C+System+Designer;Shipping+Production-Grade+Software;Building+at+50M%2B+DAU+Scale" alt="Typing SVG" />
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

AI Backend Engineer building and operating production systems handling **1M+ events/day** and **50M+ DAU**. I ship high-throughput services in **Go** and **Python**, optimize queries over millions of rows, and design APIs that stay fast under load.

Focused on **measurable impact**: ~**40%** query latency reductions and **sub-50ms p50** API gateways.  
Active open-source contributor to **DeepSpeed**, **Cal.com**, and **LangGraph**, fixing real production issues in widely used systems.

**Current focus**
- Distributed systems and event pipelines  
- Multi-agent AI for real products  
- Performance tuning across DB, cache, and network layers

<hr/>

## Open Source Contributions (Selected)

### DeepSpeed (Microsoft Research)
High-performance training infrastructure used at scale for large models.

- **Fix crash with PEFT / LoRA-wrapped Hugging Face models**  
  Prevented runtime crashes when combining DeepSpeed attention with PEFT adapters.  
  [PR #7737](https://github.com/deepspeedai/DeepSpeed/pull/7737) · **Merged**

- **Fix TypeError in sqrt LR scaling with dynamic batching**  
  Restored correct learning-rate scaling and training stability under dynamic batch sizes.  
  [PR #7735](https://github.com/deepspeedai/DeepSpeed/pull/7735) · **Merged**

- **Fix NaN propagation in OneBitLamb optimizer (empty parameters)**  
  Improved numerical stability for distributed optimizer edge cases with filtered parameter groups.  
  [PR #7736](https://github.com/deepspeedai/DeepSpeed/pull/7736) · **Merged**

---

### Cal.com
Open-source scheduling infrastructure powering production teams and enterprises.

- **Allow organizations to sign up with existing usernames**  
  Unblocked enterprise onboarding and resolved production integration constraints.  
  [PR #25941](https://github.com/calcom/cal.com/pull/25941) · **Merged**

---

### LangGraph (LangChain AI)
Framework for building and checkpointing agentic workflows.

- **Preserve `StrEnum` types during checkpoint serialization**  
  Ensured correct state recovery and reproducibility in long-running agent workflows.  
  [PR #6602](https://github.com/langchain-ai/langgraph/pull/6602) · **Under Review**

<br/>

---

## Featured Projects

**NevraAI** — AI-generated podcast pipeline  
End-to-end system converting topics → scripts → voice → audio with async processing and vector search.  
*(FastAPI, Next.js, PostgreSQL, Redis, Qdrant, HuggingFace, GCP TTS)*  
Demo: [Live](https://nervaai.vercel.app/) · Repo: [GitHub](https://github.com/Rakshit-gen/nerva)

**OpenSkill** (**Open Source**) — Claude skill manager CLI Command-line tool 
For creating and managing Claude skills with AI-powered content generation. 
Define reusable skill definitions that enhance Claude's capabilities. 

*(Go, Cobra CLI, multi-provider LLMs (Groq, OpenAI, Anthropic, Ollama), Next.js)*
Demo: [Live](https://www.openskill.online/) · Repo: [OpenSkill](https://github.com/Rakshit-gen/openskill) 


**SynthForce** — Multi-agent startup simulator  
AI agents collaborate to generate MVP roadmaps and market simulations in real time.  
*(FastAPI, Groq, MongoDB, WebSockets, Next.js)*  
Demo: [Live](https://synth-force-fe.vercel.app/) · Repos: [Backend](https://github.com/Rakshit-gen/SynthForce) | [Frontend](https://github.com/Rakshit-gen/SynthForce-fe)

**VantageEdge** — Low-latency API gateway  
<10ms p50 gateway with rate limiting, load balancing, and real-time SSE analytics.  
*(Go, Redis, PostgreSQL, Next.js)*  
Demo: [Live](https://vantageedge.vercel.app/) · Repos: [Backend](https://github.com/Rakshit-gen/vantageEdge) | [Frontend](https://github.com/Rakshit-gen/vantageedge-fe)

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

<p align="center">
  <a href="https://github.com/rakshit-gen">
    <img src="https://github-readme-stats.vercel.app/api?username=rakshit-gen&show_icons=true&theme=react&hide_border=true&include_all_commits=true&count_private=true&bg_color=20232a&title_color=61dafb&icon_color=61dafb&text_color=ffffff" alt="Rakshit's GitHub Stats" />
  </a>
</p>

<!-- Activity Graph -->
<p align="center">
  <a href="https://github.com/ashutosh00710/github-readme-activity-graph">
    <img src="https://github-readme-activity-graph.vercel.app/graph?username=Rakshit-gen&theme=react-dark&hide_border=true" alt="Rakshit's github activity graph" />
  </a>
</p>

<!-- Trophy Collection -->


---

<p align="center">
  <i>"It’s not who I am underneath, but what I do that defines me."</i>
</p>


---
