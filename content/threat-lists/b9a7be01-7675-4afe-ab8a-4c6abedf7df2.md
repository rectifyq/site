---
title: 2015-05-21 The Naikon APT and the MsnMM Campaigns
date: 2015-05-21
modified: 2015-05-21
---
📃Title: The Naikon APT and the MsnMM Campaigns\
📅Date: 2015-05-21\
🔗References: 
- https://securelist.com/the-naikon-apt-and-the-msnmm-campaigns/70029/
- https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/07205555/TheNaikonAPT-MsnMM1.pdf

🔖Rectifyq Taxonomies:
- relevancy: 🔴 Highly Relevant
- category: #⚔Threat
- sub-category: #campaign-analysis
- target: #targeted
- MY-relevancy: #relevant

🔖MISP Galaxies:
- producer= #Kaspersky
- target-information="Laos"
- target-information="Malaysia"
- target-information="Myanmar"
- target-information="Philippines"
- target-information="Singapore"
- target-information="Vietnam"
- threat-actor= #Naikon
- malpedia="SslMM"
- malpedia="Sys10"
- malpedia="WinMM"
- malpedia="xsPlus"
- mitre-attack-pattern=[]


MISP event uuid: [b9a7be01-7675-4afe-ab8a-4c6abedf7df2](https://mispmy.rectifyq.com/events/view/b9a7be01-7675-4afe-ab8a-4c6abedf7df2)
## Indicator of Compromise (IoCs)
```
type,value,comment
md5, 469ca0c73398903908babcad14300d8d, 'SslMM'
md5, 95c4a236faa65b75dbb0076d8248584c, 'SslMM'
md5, c8c81cca4645e71213f2310cec6c277d, 'WinMM'
md5, 45a99f60654f22b671aec980687d0f15, 'WinMM'
md5, 9883abc829870478ce6f3cfddbcbbaf2, 'WininetMM/Sakto'
md5, a5721c5e7f2b49df82595819b5a49c0c, 'WininetMM/Sakto'
md5, 5c04904a50f0285851fb7292c13858ec, 'Injectv1/InjectResource'
md5, 6a82c153bd370250cc2fed89f1bb5c91, 'Exe_Exchange'
md5, 48fb78e8ba531505e246760c0d02d6b0, 'Exe_Exchange'
md5, c58df5892700ac3f467524f86bf325c0, 'Sys10'
md5, 33d388c6e841ede3920f79516b5da032, 'Sys10'
md5, d86106faaa398b8d83437176bf5e39c4, 'xsPlus (nokian) and plugin'
md5, 041436594c1ce9e99c569fb7402fe0c7, 'xsPlus (nokian) and plugin'
md5, d0fba5db608ac8f5a3d05a71ceb0eca1, 'xsPlus (nokian) and plugin No sample in VT\r\nLast check:06/05/2025'
hostname, ahzx.eicp.net, 'C2'
hostname, bkav.imshop.in, 'C2'
hostname, googlemm.vicp.net, 'C2'
hostname, mncgn.51vip.biz, 'C2'
hostname, myanmartech.vicp.net, 'C2'
hostname, thailand.vicp.net, 'C2'
hostname, ubaoyouxiang.gicp.net, 'C2'
hostname, vietnam.gnway.net, 'C2'

```


Full IOCs available in Rectifyq's [MISP](https://mispmy.rectifyq.com/events/view/b9a7be01-7675-4afe-ab8a-4c6abedf7df2)