---
title: Read the docs, Jesse - Responding to Jesse Smith
draft: false
author: Ardox
tags:
  - Review
  - Distrowatch
  - Response
image:
  src: /images/distro-critc.png
  alt: distro-critic
snippet: AxOS is getting quite popular recently. As I was browsing the web...
publishDate: 2025-07-04 17:10
category: Reviews
slug: read-the-docs-jesse
---

AxOS is getting quite popular recently. As I was browsing the web to find people's reviews, suggestions and stuff to fix, I saw that Jesse Smith (the owner of distrowatch) made a [review about AxOS](https://distrowatch.com/weekly.php?issue=20250630#axos). And it was... harsh. And it's by reading this review that I understood that Jesse **doesn't read the docs**. I like getting critics, even harsh ones, but this time it's different because Jesse talked about problems, **and he didn't searched an answer or a fix about problems that are known and said multiple times in the docs.** So here is my response to this somewhat misinformed review.

--- 

> The installer was slow, buggy, and duplicates downloading the files we already have on the local ISO

Because it downloads the latest packages to build a clean and up-to-date system ready to use. If you have a slow internet, the installation will be slow. I understand some people don't like that, but what you're saying is "I don't like it so it's shit".

> Both snapshots provided unhelpful error messages when attempting to boot in Legacy BIOS mode

Did you even glance at the docs or ask *anyone* ? Because it is said [here](https://www.axos-project.com/docs/reference/issues/#cant-boot-devdiskby-label-device-did-not-show-up-after-30-seconds) and [here](https://www.axos-project.com/docs/get-started/installation/#recommended). No need for an IT master degree to open the known issues and prerequisites of the documentation.

> Once I'd waded through all of that, the end result was an operating system which wouldn't even boot

Okay, and have you taken 5m to see the install log to check if something is wrong ? Or have you asked for an answer to me by email/discord/anything or to the community ? Or just opened an issue ? I also appreciate people who open discussions instead of just throwing shade.

> The system installer [...] will need to fetch 1.6GB of packages. This seems like such a waste of bandwidth after downloading a 2.0GB ISO

Clean install dude. On the ISO, you have more apps, for testing purpose, system recovery, and other stuff. User kits are made for that. If you need more apps out of the box, switch one of the kits you want. If you don't select anything, then the minimum will be installed. Is that... bad? Really ?

> I couldn’t find what the default password was supposed to be in the documentation.

There is no default password. And why would you need it, you're supposed to land on Sleex directly. If you land on the login screen, then there is an error, and I understand it. Report it, and me or someone will help you fix it. This will also make me add a bug to fix to my todo list.

> I found that the error only occurred when my laptop was set to boot in Legacy BIOS mode

 Back to [here](https://www.axos-project.com/docs/reference/issues/#cant-boot-devdiskby-label-device-did-not-show-up-after-30-seconds) and [here](https://www.axos-project.com/docs/get-started/installation/#recommended). 

> The theme failed to load because QtMultimedia is not installed

Fair critique if you don't use the latest ISO, because it got fixed. See ? Just report the bug, and it will be fixed.

> It’s difficult to imagine how my trial with AxOS could have gone any worse, short of the laptop catching on fire or my identity being stolen.

Welcome to the independent and one man developed distros :) Maybe you can be more constructive next time, so we can fix what's wrong.

---

So Jesse, if you're reading this, the next ISO is coming soon—UEFI only. Hope your machine can handle that.

**Disclaimer:** This response is honest and also written as satire. I answer harsh with harsh — don’t take it personally. All respect, dude.
