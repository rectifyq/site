---
title: 2023-03-29 Spyware vendors use 0-days and n-days against popular platforms
date: 2023-03-29
modified: 2023-03-29
---
📃Title: Spyware vendors use 0-days and n-days against popular platforms\
📅Date: 2023-03-29\
🔗References: 
- https://blog.google/threat-analysis-group/spyware-vendors-use-0-days-and-n-days-against-popular-platforms/

🔖Rectifyq Taxonomies:
- relevancy: 🔴 Highly Relevant
- category: ⚔Threat
- sub-category: #campaign-analysis

🔖MISP Galaxies:
- producer= #Google-Cloud-Blog
- target-information="Kazakhstan"
- target-information="Malaysia"
- target-information="United Arab Emirates"
- mitre-attack-pattern=[]


MISP event uuid: [d321cbcb-6d1a-4cc6-bb06-ba5e9e9437da](https://mispmy.rectifyq.com/events/view/d321cbcb-6d1a-4cc6-bb06-ba5e9e9437da)
## Indicator of Compromise (IoCs)
```
type,value,comment
url, https://cdn.cutlink.site/p/uu6ekt, 'landing page'
url, https://api.cutlink.site/api/s/N0NBL8/, 'Android exploit chain'
url, https://api.cutlink.site/api/s/3PU970/, 'iOS exploit chain'
url, https://imjustarandomsite.3utilities.com, 'exploit delivery server'
hostname, www.sufficeconfigure.com, 'landing page and exploit delivery'
hostname, www.anglesyen.org, 'malware C2'

```


Full IOCs available in Rectifyq's [MISP](https://mispmy.rectifyq.com/events/view/d321cbcb-6d1a-4cc6-bb06-ba5e9e9437da)