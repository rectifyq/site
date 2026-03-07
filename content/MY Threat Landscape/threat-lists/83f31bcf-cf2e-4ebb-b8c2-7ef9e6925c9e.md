---
title: 2022-08-30 Rising Tide Chasing the Currents of Espionage in the South China Sea
date: 2022-08-30
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
- producer #Proofpoint
- target-information="United States"
- target-information="Malaysia"
- target-information="Australia"
- target-information="Japan"
- target-information="Cambodia"
- threat-actor #APT40
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
sha1, cbb0bfbd6dbb8277b7f32c6cda83500301191904, 'ScanBox Sample'
sha256, 7795936ed1bdb7a5756c1ff821b2dc8739966abbb00e3e0ae114ee728bf1cf1a, 'ScanBox Sample'
md5, 6f8688d0691985e43261408c50764c40, 'ScanBox Sample'
sha1, e0b044a314d6a1ba2a844588e03d46aa4e6099a9, 'ScanBox Sample'
sha256, 4dedb022d3c43db6cddd87f250db4758bd88c967f98302d97879d9fc4fadd8a2, 'ScanBox Sample'
md5, 33094e2d6878eb6faab9fbdb2a4a4ebe, 'ScanBox Sample'
sha1, 4145b09f21467e71e40af420d5545c62ab1b442c, 'ScanBox Sample'
sha256, 5a1c689cddb036ca589f6f2e53d323109b94ce062a09fb5b7c5a2efedd7306bc, 'ScanBox Sample'
md5, d6704f0eccb1802dc931422224923843, 'ScanBox Sample'
sha1, e1dda6c75ca284a03ea826fe7e49f5c64aa6636c, 'ScanBox Sample'
sha256, cb981d04f21a97fdb46b101a882a3490e245760489f4122deb4a0ac951a8eaee, 'ScanBox Sample'
md5, f87602542673e7dde30075b2e340a47f, 'ScanBox Sample'
sha1, 99344cc185ab0a14658489be390a30cca32a933d, 'ScanBox Sample'
sha256, 3d37a977f36e8448b087f8e114fe2a1db175372d4b84902887808a6fb0c8028f, 'ScanBox Sample'
md5, f542bd63c685840dfb42136c2669bd6b, 'ScanBox Sample'
sha1, dd4e4ae898576c2eba2312b482ff5ec7905c3395, 'ScanBox Sample'
sha256, e8a919e0e02fecfe538a8698250ac3eaba969e2af2cc9d96fc86675a658e201e, 'ScanBox Sample'
md5, 21e087f31c02bf417d958d356a13f315, 'ScanBox Sample'
sha1, 134972f1c40d792cc56ee684cbc890e9ebae20c1, 'ScanBox Sample'
sha256, 0b9447cb00ae657365eb2b771f4f2c505e44ca96a0a062d54f3b8544215fc082, 'ScanBox Sample'
md5, b46e92ace23a026e3d1772fecb1b6b3d, 'ScanBox Sample'
sha1, 29356fb4042b8ffc66209729fb1f75a2785e7368, 'ScanBox Sample'
sha256, 2f204f3b3abc97efc74b6fa016a874f9d4addb8ac70857267cc8e4feb9dbba26, 'ScanBox Sample'
md5, 88675e058531c8ac4440a1fb4f55d54f, 'ScanBox Sample'
sha1, 7b83e2d5d4459c854a5f774545ccc7dd2a2b3668, 'ScanBox Sample'
sha256, 2a17927834995441c18d1b1b7ec9594eedfccaacca11e52401f83a82a982760e, 'ScanBox Sample'
md5, 3e179ef0442be6dcaedbff9446eaf82a, 'ScanBox Sample'
sha1, e574d246b03602b7b99639a41123481b88a3bf3d, 'ScanBox Sample'
sha256, 18db4296309da48665121899c62ed8fb10f4f8d22e44fd70d2f9ac8902896db1, 'ScanBox Sample'
md5, 3c2ec71dbec0629c92ee081fa5523190, 'Legitimate PE used in DLL Sideloading'
sha1, c34429bccfa61fc4d2bfc7be42227017fcefd4a9, 'Legitimate PE used in DLL Sideloading'
sha256, d357502511352995e9523c746131f8ed38457c38a77381c03dda1a1968abce42, 'Legitimate PE used in DLL Sideloading'
md5, c5c600f5bcc25805dc42e791a543fdd5, 'Legitimate PE used in DLL Sideloading'
sha1, 417b89976cd7356c76c3d0a1c2a504b0bfe2f5c5, 'Legitimate PE used in DLL Sideloading'
sha256, 98fbd5eb6ae126fda8e36e3602e6793c1f719ef3fdbf792689035104b39f14ac, 'Legitimate PE used in DLL Sideloading'
md5, 9f5f2f0fb0a7f5aa9f16b9a7b6dad89f, 'Legitimate PE used in DLL Sideloading'
sha1, 603f73160dcc49da297a10f0691cefe4dddd9772, 'Legitimate PE used in DLL Sideloading'
sha256, 6d2b301e77839fff1c74425b37d02c3f3837ce50e856c21ae4cf7ababb04addc, 'Legitimate PE used in DLL Sideloading'
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