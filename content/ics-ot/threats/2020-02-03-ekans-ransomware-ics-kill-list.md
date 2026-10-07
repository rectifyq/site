---
title: "EKANS (Snake) — Ransomware With an ICS Process Kill List"
description: "EKANS ransomware, documented by Dragos in February 2020, stops 64 named processes, including GE Proficy historian and Honeywell HMIWeb, before encrypting. It was the first widely reported ransomware deliberately built to blind industrial operations."
date: 2020-02-03
tlp: CLEAR
scope: global
sectors: [manufacturing, energy]
mitre: [T0881, T0829, T0828]
pir: [PIR-05, PIR-06]
tags: [ics-ot, threat, malware-analysis, ransomware]
---

## Summary

**EKANS** ("Snake" spelled backwards) emerged in **mid-December 2019** and was publicly documented by Dragos on **3 February 2020**. It is ordinary file-encrypting ransomware, written in Go, with one industrial twist. Before encrypting, it force-stops processes on a **hard-coded kill list of 64 process names**, including:

- **GE Proficy** data historian processes;
- **GE Fanuc** licensing server services;
- **Honeywell HMIWeb**.

EKANS **cannot send commands to controllers or manipulate the process**. Its impact is making operators **lose view** of what the plant is doing, and losing the historian data and HMI hosts they rely on. Researchers subsequently linked EKANS to the June 2020 incidents at **Honda** and **Enel**. MITRE tracks it as [S0605](https://attack.mitre.org/software/S0605/).

The pattern EKANS introduced, IT ransomware that knowingly takes out OT-adjacent Windows hosts, is now the norm. Dragos reports that in 2025 alone it tracked **119 ransomware groups impacting more than 3,300 industrial organisations worldwide**, nearly double the number in 2024.

## Apa maksudnya untuk Malaysia? 🇲🇾

This is the most immediately relevant OT threat for Malaysia. **Manufacturing is the most-claimed sector** in Rectifyq's [[my-threat-landscape/ransomware|Malaysia Ransomware Tracker]] (18 of 142 claims since 2018), ahead of engineering and government. Most of those incidents never touch a PLC, but they hit the **historians, HMIs, MES and engineering workstations** on Windows that keep a plant running.

- Inventory the Windows hosts in your OT network and **test restoring them offline**, including historian data and HMI projects.
- Make sure the plant can **run safely in a degraded, view-less state** long enough to shut down or switch to manual.
- Block the IT-to-OT paths ransomware affiliates use (shared domain accounts, flat networks, remote access tools). NC4's [[my-threat-landscape/threats/b6a3b460-3020-45c0-b344-0cb0d2275543|segmentation alert]] is a good checklist.

## Details / TTPs (ATT&CK for ICS)

| Technique | Name | Observed behavior |
| --- | --- | --- |
| [T0881](https://attack.mitre.org/techniques/T0881/) | Service Stop | Kills 64 listed processes (historian, HMI, licensing) |
| [T0829](https://attack.mitre.org/techniques/T0829/) | Loss of View | Operators lose HMI and historian visibility |
| [T0828](https://attack.mitre.org/techniques/T0828/) | Loss of Productivity and Revenue | Production halted (e.g. Honda, June 2020) |

## Detection guidance

- Alert on **mass service/process termination** on OT Windows hosts, especially of historian and HMI processes.
- Watch for **domain-wide software deployment** (GPO, PsExec, management agents) touching OT hosts, which is a common ransomware delivery path.
- Keep **offline, tested backups** of historian databases, HMI projects and PLC programs.

## IoCs

Hashes and the full process kill list are published in vendor reporting; see the references.

## References

- Help Net Security, *New ransomware targets industrial control systems* (Dragos findings, 4 Feb 2020): https://www.helpnetsecurity.com/2020/02/04/ics-ransomware/
- MITRE ATT&CK, *EKANS (S0605)*: https://attack.mitre.org/software/S0605/
- Dragos, *OT Threat Landscape 2026*: https://www.dragos.com/blog/ot-threat-landscape-2026
