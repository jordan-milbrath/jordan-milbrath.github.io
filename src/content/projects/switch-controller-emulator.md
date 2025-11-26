---
title: Switch Controller Emulator
description: Allows Linux devices to emulate a Nintendo Switch Pro Controller and make arbitrary programmatic input via a simple API.
image: 🎮
tags: [Python, Linux, DBus, Bluetooth, Avalonia]
githubUrl: https://github.com/jordan-milbrath/switch-controller-emulator
---

## Overview
As the first project on this site, I'm ecstatic to share it with you!

*At this point, the source code is not available while I ensure that anything I release does not allow people create things that are bad for Nintendo.*

There's quite a big vision for this project. I'd like to start with an interface that can communicate with the Switch, and different tools and applications may spawn from that. Two ideas that I have specifically are creating new types of controllers for specific use cases and creating AI that can play games without "hacking" the Switch - via only the bluetooth controller while reading from the HDMI port.

If I understand the systems at work here correctly, it's entirely possible that this system will continue to work for the Switch 2 and potentially any systems after that.

Alright, that being said, here's what I've learned and worked with in this project.

DBus wasn't something that I'd used before this project, and I found that, while it wasn't easy to interact with at first, it's really just an extremely generic system that applications use to interact with each other. In fact, I even considered using DBus to make my own inter-process interfaces to use between the main bluetooth code and the Avalonia app.

This project was very rewarding and quite easy to work on, and I suspect it is because of my interest in the Nintendo Switch, my visions for its potential uses, and the consistent feedback I would get from the Switch to know if the code is working.