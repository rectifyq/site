---
title: "MISP Style Guide"
date: 2026-01-29
lastmod: 2026-06-29
description: "Capability profile for [Tool Name], utilized by [Actor Name/s] fodfdr [Phase]."
aliases:
  - "[Alternative Name / Internal ID]"
---
# Rectifyq's MISP Style Guide

## Traffic Light Protocol (TLP)

|TLP|Formal Definition|Rectifyq's audience|
|---|---|---|
|🔴 tlp:red|For the eyes and ears of individual recipients only, no further disclosure.|Rectifyq + specific recipients|
|🟠 tlp:amber|Limited disclosure, recipients can only spread this on a need-to-know basis within their organization and its clients.|Rectifyq + Cyberheroes|
|🟢 tlp:green|Limited disclosure, recipients can spread this within their community.|Rectifyq + Cyberheroes + Cybervigilantes|
|⚪ tlp:clear|Information can be shared publicly in accordance with the law.|Everyone|

## Severity definition

<table>
<thead>
<tr><th width="106.5999755859375">Severity</th><th width="327.39990234375">Description</th><th>Example</th></tr></thead><tbody><tr><td>High</td><td><ul><li><font style="color:red;">State sponsored TA</font></li><li><font style="color:red;">APT + targeted</font></li><li><font style="color:red;">Custom malware/tool + targeted</font></li><li><font style="color:blue;">0day + exploited in wild</font></li></ul></td><td><ul><li>Lazarus APT (North Korea)</li><li>FIN7 + target company A</li><li>Custom and targeting company A</li><li>Currently being exploited</li></ul></td></tr><tr><td>Medium</td><td><ul><li><font style="color:red;">APT + broad-based</font></li><li><font style="color:red;">Ransomware (Threat &#x26;</font> <font style="color:orange;">Data Breach)</font></li><li><font style="color:red;">Tool Profile</font></li><li><font style="color:red;">Supply chain related</font></li><li><font style="color:blue;">0day + POC</font></li><li><font style="color:blue;">Critical/High/Branded Vulnerability</font></li></ul></td><td><ul><li>FIN7 + Multiple countries</li><li>Any ransomware related</li><li>Any tool profiles</li><li>Any supply chain related</li><li>No actual case reported yet</li><li>Vuln focused w malware sample(s) exploiting it</li></ul></td></tr><tr><td>Low</td><td><ul><li><font style="color:red;">Cybercrime - broad-based</font></li><li><font style="color:red;">Commodity malware</font></li><li><font style="color:orange;">Infostealer leaks</font></li></ul></td><td><ul><li>Phishing, clickfix, defacements campaigns</li><li>Infostealer, clickfix, etc</li><li>Lumma stealer, redline, vidar, etc</li></ul></td></tr><tr><td>Undefined</td><td><ul><li>News article</li><li>Indictment</li><li>Achievement</li><li>To be removed</li></ul></td><td>Other articles that may still be interesting to be recorded.</td>
</tr>
</tbody>
</table>

APT definition - Advanced Persistence Threat. Not only limited to State Sponsored.

## Category


<table><thead><tr><th width="124">Category</th><th>Descriptio</th></tr></thead><tbody><tr><td><font style="color:red;">Threat</font></td><td>In-depth analysis of specific cyber threats. The focus is on technical details, including <strong>Indicators of Compromise (IOCs)</strong> and the <strong>Tactics, Techniques, and Procedures (TTPs)</strong> utilized by threat actors.</td></tr><tr><td><font style="color:orange;">Data Breach</font></td><td>Articles covering confirmed or alleged incidents of <strong>unauthorized data access or exfiltration</strong>. Key content focuses on the scope of the <strong>compromised data</strong>, affected entities, or reports concerning <strong>ransomware victim claims</strong>.</td></tr><tr><td><font style="color:blue;">Vulnerability</font></td><td>Articles that details the vulnerability's impact, and its exploitation status (e.g., availability of a Proof-of-Concept (POC) or active exploitation in the wild).</td></tr></tbody></table>

## Sub-category


| Sub-category | Description |
|-------------------------|----------------------------|
| <span style="background-color: rgba(239, 68, 68, 0.2); color: #ef4444; padding: 2px 8px; border-radius: 4px; display: inline-block;">[[tags/ta-profile\|Threat Actor Profile]]</span> | A detailed report on a specific Threat Actor (who they are), how they attack, what tools they use, and all the past campaigns we think they are responsible for.|
| <span style="background-color: rgba(239, 68, 68, 0.2); color: #ef4444; padding: 2px 8px; border-radius: 4px; display: inline-block;">[[tags/tool-profile\|Tool Profile]]</span> | A report that focuses on a single hacking **tool** (or a normal tool that hackers abuse). It explains how it works, which hacker groups use it, and how you can detect and block it.|
| <span style="background-color: rgba(239, 68, 68, 0.2); color: #ef4444; padding: 2px 8px; border-radius: 4px; display: inline-block;">[[tags/malware-analysis\|Malware Analysis]]</span> | Deep dive analysis of malware either **static, dynamic or reverse engineer** the malware sample(s) to understand how it works, capabilities, potential attributions and other intelligence requirements.|
| <span style="background-color: rgba(239, 68, 68, 0.2); color: #ef4444; padding: 2px 8px; border-radius: 4px; display: inline-block;">[[tags/intrusion-analysis\|Intrusion Analysis (Incident Analysis)]]</span> | A close-up look at one single successful attack on **only against specific target (usually one)**. It maps out the entire story, from how the hacker first got in until they achieved their final goal (like stealing data).|
| <span style="background-color: rgba(239, 68, 68, 0.2); color: #ef4444; padding: 2px 8px; border-radius: 4px; display: inline-block;">[[tags/campaign-analysis\|Campaign Analysis]]</span> | A report that looks at several related attacks against *multiple* targets. It helps connect the dots to see a bigger picture of what a hacker group is trying to achieve strategically.|
| <span style="background-color: rgba(249, 115, 22, 0.2); color: #f97316; padding: 2px 8px; border-radius: 4px; display: inline-block;">[[tags/leaks-forum\|Leaks Forum]]</span> | Reports focused on illegal underground forums where hackers post and try to sell or share data they claim to have stolen from a company.|
| <span style="background-color: rgba(249, 115, 22, 0.2); color: #f97316; padding: 2px 8px; border-radius: 4px; display: inline-block;">[[tags/leaks-infostealer\|Leaks Infostealer]]</span> | An analysis focused on finding stolen data logs (like passwords) from "Infostealer" malware that are linked to a specific company or organization.|
| <span style="background-color: rgba(59, 130, 246, 0.2); color: #3b82f6; padding: 2px 8px; border-radius: 4px; display: inline-block;">[[tags/zero-day\|Zero-day]]</span> | Unpatched Exploits: High-priority indicators for vulnerabilities that have no official patch or were exploited before public awareness.|
| <span style="background-color: rgba(59, 130, 246, 0.2); color: #3b82f6; padding: 2px 8px; border-radius: 4px; display: inline-block;">[[tags/branded-vuln\|Branded Vulnerability]]</span> | High-Profile Bugs: Vulnerabilities with marketing names/logos (e.g., Heartbleed, PwnKit) that often see rapid, mass exploitation.|
| <span style="background-color: rgba(59, 130, 246, 0.2); color: #3b82f6; padding: 2px 8px; border-radius: 4px; display: inline-block;">[[tags/critical-vuln\|Critical Vulnerability]]</span> | High-Severity Flaws: Standard vulnerabilities that carry a high CVSS/EPSS score but may not have a brand name.|
| <span style="background-color: rgba(107, 114, 128, 0.2); color: #6b7280; padding: 2px 8px; border-radius: 4px; display: inline-block;">[[tags/report\|Report]]</span> | Other related cybersecurity or intelligence reports that is relevant.|


## Threat Actor Category

| TA Category | Description | Example |
|---|---|---|
| APT | Highly sophisticated, long-term clandestine campaigns. These actors have significant resources and focus on stealth to maintain persistent access to a network for espionage or data theft. Can be State sponsored, can be cybercrime. | Dark Basin, Lazarus, FIN7 |
| State Sponsored | Highly-skilled hackers funded and directed by a government of certain nation. | APT28 (Fancy Bear), APT34 (OilRig), Lazarus Group |
| Cybercrime | Individuals or organized groups (Cybercriminals) whose primary motivation is financial gain. | FIN7 |
| Ransomware | An organized collective of cybercriminals that develops, distributes, and operates sophisticated ransomware strains, often employing the Ransomware-as-a-Service (RaaS) model and double extortion tactics. | LockBit, BlackCat (ALPHV), Clop |
| Hacktivist | Hackers motivated by a political, social, or ideological cause, using hacking as a form of protest. | Anonymous, LulzSec, OpIsrael |


## Target

| Target | Details |  |
|---|---|---|
| [[tags/broad-based\|Broad-based]] | CommodityOpportunistic | Everyone is a target, no exclusionEveryone is a target, some exclusion such as specific country, locale, etc.Specific Language - still broad (example targeting German/Mandarin Speaking)Specific country - political events, etc.Specific group of people (red-teamers, pentesters, gamers, etc.) |
| [[tags/targeted\|Targeted]] | Specific Target - specially crafted based on opportunity or targets Information Attack Space | Specific Individual/Company/Organization |


## Target  vs Victim

| Characteristics | Target | Victim |
|---|---|---|
| Inclusivity | All target is a victim | Not all victim is a target |
| Details | Must contain specific key indicators (multiple) that directs to the target. | Most of the articles with specified country etc. is victim limited to their telemetry (who is their customer) |
| Example | Based on keyword in the spear-phishing email which only relevant to the target and vulnerability exploited is opportunity TA used against the victim.   | Based on the telemetry of the vendor, it is found that country X has been affected in this campaign. |
| Defined as | specifically targeting |  at least |


## Relevancy

| Relevancy              | Links                         | Example                         |
|------------------------|-------------------------------|---------------------------------|
| 🔴Relevant             | [[tags/relevant]]             | APT targeting Malaysian entity. |
| 🟡Somewhat Relevant    |  [[tags/somewhat-relevant]]   | APT target Asian country.       |
| 🔵Potentially Relevant | [[tags/potentially-relevant]] | Infostealers impact globally.   |
| ⚫Not Relevant         | [[not-relevant]]              | Good to know only.              |




<sub>p.s. Not relevant does not mean to be ignored, it can be use to improve our security detection or prevention from the lesson learn of the incident. It is just lower priority compared to other three as the event may specifically targeting organizations that is not related to Malaysia, or targeting specific language speakers (e.g. russian language) and etc.</sub>

## Rectifyq's Workflow

<table><thead><tr><th width="174">Workflow</th><th>Description</th></tr></thead><tbody><tr><td>Check Date</td><td>Ensure MISP Event Date is same as the date the article was posted.</td></tr><tr><td>Review Severity</td><td>Select MISP Event severity as per above <a href="#severity-definition">severity definition</a>.</td></tr><tr><td>Check Producer</td><td>Ensure correct <a href="https://www.misp-galaxy.org/producer/">Producer</a> is tagged in MISP Event galaxy.</td></tr><tr><td>Check Actor</td><td>Add <a href="https://www.misp-galaxy.org/threat-actor/">Threat Actor</a> tag in MISP Event Galaxy, if there is none in Galaxy, add as attribute and tag as create missing galaxy.</td></tr><tr><td>Check Target</td><td>Add <a href="https://www.misp-galaxy.org/target-information/">Target Information</a> and <a href="https://www.misp-galaxy.org/sector/">Sector</a> tag in MISP Event Galaxy.</td></tr><tr><td>Check Tool</td><td>Add related tools tag in MISP Event Galaxy.</td></tr><tr><td>Check Malware</td><td>Add <a href="https://www.misp-galaxy.org/malpedia/">Malpedia </a>tag in MISP Event Galaxy</td></tr><tr><td>Check TTP</td><td>Ensure MITRE ATT&#x26;CK in MISP Event Galaxy is accurate, priority goes to Malaysia related event (may need to self curate if not provided by the Producer)</td></tr><tr><td>Add IOC Context</td><td>Add comments with relevant context in each attributes. (e.g. <code>84c82835a5d21bbcf75a61706d8ab549</code> - WannaCry Ransomware)</td></tr><tr><td>Check Key Indicator</td><td>Add related attributes/objects with details that may be used for attribution such as:<br>- username:password used by TA in the infection chain<br>- decryption key used<br>- mutexes<br>- password for archives<br>- sender email addressess<br>- language used<br>- etc.</td></tr><tr><td>Need sample sponsor</td><td>Require Malware sample sponsor, either upload to Malware Bazaar (preferred) or upload directly to MISP(for sample with sensitive data)</td></tr><tr><td>To Report to</td><td>To report to relevant parties such as the owner, hosting provider, MyCERT, registrar or etc.</td></tr></tbody></table>


## Topics

|Topics|Description|
|---|---|
|[[tags/geopolitical\|Geopolitical]]|Geopolitical Related|
|[[tags/ics-ot\|ICS-OT]]|Industrial Control System (ICS) and Operational Technology (OT)|
|[[tags/mobile-attack\|Mobile Attack]]|Mobile Attack|
|[[tags/supply-chain\|Supply Chain]]|Supply Chain|


