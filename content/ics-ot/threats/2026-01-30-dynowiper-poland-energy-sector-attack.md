---
title: "DynoWiper — Destructive Attack on Poland's Energy Sector (December 2025)"
description: "On 29 December 2025, attackers who entered through internet-exposed FortiGate devices with default credentials hit about 30 Polish energy sites, damaging RTUs, relays, HMIs and serial servers and deploying the DynoWiper wiper. No outage occurred; attribution is split between Sandworm and Berserk Bear/Dragonfly."
date: 2026-01-30
tlp: CLEAR
scope: global
sectors: [energy]
mitre: [T0883, T0822, T1694.001, T1693.001, T0809, T0879]
pir: [PIR-05]
tags: [ics-ot, threat, intrusion-analysis, targeted, geopolitical]
---

## Summary

On **29 December 2025**, attackers carried out a destructive operation against Poland's energy sector. According to CERT Polska it hit approximately **30 sites**, including **combined heat and power plants** and **dispatch centres for wind and solar facilities**. Reconnaissance and unauthorised access had been detected from **March to July 2025**.

**Entry point:** **Fortinet FortiGate devices exposed to the internet, using default credentials and no multi-factor authentication**, which served as both firewalls and VPN gateways.

**Affected OT equipment**, some of it **permanently damaged**:

- Hitachi Energy **RTU560** remote terminal units and **Relion 650** protection and control relays;
- **Mikronika** RTUs and HMIs;
- **Moxa NPort** serial device servers.

On Windows systems the attackers deployed a new wiper, **DynoWiper**. ESET (30 January 2026) describes three phases: recursive file wiping, a second wiping pass, then a forced reboot. Three variants were deployed within hours. ESET's endpoint protection on the targeted machines **interfered with all three**, limiting the damage.

**No power outage occurred.** CERT Polska noted "there was a risk of causing a disruption in electricity generation at the affected facilities."

**Attribution is contested:**

- **ESET** attributes DynoWiper to **Sandworm** with *medium* confidence, citing similarities to the ZOV wiper used in Ukraine. Dragos also points to Sandworm/ELECTRUM.
- **CERT Polska** links the activity to the actor tracked as **Static Tundra / Berserk Bear / Ghost Blizzard / Dragonfly**.

## Apa maksudnya untuk Malaysia? 🇲🇾

This is the most transferable OT incident of the past year for Malaysia. **The initial access was an internet-facing firewall with default credentials and no MFA.** The same failure behind the [[my-threat-landscape/breaches/2026-06-fortibleed|FortiBleed]] campaign that hit Malaysian organisations in June 2026. Malaysia's renewable build-out (including the Large Scale Solar programme) adds many small, remotely managed generation sites. That is exactly the profile of the Polish wind and solar dispatch targets.

- **Audit every firewall/VPN that fronts an OT or generation site**: no default or shared credentials, MFA enforced, management interface not on the internet.
- **Segment RTUs, relays and serial servers** behind the site firewall, and keep known-good configurations and firmware offline for rebuild.
- Treat **endpoint protection on OT Windows hosts** as a control that matters. It measurably blunted the wiper in Poland.
- NC4's [[my-threat-landscape/threats/b6a3b460-3020-45c0-b344-0cb0d2275543|network segmentation alert]] is the local reference for the containment side.

## Details / TTPs (ATT&CK for ICS)

| Technique | Name | Observed behavior |
| --- | --- | --- |
| [T0883](https://attack.mitre.org/techniques/T0883/) | Internet Accessible Device | Internet-exposed FortiGate firewall/VPN |
| [T0822](https://attack.mitre.org/techniques/T0822/) | External Remote Services | VPN access into sites |
| [T1694.001](https://attack.mitre.org/techniques/T1694/001/) | Default Credentials | Default credentials, no MFA |
| [T1693.001](https://attack.mitre.org/techniques/T1693/001/) | System Firmware | Field devices corrupted and rendered unusable |
| [T0809](https://attack.mitre.org/techniques/T0809/) | Data Destruction | DynoWiper on Windows HMIs/servers |
| [T0879](https://attack.mitre.org/techniques/T0879/) | Damage to Property | Some ICS devices permanently damaged |

## Detection guidance

- Alert on **administrative logins to edge firewalls** from unexpected geographies or with default account names, and on any new local admin accounts.
- Monitor **configuration and firmware changes** on RTUs, relays and serial servers against a known-good baseline.
- Detect **mass file overwrite and forced-reboot behaviour** on HMIs and engineering hosts.

## IoCs

Indicators are published in the CERT Polska report and ESET's DynoWiper analysis.

## References

- CERT Polska, *Energy Sector Incident Report 2025*: https://cert.pl/uploads/docs/CERT_Polska_Energy_Sector_Incident_Report_2025.pdf
- ESET Research, *DynoWiper update: Technical analysis and attribution* (30 Jan 2026): https://www.welivesecurity.com/en/eset-research/dynowiper-update-technical-analysis-attribution/
- SecurityWeek, *Default ICS Credentials Exploited in Destructive Attack on Polish Energy Facilities*: https://www.securityweek.com/default-ics-credentials-exploited-in-destructive-attack-on-polish-energy-facilities/
