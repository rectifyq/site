---
title: "Malaysia Cyber Threats 2026: Key Facts and FAQ"
description: "Quick, sourced answers on Malaysia's cyber threat landscape in 2026: how many ransomware attacks, which groups and sectors, major incidents, APT groups targeting Malaysia, common scams, and where to report."
date: 2026-10-08
lastmod: 2026-10-08
tags: [faq, landscape, ransomware, malaysia]
aliases:
  - faq
---

*Last updated 8 October 2026. Figures come from Rectifyq's own trackers unless another source is cited. Claims are not confirmations. See [[methodology|Methodology]].*

## How many ransomware attacks have targeted Malaysian organisations?

**Rectifyq has recorded 142 alleged ransomware claims against Malaysian organisations since 2018, including 50 in 2026, the highest year on record.** The yearly count rose from 6 in 2022 to 21 in both 2023 and 2024, 38 in 2025 and 50 by early October 2026. These are claims posted on ransomware leak sites or reported in the news; a claim is not a confirmed breach unless the organisation confirms it. Full data: [[my-threat-landscape/ransomware|Malaysia Ransomware Tracker]].

## Which ransomware groups target Malaysia the most?

**Qilin, LockBit 3.0 and The Gentlemen have claimed the most Malaysian victims**, followed by Direwolf and RansomHub. In 2026, new brands Payload and Krybit, alongside the longer-running INC Ransom, also claimed Malaysian organisations. Monthly detail is in [[my-threat-landscape/radar/index|Rectifyq Radar]].

## Which sectors in Malaysia are hit hardest by ransomware?

**Manufacturing is the most-claimed sector (18 claims), followed by government and public administration (11), engineering (11) and logistics (8).** Automotive, civil aviation, IT, construction, retail and multi-sector conglomerates follow with 5 each. Full breakdown: [[my-threat-landscape/ransomware|Malaysia Ransomware Tracker]].

## What were the major cyber incidents in Malaysia in 2026?

Publicly reported incidents covered in Rectifyq Radar include:

- **June 2026, FortiBleed:** a campaign exposing working credentials for about 75,000 FortiGate firewalls worldwide. NC4 Malaysia issued a high-severity advisory (NC4-ALR-2026-000002), and affected domains included Malaysian `.gov.my` and `.edu.my` organisations. [[my-threat-landscape/breaches/2026-06-fortibleed|Details]]
- **June 2026, government website defacements:** the Ministry of Health and other government websites were compromised; NACSA urged immediate patching. [[my-threat-landscape/radar/2026-06|June Radar]]
- **June 2026, Flexi Parking (Selangor):** electronic parking payments were disrupted by a cyberattack. [[my-threat-landscape/radar/2026-06|June Radar]]
- **July 2026:** Palo Alto Networks Unit 42 reported a Chinese-speaking actor using AI tooling to repeatedly exploit a Malaysian government entity's Citrix NetScaler appliance (CVE-2026-3055). [[my-threat-landscape/radar/2026-08|August Radar]]
- **August 2026:** MyCERT warned of a fake Park@Perak parking site delivering an iOS exploit chain to iPhone users (MA-1480.082026). [[my-threat-landscape/radar/2026-08|August Radar]]
- **September 2026, Port of Tanjung Pelepas:** a cyber incident on 9 September suspended container terminal operations at one of the world's largest transhipment hubs. Direwolf claimed responsibility on 11 September; the operator confirmed the incident but not ransomware. [[my-threat-landscape/radar/2026-09|September Radar]]

## Which APT groups target Malaysia?

**China-nexus espionage groups appear most often in Malaysia-relevant reporting, led by APT41, APT40 and Naikon**, with Earth Estries, SharpPanda and Mustang Panda also active. Iranian groups (MuddyWater, OilRig, APT35, APT42, CyberAv3ngers) became more relevant during the 2026 Iran–US/Israel conflict. North Korea's Lazarus Group and Russia's APT28 also appear. Attribution is made by vendors and governments; Rectifyq records it as context. Full list: [[my-threat-landscape/threat-actor|Threat Actors Targeting Malaysia]].

## What scams and phishing campaigns target Malaysians?

Recurring campaigns documented on Rectifyq include:

