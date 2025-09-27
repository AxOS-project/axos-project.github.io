---
title: Why I’m Eyeing FHT-Compositor as a Hyprland Alternative for Sleex
draft: false
author: Ardox
tags:
  - Sleex
  - Desktops
  - FHT
  - Hyprland
image:
  src: /images/sleex.png
  alt: Sleex
snippet: Could this be the end of the sleex hyprland era ?...
publishDate: 2025-09-26 11:42
category: Sleex
slug: fht-compositor
---

Recently, I went down the rabbit hole looking for a new WM/compositor for Sleex. That’s when I stumbled on [fht-compositor](https://nferhat.github.io/fht-compositor/). At first glance, it feels like a Rust-powered reimagining of Hyprland. But why would I even consider switching?

# The problems of Hyprland

Don’t get me wrong, Hyprland is a decent compositor. It does what it promises, and it’s packed with features. But there are some glaring issues that I just can’t ignore:
- **The code is a mess**: The code is spaghetti, barely optimized, and prone to crashes. Some users have reported absurd resource usage, RAM spikes or CPUs idling at 80% for no reason.
- **Unstable changes**: Hyprland is known for sudden updates that break things left and right. A tiny tweak can snowball into chaos (looking at you, wezterm). For Sleex users, this means every config update risks turning into a config error party.
- **Toxic devs and community**: The community reputation is… not great. Ask for help on Discord or Reddit, and you might get sarcasm, mockery, or worse. Critics like Drew DeVault have pointed out the community’s tolerance for bullying, even from leadership.
- **Lead dev controversy**. The lead developer, Vaxry, has been accused of fostering toxicity, spreading homophobic and transphobic remarks, and was even banned from contributing to Freedesktop.org projects (which underpin Wayland and wlroots). You can see [this reddit page](https://www.reddit.com/r/linux/comments/1bzna16/hyprland_creator_vaxry_is_now_banned_from). His clash with the fdo/Red Hat CoC team only added more fuel to the fire. Also, I remember Vaxry being the cause of a nsfw loli pictures flood on the unixporn discord server (which is not related to porn at all).
- **The dependency spaghetti wheel**: Hyprland drags along a messy ecosystem of side-projects and forks (Aquamarine, Hyprcursor, Hyprutils, Hyprpm, Hyprpicker, Hypridle, Hyprpaper, and whatever new one pops up next week). Each comes with its own quirks and bugs, and they all depend on each other in confusing ways. Updating one can easily break another (the hyprutils incident (those who knows)), making the whole stack feel fragile and bloated compared to a compositor that just… works.

# About FHT

The fht-compositor is a lightweight, dynamic tiling Wayland compositor built with the Smithay library. Think of it as bringing the workflow vibes of DWM, XMonad, or AwesomeWM into the Wayland world.

It’s still early days, you won’t find the same buffet of features as Hyprland yet. But what it does offer is a clean, hackable foundation that feels much more promising.

For now, it’s too young to fully migrate Sleex over. But I’m already contributing to the project, with the hope of shaping it into a daily-driver alternative. Who knows, maybe one day, Sleex will proudly run on FHT instead of Hyprland.