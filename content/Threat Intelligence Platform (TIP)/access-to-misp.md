---
title: Get access to Rectifyq's MISP
---
Application to get access to Rectifyq's TIP (MISP) is now open.
https://forms.gle/b57aaQixjdS5CPTEA

Courses to be released soon.🙏

## Roles Comparison
| Feature | Lvl1:Cybervigilantes | Lvl2:Cybervigilantes | Lvl3:Cyberheroes |
| --- | --- | --- | --- |  
|Access Rights|Read-only|Publisher|Vetted User|
|Data Scope|TLP:CLEAR & TLP:GREEN|TLP:CLEAR & TLP:GREEN|All (inc. TLP:AMBER)|
|Data Masking|Masked data|Masked data|Unmasked data|
|Primary Action|Observation & Learning|Reporting & Publishing|Deep Analysis & Vetting|
|Yearly KPI|None|Completed course + Publish at least 1 original articles on local threats.|Publish at least 4 original articles on local threats, Vetted/well known national contribution or sponsored for the project|

## Role: Lvl1:Cybervigilantes 
```mermaid
flowchart LR
    B2[Apply via Google Form]
    B2 --> B4[Post min 1 Article on Malaysia Threat Landscape on any platform]
    B4 -- Checked Quarterly--> B5{Inline with T&C?}

    B5 -- Yes --> B6[Access MISP202X & MISPMY]
    B7 --> B4
    B6 --> B7(TLP:CLEAR)

    B5 -- No --> B8[Account Disabled]
    B8 --> B2
```

## Role: Lvl2:Cybervigilantes

```mermaid
flowchart LR
    B1[Complete Rectifyq Course in Coursestack] --> B2[Apply via Google Form]
    B2 --> B4[Post min 1 Article on Malaysia Threat Landscape on any platform]
    B4 -- Checked Quarterly--> B5{Requirement fulfilled & inline with T&C?}

    B5 -- Yes --> B6[Access MISP202X & MISPMY]
    B7 --> B4
    B6 --> B7(TLP:CLEAR & TLP:GREEN)

    B5 -- No --> B8[Account Disabled]
    B8 --> B2
```
## Role: Lvl3:Cyberheroes
```mermaid
flowchart LR
    C0[Currently Cybervigilantes Role] --> C1[Continuous Contribution] 
    C1 --> D{Vetting Process & inline with T&C}
    C2[Proven Contribution Track Record]  --> D
    D -- Approved --> C3[Access MISP202X & MISPMY]
    D -- Denied --> R[Account Disabled]
    C3 --> C4(TLP:CLEAR, TLP:GREEN, & TLP:AMBER)
    C4 -- Checked Quarterly --> D

```