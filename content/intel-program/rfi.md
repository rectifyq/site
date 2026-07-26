---
title: "Ad-hoc RFI"
description: "Request for Information — how to ask Rectifyq something specific, what to expect, and how community questions feed the requirements cycle."
date: 2026-07-17
tags: [intel-program, rfi]
---

Have a question the published products don't answer? That's an RFI.

## How it works

1. **Ask via [[tanya-rectifyq/index|Tanya Rectifyq]]** — ask@rectifyq.com NGL, or DM on any channel. Casual front door, same intake.
2. Questions are anonymized. Answers publish publicly where possible (TLP permitting).
3. **Expectations, honestly:** this is a one-person, self-funded initiative. Public-interest questions get prioritized; there is no SLA. For incident response, go to NACSA / MyCERT Cyber999 — [[contact|Contact]].

## The feedback loop

Recurring questions reveal collection gaps. Gaps feed the next [[intel-program/pir|PIR review]]. Your question literally shapes what gets tracked next year.

```mermaid
flowchart LR
    Q["Community question<br/>(Tanya Rectifyq)"] --> AN["Anonymize + answer"]
    AN --> PUB["Published answer"]
    Q --> GAP{"Reveals a<br/>collection gap?"}
    GAP -->|yes| REV["Next PIR review"]
    REV --> PIRS["Updated PIR set"]
```
