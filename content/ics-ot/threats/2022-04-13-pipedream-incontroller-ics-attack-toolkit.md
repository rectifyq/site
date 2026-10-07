---
title: "PIPEDREAM / INCONTROLLER — A Modular Toolkit for Attacking PLCs"
description: "A state-developed ICS attack toolkit targeting Schneider Electric Modicon and OMRON Sysmac PLCs and OPC UA servers, disclosed in April 2022 by U.S. agencies, Dragos and Mandiant before it was used for disruption."
date: 2022-04-13
tlp: CLEAR
scope: global
sectors: [energy, manufacturing, oil-and-gas]
mitre: [T0846, T0888, T0861, T0845, T0843, T1692.001, T0890]
pir: [PIR-05]
tags: [ics-ot, threat, tool-profile, broad-based, chernovite]
---

## Summary

On **13 April 2022** the U.S. Department of Energy, CISA, NSA and FBI issued advisory **AA22-103A** on custom tools that give an attacker "full system access" to multiple ICS devices. Dragos calls the toolkit **PIPEDREAM** and the group behind it **CHERNOVITE**; Mandiant calls it **INCONTROLLER**. Targets named in the advisory:

- **Schneider Electric** Modicon and Modicon Nano PLCs (including TM251, TM241, M258, M238, LMC058, LMC078);
- **OMRON** Sysmac NJ and NX PLCs;
- **OPC UA servers**.

Mandiant's component names describe the modules: **TAGRUN** (OPC UA scanning and tag reading/writing), **CODECALL** (Modbus and Codesys-based devices) and **OMSHELL** (OMRON). A Windows component **installs a known-vulnerable ASRock motherboard driver (`AsrDrv103.sys`, CVE-2020-15368)** to execute code in the kernel. The toolkit can scan, brute-force credentials, upload and download PLC logic, and send commands.

What makes this case unusual is timing: it was **found before it was used to disrupt anything**. That gave defenders a rare head start.

## Apa maksudnya untuk Malaysia? 🇲🇾

PIPEDREAM is cross-industry by design. It targets general-purpose automation platforms and the OPC UA standard rather than one plant. If your estate includes **Schneider Electric Modicon or OMRON Sysmac PLCs, Codesys-based controllers or OPC UA servers**, the advisory's mitigations apply directly:

- Put PLCs behind **segmented, monitored networks** with no direct internet or flat-IT reachability.
- **Change default and shared passwords** on PLCs and engineering tools, and require MFA for remote access into OT.
- Use **continuous OT monitoring** to catch scanning and unexpected program uploads or downloads, which are the toolkit's core actions.

## Details / TTPs (ATT&CK for ICS)

| Technique | Name | Observed behavior |
| --- | --- | --- |
| [T0846](https://attack.mitre.org/techniques/T0846/) | Remote System Discovery | Scans for Schneider, OMRON and OPC UA devices |
| [T0888](https://attack.mitre.org/techniques/T0888/) | Remote System Information Discovery | Enumerates device details |
| [T0861](https://attack.mitre.org/techniques/T0861/) | Point & Tag Identification | Browses and reads OPC UA tags (TAGRUN) |
| [T0845](https://attack.mitre.org/techniques/T0845/) | Program Upload | Pulls logic from PLCs |
| [T0843](https://attack.mitre.org/techniques/T0843/) | Program Download | Pushes logic to PLCs |
| [T1692.001](https://attack.mitre.org/techniques/T1692/001/) | Command Message | Direct device commands |
| [T0890](https://attack.mitre.org/techniques/T0890/) | Exploitation for Privilege Escalation | Vulnerable ASRock driver (CVE-2020-15368) |

## Detection guidance

- Alert on **PLC program upload/download and mode changes** from any host that is not an approved engineering workstation.
- Detect **OPC UA browsing** of the full address space from new clients.
- Block or alert on loading of **`AsrDrv103.sys`**, and enable Microsoft's vulnerable-driver blocklist on Windows hosts in OT.

## IoCs

Detection signatures and YARA rules are referenced in the CISA advisory; see also the Dragos and Mandiant reports.

## References

- CISA/DOE/NSA/FBI, *APT Cyber Tools Targeting ICS/SCADA Devices* (AA22-103A, 13 Apr 2022; rev. 25 May 2022): https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-103a
