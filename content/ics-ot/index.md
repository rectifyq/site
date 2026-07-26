---
title: "ICS/OT Watch"
description: "Global industrial control system and operational technology threats, through a Malaysian CNII lens — energy, water, transport, manufacturing."
date: 2026-07-17
tags: [ics-ot, watch]
---

**Scope: global.** OT threats rarely respect borders — the same PLC firmware and protocols run in a plant in Johor and a utility in Poland. We track ICS/OT threats worldwide and flag where they touch **equipment and protocols common in Malaysian CNII** (energy, water, transport, manufacturing — per NCII sector definitions under the Cyber Security Act 2024).

```mermaid
flowchart LR
    G["🌍 Global OT threat reporting<br/>Dragos, Claroty, vendor PSIRTs ·<br/>CISA ICS advisories · incidents"] --> T["Triage:<br/>relevant to MY CNII equipment?"]
    T -->|yes| MY["Tagged scope: my/apac<br/>surfaces in MY Threat Landscape"]
    T -->|context| GL["Tagged scope: global<br/>tracked here"]
    MY --> F1["MISP-ICS-OT feed<br/>feeds.rectifyq.com/MISP-ICS-OT"]
    GL --> F1
```

## Sections

- **[[ics-ot/threats/index|OT Threat Entries]]** — compiled campaigns, malware, and incidents
- **[[ics-ot/ics-threat-landscape|OT/ICS Threat Landscape]]** — 	MITRE ATT&CK ICS Heatmap, ICS/OT active threat actors, and incident timelines.

> [!tip] Structured indicators
> The **MISP-ICS-OT feed** carries OT-specific events and context: `https://feeds.rectifyq.com/MISP-ICS-OT`. Setup: [[resources/guides/misp-feeds|feed guide]].

*This section serves [[intel-program/pir|PIR-05]] — threats to industrial and operational technology.*
