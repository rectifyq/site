---
title: "BlackEnergy 3 — The 2015 Ukraine Power Grid Attack"
description: "The first publicly confirmed cyberattack to cause a power outage: on 23 December 2015 attackers used stolen VPN credentials and the utilities' own control software to open breakers at three Ukrainian distribution companies, cutting power to about 225,000 customers."
date: 2016-02-25
tlp: CLEAR
scope: global
sectors: [energy]
mitre: [T0865, T0822, T0859, T0823, T0831, T1693.001, T0816, T0809, T0826, T0827]
pir: [PIR-05]
tags: [ics-ot, threat, intrusion-analysis, targeted, sandworm]
---

## Summary

On **23 December 2015**, three regional electricity distribution companies (*oblenergos*) in Ukraine suffered coordinated cyberattacks that caused unscheduled outages for **approximately 225,000 customers**. It is the first publicly confirmed case of a cyberattack causing a power outage.

The intrusion began months earlier with **spear-phishing emails carrying malicious Microsoft Office attachments** that installed **BlackEnergy 3**. The attackers harvested credentials and then used the utilities' own **VPN access and remote ICS client software** to operate breakers from outside. To slow recovery they also:

- wiped workstations and servers with **KillDisk**, which corrupts the master boot record;
- **corrupted the firmware of serial-to-Ethernet converters** at substations, cutting operators off from field devices;
- scheduled disconnects of the **uninterruptible power supplies (UPS)** feeding control-centre servers.

Operators restored power by switching substations **manually**, and operations stayed constrained for months afterwards. In October 2020 the U.S. Department of Justice indicted officers of Russia's GRU Unit 74455 (Sandworm), whose charges cover the attacks on Ukraine's power grid.

BlackEnergy 3 itself is not ICS-specific malware. The physical effect came from attackers **using legitimate control software with stolen credentials**. That is why this case still shapes OT defence today.

## Apa maksudnya untuk Malaysia? 🇲🇾

Energy is one of the 11 National Critical Information Infrastructure (NCII) sectors under the **Cyber Security Act 2024**. Every step of this attack maps onto an ordinary corporate weakness that Malaysian utilities and large industrial sites can audit today:

- **Remote access into OT without MFA.** The attackers reached the HMIs through the utilities' own VPNs. Edge devices that grant OT access are a prime target here too; see the [[my-threat-landscape/breaches/2026-06-fortibleed|FortiBleed credential campaign]] that affected Malaysian organisations in June 2026.
- **Flat IT/OT networks.** Phishing a corporate mailbox led to control of breakers. NC4's March 2026 alert on [[my-threat-landscape/threats/b6a3b460-3020-45c0-b344-0cb0d2275543|network segmentation to prevent malware propagation]] addresses exactly this path.
- **No manual fallback.** Ukraine recovered because crews could still operate substations by hand. Test whether your plant or substation can run, and be restored, without its SCADA and engineering workstations.

## Details / TTPs (ATT&CK for ICS)

| Technique | Name | Observed behavior |
| --- | --- | --- |
| [T0865](https://attack.mitre.org/techniques/T0865/) | Spearphishing Attachment | Office documents delivering BlackEnergy 3 |
| [T0822](https://attack.mitre.org/techniques/T0822/) | External Remote Services | Utility VPNs used to reach the control network |
| [T0859](https://attack.mitre.org/techniques/T0859/) | Valid Accounts | Harvested credentials for VPN and ICS clients |
| [T0823](https://attack.mitre.org/techniques/T0823/) | Graphical User Interface | Attackers drove the operators' HMI/DMS software remotely |
| [T0831](https://attack.mitre.org/techniques/T0831/) | Manipulation of Control | Breakers opened at substations via the operators' own software |
| [T1693.001](https://attack.mitre.org/techniques/T1693/001/) | System Firmware | Malicious firmware bricked serial-to-Ethernet converters |
| [T0816](https://attack.mitre.org/techniques/T0816/) | Device Restart/Shutdown | Scheduled UPS disconnects took down control-centre servers |
| [T0809](https://attack.mitre.org/techniques/T0809/) | Data Destruction | KillDisk wiped systems and the master boot record |
| [T0826](https://attack.mitre.org/techniques/T0826/) | Loss of Availability | Outage for ~225,000 customers |
| [T0827](https://attack.mitre.org/techniques/T0827/) | Loss of Control | Operators locked out of remote control during recovery |

## Detection guidance

- Alert on **OT remote-access sessions outside change windows**, and on any HMI session originating from the VPN rather than the control room.
- Baseline **breaker operations**: unexpected open commands across multiple substations within minutes is a high-fidelity signal.
- Monitor **firmware writes** to network and serial gateways, and keep known-good firmware images offline.
- Enforce **MFA and jump hosts** for every path into OT, and keep the UPS and out-of-band management off the corporate network.

## IoCs

BlackEnergy 3 and KillDisk indicators are published in the referenced advisory and in vendor reporting. Behavioural detections (above) remain more durable than hashes for this campaign.

## References

- CISA, *Cyber-Attack Against Ukrainian Critical Infrastructure* (IR-ALERT-H-16-056-01, 25 Feb 2016): https://www.cisa.gov/news-events/ics-alerts/ir-alert-h-16-056-01
- U.S. DOJ, *Six Russian GRU Officers Charged in Connection with Worldwide Deployment of Destructive Malware* (19 Oct 2020): https://www.justice.gov/opa/pr/six-russian-gru-officers-charged-connection-worldwide-deployment-destructive-malware-and
