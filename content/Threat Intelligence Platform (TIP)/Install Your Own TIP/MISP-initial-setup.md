---
title: MISP Initial Setup
---

# Initial Setup

## Setting up Taxonomies

### Enable Taxonomies

<details>

<summary>Enable the following taxonomies:</summary>

- [ ] tlp
- [ ] type
- [ ] workflow
- [ ] ms-caro-malware

</details>

### Adding Custom Rectifyq Taxonomies

```shell
cd /var/www/MISP/app/files/taxonomies/
mkdir rectifyq
cd rectifyq
nano machinetag.json
```

Tips in case of copy issue:&#x20;

```
jq . machinetag.json > temp
mv temp machinetag.json
```

<details>

<summary>Add the following content to machinetag.json</summary>

```
{
    "namespace": "rectifyq",
    "description": "Rectifyq taxonomies used for checklist, context and statistics",
    "version": 2.6,
    "predicates": [{
            "value": "category",
            "expanded": "Category"
        }, {
            "value": "sub-category",
            "expanded": "Sub-Category"
        }, {
            "value": "topic",
            "expanded": "Related topics"
        }, {
            "value": "TA-category",
            "expanded": "Threat Actor Category"
        }, {
            "value": "target",
            "expanded": "Target"
        }, {
            "value": "samples-found-in",
            "expanded": "Samples found in"
        }, {
            "value": "no-samples-in",
            "expanded": "No samples in"
        }, {
            "value": "ioc",
            "expanded": "IOC"
        }, {
            "value": "MY-relevancy",
            "expanded": "Malaysia relevancy"
        }, {
            "value": "workflow",
            "expanded": "Workflow"
        }, {
            "value": "mitre-att&ck",
            "expanded": "MITRE ATT&CK"
        }, {
            "value": "detection-rules",
            "expanded": "Detection Rules"
        }, {
            "value": "action-taken",
            "expanded": "Action taken"
        }
    ],
    "values": [{
            "predicate": "category",
            "entry": [{
                    "value": "threat",
					"colour": "#49a260",
                    "expanded": "Threat related event - mostly contains IOCs"
                }, {
                    "value": "data-breach",
					"colour": "#49a260",
                    "expanded": "Data breach related event"
                }, {
                    "value": "vulnerability",
					"colour": "#49a260",
                    "expanded": "Vulnerability related event"
                }
            ]
        }, {
            "predicate": "sub-category",
            "entry": [{
                    "value": "TA-profile",
                    "expanded": "Threat Actor Profile: Comprehensive dossiers on specific groups (e.g., APT41, Lazarus), including motives, history, and suspected origin."
                }, {
                    "value": "tool-profile",
                    "expanded": "Tooling Context: Analysis of non-malicious tools used for malicious purposes (e.g., Cobalt Strike, PowerShell, AdFind)."
                }, {
                    "value": "malware-analysis",
                    "expanded": "Technical Deep-Dive: Results from sandbox execution, reverse engineering, or static analysis of a specific sample."
                }, {
                    "value": "intrusion-analysis",
                    "expanded": "Incident Reconstruction: The story of a breach, mapping out the full kill-chain from initial access to data exfiltration."
                }, {
                    "value": "infra-profile",
                    "expanded": "Infrastructure Mapping: Details on C2 servers, IP ranges, ASN reputations, and domain registration patterns used by attackers."
                }, {
					"value": "campaign-analysis",
                    "expanded": "Strategic Grouping: Analysis of a series of related incidents/attacks over a specific timeframe, often linked by shared infrastructure, TTPs, or themes."
                }, {
                    "value": "leak-forums",
                    "expanded": "Dark Web Monitoring: Intelligence gathered from illicit underground marketplaces or forums where data/access is sold."
                }, {
                    "value": "leak-infostealer",
                    "expanded": "Stealer Logs: Specific data exfiltrated via malware like RedLine or Lumma (e.g., credentials, cookies, crypto wallets)."
                }, {
                    "value": "report",
                    "expanded": "Finished Intel: High-level narrative summaries or white papers (internal or third-party) that synthesize multiple events."
                }, {
                    "value": "zero-day",
                    "expanded": "Unpatched Exploits: High-priority indicators for vulnerabilities that have no official patch or were exploited before public awareness."
                }, {
                    "value": "branded-vuln",
                    "expanded": "High-Profile Bugs: Vulnerabilities with marketing names/logos (e.g., Heartbleed, PwnKit) that often see rapid, mass exploitation."
                }, {
                    "value": "critical-vuln",
                    "expanded": "High-Severity Flaws: Standard vulnerabilities that carry a high CVSS/EPSS score but may not have a brand name."
                }
            ]
        }, {
            "predicate": "topic",
            "entry": [{
                    "value": "mobile-attack",
                    "expanded": "Indicators and patterns related to mobile OS (Android/iOS) exploits, malicious apps, and smishing."
                }, {
                    "value": "ai",
                    "expanded": "Threats targeting AI models (adversarial ML), or attacks generated/enhanced by AI/LLMs."
                }, {
                    "value": "supply-chain",
                    "expanded": "Compromises of third-party vendors, software libraries (e.g., npm/PyPI), or hardware manufacturing."
                }, {
                    "value": "ics-ot",
                    "expanded": "Attacks on Industrial Control Systems, SCADA, and operational technology in critical infrastructure."
                }, {
					"value": "web3",
                    "expanded": "Threats targeting decentralized protocols, DAOs, and smart contract vulnerabilities."
                }, {
                    "value": "crypto-related",
                    "expanded": "Cryptojacking, wallet draining, and fraudulent initial offerings or exchange breaches."
                }, {
                    "value": "cloud",
                    "expanded": "Exploits targeting container orchestration (Kubernetes), serverless functions, and CSP misconfigurations."
                }, {
                    "value": "insider-threat",
                    "expanded": "Malicious or accidental data exfiltration and system sabotage by authorized users."
                }, {
                    "value": "geopolitical",
                    "expanded": "Nation-state sponsored activity, cyber-espionage, and attacks linked to physical conflicts."
                }, {
                    "value": "api-security",
                    "expanded": "Vulnerabilities in REST/GraphQL endpoints, broken authentication, and mass assignment attacks."
                }
            ]
        }, {
            "predicate": "TA-category",
            "entry": [{
                    "value": "APT",
					"colour": "#f1dfed",
                    "expanded": "Advance Persistent Threat"
                }, {
                    "value": "State-Sponsored",
					"colour": "#f1dfed",
                    "expanded": "State Sponsored"
                }, {
                    "value": "Cybercrime",
					"colour": "#f1dfed",
                    "expanded": "Cybercrime"
                }, {
                    "value": "Ransomware",
					"colour": "#f1dfed",
                    "expanded": "Ransomware"
                }, {
                    "value": "Hacktivist",
					"colour": "#f1dfed",
                    "expanded": "Hacktivist"
                }
            ]
        }, {
            "predicate": "target",
            "entry": [{
                    "value": "broad-based",
					"colour": "#ffd12e",
                    "expanded": "Broad based attacks"
                }, {
                    "value": "targeted",
					"colour": "#d92121",
                    "expanded": "Targeted attacks"
                }
            ]
        }, {
            "predicate": "samples-found-in",
            "entry": [{
                    "value": "MalwareBazaar",
                    "expanded": "MalwareBazaar"
                }, {
                    "value": "VirusTotal",
                    "expanded": "VirusTotal"
                }, {
                    "value": "Tria.ge",
                    "expanded": "Tria.ge"
                }
            ]
        }, {
            "predicate": "no-samples-in",
            "entry": [{
                    "value": "MalwareBazaar",
					"colour": "#626567",
                    "expanded": "MalwareBazaar"
                }, {
                    "value": "VirusTotal",
					"colour": "#626567",
                    "expanded": "VirusTotal"
                }, {
                    "value": "Tria.ge",
					"colour": "#626567",
                    "expanded": "Tria.ge"
                }
            ]
        }, {
            "predicate": "ioc",
            "entry": [{
                    "value": "enriched",
                    "expanded": "IOC enriched"
                }, {
                    "value": "no-detection-by-any-vendor",
                    "expanded": "No detection by any vendor"
                }, {
                    "value": "low-detection-by-any-vendor",
                    "expanded": "Low detection by any vendor"
                }
            ]
        }, {
            "predicate": "MY-relevancy",
            "entry": [{
                    "value": "not-relevant",
					"colour": "#31373d",
                    "expanded": "Not relevant to Malaysia context - good to know"
                }, {
                    "value": "potentially-relevant",
					"colour": "#55acee",
                    "expanded": "Potentially relevant to Malaysia context e.g. Infostealers impact globally"
                }, {
                    "value": "somewhat-relevant",
					"colour": "#fdcb58",
                    "expanded": "Somewhat relevant to Malaysia context e.g. APT target Asian country."
                }, {
                    "value": "relevant",
					"colour": "#dd2e44",
                    "expanded": "Highly relevant to Malaysia context e.g. APT target Malaysia"
                }
            ]
        }, {
            "predicate": "workflow",
            "entry": [{
                    "value": "check-date",
                    "expanded": "Check article date"
                }, {
                    "value": "review-severity",
                    "expanded": "Review Severity"
                }, {
                    "value": "check-producer",
                    "expanded": "Check producer"
                }, {
                    "value": "check-actor",
                    "expanded": "Check Threat Actor"
                }, {
                    "value": "check-target",
                    "expanded": "Check Target"
                }, {
                    "value": "check-tool",
                    "expanded": "Check Tools"
                }, {
                    "value": "check-malware",
                    "expanded": "Check Malware"
                }, {
                    "value": "check-TTP",
                    "expanded": "Check TTPs"
                }, {
                    "value": "add-ioc-context",
                    "expanded": "Add IOC contexts"
                }, {
                    "value": "check-key-indicator",
                    "expanded": "Check Key Indicator unique to TA"
                }, {
                    "value": "enrichment",
                    "expanded": "Enrichment"
                }, {
                    "value": "need-sample-sponsor",
                    "expanded": "Require Malware sample sponsor, either upload to Malware Bazaar (preferred) or upload directly to MISP(for sample with sensitive data)"
                }, {
                    "value": "to-report-to",
                    "expanded": "To report to relevant parties such as the owner, hosting provider, MyCERT, registrar or etc."
                }
            ]
        }, {
            "predicate": "mitre-att&ck",
            "entry": [{
                    "value": "from-original-src",
					"colour": "#b94b1d",
                    "expanded": "TTPs included in original source"
                }, {
                    "value": "none-from-src",
					"colour": "#b94b1d",
                    "expanded": "No TTPs included in original source"
                }, {
                    "value": "from-OTX",
					"colour": "#b94b1d",
                    "expanded": "TTPs from OTX"
                }, {
                    "value": "self-curated",
					"colour": "#b94b1d",
                    "expanded": "Self curated TTPs"
                }
            ]
        }, {
            "predicate": "detection-rules",
            "entry": [{
                    "value": "yara-from-src",
                    "expanded": "YARA from source"
                }, {
                    "value": "sigma-from-src",
                    "expanded": "Sigma rules from source"
                }, {
                    "value": "snort-from-src",
                    "expanded": "Snort rule from source"
                }, {
                    "value": "yara-from-VT",
                    "expanded": "YARA from VirusTotal"
                }, {
                    "value": "sigma-from-VT",
                    "expanded": "Sigma rules from source"
                }
            ]
        }, {
            "predicate": "action-taken",
            "entry": [{
                    "value": "VT-collection",
                    "expanded": "Added to VT Collection"
                }, {
                    "value": "VT-comment",
                    "expanded": "Added to VT comment"
                }, {
                    "value": "github",
                    "expanded": "Added to Github"
                }, {
                    "value": "diamond-model",
                    "expanded": "Created Diamond Model"
                }, {
                    "value": "x",
                    "expanded": "Shared to X"
                }, {
                    "value": "linkedin",
                    "expanded": "Shared to Linkedin"
                }, {
                    "value": "tiktok",
                    "expanded": "Shared to Tiktok"
                }, {
                    "value": "medium",
                    "expanded": "Shared to Medium"
                }, {
                    "value": "telegram",
                    "expanded": "Shared to Telegram"
                }, {
                    "value": "threatfox",
                    "expanded": "Added to ThreatFox"
                }, {
                    "value": "malwarebazaar",
                    "expanded": "Added to MalwareBazaar"
                }, {
                    "value": "phishtank",
                    "expanded": "Added to PhishTank"
                }, {
                    "value": "report-to-mycert",
                    "expanded": "Reported to MyCERT"
                }, {
                    "value": "report-to-hosting-provider",
                    "expanded": "Reported to Hosting Provider"
                }, {
                    "value": "report-to-registrar",
                    "expanded": "Reported to Registrar"
                }, {
                    "value": "urlhaus",
                    "expanded": "Added to URLHaus"
                }, {
                    "value": "urlscan.io",
                    "expanded": "Added to urlscan.io"
                }, {
                    "value": "report-google-safe-browsing",
                    "expanded": "Reported to Google Safe Browsing"
                }
            ]
        }
    ]
}
```

