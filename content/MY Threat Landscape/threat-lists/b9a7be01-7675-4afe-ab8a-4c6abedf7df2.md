---
title: 2015-05-21 The Naikon APT and the MsnMM Campaigns
date: 2015-05-21
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
- producer #Kaspersky
- target-information="Laos"
- target-information="Malaysia"
- target-information="Myanmar"
- target-information="Philippines"
- target-information="Singapore"
- target-information="Vietnam"
- threat-actor #Naikon
- malpedia="SslMM"
- malpedia="Sys10"
- malpedia="WinMM"
- malpedia="xsPlus"
- mitre-attack-pattern=[]


MISP event uuid: [b9a7be01-7675-4afe-ab8a-4c6abedf7df2](https://mispmy.rectifyq.com/events/view/b9a7be01-7675-4afe-ab8a-4c6abedf7df2)
## Indicator of Compromise (IoCs)
```
type,value,comment
md5, d0fba5db608ac8f5a3d05a71ceb0eca1, 'xsPlus (nokian) and plugin No sample in VT\r\nLast check:06/05/2025'
hostname, ahzx.eicp.net, 'C2'
hostname, bkav.imshop.in, 'C2'
hostname, googlemm.vicp.net, 'C2'
hostname, mncgn.51vip.biz, 'C2'
hostname, myanmartech.vicp.net, 'C2'
hostname, thailand.vicp.net, 'C2'
hostname, ubaoyouxiang.gicp.net, 'C2'
hostname, vietnam.gnway.net, 'C2'

Full IOCs available in Rectifyq's MISP```