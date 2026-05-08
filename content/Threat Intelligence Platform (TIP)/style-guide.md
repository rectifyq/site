---
title: "MISP Style Guide"
date: 2026-01-29
modified: 2020-01-01
description: "Capability profile for [Tool Name], utilized by [Actor Name/s] fodfdr [Phase]."
aliases:
  - "[Alternative Name / Internal ID]"
tags:
  - rectifiyq-intel
  - tool-profile
  - capability-analysis
  - [category: e.g., RAT / Scanner / Exfil]
draft: false
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

<table>
<thead>
<tr><th width="174">Sub-category</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><font style="color:red;">Threat Actor Profile<br>([[tags/ta-profile]])</font></td><td>A detailed report on a specific Threat Actor (who they are), how they attack, what tools they use, and all the past campaigns we think they are responsible for.</td></tr>
<tr><td><font style="color:red;">Tool Profile<br>([[tags/tool-profile]])</font></td><td>A report that focuses on a single hacking <strong>tool</strong> (or a normal tool that hackers abuse). It explains how it works, which hacker groups use it, and how you can detect and block it.</td></tr>
<tr><td><font style="color:red;">Malware Analysis<br>([[tags/malware-analysis]])</font></td><td>Deep dive analysis of malware either <strong>static, dynamic or reverse engineer</strong> the malware sample(s) to understand how it works, capabilities, potential attributions and other intelligence requirements.</td></tr>
<tr><td><font style="color:red;">Intrusion Analysis (Incident Analysis)<br>([[tags/intrusion-analysis]])</font></td><td>A close-up look at one single successful attack on <strong>only against specific target (usually one)</strong>. It maps out the entire story, from how the hacker first got in until they achieved their final goal (like stealing data).</td></tr>
<tr><td><font style="color:red;">Campaign Analysis<br>([[tags/campaign-analysis]])</font></td><td>A report that looks at several related attacks against <em>multiple</em> targets. It helps connect the dots to see a bigger picture of what a hacker group is trying to achieve strategically.</td></tr>
<tr><td><font style="color:orange;">Leaks Forum<br>([[tags/leaks-forum]])</font></td><td>Reports focused on illegal underground forums where hackers post and try to sell or share data they claim to have stolen from a company.</td></tr>
<tr><td><font style="color:orange;">Leaks Infostealer<br>([[tags/leaks-infostealer]])</font></td><td>An analysis focused on finding stolen data logs (like passwords) from "Infostealer" malware that are linked to a specific company or organization.</td></tr>
<tr><td><font style="color:blue;">Zero-day<br>([[tags/zero-day]])</font></td><td>Unpatched Exploits: High-priority indicators for vulnerabilities that have no official patch or were exploited before public awareness.</td></tr>
<tr><td><font style="color:blue;">Branded Vulnerability<br>([[tags/branded-vuln]])</font></td><td>High-Profile Bugs: Vulnerabilities with marketing names/logos (e.g., Heartbleed, PwnKit) that often see rapid, mass exploitation."</td></tr>
<tr><td><font style="color:blue;">Critical Vulnerability<br>([[tags/critical-vuln]])</font></td><td>High-Severity Flaws: Standard vulnerabilities that carry a high CVSS/EPSS score but may not have a brand name</td></tr>
<tr><td>Report<br>([[tags/report]])</td><td>Other related cybersecurity or intelligence reports that is relevant.</td></tr>
</tbody>
</table>

## Threat Actor Category

<table>
<thead>
<tr><th width="178">TA Category</th><th>Description</th><th>Example</th></tr></thead>
<tbody>
<tr><td>APT</td><td>Highly sophisticated, long-term clandestine campaigns. These actors have significant resources and focus on stealth to maintain persistent access to a network for espionage or data theft. Can be State sponsored, can be cybercrime.</td><td>Dark Basin, Lazarus, FIN7</td></tr>
<tr><td>State Sponsored</td><td>Highly-skilled hackers funded and directed by a government of certain nation.</td><td>APT28 (Fancy Bear), APT34 (OilRig), Lazarus Group</td></tr>
<tr><td>Cybercrime</td><td>Individuals or organized groups (Cybercriminals) whose primary motivation is financial gain.</td><td>FIN7</td></tr>
<tr><td>Ransomware</td><td>An organized collective of cybercriminals that develops, distributes, and operates sophisticated ransomware strains, often employing the Ransomware-as-a-Service (RaaS) model and double extortion tactics.</td><td>LockBit, BlackCat (ALPHV), Clop</td></tr>
<tr><td>Hacktivist</td><td>Hackers motivated by a political, social, or ideological cause, using hacking as a form of protest.</td><td>Anonymous, LulzSec, OpIsrael</td></tr>
</tbody>
</table>

## Target

