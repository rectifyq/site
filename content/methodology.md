---
title: "Methodology"
description: "How Rectifyq intelligence is made — sources, triage pipeline, the Rectifyq Assessment, MISP workflow, and the quality rules the pipeline follows."
date: 2026-07-17
tags: [about, methodology]
---

```mermaid
flowchart LR
    A@{ shape: lean-r, label: "Sources" } ==> |"🟢⚪"|B[fa:fa-comment MISP202x]
    B ==> |"🟢⚪"|C[fa:fa-comment MISPMY]
    A ==> |"🔴🟡"|C[fa:fa-comment MISPMY]
    B ==> Y[fa:fa-comment MISP-ICS-OT]
    Y ==> M

    subgraph Global TLP:CLEAR
    E@{ shape: lean-r, label: "fab:fa-telegram Telegram" }
    H@{ shape: lean-r, label: "fab:fa-github Github" }
    I@{ shape: lean-r, label: "fab:fa-medium Medium" }
    J@{ shape: lean-r, label: "fab:fa-notion Notion" }
    K@{ shape: lean-r, label: "fab:fa-tiktok Tiktok" }
    L@{ shape: lean-r, label: "fa:fa-virus VirusTotal" }
    M@{ shape: lean-r, label: "fa:fa-globe Web" }

    end
    subgraph MY-focused TLP:CLEAR
    D@{ shape: lean-r, label: "fa:fa-globe Web" }
    F@{ shape: lean-r, label: "fab:fa-x X(Twitter)" }
    G@{ shape: lean-r, label: "fab:fa-linkedin LinkedIn" }
    end

    B --> E
    B --> J
    B --> K
    B --> I
    B --> H
    B --> L

    C --> D
    C --> F
    C --> G

    click A "https://rectifyq.com/threat-intelligence-platform-(tip)/source" _blank
    click B "https://misp2026.rectifyq.com" _blank
    click C "https://mispmy.rectifyq.com" _blank
    click D "https://rectifyq.com/my-threat-landscape/threat-lists/" _blank
    click E "http://t.me/rectifyq" _blank
    click F "https://x.com/_rectifyq" _blank
    click G "https://linkedin.com/company/rectifyq" _blank
    click H "https://github.com/rectifyq" _blank
    click I "https://medium.com/@rectifyq" _blank
    click J "https://rectifyq.notion.site/Rectifyq-7ece6db87cd44ad4b7503e238191b801" _blank
    click K "https://www.tiktok.com/@rectifyq" _blank
    click L "https://www.virustotal.com/gui/user/rectifyq" _blank
    click M "http://rectifyq.com/ics-ot/" _blank
    click Y "https://feeds.rectifyq.com/MISP-ICS-OT/" _blank

    style A stroke:#0f0
    style B stroke:#00f
    style C stroke:#00f
    style Y stroke:#00f
``` 

## Rules the pipeline follows

1. **The Assessment is always human-written.** Ingestion can be automated; judgment is not.
2. **Claims vs confirmations** are always distinguished ([[MY-Threat-Landscape/breaches/index|Breach Watch policy]]).
3. **Victims are never named** — masked descriptors and sectors only.
4. **Aggregate exposure only** — never listable vulnerable IPs.
5. **TTP-first attribution** — vendor actor names recorded as context, not endorsed as fact.
6. **Honest MITRE mapping** — when a technique resists direct prevention (e.g., discovery techniques, unauthenticated OT protocols), we frame detection/monitoring rather than inventing mitigations.
7. **Corrections are published transparently.**




## Cadence, honestly

Entries publish as triaged (solo capacity — quality over schedule); the [[MY-Threat-Landscape/vulnerabilities/index|vulnerability sweep]] runs weekly-ish; [[radar/index|Radar]] monthly; [[intel-program/pir|PIR review]] annually.
