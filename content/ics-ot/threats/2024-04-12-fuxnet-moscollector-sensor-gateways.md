---
title: "Fuxnet — Destructive Malware Against Moscow's Sensor Gateways"
description: "In April 2024 the Ukraine-linked Blackjack group hit Moscollector, which monitors Moscow's underground utility networks, with Fuxnet: malware that corrupts sensor-gateway firmware and floods Meter-Bus links. Claroty's analysis shows the real damage was far smaller than claimed."
date: 2024-04-12
tlp: CLEAR
scope: global
sectors: [water, communications]
mitre: [T0822, T0809, T0814, T0879, T0829]
pir: [PIR-05]
tags: [ics-ot, threat, malware-analysis, targeted, geopolitical]
---

## Summary

In **April 2024**, a group calling itself **Blackjack**, believed to be affiliated with Ukrainian intelligence services, claimed an attack on **Moscollector**. Moscollector is a Moscow company that monitors underground water, sewage and communications infrastructure through networks of sensors. Claroty Team82 published an analysis on **12 April 2024** (updated 15 April) of the malware involved, **Fuxnet**. Its destructive routines:

- **corrupt the filesystem** and disable remote-access services on the sensor gateways;
- perform **bit-flip operations on NAND memory chips** to cause hardware failure;
- **flood the Meter-Bus (M-Bus) serial channel** with random and structured data to overwhelm the connected sensors.

The impact claims shrank under scrutiny. Blackjack first claimed **87,000 sensors** destroyed, then revised to **2,659 gateways targeted** and about **1,700 "successfully attacked"**. Claroty's review of the leaked data suggests **"a little more than 500 sensor gateways were bricked"**, with the remote sensors themselves likely intact.

## Apa maksudnya untuk Malaysia? 🇲🇾

Fuxnet targets the **distributed edge of utilities**: cheap, numerous gateways spread across a city, often managed remotely and rarely monitored like a control room. As Malaysian utilities expand smart metering and remote monitoring, that edge grows.

- **Inventory remote gateways and their management interfaces**, and make sure they are not reachable from the internet or from the corporate network.
- Plan for **physical replacement at scale**. Firmware-bricked devices need truck rolls, so hold spares and a rapid-replacement process.
- **Read claims critically.** Hacktivist and state-linked personas routinely overstate impact. Compare claims against telemetry before briefing management, as Claroty did here. The same discipline applies to the claims in Rectifyq's [[my-threat-landscape/breaches/index|Breach Watch]].

## Details / TTPs (ATT&CK for ICS)

| Technique | Name | Observed behavior |
| --- | --- | --- |
| [T0822](https://attack.mitre.org/techniques/T0822/) | External Remote Services | Remote access used to reach the sensor gateways |
| [T0809](https://attack.mitre.org/techniques/T0809/) | Data Destruction | Filesystem corruption on gateways |
| [T0814](https://attack.mitre.org/techniques/T0814/) | Denial of Service | M-Bus flooding of connected sensors |
| [T0879](https://attack.mitre.org/techniques/T0879/) | Damage to Property | NAND bit-flipping to destroy hardware |
| [T0829](https://attack.mitre.org/techniques/T0829/) | Loss of View | Sensor data from the monitored networks lost |

## Detection guidance

- Monitor gateway **heartbeat/telemetry gaps** across the fleet; a sudden mass drop-off is the signature of this attack.
- Alert on **firmware or configuration pushes** to field gateways that aren't from your management platform.
- Restrict **SSH/Telnet** and other management services on field gateways to a dedicated management network.

## IoCs

See the Claroty Team82 analysis for sample details.

## References

- Claroty Team82, *Unpacking the Blackjack Group's Fuxnet Malware* (12 Apr 2024): https://claroty.com/team82/research/unpacking-the-blackjack-groups-fuxnet-malware
