---
title: 2022-08-30 Rising Tide Chasing the Currents of Espionage in the South China Sea
date: 2022-08-30
modified: 2022-08-30
---
📃Title: Rising Tide: Chasing the Currents of Espionage in the South China Sea\
📅Date: 2022-08-30\
🔗References: 
- https://www.proofpoint.com/us/blog/threat-insight/chasing-currents-espionage-south-china-sea

> [!abstract] **Description**
> Proofpoint and PwC Threat Intelligence have jointly identified a cyber espionage campaign, active since April 2022 through June, delivering the ScanBox exploitation framework to targets who visit a malicious domain posing as an Australian news website.

🔖Rectifyq Taxonomies:
- relevancy: 🔴 Highly Relevant
- category: #⚔Threat
- sub-category: #campaign-analysis
- target: #targeted
- MY-relevancy: #relevant
- topic: #geopolitical

🔖MISP Galaxies:
- producer= #Proofpoint
- target-information="United States"
- target-information="Malaysia"
- target-information="Australia"
- target-information="Japan"
- target-information="Cambodia"
- threat-actor= #APT40
- sector="Defense"
- sector="Education"
- sector="Energy"
- sector="Government, Administration"
- sector="Manufacturing"
- sector="News - Media"
- sector="Oil"
- malpedia="scanbox"
- mitre-attack-pattern=['T1566', 'T1102', 'T1195', 'T1056', 'T1574', 'T1189', 'T1055', 'T1518', 'T1095', 'T1140', 'T1027', 'T1036']