</details>

## Setting up Galaxies

### Disable unnecessary Galaxies

<details>

<summary>Disable the following unnecessary galaxies</summary>

* [ ] All under 'deprecated' namespace
* [ ] Ammunitions
* [ ] Busy is the New Stupid framework
* [ ] Cancer
* [ ] Cert EU GovSector
* [ ] Election guidelines
* [ ] Firearms
* [ ] Handicap
* [ ] NACE
* [ ] NAICS
* [ ] Tea Matrix
* [ ] UAVs/UCAVs
* [ ] UKHSA Culture Collections

</details>

## Dashboard

<details>

<summary>Import following dashboard config</summary>

```
{
    "UserSetting": {
        "id": "1",
        "setting": "dashboard",
        "value": [
            {
                "widget": "MispStatusWidget",
                "config": [],
                "position": {
                    "x": "10",
                    "y": "10",
                    "width": "2",
                    "height": "2"
                }
            },
            {
                "widget": "TrendingTagsWidget",
                "config": {
                    "alias": "Top Category [Threat, Data Breach, Vulnerability]",
                    "time_window": "-1",
                    "include": [
                        "rectifyq:category"
                    ]
                },
                "position": {
                    "x": "0",
                    "y": "0",
                    "width": "3",
                    "height": "2"
                }
            },
            {
                "widget": "AuthenticationFailureWidget",
                "config": [],
                "position": {
                    "x": "10",
                    "y": "7",
                    "width": "2",
                    "height": "1"
                }
            },
            {
                "widget": "MispAdminWorkerWidget",
                "config": [],
                "position": {
                    "x": "10",
                    "y": "0",
                    "width": "2",
                    "height": "7"
                }
            },
            {
                "widget": "TrendingTagsWidget",
                "config": {
                    "alias": "Top Sub-Category",
                    "time_window": "-1",
                    "include": [
                        "rectifyq:sub-category"
                    ]
                },
                "position": {
                    "x": "0",
                    "y": "2",
                    "width": "3",
                    "height": "3"
                }
            },
            {
                "widget": "TrendingTagsWidget",
                "config": {
                    "alias": "Top Relevancy",
                    "time_window": "-1",
                    "include": [
                        "rectifyq:MY-relevancy"
                    ]
                },
                "position": {
                    "x": "0",
                    "y": "5",
                    "width": "3",
                    "height": "2"
                }
            },
            {
                "widget": "TrendingTagsWidget",
                "config": {
                    "alias": "Top TA-Category",
                    "time_window": "-1",
                    "include": [
                        "rectifyq:TA-category"
                    ]
                },
                "position": {
                    "x": "0",
                    "y": "7",
                    "width": "3",
                    "height": "2"
                }
            },
            {
                "widget": "TrendingTagsWidget",
                "config": {
                    "alias": "Top MITRE ATT&CK",
                    "time_window": "-1",
                    "include": [
                        "rectifyq:mitre-att&ck"
                    ]
                },
                "position": {
                    "x": "0",
                    "y": "9",
                    "width": "3",
                    "height": "3"
                }
            },
            {
                "widget": "APIActivityWidget",
                "config": [],
                "position": {
                    "x": "10",
                    "y": "8",
                    "width": "2",
                    "height": "1"
                }
            },
            {
                "widget": "LoginsWidget",
                "config": [],
                "position": {
                    "x": "10",
                    "y": "9",
                    "width": "2",
                    "height": "1"
                }
            },
            {
                "widget": "TrendingTagsWidget",
                "config": {
                    "alias": "Top Producer",
                    "time_window": "-1",
                    "include": [
                        "misp-galaxy:producer="
                    ],
                    "threshold": 100
                },
                "position": {
                    "x": "3",
                    "y": "0",
                    "width": "3",
                    "height": "15"
                }
            },
            {
                "widget": "TrendingTagsWidget",
                "config": {
                    "alias": "Top Detection Included",
                    "time_window": "-1",
                    "include": [
                        "rectifyq:detection"
                    ]
                },
                "position": {
                    "x": "0",
                    "y": "12",
                    "width": "3",
                    "height": "3"
                }
            },
            {
                "widget": "TrendingTagsWidget",
                "config": {
                    "alias": "Top Ransomware",
                    "time_window": "-1",
                    "include": [
                        "misp-galaxy:ransomware="
                    ],
                    "threshold": "100"
                },
                "position": {
                    "x": "6",
                    "y": "5",
                    "width": "2",
                    "height": "10"
                }
            },
            {
                "widget": "TrendingTagsWidget",
                "config": {
                    "alias": "Top 10 Malpedia",
                    "time_window": "-1",
                    "include": [
                        "misp-galaxy:malpedia="
                    ],
                    "threshold": "10"
                },
                "position": {
                    "x": "6",
                    "y": "0",
                    "width": "2",
                    "height": "5"
                }
            },
            {
                "widget": "TrendingTagsWidget",
                "config": {
                    "alias": "Threat Actor",
                    "time_window": "-1",
                    "include": [
                        "misp-galaxy:threat-actor="
                    ],
                    "threshold": "100"
                },
                "position": {
                    "x": "8",
                    "y": "0",
                    "width": "2",
                    "height": "15"
                }
            }
        ],
        "user_id": "1",
        "timestamp": "1742012921"
    }
}
```

