---
title: Threat Intelligence focusing on Malaysia 🇲🇾
description: "Localized, actionable cyber threat intelligence for Malaysian defenders — threat entries, actor profiles, ransomware claims, vulnerability exposure, and community events."
tags:
  - home
---

**Threat intelligence focusing on Malaysia 🇲🇾** — bridging global reporting with local reality. Compiled, tagged, and analyzed for Malaysian defenders, from SOC analysts to CISOs.

> [!tip] Baru di sini? New here?
> Head to **[[start-here/index|Start Here]]** — a 2-minute guide that routes you to the right section based on your role. Prefer raw data? Jump straight to **[[resources/feeds|Feeds & MISP]]**.

<div class="stat-grid">
    <div class="stat-item">
        <span class="stat-number">200+</span>
        <span class="stat-label">Threat entries<br>MISP-linked, MY-triaged</span>
    </div>
    <div class="stat-item">
        <span class="stat-number">47+</span>
        <span class="stat-label">Threat actors<br>tracked with MY relevance</span>
    </div>
    <div class="stat-item">
        <span class="stat-number">80+</span>
        <span class="stat-label">Ransomware claims<br>vs. MY orgs since 2018</span>
    </div>
</div>

## What Rectifyq tracks

### 🎯 Intelligence products

<div class="product-grid">
    <a href="/my-threat-landscape/threats/" class="product-tile">
        <span class="tile-icon">⚔</span>
        <span class="tile-title">Threat Watch</span>
        <span class="tile-desc">MISP-linked threat entries triaged for MY relevance</span>
    </a>
    <a href="/my-threat-landscape/threat-actor/" class="product-tile">
        <span class="tile-icon">🎭</span>
        <span class="tile-title">Threat Actors</span>
        <span class="tile-desc">47+ groups tracked with Malaysian relevance</span>
    </a>
    <a href="/my-threat-landscape/vulnerabilities/" class="product-tile">
        <span class="tile-icon">🩹</span>
        <span class="tile-title">Vulnerability Watch</span>
        <span class="tile-desc">CVEs with confirmed MY exposure</span>
    </a>
    <a href="/my-threat-landscape/breaches/" class="product-tile">
        <span class="tile-icon">🕵️</span>
        <span class="tile-title">Breach Watch</span>
        <span class="tile-desc">Ransomware claims & data leaks, victims masked</span>
    </a>
    <a href="/my-threat-landscape/radar/" class="product-tile">
        <span class="tile-icon">📡</span>
        <span class="tile-title">Rectifyq Radar</span>
        <span class="tile-desc">The monthly MY threat recap</span>
    </a>
</div>

### 🤝 Community

<div class="product-grid">
    <a href="/events/" class="product-tile">
        <span class="tile-icon">📅</span>
        <span class="tile-title">Events</span>
        <span class="tile-desc">Every MY cyber event, one calendar</span>
    </a>
    <a href="/tanya-rectifyq/" class="product-tile">
        <span class="tile-icon">💬</span>
        <span class="tile-title">Tanya Rectifyq</span>
        <span class="tile-desc">Ask anything about CTI</span>
    </a>
    <a href="/MY-Threat-Landscape/phishhuntmy/" class="product-tile">
        <span class="tile-icon">🎣</span>
        <span class="tile-title">PhishHuntMY</span>
        <span class="tile-desc">Phishing hunt challenge</span>
    </a>
    <a href="/contribute/" class="product-tile">
        <span class="tile-icon">🤝</span>
        <span class="tile-title">Contribute</span>
        <span class="tile-desc">Strengthen the ecosystem</span>
    </a>
</div>

<style>
.stat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
    margin: 1.75rem 0;
}
.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.35rem;
    padding: 1.25rem 1rem;
    border: 1px solid var(--lightgray);
    border-radius: 8px;
    background-color: var(--light);
}
.stat-number {
    font-size: 2.25rem;
    font-weight: 800;
    line-height: 1;
    color: var(--secondary);
}
.stat-label {
    font-size: 0.9rem;
    color: var(--gray);
    line-height: 1.3;
}
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    margin: 1rem 0 2rem 0;
}
.product-tile {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding: 1.1rem 1.25rem;
    border: 1px solid var(--lightgray);
    border-radius: 8px;
    text-decoration: none !important;
    background-color: var(--light);
    transition: all 0.2s ease;
}
.product-tile:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border-color: var(--tertiary);
}
.tile-icon {
    font-size: 1.5rem;
    line-height: 1;
}
.product-tile .tile-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--secondary);
    line-height: 1.2;
}
.product-tile .tile-desc {
    font-size: 0.9rem;
    color: var(--gray);
    line-height: 1.4;
}
</style>

Everything published maps to our open **[[pir/index|Intelligence Requirements (PIR)]]** — so you always know *why* an entry exists and *who* it serves.

## The Malaysian landscape at a glance
### Ransomware extortion claims vs MY organizations — top groups (2018–present)
```mermaid
pie showData 
    "LockBit3" : 21
    "Qilin" : 18
    "RansomHub" : 7
    "Direwolf" : 7
    "The Gentlemen" : 6
    "Akira" : 5
    "Others" : 20
```

> [!warning] Claims, not confirmations
> Figures are based on ransomware group claims or news reporting. Unless the organization confirmed the incident, it remains a claim. Victims are never named on this site.

**Most-claimed sectors:** Manufacturing · Government · Engineering · Logistics · Construction — full breakdown in the [[my-threat-landscape/ransomware|Ransomware Tracker]].

**Top techniques observed in MY-relevant intrusions (MISP-MY):** [T1027](https://attack.mitre.org/techniques/T1027/) Obfuscated Files · [T1566](https://attack.mitre.org/techniques/T1566/) Phishing · [T1055](https://attack.mitre.org/techniques/T1055/) Process Injection · [T1059.001](https://attack.mitre.org/techniques/T1059/001/) PowerShell · [T1190](https://attack.mitre.org/techniques/T1190/) Exploit Public-Facing App — full heatmap in [[my-threat-landscape/ttps|TTPs]].

## This week in MY cyber 📅

CTF this weekend? Meetup after work? The community calendar has it — physical and online, reviewed before publishing.

> [!info] Subscribe once, never miss an event
> Add the **[[events|Malaysia Cybersecurity Events Calendar]]** to Google or Apple Calendar and every vetted MY cyber event lands in your schedule automatically. Organizing something? [[events|Submit it]] — jom turun padang.

## How the ecosystem connects

```mermaid
flowchart LR
    RQ(("Rectifyq 🇲🇾"))

    subgraph Intelligence
        TW["Threat Watch"]
        TA["Actor Profiles"]
        VW["Vulnerability Watch"]
        BW["Breach Watch"]
    end

    subgraph Data["Machine-readable"]
        MISP["MISP-MY"]
        FEEDS["IoC CSV / Feeds"]
    end

    subgraph You["Your stack"]
        SIEM["SIEM / TIP"]
        BRIEF["Board briefings"]
    end

    RQ --> Intelligence
    RQ --> Data
    TW --> MISP
    MISP --> FEEDS
    FEEDS --> SIEM
    BW --> BRIEF
    VW --> SIEM

    click TW "/my-threat-landscape/threats/" _self
    click TA "/my-threat-landscape/threat-actor" _self
    click VW "/my-threat-landscape/vulnerabilities/" _self
    click BW "/my-threat-landscape/breaches/" _self
    click FEEDS "/resources/feeds" _self
```
