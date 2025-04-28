---
title: Why is Epsilon replacing Pacman in AxOS ?
draft: false
author: Ardox
tags:
  - Epsilon
  - Package Manager
  - Q&A
image:
  src: /images/epsi.png
  alt: Epsi
snippet: Epsilon is the package manager of AxOS. It is replacing Pacman, the previous package manager. Let's see why...
publishDate: 2025-04-28 09:52
category: Epsilon
slug: why-epsi
---

Pacman is a cool package manager. Default in Arch Linux, it is a powerful tool for managing packages. But it has some limitations. Epsilon is here to solve these limitations and to provide a better experience for the users of AxOS.

## Why is Epsilon replacing Pacman ?

The official repos used by Pacman lack some packages. Some of them are not available in the official repos, and some of them are outdated. This is a problem for the users of AxOS, who want to have the latest versions of the packages. The solution is to use the AUR (Arch User Repository), which is a community-driven repository that contains a lot of packages. But to use the AUR, you need to use an AUR helper. The most popular AUR helper is yay. But it's way more easy to make a package manager that can handle both the official repos and the AUR. This is what Epsilon is doing. It is a package manager that can handle both the official repos and the AUR. It is also a package manager that is designed to be easy to use, fast, and powerful.

> Easy ? What do you mean by easy ? Pacman and yay are easy to use...

Go ask a newbie to learn how to use Pacman and yay. He will be lost in the middle of the documentation. Epsilon is designed to be easy to use, even for newbies. It has a simple and intuitive command line interface, and it is designed to be easy to understand. The goal is to make it easy for users to install, update, and remove packages. Instead of updating the system with `pacman -Syu`, you can use `epsi`, or to install a package, you can use `epsi install <package>` (or `epsi i <package>`), instead of `pacman -S <package>`. The goal is to make it easy for users to use the package manager, without having to learn a lot of flags and options. 

Plus, the CLI is more simple. By default, instead of showing a lot of information (which is not always useful nor needed), Epsilon will show you only the most important information, such as "Building package", "Installing package", etc. You can still see the logs if you want to, but by default, it will be hidden. This is a feature that is not available in Pacman, and it is designed to make the package manager more user-friendly.

> Fast ? What do you mean by fast ? Pacman is fast...

Well, yes, but Epsilon is faster. It is made with rust, which is a fast and efficient programming language. It's not really a useful time gain as both Pacman and Epsilon speed depends on the speed of the internet connection, but it is a nice feature to have.

Epsilon has a lot of other features that are not available in Pacman. For example, it has a built-in review system, which allows users to leave reviews for packages (buildinfos, pkginfos etc.). This is a feature that is not available in Pacman.

So, now you know why Epsilon is replacing Pacman in AxOS. I'm not saying that Pacman is bad, but Epsilon is better.