</details>



## Enable Plugins

<details>

<summary>Enrichment</summary>

* [ ] Plugin.Enrichment\_vulnerability\_lookup\_enabled
* [ ] Plugin.Enrichment\_html\_to\_markdown\_enabled
* [ ] Plugin.Enrichment\_extract\_url\_components\_enabled
* [ ] Plugin.Enrichment\_mmdb\_lookup\_enabled

</details>

<details>

<summary>Import</summary>

* [ ] Plugin.Import\_csvimport\_enabled
* [ ] Plugin.Import\_ocr\_enabled
* [ ] Plugin.Import\_mispjson\_enabled

</details>

<details>

<summary>Export</summary>

</details>

## Enable Warning List

<details>

<summary>Warning List</summary>

* [ ] List of known hashes with common false-positives (based on Florian Roth input list)

* [ ] List of known hashes for empty files

* [ ] List of known Windows 10 connection endpoints

* [ ] List of known Office 365 IP address ranges

* [ ] List of known Office 365 IP address ranges in China

* [ ] cisco-umbrella-blockpage-ipv4

* [ ] List of RFC 1918 CIDR blocks

* [ ] List of RFC 5735 CIDR blocks

* [ ] RFC 6598 CIDR blocks

* [ ] List of known Apple IP ranges

* [ ] Censys IP Ranges Used for Scanning

* [ ] Shodan IP Ranges Used for Scanning

* [ ] List of known Cloudflare IP ranges

* [ ] List of known Zscaler IP address ranges

* [ ] Parking domains

* [ ] Parking domains name server

* [ ] List of known microsoft domains

* [ ] Captive Portal Detection Hostnames

* [ ] List of known google domains

* [ ] List of known Office 365 URLs

* [ ] Top 1000 website from Alexa

* [ ] List of known URL Shorteners domains

</details>


## Optional: Enforce MFA

Administration > Server Settings & Maintenance > Security

<pre><code>Security.otp_disabled False
<strong>Security.otp_required True
</strong></code></pre>

## Change OS Timezone

```
timedatectl list-timezones
sudo timedatectl set-timezone Asia/Kuala_Lumpur
```
