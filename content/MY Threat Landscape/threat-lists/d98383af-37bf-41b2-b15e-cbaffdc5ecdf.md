---
title: 2025-03-31 The Espionage Toolkit A Closer Look at its Advanced Techniques
date: 2025-03-31
---
📃Title: The Espionage Toolkit: A Closer Look at its Advanced Techniques\
📅Date: 2025-03-31\
🔗References: 
- https://www.trendmicro.com/en_us/research/25/c/the-espionage-toolkit-of-earth-alux.html

> [!abstract] **Description**
> Earth Alux, a China-linked APT group, is actively conducting cyberespionage attacks against key sectors in the APAC and Latin American regions. The group exploits vulnerable services in exposed servers to gain initial access and deploys web shells like GODZILLA. Their primary backdoor, VARGEIT, is used alongside COBEACON for various stages of attack. Earth Alux employs advanced techniques such as DLL side-loading, anti-API hooking, and execution guardrails. They utilize tools like RAILLOAD and RAILSETTER for persistence and evasion. The group's capabilities include system information collection, file manipulation, command execution, and tool injection via mspaint processes. Earth Alux targets industries such as government, technology, logistics, and manufacturing, demonstrating a strategic focus on high-value information across different sectors.

![](https://raw.githubusercontent.com/rectifyq/Collections/refs/heads/main/Diamond-Models/2025/250331-Earth-Alux/14.png)


![](https://raw.githubusercontent.com/rectifyq/Collections/refs/heads/main/Diamond-Models/2025/250331-Earth-Alux/15.png)


🔖Rectifyq Taxonomies:
- relevancy: 🔴 Highly Relevant
- category: #⚔Threat
- sub-category: #TA-profile
- target: #targeted
- MY-relevancy: #relevant
- action-taken: #diamond-model

🔖MISP Galaxies:
- producer #Trend-Micro
- target-information="Brazil"
- target-information="Malaysia"
- target-information="Philippines"
- target-information="Taiwan"
- target-information="Thailand"
- malpedia="Godzilla Loader"
- malpedia="Godzilla Webshell"
- malpedia="Cobalt Strike"
- sector="Government, Administration"
- sector="IT"
- sector="Manufacturing"
- sector="Retail"
- sector="Technology"
- sector="Telecoms"
- threat-actor #Earth-Alux
- mitre-attack-pattern=['T1053.005', 'T1119', 'T1082', 'T1190', 'T1055', 'T1070.006', 'T1505.003', 'T1016', 'T1087', 'T1020', 'T1083', 'T1057', 'T1027', 'T1059.003', 'T1574.002', 'T1105', 'T1071', 'T1087.002', 'T1567.002', 'T1036', 'T1036.003', 'T1071.001']


MISP event uuid: [d98383af-37bf-41b2-b15e-cbaffdc5ecdf](https://mispmy.rectifyq.com/events/view/d98383af-37bf-41b2-b15e-cbaffdc5ecdf)
## Indicator of Compromise (IoCs)
```
type,value,comment
sha256, 00a41c8272d405ba85ae9d0e435e3030033e8a032f3d762367d0a57d41524f3a, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 0d3ec88b0bfa5530e45dec75dfbea7ae683bdea91105b5f90a787beaabd1ef27, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 0f6fe5d0ee754d581d4a8d989e83272b121d0125bd3c77e57a6b14db23f425ab, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 13e0aef0ab6d218e68c5c5b6008872eb73104f161c902511aec3df5bce89136e, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 16509adf92b1ac3097452affd8dda640936c8a40272592b978db3698487df5fa, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 1c8c14251710fbdef994d9ccf1d3507cf0ef5cd6c7d3495af2adfe7f97cc0dc2, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 1c93ba375016bcb41b915b78eb4ab023ecf456e240823a1d6d2b5297b3523956, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 245fdb5e35b6f51b26d4cf3999a40dde13987240f9bf565fe03a1f6adb9da9b2, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 28517bff286ade02b81da52f9fcddcb9764023ae7035bc593d081fdd2a8c85d9, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 2971a53769745c107a89eeb5f48e3b3e9680d371bf06b028c7769c961e6f9e55, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 3129bfad321be526f231c64aac10d7d8f416dc14cab11c1bbc57252c75823959, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 3b7c29489c1feaafc587eac0ffcca79964259c9687d86a5cce5ea70261f7439b, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 3f0157cfb493df1cd051cc87364c7bdbe3719927335b76b7c567b369ab47b3be, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 41410a8aa4a4fcd811ef67ba023e263f4cd6667039b01547d23a3eb758d97b96, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 43e5c3d6182ab6d9d71b5892c5087b4ef4b3093126bcdf4ebcef0b15e04e0c03, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 455510fe663775e09a2d0bbfdc4c8ec2e26665e10f9599b05dc59ea460f06ac8, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 47ea0392ec123e3949b9ae2638b9078cd5efd4da942e38f149ccfb74d8e70123, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 4be6f5e76ea02ae348b26fc32a0dabe009d05b701e53270cf40ca50fa76197b0, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 529e691a9d60b8ae0c64de82402e76c112df3bc27be5f2e94ee58252a67804a1, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 52c8eacbcc8906036894a3a11cb4181d454c3a4f685500a799263cdcf6c6d88e, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 5502735d81accb96c58300d1e21765b8b53a4749aad68e513b2558ed79f83cc4, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 55b4e3814a349c9de4c99237f62d42787a6fef64b809db9cf52cfe0602cac01e, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 5aaca0994795ba7da0f10cd393ac32cc1e78c9afd4e9d09bbbe430f168c0eebe, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 5d358bcd0acb999fdec332f0a2d1fe51952542f0836b9618ab18f253597d244c, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 62d71b61af750ad3b763d98504a174a1949a359a4cb4f6ce2795b7b3240919eb, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 681e9aab60b1c64dacbc7c8574d294333b9cd4494ec683b0c780866c3e1e7d40, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 762525805afe6a0891275ebc2ae1f067e9aad8f310afc0b1ad800cc980ed8b55, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 7ad44f7e1f78ee83f20da498584ec7138c2514580ddfe62698be7587ae2678e1, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 83968575244ab2e44a5b94423bb1cacd10bb293ddcbbddbc2fc117f9335b6e78, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 846be29c140850fd9524339acd67eac4b84bc59ed056544356d199226452ea88, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 85f9bac9eefb5fbc1e51508ce12cda10a69d8bde82952891081b19d6833297ab, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 86e2d56761fb4dc16c7b0cd8da241c9899af851f5df751ffc67a2d68062e71f4, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 86f5f088cf997766e52860b57506ba0923454a63bee39e4e3de2fb98c4fee240, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 91034c01e800b116095eecdb073a5262852fc2c788f9fcd09259d6c09ce88ac6, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 9366ece5ff9082145184adb2e91053d5e0d68d4d9f9a9f054aad68b8e7368443, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 9b5e6c2f287ea7931bb27f63111ef0035265bc27751f01bd6c7f3dd3395bbaf5, 'No sample in VT\r\nLast check:11/04/2025'
sha256, 9f94bb59bfc32958a15cd8e225f270802bd9e14929e5d0f4f488842710a361ea, 'No sample in VT\r\nLast check:11/04/2025'
sha256, a14e226a50c12e637e8b280ad688e5637db752c72d0f8b2bac5f2d3d487e1c21, 'No sample in VT\r\nLast check:11/04/2025'
sha256, a79679d8f9551810504ff316465fb289d1ac64dc52bcaabd70267217d33d603c, 'No sample in VT\r\nLast check:11/04/2025'
sha256, a9804fa05845707f094fe91668a5c3792f2441d371816b46fbe636953fc5787d, 'No sample in VT\r\nLast check:11/04/2025'
sha256, ab6145f1ea6c8a682bea289cef06c0f27fa076b8f88a89a2631167541fc835e9, 'No sample in VT\r\nLast check:11/04/2025'
sha256, ac70d98af57d9e3da9ee485a4ab1badbb28e89d15c4ef2df521423881a147e43, 'No sample in VT\r\nLast check:11/04/2025'
sha256, b0a42d1c5a07bbe317a034e204c0eb64ae5d99e3dfbfbd9b3b098caea4b19f96, 'No sample in VT\r\nLast check:11/04/2025'
sha256, b32dd5d549bcf4b674b4e7cf5481064b38ea614c666b158afedc7084b715c1fa, 'No sample in VT\r\nLast check:11/04/2025'
sha256, b8e1a46146c09ef54b802a6989b485ef5982a86228a24ec0839ec5af7b42e648, 'No sample in VT\r\nLast check:11/04/2025'
sha256, b92452a6c2cd13193a6df88278c31c85008acf448655c18389c84b353026d15e, 'No sample in VT\r\nLast check:11/04/2025'
sha256, b9fefe3946d0c9e000262a10b184090da45925f24b7dfc9d25abe63bc55ca7ed, 'No sample in VT\r\nLast check:11/04/2025'
sha256, ba0105c8fa99b8f3a82c32d20e94031f22e277286b738db529e763955df248dc, 'No sample in VT\r\nLast check:11/04/2025'
sha256, bd0dbf799e98137238ae38f134c7af82d7ff673c0a418044add0220211d98a27, 'No sample in VT\r\nLast check:11/04/2025'
sha256, be01089ad2c2e7af32677ec0a7a9a541dee1cb149639d60fb7b7e9b641d2ccdb, 'No sample in VT\r\nLast check:11/04/2025'
sha256, c6a28c9cac9c4b5ef57998bdc7a7f430fff7c9ac819fef278f8350751b6edaab, 'No sample in VT\r\nLast check:11/04/2025'
sha256, d34947e11879598b85d9baa703cb96a83d7c3ccb53868ab86ff9a2f37dc91459, 'No sample in VT\r\nLast check:11/04/2025'
sha256, d692c85da91bb5e5724f520ca392b68eee144a3719a7441c779c8ce73d3b25dc, 'No sample in VT\r\nLast check:11/04/2025'
sha256, dfbb857e6383789545c719c99d878a678a0aeae2a6a1c8f44e87b7aa478fc354, 'No sample in VT\r\nLast check:11/04/2025'
sha256, e299b865cdb0fdd9605e3c5e9d00fb473c77af4ed213775d594cc0fe91b8dd3a, 'No sample in VT\r\nLast check:11/04/2025'
sha256, e3465c996e149b218d95a4b109e6e3ff268e8d63aafa73d4855750b33c66a33c, 'No sample in VT\r\nLast check:11/04/2025'
sha256, ee8385313e03890c6862f70c94f2c5a3e9cd09764fcac4488fabc5ce9613228a, 'No sample in VT\r\nLast check:11/04/2025'
sha256, f0cd90b42969706d1a78e75608aded6d5ac8610f36cab8f8be7160c5cbf485a5, 'No sample in VT\r\nLast check:11/04/2025'
sha256, fd3637392404c3ed169a4999f6a05274715109f9fa028be9ad9ce7853d983d54, 'No sample in VT\r\nLast check:11/04/2025'
hostname, store.azure-clouds.com, 'COBEACON C&C'
hostname, www.upload-microsoft.com, 'COBEACON C&C'
hostname, google.otp.us.kg, 'COBEACON C&C'
ip-dst, 8.218.222.216, 'Download IP'

Full IOCs available in Rectifyq's MISP```