---
title: "Industroyer2 — Sandworm's 2022 Attack on Ukrainian Substations"
description: "Industroyer2, found by ESET and CERT-UA in April 2022, was configured to switch off high-voltage substations of a Ukrainian energy company via IEC-104, alongside CaddyWiper and Linux/Solaris wipers. Ukrainian authorities reported the attack was thwarted."
date: 2022-04-12
tlp: CLEAR
scope: global
sectors: [energy]
mitre: [T0888, T1692.001, T0806, T0881, T0809]
pir: [PIR-05]
tags: [ics-ot, threat, malware-analysis, targeted, sandworm]
---

## Summary

On **12 April 2022**, ESET (working with **CERT-UA**) disclosed **Industroyer2**, a new version of the [[ics-ot/threats/2017-06-12-crashoverride-industroyer-grid-malware|Industroyer]] grid malware. It was deployed against **high-voltage electrical substations** of a Ukrainian energy provider and scheduled to run on **8 April 2022 at 16:10 UTC**. The sample was compiled on 23 March 2022, so the operation was planned at least two weeks ahead.

Industroyer2 is stripped down compared with its 2016 predecessor. It implements **only IEC 60870-5-104**, with its target configuration **hard-coded** into the binary for the specific victim. It was deployed with a set of destructive tools meant to cover tracks and delay recovery:

- **CaddyWiper** on Windows;
- **ORCSHRED** (a Linux worm), **SOLOSHRED** and **AWFULSHRED** (Linux and Solaris wipers).

ESET attributes the attack to **Sandworm** with high confidence. Ukrainian authorities reported that the attack was **detected and thwarted** before it could cut power.

## Apa maksudnya untuk Malaysia? 🇲🇾

Two lessons carry over to Malaysian energy operators:

1. **The capability is maintained and reusable.** Six years after the first Industroyer, the same group fielded a leaner version. It was tailored per victim, which means the attackers had detailed knowledge of the target's substation configuration beforehand. Protect the documents that reveal it: network diagrams, IEC-104 address maps (IOAs) and SCADA configuration exports.
2. **Defence won here.** Detection before the scheduled execution prevented an outage. Continuous OT monitoring and a practised incident response plan are what make that possible. Under the Cyber Security Act 2024, NCII entities must also report incidents to NACSA.

## Details / TTPs (ATT&CK for ICS)

| Technique | Name | Observed behavior |
| --- | --- | --- |
| [T0888](https://attack.mitre.org/techniques/T0888/) | Remote System Information Discovery | Queries configured stations before acting |
| [T1692.001](https://attack.mitre.org/techniques/T1692/001/) | Command Message | IEC-104 commands to substation equipment |
| [T0806](https://attack.mitre.org/techniques/T0806/) | Brute Force I/O | Iterates over hard-coded information object addresses |
| [T0881](https://attack.mitre.org/techniques/T0881/) | Service Stop | Terminates specified processes before sending commands |
| [T0809](https://attack.mitre.org/techniques/T0809/) | Data Destruction | CaddyWiper, ORCSHRED, SOLOSHRED, AWFULSHRED |

## Detection guidance

- Allow-list **IEC-104 masters** per outstation and alert on new sources of control commands.
- Monitor for **scheduled tasks and group-policy changes** pushing binaries to OT-adjacent servers; that is how the wipers were staged.
- Keep **offline copies** of substation configuration and RTU/IED settings for rebuild.

## IoCs

Hashes and detection names are published in the referenced ESET and CERT-UA reporting.

## References

- ESET, *Industroyer2: Industroyer reloaded* (12 Apr 2022): https://www.welivesecurity.com/2022/04/12/industroyer2-industroyer-reloaded/
