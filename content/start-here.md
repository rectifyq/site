---
title: "📌Start Here"
description: "Two minutes to find your lane — role-based guide to Rectifyq for SOC analysts, CTI analysts, CISOs, OT engineers, business owners, and newcomers."
date: 2026-07-17
tags: [guide]
---

Rectifyq publishes a lot. You don't need all of it. **Find your role below and click your tile to follow that lane.**

## Which one are you?

<div class="role-grid">
    <a href="#ciso" class="role-tile">
        <span class="tile-title">🧭 CISO / Manager</span>
        <span class="tile-desc">Trends and justification</span>
    </a>
    <a href="#biz" class="role-tile">
        <span class="tile-title">🏢 Business Owner</span>
        <span class="tile-desc">Plain-language risk</span>
    </a>
    <a href="#cti" class="role-tile">
        <span class="tile-title">🔎 CTI Analyst</span>
        <span class="tile-desc">Context, actors, TTPs</span>
    </a>
    <a href="#soc" class="role-tile">
        <span class="tile-title">🖥️ SOC / IR Analyst</span>
        <span class="tile-desc">IoCs and detections</span>
    </a>
    <a href="#ot" class="role-tile">
        <span class="tile-title">🏭 OT / Plant Engineer</span>
        <span class="tile-desc">ICS threats & advisories</span>
    </a>
    <a href="#new" class="role-tile">
        <span class="tile-title">🌱 Student / Newcomer</span>
        <span class="tile-desc">Getting into cyber</span>
    </a>
</div>

<style>
.role-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
    margin: 1.5rem 0 2.5rem 0;
}
.role-tile {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.25rem;
    border: 1px solid var(--lightgray);
    border-radius: 8px;
    text-decoration: none !important;
    background-color: var(--light);
    transition: all 0.2s ease;
}
.role-tile:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border-color: var(--tertiary);
}
.tile-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--secondary);
    line-height: 1.2;
}
.tile-desc {
    font-size: 0.95rem;
    color: var(--gray);
    line-height: 1.4;
}
</style>

---

<a id="ciso"></a>
## 🧭 CISO / Security Manager

1. **[[/my-threat-landscape/radar/index|Rectifyq Radar]]** — one read a month keeps you current.
2. **[[MY-Threat-Landscape/breaches/index|Breach Watch]]** — local ransomware claims and leaks by sector, since 2018. Nothing justifies budget like local numbers. Victims always masked.
3. **[[MY-Threat-Landscape/vulnerabilities/index|Vulnerability Watch]]** — is Malaysia (and your sector) actually exposed to the CVE in the news?

<a id="biz"></a>
## 🏢 Business Owner

1. **[[/my-threat-landscape/radar/index|Rectifyq Radar]]** — plain-language monthly summary of what's hitting Malaysian organizations.
2. **[[tanya-rectifyq/index|Tanya Rectifyq]]** — ask anything, anonymously. "Kena ransomware, siapa nak call dulu?" is a perfectly good question.

> [!info] Reporting an incident?
> Rectifyq is a private CTI initiative, not an official channel. For incidents, contact **NACSA** or **MyCERT Cyber999** — and note that NCII entities have mandatory reporting obligations under the Cyber Security Act 2024. Details in [[contact|Contact]].

<a id="cti"></a>
## 🔎 CTI Analyst

1. **[[MY-Threat-Landscape/threat-actor/index|Threat Actor Profiles]]** — 47+ groups clustered by suspected origin (heavily China-nexus among APTs), mapped to MITRE ATT&CK and the Diamond Model.
2. **[[intel-program/index|Intelligence Program]]** — our open PIR/GIR. Map them against your org's requirements to know which tags to watch.
3. **[[threat-intelligence-platform-(tip)/style-guide|Style Guide]]** — relevancy 🔴🟡🟢, severity, category, sub-category, threat actor category, target scope — filter with precision.
4. **MISP-MY** — every entry links to its MISP event for structured pivoting. See [[resources/feeds|Feeds]].

> [!warning] On attribution
> Actor clustering and naming are interpretations by specific researchers and vendors. For most organizations, generic detection of TTPs offers higher defensive value than definitive attribution — formal attribution is the domain of law enforcement and government.

<a id="soc"></a>
## 🖥️ SOC / IR Analyst

1. **[[MY-Threat-Landscape/threats/index|Threat Watch]]** — every entry ships defanged IoCs ready for your SIEM or TIP, linked to its MISP event. Filter 🔴 Highly Relevant first.
2. **[[resources/feeds|Feeds]]** — pull continuously instead of copy-pasting: `MISP-MY`, `MISP-ICS-OT`, and yearly instances at feeds.rectifyq.com, plus [t.me/rectifyq](https://t.me/rectifyq) for real-time local IoC alerts.
3. **[[MY-Threat-Landscape/vulnerabilities/index|Vulnerability Watch]]** — CVEs with confirmed Malaysian exposure. Listed here = check your attack surface today.

> [!tip] Integrating with your SIEM/TIP?
> Email us at **support@rectifyq.com**.

<a id="ot"></a>
## 🏭 OT / Plant Engineer

1. **[[ics-ot/index|ICS/OT Watch]]** — global scoped OT/ICS threats, flagged where they touch equipment common in Malaysian CNII.
2. **[[ics-ot/ics-threat-landscape|ICS/OT Threat Landscape]]** — Overall Global Scoped ICS/OT Threat Landscape in one page.
3. **MISP-ICS-OT feed** — structured OT indicators: `https://feeds.rectifyq.com/MISP-ICS-OT`.

<a id="new"></a>
## 🌱 Student / Newcomer

1. **[[events/index|Events Calendar]]** — CTFs (Wargames.my, iCTF, and more), meetups, and conferences across Malaysia. Turun padang; most careers here start at a meetup.
2. **[[tanya-rectifyq/index|Tanya Rectifyq]]** — no question is too basic.
3. **[[resources/ccap|Certification Comparison]]** and **[[resources/subscriptions|Subscription Comparison]]** — spend your ringgit wisely.
4. **[[phishhuntmy/index|PhishHuntMY]]** — hunt a real phishing campaign targeting Malaysians, write it up. Best portfolio piece you can build.

## How to read a threat entry

| Tag | Meaning |
| --- | --- |
| 🔴 Highly Relevant | Direct or confirmed Malaysian targeting/impact — act on it |
| 🟡 Somewhat Relevant | Regional (ASEAN/SEA) relevance or plausible MY exposure |
| 🟢 Informational | Global threat, indirect relevance — awareness only |
| `targeted` / `broad-based` | Specific MY org/sector vs. global campaign with MY exposure |
| ⚔Threat / 🔰Defense / 📰News | Entry category |

Full reference: [[threat-intelligence-platform-(tip)/style-guide|Rectifyq's Style Guide]].

*Semua orang boleh contribute — see [[contribute|Contribute]].*