MISP event uuid: [83f31bcf-cf2e-4ebb-b8c2-7ef9e6925c9e](https://mispmy.rectifyq.com/events/view/83f31bcf-cf2e-4ebb-b8c2-7ef9e6925c9e)
## Indicator of Compromise (IoCs)
```
type,value,comment
md5, 3d2cd2ddb95f2dec74375e7475dfe743, 'ScanBox Sample'
md5, 6f8688d0691985e43261408c50764c40, 'ScanBox Sample'
md5, 33094e2d6878eb6faab9fbdb2a4a4ebe, 'ScanBox Sample'
md5, d6704f0eccb1802dc931422224923843, 'ScanBox Sample'
md5, f87602542673e7dde30075b2e340a47f, 'ScanBox Sample'
md5, f542bd63c685840dfb42136c2669bd6b, 'ScanBox Sample'
md5, 21e087f31c02bf417d958d356a13f315, 'ScanBox Sample'
md5, b46e92ace23a026e3d1772fecb1b6b3d, 'ScanBox Sample'
md5, 88675e058531c8ac4440a1fb4f55d54f, 'ScanBox Sample'
md5, 3e179ef0442be6dcaedbff9446eaf82a, 'ScanBox Sample'
md5, 3c2ec71dbec0629c92ee081fa5523190, 'Legitimate PE used in DLL Sideloading'
md5, c5c600f5bcc25805dc42e791a543fdd5, 'Legitimate PE used in DLL Sideloading'
md5, 9f5f2f0fb0a7f5aa9f16b9a7b6dad89f, 'Legitimate PE used in DLL Sideloading'
email-src, visitable.daishaju@gmail.com, 'Phishing Email Sender Address'
email-src, goodlandteactuator@gmail.com, 'Phishing Email Sender Address'
email-src, claire3bluntxq@gmail.com, 'Phishing Email Sender Address'
email-src, ascents.nestora2@gmail.com, 'Phishing Email Sender Address'
email-src, walknermohammad26@gmail.com, 'Phishing Email Sender Address'
email-src, entertainingemiliano20@gmail.com, 'Phishing Email Sender Address'
email-src, osinskigeovannyxw@gmail.com, 'Phishing Email Sender Address'
email-src, brittanisoq@outlook.com, 'Phishing Email Sender Address'
email-src, charmainejuxtzk@outlook.com, 'Phishing Email Sender Address'
email-src, gradyt18iheme@outlook.com, 'Phishing Email Sender Address'
email-src, dagny382cber@outlook.com, 'Phishing Email Sender Address'
email-src, marikok2bedax@outlook.com, 'Phishing Email Sender Address'
email-src, pearlykeap3l@outlook.com, 'Phishing Email Sender Address'
email-src, mattbotossd@outlook.com, 'Phishing Email Sender Address'
email-src, thuang6102@gmail.com, 'Phishing Email Sender Address'
email-src, earlt1948@gmail.com, 'Phishing Email Sender Address'
email-src, amianggitaphill@yahoo.com, 'Phishing Email Sender Address'
email-src, zoezlb@gmail.com, 'Phishing Email Sender Address'
url, http://australianmorningnews.com/?p=23, 'Phishing URL'
url, http://australianmorningnews.com/?p=30, 'Phishing URL'
url, http://australianmorningnews.com/?p=58, 'Phishing URL'
url, http://australianmorningnews.com/?p=55, 'Phishing URL'
url, http://australianmorningnews.com/?p=23-, 'Phishing URL'
url, http://asutralianmorningnews.com/?p=19-, 'Phishing URL'
url, http://asutralianmorningnews.com/, 'Related to Darkpink APT phishing'
domain, australianmorningnews.com, 'Actor-controlled Domain'
hostname, image.australianmorningnews.com, 'Actor-controlled Domain'
domain, regionail.xyz, 'Actor-controlled Domain'
domain, heraldsun.me, 'Actor-controlled Domain'
domain, walmartsde.com, 'Actor-controlled Domain'
domain, theaustralian.in, 'Actor-controlled Domain'
email-src, suzannehhu316@outlook.com, 'Registrant Email'
url, http://image.australianmorningnews.com/i/, 'ScanBox URL'
url, http://image.australianmorningnews.com/i/?cwhe18nc, 'ScanBox URL'
url, http://image.australianmorningnews.com/i/v.php?m=b, 'ScanBox URL'
url, http://image.australianmorningnews.com/i/c.php?data=, 'ScanBox URL'
url, http://image.australianmorningnews.com/i/k.php?data=, 'ScanBox URL'
url, http://image.australianmorningnews.com/i/p.php?data=, 'ScanBox URL'
url, http://image.australianmorningnews.com/i/v.php?m=a&data=, 'ScanBox URL'
url, http://image.australianmorningnews.com/i/v.php?m=p&data=, 'ScanBox URL'
url, http://image.australianmorningnews.com/i/v.php?m=plug, 'ScanBox URL'
sha256, f55c020d55d64d9188c916dcbece901bc6eb373ed572d349ff61758bd212857f, 'RTF Template Injection Attachment No sample in VT\r\nLast check:23/02/2025'
sha256, 5681cf40c3f00c1a0dc89c05d983c0133cc6bf198bce59acfef788d25bcd9f69, 'RTF Template Injection Attachment No sample in VT\r\nLast check:23/02/2025'
sha256, 22df809c1f47cb8d685f9055ad478991387016f03efd302fdde225215494eb83, 'RTF Template Injection Attachment No sample in VT\r\nLast check:23/02/2025'
sha256, b7e435ccded277740d643309898d344268010808e0582f34ae07e879ac32cf1e, 'RTF Template Injection Attachment No sample in VT\r\nLast check:23/02/2025'
sha256, 3909ae9b64b281cca55fc2cd6d92a11b882d1a58e4c34a59a997a7cb65aba8ef, 'RTF Template Injection Attachment No sample in VT\r\nLast check:23/02/2025'
sha256, 54ad4c1853179a59d5e9c48b1cfa880c91c5bf390fcfb94e700259b3f8998cb3, 'RTF Template Injection Attachment No sample in VT\r\nLast check:23/02/2025'
sha256, c4471540b811f091124c166ab51d6d03b6757f71e29c61a0e360e5c64957fcdd, 'RTF Template Injection Attachment No sample in VT\r\nLast check:23/02/2025'
sha256, 400be1d28d966ba8491f54237adad52ad4eea8a051f45f49774b92cbfdfcf1ea, 'RTF Template Injection Attachment No sample in VT\r\nLast check:23/02/2025'
sha256, 8033a52b327ad6635fc75f6c2c17b2cb4d56e1fd00081935541c0fb020e2582f, 'RTF Template Injection Attachment No sample in VT\r\nLast check:23/02/2025'
sha256, a115051a02e4faa8eb06d3870af44560274847c099d8e2feb2ef8db8885edf5e, 'RTF Template Injection Attachment No sample in VT\r\nLast check:23/02/2025'
sha256, 57c8123dd505dadb640872f83cf0475871993e99fdb40d8b821a9120e3479f53, 'RTF Template Injection Attachment No sample in VT\r\nLast check:23/02/2025'
url, https://regionail.xyz/, 'RTF Template Injection & Payload Delivery URL'
url, https://regionail.xyz/austrade.au, 'RTF Template Injection & Payload Delivery URL'
url, https://magloball.com/nDo3SB, 'RTF Template Injection & Payload Delivery URL'
url, https://theaustralian.in/europa.eeas, 'RTF Template Injection & Payload Delivery URL'
url, https://theaustralian.in/office, 'RTF Template Injection & Payload Delivery URL'
url, https://theaustralian.in/word, 'RTF Template Injection & Payload Delivery URL'
url, http://172.105.114.27/v, 'RTF Template Injection & Payload Delivery URL'
url, http://walmartsde.com/UpdateConfig, 'RTF Template Injection & Payload Delivery URL'
sha256, 981c762ce305cd5221e8757bafa50a00fff8fbc92db5612b311c458d48c29793, 'Payload No sample in VT\r\nLast check:23/02/2025'
sha256, 13f593f217b4686d736bcfce3917964632e824cb0d054248b9ffcacc59b470d4, 'Payload No sample in VT\r\nLast check:23/02/2025'
sha256, c4f6fedb636f07e1e53eaef9f18334122cb9da4193c843b4d31311347290a78f, 'Payload No sample in VT\r\nLast check:23/02/2025'
sha256, ab963bf7b1567190b8e5f48e7c88d53c02d7a3a57bd2294719595573a1f2b7c7, 'Payload No sample in VT\r\nLast check:23/02/2025'
sha256, e3f1519db0039e7423f49d92d43d549b152b534856a7efde1a7eda7a9276bb22, 'Payload No sample in VT\r\nLast check:23/02/2025'
sha256, e1f34cb031bac517796c363c2b31366509bf1367599fd5583c6bc2b0314758bb, 'Payload No sample in VT\r\nLast check:23/02/2025'
sha256, 55a5871b36109a38eed8aef943ccddf1ae9945f27f21b1c62210a810bb0f7196, 'Payload No sample in VT\r\nLast check:23/02/2025'
sha256, 7e1ab1b08eb4b69df11955c3dfe3050be467a374adb704a917ee1a69abcc58a5, 'Payload No sample in VT\r\nLast check:23/02/2025'

```


Full IOCs available in Rectifyq's [MISP](https://mispmy.rectifyq.com/events/view/83f31bcf-cf2e-4ebb-b8c2-7ef9e6925c9e)