- **e-wallet "quishing" (QR phishing)** impersonating Touch 'n Go, especially around Ramadan and Hari Raya;
- **fake government aid pages** (e.g. Bantuan Tunai Rahmah, eMadani laptop schemes) that steal personal and banking details;
- **Telegram account takeovers** via fake aid or giveaway pages;
- **malicious Android APKs** sent over WhatsApp or SMS, from fake wedding invitations ("Kad Kahwin Digital") to fake courier and job apps (Delivery4U, KerjaExpress, MaxTag), which steal banking OTPs;
- **fake utility payment sites**, e.g. a fake PAIP (Pahang water) site in May 2026.

Community analysis: [[my-threat-landscape/phishhuntmy|PhishHuntMY]]. Entries: [[my-threat-landscape/threats/index|Threat Watch]].

## Where do I report a cyber incident or scam in Malaysia?

- **Lost money to a scam:** call the **National Scam Response Centre (NSRC) at 997** as soon as possible, ideally within 24 hours. The line runs 24/7 and a call is treated as a police report. ([MyGOV](https://www.malaysia.gov.my/en/topics/nsrc-997-hotline))
- **Cyber incidents, phishing and malware:** report to **MyCERT's Cyber999** service ([mycert.org.my](https://www.mycert.org.my)).
- **National Critical Information Infrastructure (NCII) entities:** incidents must be reported to **NACSA** under the Cyber Security Act 2024.
- **Personal data breaches:** under the PDPA as amended in 2024, data controllers must notify the Personal Data Protection Commissioner ([pdp.gov.my](https://www.pdp.gov.my)).

Rectifyq is not an official reporting channel. See [[contact|Contact]].

## What is the Cyber Security Act 2024?

**Malaysia's Cyber Security Act 2024 came into force on 26 August 2024.** It places National Critical Information Infrastructure (NCII) entities under NACSA oversight, including mandatory incident reporting. It covers **11 NCII sectors**: government; banking and finance; transportation; defence and national security; information, communication and digital; healthcare services; water, sewerage and waste management; energy; agriculture and plantation; trade, industry and economy; and science, technology and innovation.

## Which industrial (ICS/OT) threats matter for Malaysian critical infrastructure?

The most transferable lessons come from attacks that started at **internet-facing firewalls and VPNs with weak or default credentials**:

- the [[ics-ot/threats/2026-01-30-dynowiper-poland-energy-sector-attack|December 2025 attack on Poland's energy sector]];
- the [[ics-ot/threats/2023-12-01-cyberav3ngers-unitronics-plc-attacks|CyberAv3ngers attacks on exposed PLCs]];
- [[ics-ot/threats/2024-02-07-volt-typhoon-critical-infrastructure-prepositioning|Volt Typhoon's pre-positioning]].

For oil, gas and petrochemicals, [[ics-ot/threats/2017-12-14-triton-trisis-safety-system-malware|TRITON]] showed that safety systems themselves can be targeted. Overview: [[ics-ot/ics-threat-landscape|ICS/OT Threat Landscape]].

## Is Rectifyq an official source?

**No.** Rectifyq is an independent, Malaysia-focused cyber threat intelligence initiative, not a government agency or vendor. Its trackers compile public reporting, leak-site claims and analysis. It distinguishes claims from confirmations and never names victims. Machine-readable data is available through the [[resources/feeds|MISP-MY and MISP-ICS-OT feeds]].

---

## Soalan lazim (Bahasa Malaysia)

**Berapa banyak serangan ransomware terhadap organisasi Malaysia?** Sejak 2018, Rectifyq telah merekodkan 142 dakwaan serangan ransomware terhadap organisasi di Malaysia, termasuk 50 pada tahun 2026, jumlah tahunan tertinggi setakat ini.

**Kumpulan ransomware mana yang paling aktif?** Qilin, LockBit 3.0 dan The Gentlemen.

**Di mana perlu melapor jika ditipu?** Hubungi Pusat Respons Scam Kebangsaan (NSRC) di talian **997** secepat mungkin. Insiden siber boleh dilaporkan kepada **Cyber999 (MyCERT)**, manakala entiti NCII wajib melapor kepada **NACSA**.

*Cite as: Rectifyq, "Malaysia Cyber Threats 2026: Key Facts and FAQ", https://rectifyq.com/malaysia-cyber-threats-faq*
