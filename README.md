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

## Featured Projects

**NevraAI** — AI-generated podcast pipeline  
End-to-end system converting topics → scripts → voice → audio with async processing and vector search.  
*FastAPI, Next.js, PostgreSQL, Redis, AWS S3, Qdrant, HuggingFace, GCP TTS*  
Repo: https://github.com/Rakshit-gen/nerva

**SynthForce** — Multi-agent startup simulator  
AI agents (CEO, PM, Eng, Sales) collaborate to generate MVP roadmaps and market simulations in real time.  
*FastAPI, Groq, MongoDB, WebSockets, Next.js*  
Repos: https://github.com/Rakshit-gen/SynthForce | https://github.com/Rakshit-gen/SynthForce-fe

**VantageEdge** — Low-latency API gateway  
<10ms p50 gateway with rate limiting, load balancing, and real-time SSE analytics.  
*Go, Redis, PostgreSQL, Next.js*  
Repos: https://github.com/Rakshit-gen/vantageEdge | https://github.com/Rakshit-gen/vantageedge-fe

**SyncLayer** — Real-time collaborative board  
Multi-user editing with WebSockets, Redis Pub/Sub, role-based access, and activity logs.  
*Go, PostgreSQL, Redis, Next.js*  
Repos: https://github.com/Rakshit-gen/SyncLayer | https://github.com/Rakshit-gen/SyncLayer-fe

**SentralQ** — AI API debugger  
Agentic system diagnosing auth, schema, and network failures with executable fixes.  
*LangGraph, FastAPI, Next.js, Groq*  
Repos: https://github.com/Rakshit-gen/API_Analyse | https://github.com/Rakshit-gen/api_analyse_fe

**Aegis** — Autonomous code review agents  
LLM-powered agents analyzing codebases for architecture, security, and quality issues.  
*Python, FastAPI, Redis, Groq Llama 3.3*  
Repos: https://github.com/Rakshit-gen/agent-prm | https://github.com/Rakshit-gen/agent-code-manage

**Slanine** — Production SaaS platform  
25+ tools, Stripe payments, Redis caching, sub-200ms APIs.  
*Next.js, PostgreSQL, Docker*  
Repo: https://github.com/Rakshit-gen/Slanine

**Qme** — Community platform  
Posts, voting, media uploads with Redis caching (-42% load time).  
*Next.js, Redis, MongoDB*  
Repo: https://github.com/Rakshit-gen/Questme



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