<table>
<thead>
<tr><th width="177">Target</th><th>Details</th><th></th></tr></thead>
<tbody>
<tr><td>Broad-based<br>([[tags/broad-based]])</td><td><ul><li>Commodity</li><li>Opportunistic</li></ul></td><td><ul><li>Everyone is a target, no exclusion</li><li>Everyone is a target, some exclusion such as specific country, locale, etc.</li><li>Specific Language - still broad (example targeting German/Mandarin Speaking)</li><li>Specific country - political events, etc.</li><li>Specific group of people (red-teamers, pentesters, gamers, etc.)</li></ul></td></tr>
<tr><td>Targeted<br>([[tags/targeted]])</td><td>Specific Target - specially crafted based on opportunity or targets Information Attack Space</td><td><ul><li>Specific Individual/Company/Organization</li></ul></td></tr>
</tbody>
</table>

## Target  vs Victim

<table><thead><tr><th width="157.79998779296875">Characteristics</th><th>Target</th><th>Victim</th></tr></thead><tbody><tr><td>Inclusivity</td><td>All target is a victim</td><td>Not all victim is a target</td></tr><tr><td>Details</td><td>Must contain specific key indicators (multiple) that directs to the target.</td><td>Most of the articles with specified country etc. is victim limited to their telemetry (who is their customer)</td></tr><tr><td>Example</td><td>Based on keyword in the spear-phishing email which only relevant to the target and vulnerability exploited is opportunity TA used against the victim.  </td><td>Based on the telemetry of the vendor, it is found that country X has been affected in this campaign.</td></tr><tr><td>Defined as</td><td>specifically targeting</td><td> at least</td></tr></tbody></table>

## Relevancy

<table>
<thead>
<tr><th width="207.4000244140625">Relevancy</th><th>Links</th><th>Example</th></tr></thead>
<tbody>
<tr><td>🔴Relevant</td><td>[[tags/relevant]]</td><td>APT targeting Malaysian entity.</td></tr>
<tr><td>🟡Somewhat Relevant</td><td>[[tags/somewhat-relevant]]</td><td>APT target Asian country.</td></tr>
<tr><td>🔵Potentially Relevant</td><td>[[tags/potentially-relevant]]</td><td>Infostealers impact globally.</td></tr>
<tr><td>⚫Not Relevant</td><td>[[not-relevant]]</td><td>Good to know only.</td></tr>
</tbody>
</table>

<sub>p.s. Not relevant does not mean to be ignored, it can be use to improve our security detection or prevention from the lesson learn of the incident. It is just lower priority compared to other three as the event may specifically targeting organizations that is not related to Malaysia, or targeting specific language speakers (e.g. russian language) and etc.</sub>

## Rectifyq's Workflow

<table><thead><tr><th width="174">Workflow</th><th>Description</th></tr></thead><tbody><tr><td>Check Date</td><td>Ensure MISP Event Date is same as the date the article was posted.</td></tr><tr><td>Review Severity</td><td>Select MISP Event severity as per above <a href="#severity-definition">severity definition</a>.</td></tr><tr><td>Check Producer</td><td>Ensure correct <a href="https://www.misp-galaxy.org/producer/">Producer</a> is tagged in MISP Event galaxy.</td></tr><tr><td>Check Actor</td><td>Add <a href="https://www.misp-galaxy.org/threat-actor/">Threat Actor</a> tag in MISP Event Galaxy, if there is none in Galaxy, add as attribute and tag as create missing galaxy.</td></tr><tr><td>Check Target</td><td>Add <a href="https://www.misp-galaxy.org/target-information/">Target Information</a> and <a href="https://www.misp-galaxy.org/sector/">Sector</a> tag in MISP Event Galaxy.</td></tr><tr><td>Check Tool</td><td>Add related tools tag in MISP Event Galaxy.</td></tr><tr><td>Check Malware</td><td>Add <a href="https://www.misp-galaxy.org/malpedia/">Malpedia </a>tag in MISP Event Galaxy</td></tr><tr><td>Check TTP</td><td>Ensure MITRE ATT&#x26;CK in MISP Event Galaxy is accurate, priority goes to Malaysia related event (may need to self curate if not provided by the Producer)</td></tr><tr><td>Add IOC Context</td><td>Add comments with relevant context in each attributes. (e.g. <code>84c82835a5d21bbcf75a61706d8ab549</code> - WannaCry Ransomware)</td></tr><tr><td>Check Key Indicator</td><td>Add related attributes/objects with details that may be used for attribution such as:<br>- username:password used by TA in the infection chain<br>- decryption key used<br>- mutexes<br>- password for archives<br>- sender email addressess<br>- language used<br>- etc.</td></tr><tr><td>Need sample sponsor</td><td>Require Malware sample sponsor, either upload to Malware Bazaar (preferred) or upload directly to MISP(for sample with sensitive data)</td></tr><tr><td>To Report to</td><td>To report to relevant parties such as the owner, hosting provider, MyCERT, registrar or etc.</td></tr></tbody></table>


## Topics

|Topics|Description|
|---|---|
|[[tags/geopolitical]]|Geopolitical Related|
|[[tags/ics-ot]]|Industrial Control System (ICS) and Operational Technology (OT)|
|[[tags/mobile-attack]]|Mobile Attack|
|[[tags/supply-chain]]|Supply Chain|


