---
title: "Defining the Scope of CTI under BNM RMiT"
description: "Anonymized DM guidance on determining the scope of Cyber Threat Intelligence (CTI), evaluating In-house vs Managed TI, and local Malaysian providers for BNM RMiT compliance."
date: 2026-07-19
tlp: CLEAR
tags: [tanya, community, bnm-rmit, cti, vendor-evaluation]
---

> [!question] Asked via DM (anonymized)
> "Hi, I asked a question in the OWASP Threat Intelligence group chat earlier regarding the scope of CTI. To clarify our situation: our organization is looking into establishing a CTI capability specifically driven by the Bank Negara Malaysia (BNM) RMiT requirements. We are currently at the RFQ stage and trying to decide whether we should run CTI ourselves (In-house) or subscribe to a Managed Threat Intelligence service (preferably local vendors). What should be the scope of our CTI, and do you have any insights or local vendor recommendations?"

## The Answer

This is a critical crossroad for many financial institutions and regulated entities in Malaysia. When Bank Negara Malaysia (BNM) introduced the **Risk Management in Technology (RMiT)** policy document, it explicitly shifted the industry from a reactive security posture to a proactive, threat-informed defense. 

Under RMiT (specifically around Cyber Risk Management, Threat Intelligence, and Cyber Resilience), CTI is not just a "nice-to-have" security feed—it is a regulatory expectation to anticipate, detect, and respond to emerging threats before they impact the financial ecosystem.

---

### 1. Understanding the Scope of CTI under BNM RMiT

To build a compliant and functional RFQ, your CTI scope should be categorized into three operational tiers, aligned with RMiT expectations:

*   **Strategic Threat Intelligence:** High-level analysis of the threat landscape relevant to the Malaysian financial sector (e.g., geopolitical shifts, ransomware groups targeting ASEAN banks, regulatory changes). This is intended for executive management and the Board of Directors to guide risk management strategies.
*   **Operational/Tactical Intelligence:** Actionable technical data including Indicators of Compromise (IoCs), malware signatures, and attacker methodologies (TTPs mapped to MITRE ATT&CK). This directly feeds into your SOC, SIEM, and EDR platforms to block active threats.
*   **Brand & Digital Risk Protection Services (DRPS):** Monitoring the open, deep, and dark web for credential leaks, fraudulent mobile applications, domain spoofing (phishing), and data exposures targeting your specific organization.

---

### 2. Strategic Dilemma: In-House CTI vs. Managed TI Services

At the RFQ stage, you must weigh the operational realities of both models:

| Evaluation Criteria | In-House CTI Capability | Managed Threat Intelligence Services |
| :--- | :--- | :--- |
| **Resource & Talent** | Extremely difficult to recruit and retain specialized CTI analysts locally in Malaysia. | Access to an established pool of dedicated threat analysts and researchers. |
| **Technology Stack** | Requires investment in a Threat Intelligence Platform (TIP), dark web scrapers, and commercial feeds. | Subscribed as a service; vendor provides the platform, correlation, and deduplicated feeds. |
| **Contextual Relevance** | Deep understanding of internal crown jewels, network baseline, and institutional risk. | Broad visibility across multiple sectors/clients, catching trends before they hit your network. |
| **RMiT Compliance** | Demonstrates direct ownership and deep integration into internal incident response workflows. | Satisfies RMiT requirements provided the SLA, data residency, and third-party risk are managed. |

**The Hybrid Recommendation:** For most mid-tier financial institutions at your stage, a **hybrid approach** is highly effective. You subscribe to a Managed TI Service to handle heavy collection, dark web monitoring, and initial triage, while maintaining an internal security analyst who consumes this intel and applies it specifically to your internal network context.

---

### 3. Malaysian Local CTI Provider Landscape

Subscribing to local providers offers significant advantages: they possess localized context (e.g., tracking threats targeting the FPX ecosystem, local banks, or MySejahtera-themed phishing waves), facilitate easier compliance with data sovereignty preferences, and allow closer engineering collaboration.

Here is an analysis of the local providers you mentioned, along with additional reputable local options to complement your RFQ shortlist:

#### A. Providers You Mentioned
*   **Nexagate:** One of Malaysia’s premier cybersecurity managed service providers. They offer comprehensive security operations and can deliver localized threat monitoring through their N-Security ecosystem, well-suited for structured compliance requirements.
*   **Bluesify:** Known for agile, tech-driven cybersecurity delivery. They provide specialized managed security monitoring and targeted threat intelligence integration tailored for enterprise environments.
*   **Syntx:** Highly regarded for deep technical specialization, particularly in vulnerability research, advanced penetration testing, and digital forensics. Their threat insights are typically highly technical, high-fidelity, and practitioner-focused.
*   **Velum Labs:** A highly sophisticated player with an explicit focus on high-end cyber defense, intelligence generation, and strategic sovereign capabilities. Excellent for deep-dive threat visibility and complex environments.

#### B. Additional Local Alternatives for your RFQ
*   **LGMS (Leong Guan Means Security):** A publicly listed, dominant cybersecurity firm in Malaysia. LGMS maintains extensive relationships with financial institutions and provides robust cyber risk, assessment, and threat intelligence advisory services aligned closely with BNM frameworks.
*   **Condition Zebra:** An established local cybersecurity firm offering managed security services and tactical threat insights, frequently servicing clients who need to satisfy rigorous local compliance standards.
*   **DefSec Malaysia / Local MSSPs:** Several specialized niche boutiques provide localized operational threat feeds specifically tracking Malaysian threat groups and infrastructure.

---

### Next Steps for Your RFQ

1. **Demand a POC (Proof of Concept):** Require vendors to perform a "Dark Web Snapshot" of your domain during the RFQ stage. This immediately separates high-quality collection from generic feed aggregators.
2. **Evaluate Integration Capabilities:** Ensure the local provider can feed directly into your existing infrastructure (e.g., via STIX/TAXII into your SIEM/SOAR).
3. **Verify RMiT Familiarity:** Ask the vendors explicitly for a matrix mapping their deliverables to BNM RMiT clauses.

*Related: [[resources/vendor-evaluation|Vendor Assessment]] · [[compliance/rmit|RMiT Mapping]] · Ask your own: [[tanya-rectifyq/index|Tanya Rectifyq]]*