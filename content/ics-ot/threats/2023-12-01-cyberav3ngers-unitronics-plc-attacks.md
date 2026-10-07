---
title: "CyberAv3ngers — IRGC-Linked Attacks on Internet-Exposed Unitronics PLCs"
description: "From November 2023, the IRGC-affiliated CyberAv3ngers defaced internet-exposed Unitronics Vision PLCs/HMIs that used default or no passwords, compromising at least 75 devices including 34 in the U.S. water sector. Geopolitically driven targeting of 'made in Israel' equipment."
date: 2023-12-01
tlp: CLEAR
scope: global
sectors: [water, energy, manufacturing]
mitre: [T0883, T1694.001, T0829]
pir: [PIR-05]
tags: [ics-ot, threat, campaign-analysis, broad-based, cyber-av3ngers, geopolitical]
---

## Summary

Starting in **November 2023**, a cyber persona called **CyberAv3ngers** attacked **Unitronics Vision Series PLCs and HMIs**. Unitronics is an Israeli manufacturer. The first widely reported victim was a booster station of the **Municipal Water Authority of Aliquippa** (Pennsylvania), where the controller's screen was replaced with:

> "You have been hacked, down with Israel. Every equipment 'made in Israel' is CyberAv3ngers legal target."

U.S. agencies attribute the persona to Iran's **Islamic Revolutionary Guard Corps Cyber-Electronic Command (IRGC-CEC)** in advisory **AA23-335A** (1 December 2023, last updated 18 December 2024). The method was not sophisticated:

- devices were **reachable from the internet** on Unitronics' programming port **TCP 20256**;
- they had a **default password or no password at all**.

Between **November 2023 and January 2024** the actors compromised **at least 75 devices**, including **at least 34 in the U.S. water and wastewater sector**, plus devices in energy, food and beverage, transportation and healthcare, in the U.S. and other countries. In February 2024 the U.S. Treasury sanctioned six IRGC-CEC officials linked to the group. The same group later fielded custom malware; see [[ics-ot/threats/2024-12-10-iocontrol-iot-ot-malware-cyberav3ngers|IOCONTROL]].

## Apa maksudnya untuk Malaysia? 🇲🇾

This campaign selected victims by **the equipment's country of origin**, not by the victim's country. Any organisation running Israeli-made controllers is in scope, wherever it is. Rectifyq's March 2026 analysis of the [[my-threat-landscape/threats/12ec4fe2-55a7-4cd4-b7d4-f3acf5d223e0|Iran–US/Israel conflict and its impact on Malaysian organisations]] lists CyberAv3ngers among the actors to watch.

For Malaysian water, sewerage and waste operators (an NCII sector under the Cyber Security Act 2024), and for factories and building systems:

- **Search your own IP space** (or ask your ISP/MSSP) for exposed PLC and HMI management ports, especially TCP 20256. Internet-reachable controllers are the root cause here.
- **Change default passwords** on every PLC/HMI, Unitronics or otherwise, and disable unused programming services.
- Put remote maintenance behind a **VPN with MFA**, never a port-forward.

## Details / TTPs (ATT&CK for ICS)

| Technique | Name | Observed behavior |
| --- | --- | --- |
| [T0883](https://attack.mitre.org/techniques/T0883/) | Internet Accessible Device | PLCs/HMIs reachable on TCP 20256 |
| [T1694.001](https://attack.mitre.org/techniques/T1694/001/) | Default Credentials | Default or absent passwords |
| [T0829](https://attack.mitre.org/techniques/T0829/) | Loss of View | HMI screens replaced with the defacement image |

## Detection guidance

- Alert on **inbound connections to PLC programming ports** from outside the OT network.
- Monitor for **project/program downloads** to PLCs outside change windows.
- Run **external attack-surface scans** of your own ranges on a schedule, and treat any exposed ICS service as a high-priority finding.

## IoCs

IP addresses and other indicators are listed in the CISA advisory; they are infrastructure-specific and age quickly.

## References

- FBI, CISA, NSA, EPA, Israel National Cyber Directorate, Canadian Centre for Cyber Security and UK NCSC, *IRGC-Affiliated Cyber Actors Exploit PLCs in Multiple Sectors, Including US Water and Wastewater Systems Facilities* (AA23-335A, 1 Dec 2023; updated 18 Dec 2024): https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-335a
