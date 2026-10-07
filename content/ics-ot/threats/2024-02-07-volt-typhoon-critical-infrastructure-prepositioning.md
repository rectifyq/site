---
title: "Volt Typhoon (VOLTZITE) — Pre-Positioning Inside Critical Infrastructure"
description: "PRC state-sponsored Volt Typhoon kept access to some U.S. critical infrastructure IT networks for at least five years, using living-off-the-land techniques, valid accounts and a botnet of end-of-life routers. Five Eyes agencies assess the aim is to pivot to OT and disrupt."
date: 2024-02-07
tlp: CLEAR
scope: global
sectors: [energy, water, transportation, communications]
mitre: [T0822, T0859, T0884, T0882]
pir: [PIR-01, PIR-05]
tags: [ics-ot, threat, ta-profile, targeted, volt-typhoon, geopolitical]
---

## Summary

**Volt Typhoon** was first publicised by Microsoft in **May 2023**, which reported targeting of critical infrastructure in **Guam** and elsewhere in the United States. On **7 February 2024** CISA, NSA, FBI, DOE, EPA and TSA, with the Australian, Canadian, UK and New Zealand cyber agencies, published advisory **AA24-038A**. It states that PRC state-sponsored Volt Typhoon actors are "**pre-positioning themselves on IT networks to enable lateral movement to OT assets to disrupt functions**", and that they had maintained access in some victim environments for **at least five years**.

Affected sectors include **communications, energy, transportation systems, and water and wastewater**. The tradecraft is built to avoid detection rather than to deploy malware:

- **Living off the land (LOTL):** built-in Windows and network tools instead of custom implants;
- **valid accounts** as the main persistence mechanism;
- exploitation of **edge devices** (the advisory cites Fortinet, Ivanti Connect Secure, NETGEAR, Citrix and Cisco);
- traffic routed through **end-of-life Cisco and NETGEAR SOHO routers** infected with **KV Botnet** malware.

The advisory notes the actors had the capability to access OT systems whose credentials were compromised, and camera surveillance systems at critical infrastructure facilities. Dragos tracks overlapping activity as **VOLTZITE**, which "exfiltrates GIS data, OT network diagrams, and ICS operating instructions that could be used to develop targeted attacks" (Dragos Year in Review, February 2025).

## Apa maksudnya untuk Malaysia? 🇲🇾

Volt Typhoon is a U.S.-focused case. Its lesson is universal for CNII operators, and especially relevant in a region shaped by South China Sea tensions: **an adversary preparing for disruption looks like an administrator.**

- **Edge devices are the front door.** The same VPN and firewall families appear in Malaysian incidents, including the June 2026 [[my-threat-landscape/breaches/2026-06-fortibleed|FortiBleed]] credential campaign. Patch them, put MFA on all remote access, and retire end-of-life routers.
- **Protect OT documentation.** Network diagrams, GIS data and operating procedures are reconnaissance gold. Restrict and log access to them like crown jewels.
- **Hunt, don't wait for alerts.** LOTL activity rarely trips antivirus. Look for unusual use of admin tools, new accounts on OT jump hosts, and logons from network devices.

## Details / TTPs (ATT&CK for ICS)

| Technique | Name | Observed behavior |
| --- | --- | --- |
| [T0822](https://attack.mitre.org/techniques/T0822/) | External Remote Services | VPN and edge-device access paths |
| [T0859](https://attack.mitre.org/techniques/T0859/) | Valid Accounts | Persistence through legitimate credentials |
| [T0884](https://attack.mitre.org/techniques/T0884/) | Connection Proxy | KV Botnet of compromised SOHO routers |
| [T0882](https://attack.mitre.org/techniques/T0882/) | Theft of Operational Information | OT diagrams, GIS data and operating instructions (VOLTZITE) |

## Detection guidance

- Centralise and retain **logs from edge devices, domain controllers and OT jump hosts**; the advisory stresses logging because LOTL leaves little else.
- Alert on **`ntdsutil`, `vssadmin`, `netsh portproxy` and `wmic`** usage on servers that don't normally run them.
- Flag **logons to OT systems from network-device IPs** or at unusual hours.

## IoCs

The advisory and its companion guidance list indicators and hunting queries. For LOTL actors, behavioural hunting matters more than indicator matching.

## References

- CISA et al., *PRC State-Sponsored Actors Compromise and Maintain Persistent Access to U.S. Critical Infrastructure* (AA24-038A, 7 Feb 2024): https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-038a
- Microsoft, *Volt Typhoon targets US critical infrastructure with living-off-the-land techniques* (24 May 2023): https://www.microsoft.com/en-us/security/blog/2023/05/24/volt-typhoon-targets-us-critical-infrastructure-with-living-off-the-land-techniques/
- Dragos, *8th Annual OT Cybersecurity Year in Review* (25 Feb 2025): https://www.dragos.com/blog/dragos-8th-annual-ot-cybersecurity-year-in-review-is-now-available
