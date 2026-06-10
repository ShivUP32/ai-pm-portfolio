# Multi-Agent Framework

**Multi-Agent Platform · Case Study 01**

Reusable orchestration platform powering Support, English Teacher, and Doubt Solver agents.

**3× Faster Integration**

---

## Overview

A reusable framework that lets us spin up new conversational agents in two weeks instead of six. Three agents — Support, English Teacher, and Doubt Solver — now share one orchestration layer (a central orchestrator that loads each agent's persona at runtime and routes conversation turns through a shared core), one memory system, one tool registry, and one analytics pipeline. Each agent keeps its own persona, knowledge, and tool catalog.

> **Interview framing:** This is a *centrally-orchestrated multi-agent platform* — one orchestrator dispatches to one active agent per conversation turn. This differs from autonomous multi-agent systems (like LangGraph or AutoGen) where agents route tasks to each other independently.

| | |
|---|---|
| **Role** | Product Manager / Lead |
| **Timeline** | [add duration] |
| **Team** | [add team size and composition] |
| **Stack** | LLM (OpenAI / Anthropic), vector store for RAG, in-house orchestration layer |

---

## Context

We were running three conversational AI products in parallel:

- A **Support Agent** answering customer queries and integrating with our ticketing system
- An **English Teacher** giving learners real-time conversational practice with corrections
- A **Doubt Solver** helping students work through academic problems step-by-step

Each one started its life as a separate project. Different team, different timeline, different codebase. By the time we had three in production, we were maintaining three nearly-identical stacks — and the cost of adding a fourth agent was the same as building the first.

---

## The problem

The duplication was eating the team alive.

- **Six weeks** to launch every new agent. Most of that was rebuilding the same plumbing: NLU, dialog management, memory, tool integration, analytics.
- **N× engineering effort** for every fix. A bug in conversation memory had to be patched in three places.
- **Inconsistent UX**. The Support Agent handled handoff differently from the Doubt Solver. The English Teacher remembered user preferences; the others didn't.
- **Improvements stranded**. A better intent classifier shipped to one agent never reached the others.

The deeper issue was strategic. If we couldn't ship new agents quickly, we couldn't test new product ideas. Every agent concept was a six-week commitment before we knew if it would resonate.

---

## Goals

1. Cut new-agent integration time from six weeks to two
2. Share improvements automatically across all agents
3. Keep each agent's unique persona, knowledge, and tools intact
4. Make the framework owned by one team, with agent personas owned by product squads

---

## Approach

I led the design of a layered framework. The work started with an audit: I mapped every component across the three agents and labeled each as either *shared* (the same across all) or *specific* (the thing that makes the agent feel different).

The split that emerged:

**Shared core (~70% of every agent)**
- Conversation engine — NLU, dialog manager, response generator
- Memory and context — session, long-term, vector store for RAG
- Tool registry and selector — function calling, ReAct loop
- Channel adapters — web, app, voice, WhatsApp
- Safety and guardrails — PII, moderation, audit
- Analytics and observability — logs, metrics, conversation replay
- **Orchestrator and persona loader** — the central component that loads each agent's persona config at runtime, manages multi-turn conversation state, and dispatches turns through the shared core

**Per-agent persona layer (~30%)**
- System prompts and behavior rules
- Tool catalog (which tools this agent can call)
- Knowledge base bindings (RAG sources for this agent)
- Persona configuration (tone, style, escalation rules)

The architectural rule we held to: **shared is reusable, per-agent is what makes the agent feel different.** Anything else got pushed down into the core.

**What the orchestrator does (and doesn't do):**
The orchestrator is the runtime engine — it reads a persona config file, loads the right prompts and tools, and routes each conversation turn through the shared core. It manages agent lifecycle: init, multi-turn state, and teardown. It does *not* autonomously route between agents or spawn sub-agents. One orchestrator, one active agent per session. Cross-agent transitions happen explicitly via the shared user identity layer, not automatic orchestration.

---

## Solution

The framework runs as a central service. Each agent is configured declaratively — a persona file specifies the prompts, tools, knowledge sources, and behavior rules. The orchestrator loads this at runtime and routes the conversation through the shared core.

A few design choices worth noting:

- **Tools are registered centrally**, not embedded in agent code. Adding a new tool means writing it once and exposing it to whichever agents need it.
- **Memory is namespaced per user and per agent**, so the English Teacher doesn't accidentally see a user's support tickets. Each agent's memory is isolated by design.
- **Evaluation harness is shared**. Every agent gets regression tests, quality scoring, and A/B infrastructure for free.
- **Persona is hot-reloadable**. Product teams iterate on prompts and tool catalogs without touching framework code.

---

## The three agents on the framework

**Support Agent** — Resolves customer issues end-to-end. Integrates with ticketing, order, and refund APIs. Escalates to human agents when needed. Tone is calm and action-oriented.

**English Teacher** — Conversational language practice with real-time grammar and pronunciation feedback. Tracks learner progress. Tone is patient, encouraging, and playful — corrections happen without breaking conversational flow.

**Doubt Solver** — Step-by-step academic problem-solving. Retrieves from subject-specific knowledge bases. Generates worked examples and practice problems. Tone is methodical — it deliberately doesn't hand over the final answer too quickly.

Same engine. Three identities.

---

## Impact

- **3× faster integration** of new agents
- **~70% code reuse** across every agent on the framework
- **Time-to-launch** dropped from 6 weeks to 2 weeks
- **3 agents in production** on the unified framework; more queued
- **Single team** now owns and maintains all three
- **Fixes ship to all agents at once** — no more triple-patching
- **Shared user identity across the platform** enables warm handoffs — when a user transitions from one agent to another, context is passed explicitly, giving a seamless cross-agent experience without breaking memory isolation

---

## What I learned

- **The persona / core split is harder than it looks.** We rewrote the boundary three times before it felt right. The temptation is always to push more into the core "for consistency" — but that kills the differentiation that makes each agent useful.
- **Evaluation is the framework's superpower.** Once every agent ran through the same eval harness, quality conversations became data-driven instead of opinion-driven.
- **Get the tool registry right early.** Bad tool descriptions cause the LLM to pick the wrong tool. Treating each tool as a small product — with its own spec, owner, and tests — paid off immediately.
- **Don't unify what isn't actually duplicated.** We almost unified the knowledge bases across agents. We didn't, and that was the right call — each agent's knowledge is genuinely different, even if the retrieval mechanism is the same.
- **Know your orchestration pattern.** What we built is a *centrally-managed platform*: one orchestrator, one active agent per turn, deterministic persona loading. This is different from fully autonomous multi-agent systems where agents spawn and route to each other. Being precise about this distinction in interviews — and knowing terms like ReAct, LangGraph, AutoGen, and when each applies — shows PM depth on AI architecture.

---

## My role

- Defined the framework architecture and the persona / core split
- Drove cross-team alignment on shared interfaces
- Designed the persona configuration model with engineering
- Established the metrics and evaluation framework
- Worked with the agent squads on the migration plan and rollout

---

## Credits

[Add team members, collaborators, and any external partners]
