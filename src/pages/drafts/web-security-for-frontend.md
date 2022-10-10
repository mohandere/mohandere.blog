---
title: Web Security for frontend developers
date: 2021/3/20
tag: web, security
description: Security is a paramount concern, and yet its ignored by many frontend devs/organizations. Most find applications and frameworks are still riddled with vulnerabilities; they use frameworks that are no longer maintained; or components aren’t updated.
---

# Web Security for frontend developers

Security is a paramount concern, and yet its ignored by many frontend devs/organizations. Most find applications and frameworks are still riddled with vulnerabilities; they use frameworks that are no longer maintained; or components aren’t updated.

### Table of content

- Why?
- Type of Attacks
- Top 10 security risks
- Security Principles
- Secure path to production
  - A Typical SDLC Testing Workflow
- Testing Tools
  - Security Testing Tools Pyramid
  - Classes of Tools
  - Finding tools based on area of concern
  - Finding the correct tool for your context
- Preventions
- Conclusion

#### Why?

#### Type of Attacks

#### Top 10 security risks

#### Security Principles

- Awareness
- Build Security from the Start
- Defense in Depth
- Privacy of Information
- Least Privilege
- Whitelisting
- Minimize Attack Area
- Do Not Use Un trusted Data
- Separate Data from Code
- Don’t Trust Input
- Secure by Default
- You Can’t Secure What You Don’t Understand
- Keep Secrets Secret
- Security Must be Usable
- Stay Up to Date
- Use Existing Security Solutions

#### Secure path to production

A path to production (P2P) visualizes the many steps between the start of a discussion, a business requirement, or a user ask, all the way up to the deployment and operation of a finished feature in a production environment

The idea of a path to production is adapted from lean value stream mapping, which is used in the manufacturing industry to improve processes in production throughput and analyze the cost of delay. The creation of a P2P is a task that involves the whole team. Each and every activity in the context of product development is registered and brought into a logical order.
People: Groups, Boards, Individuals
Media: Meetings, Jour Fixe, Committees, Calls, eMails
Deliverables: Reports, Analyses, User Stories, Commits, Containers, …
Security controls alongside each step: Threat Modeling, Tests, Logging, Scanners, ...

Agile SDLCs will often roughly look like this: Stakeholders get together to discuss ideas, which are covered in protocols and reports. These inform decisions by other groups and committees down the road. At some point, these discussions will be refined into epics to roughly outline scopes for delivery work. Subsequently, an epic is broken down into stories, with a very clear scope and acceptance criteria. These stories are developed one at a time, and then deployed into production.

In agile software development, this path is constantly fed with new proposals and insights. Typically, every team member is working at some point of the P2P at any given point in time. When all is said and done, you should be left with a huge piece of paper that shows the team’s reality abstract, but believably and accurately.
