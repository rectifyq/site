---
title: 2026-06-22 An unknown actor distributes malicious VBS scripts via WhatsApp
date: 2026-06-22
modified: 2026-06-22
---
📃Title: An unknown actor distributes malicious VBS scripts via WhatsApp\
📅Date: 2026-06-22\
🔗References: 
- https://securelist.com/whatsapp-vbs-rmm-campaign/120290/

> [!abstract] **Description**
> An active malware campaign has been discovered distributing malicious VBScript files through WhatsApp direct messages since June 2026. The operation affects users across multiple countries, with Malaysia experiencing the highest concentration of victims. Attackers compromise WhatsApp accounts and send weaponized VBS files disguised as business and financial documents to contacts. The multi-stage infection chain ultimately deploys legitimate ManageEngine Endpoint Central RMM software, providing persistent remote access to compromised systems. The scripts employ heavy obfuscation, Chinese-language comments, and modify Windows UAC settings. Infrastructure overlaps with ValleyRAT and Gh0st RAT operations suggest possible Chinese-speaking operators, though attribution remains uncertain. The campaign primarily targets individual users through opportunistic rather than focused methods, exploiting social engineering techniques with localized filenames in multiple languages.

🔖Rectifyq Taxonomies:
- relevancy: 🔴 Highly Relevant
- category: #⚔Threat
- sub-category: #campaign-analysis
- target: #broad-based
- MY-relevancy: #relevant

🔖MISP Galaxies:
- producer= #Kaspersky
- target-information="Australia"
- target-information="Brazil"
- target-information="India"
- target-information="Malaysia"
- target-information="Mexico"
- target-information="Russia"
- target-information="Singapore"
- target-information="Spain"
- target-information="Taiwan"
- target-information="United Kingdom"
- online-service="01031d3f-c9c9-4288-bb58-234c38e4246e"
- mitre-tool="BITSAdmin - S0190"
- mitre-tool="certutil - S0160"
- software-vendor="WhatsApp"
- rmm-tool="ManageEngine"
- operating-system="Windows"
- mitre-attack-pattern=['T1548.002', 'T1204.002', 'T1082', 'T1140', 'T1219', 'T1112', 'T1027', 'T1573', 'T1071.001', 'T1059.005', 'T1105', 'T1564.001', 'T1193', 'T1566.001', 'T1059.001', 'T1086']


MISP event uuid: [ef37da5f-f14c-4d52-88ff-af1dfd7fccd9](https://mispmy.rectifyq.com/events/view/ef37da5f-f14c-4d52-88ff-af1dfd7fccd9)
## Indicator of Compromise (IoCs)
```
type,value,comment
md5, 02bb20455cc592a69c080abac770ce90, ''
md5, 31037a42ca048e06e69a78f55bc2eff5, ''
md5, 05d188f071d097f5b6bd8138749b4b14, ''
md5, 0ba93109757776a44de9d8c88baa4963, ''
md5, 1a3cc75466ffb1971482f7abf7aabc3f, ''
md5, 1c47c63e5ed25060d95359c57c77b107, ''
md5, 1d94fbe9cab21278cc3f104bea334d08, ''
md5, 20209b3a32769afc6a75694b8d8839dd, ''
md5, 2c6f05f1f309d89b2236e6c8b59c88f9, ''
md5, 3b1aba44dd3d9b6339b6f56e2f42034b, ''
md5, 4044e4b6471c9de7b0a4ba37d9d9df9a, ''
md5, 4f0593e8e0e8fac49429e9b45ebf7fa1, ''
md5, 5002eca748205d544618e3bd2dedc223, ''
md5, 5b6bbcc06cf08cc99e1afeda486d42fb, ''
md5, 6359e6236471cbe434d0ef4c42b7f879, ''
md5, 63ac85195b73753333316a889cf5880f, ''
md5, 66442f2457eca8f47385b1fb2c6fcab8, ''
md5, 66705384a7ad81d14c34fc6c054a0ecf, ''
md5, 68c16c46f8afb9e00bbaba0207fb0a46, ''
md5, 6c39900d77dcba158e1d27c7619cb06d, ''
md5, 6fb6a55424adfb61e31f06aef33273e5, ''
md5, 7403cbcc5a9c32384d431856dc48fcc9, ''
md5, 74fd9f91fc93b6288b4fc253ea5b3e20, ''
md5, 7849061c536a3efb05a56d504694e7e7, ''
md5, 79ecd61b09b0f2d54b34586c916c4ec9, ''
md5, 7f16449cd0c4862d1eadf8a5742bf09a, ''
md5, 7f81c1bc8cfd588e8998968e2621456e, ''
md5, 8c3322009b8982663c0cbecd9492e7eb, ''
md5, 8c6d9fc389ad3f20ccbc71d77eb39bfa, ''
md5, 993f4c0cadbc769a4b0ed62a918db58d, ''
md5, 9d9ac85765e4a818a3ccabe2cf4fef82, ''
md5, 9f13c7b8ba391b2f597874e54d310648, ''
md5, b7cd06c71465038b658a6dc1f273a507, ''
md5, c7f38cbb99c8b74fa0465293feeba700, ''
md5, d01cad98dd0d01b75e04e784953c5e2b, ''
md5, d06333c360b51456f427e616c3c5f8bd, ''
md5, d43fdaa1f0ee09d7e5f0f94ee9df7b6c, ''
md5, dad708e050632a4280cabf98ac1376b7, ''
md5, ddaffe9849f7f3c79f8804adb9a6b3d5, ''
md5, df4fa0369eaca5cec348be293890d4af, ''
md5, f90ed4b2d0b67114aa89ddfed658e5c0, ''
ip-dst, 202.61.160.201, 'Attacker-controlled UEMS server IP Address'
ip-dst, 202.61.160.137, 'Attacker-controlled UEMS server IP Address'
ip-dst, 202.61.160.160, 'Attacker-controlled UEMS server IP Address'
ip-dst, 202.61.160.202, 'Attacker-controlled UEMS server IP Address'
ip-dst, 202.61.160.208, 'Attacker-controlled UEMS server IP Address'
ip-dst, 38.55.151.63, 'Attacker-controlled UEMS server IP Address'
domain, baoxis.cc, ''
hostname, invoice.msopsa.top, ''
hostname, temu.baskwms.top, ''
hostname, qse.shoppes.help, ''
domain, shaaslong.one, ''
hostname, baolongwes.oss-ap-southeast-1.aliyuncs.com, ''
hostname, sdcwww.oss-ap-southeast-1.aliyuncs.com, ''
hostname, baoyuw2s.s3.ap-southeast-1.amazonaws.com, ''
hostname, hksha3.s3.ap-southeast-1.amazonaws.com, ''
hostname, sjdkjj23.s3.ap-southeast-1.amazonaws.com, ''
hostname, xijkwm2.s3.ap-southeast-1.amazonaws.com, ''
hostname, yifubafu.s3.ap-southeast-1.amazonaws.com, ''
hostname, caiwuascw.s3.us-east-005.backblazeb2.com, ''
hostname, facaia.s3.us-east-005.backblazeb2.com, ''

```


Full IOCs available in Rectifyq's [MISP](https://mispmy.rectifyq.com/events/view/ef37da5f-f14c-4d52-88ff-af1dfd7fccd9)