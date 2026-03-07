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
md5, 469ca0c73398903908babcad14300d8d, 'SslMM'
sha1, c708250cfe4730a2a0e9bf30f168495a791e299a, 'SslMM'
sha256, efbdb14f38c20c55e32cd98e4b2fdf197709581581d31fac683aabbf361df5f3, 'SslMM'
md5, 95c4a236faa65b75dbb0076d8248584c, 'SslMM'
sha1, 512843611bda5faf0db68c9dc99b1f001a67fd0a, 'SslMM'
sha256, 2eb5a95f7dacab71fa863e0b08cfc790fea84fa1dd93cd00453c343eec54e2ee, 'SslMM'
md5, c8c81cca4645e71213f2310cec6c277d, 'WinMM'
sha1, ca6c730a2cf9897e76098bbb875fffc75332a58e, 'WinMM'
sha256, 194ca0618535226b28096586ed3a978e3b434e6ca7837ab91b59737a5eeaf594, 'WinMM'
md5, 45a99f60654f22b671aec980687d0f15, 'WinMM'
sha1, 455fdb4b3374cfaba668f7f65f42f80da6c8331a, 'WinMM'
sha256, 34f3dcf6c1794451fe92afa917deb6e34480c261fde7339212a80e01e66d8425, 'WinMM'
md5, 9883abc829870478ce6f3cfddbcbbaf2, 'WininetMM/Sakto'
sha1, cafa255005f4c868985b08e31eb23c4a07a5949c, 'WininetMM/Sakto'
sha256, b6482fc37393586dc0864edadd38204a80e4f50da200956b3b74ce8ab16e5b81, 'WininetMM/Sakto'
md5, a5721c5e7f2b49df82595819b5a49c0c, 'WininetMM/Sakto'
sha1, e55bdeebabfe76582d07020fd925847307c7929e, 'WininetMM/Sakto'
sha256, 330c29af248396ba8728e26725f676d1340471df8198dd2b71b23446c79d30fd, 'WininetMM/Sakto'
md5, 5c04904a50f0285851fb7292c13858ec, 'Injectv1/InjectResource'
sha1, 472443736bba56e9648633913cbc225151c77421, 'Injectv1/InjectResource'
sha256, da3a16c34481618b79720660dc69c85fdf41ab935755f9078f55c82335e4243c, 'Injectv1/InjectResource'
md5, 6a82c153bd370250cc2fed89f1bb5c91, 'Exe_Exchange'
sha1, 9d9a271b6573bfb572c5db7df98f102caf55c307, 'Exe_Exchange'
sha256, b1737d935877af89a56b64823fda0a4c884a6b9032dbc2c5f49b512c63c19c35, 'Exe_Exchange'
md5, 48fb78e8ba531505e246760c0d02d6b0, 'Exe_Exchange'
sha1, a41a63ffaabd7eef1912ed99673781bb5b69e6f1, 'Exe_Exchange'
sha256, e6f368420f8a97d7bd2c89818c262c53e3b4b0aba2903c3f264b86fc0816f442, 'Exe_Exchange'
md5, c58df5892700ac3f467524f86bf325c0, 'Sys10'
sha1, 9a65543de2b00a4801b6af8d41549d28fa572142, 'Sys10'
sha256, 801a2d0e09076f42d93692efca7b67028f17604ae9330c186dad8c21d2ec1d0d, 'Sys10'
md5, 33d388c6e841ede3920f79516b5da032, 'Sys10'
sha1, 8edd72a48edf5992979d29bcfd1d809e7f43fc6e, 'Sys10'
sha256, afe3dd68bded405ca63ed83c711f0b3c4f5718706afc0beec60114fc80491e6a, 'Sys10'
md5, d86106faaa398b8d83437176bf5e39c4, 'xsPlus (nokian) and plugin'
sha1, 5d3ba7d0ce20c07e6cf6b272a3a8d8f05f29c27c, 'xsPlus (nokian) and plugin'
sha256, 33ed25eb18058a7f21958941c44d8e31db517fe281ec46e391d2b2ffafb7f1e3, 'xsPlus (nokian) and plugin'
md5, 041436594c1ce9e99c569fb7402fe0c7, 'xsPlus (nokian) and plugin'
sha1, dbae71c68407a50e6981d5929634e3e6044066ff, 'xsPlus (nokian) and plugin'
sha256, bff06d770eec594c363a217effbe2ea4e8a618b7ef95da1100e5aef9c847403f, 'xsPlus (nokian) and plugin'
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