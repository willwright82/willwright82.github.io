---
layout: post
title: Javascript build using node.js
categories:
- code
---

When coding in Javascript while using [SublimeText](http://www.sublimetext.com/3), it's handy to have a test console.

Usually this would be done in Dev Tools' console, but you can also create a simple Node.js build system and get results without having to leave Sublime.

Node.js (Node) is a platform built to allow Javascript to run on a server. You can also install it on your computer, as a simple way to run Javascript locally.

### Let's get ready

1. You will need to have Node installed, if you don't simply head over to [their website](http://nodejs.org) and run it using the default settings.

2. Go to "Tools ➜ Build System ➜ New Build System" in the menu bar.
Paste this replacing everything in the new tab that has opened:

`{
"cmd": ["node", "$file"],
"selector": "source.js"
}`

3. Save this file as "node.sublime-build" in the default "user" folder. Your build system is ready!

### Usage

1. Open a Javascript file you would like to run in Sublime.

2. Go to "Tools ➜ Build System" in the menu bar and select "node", the build system that you've just created.

3. Go to "Tools ➜ Build" in the menu bar to build the Javascript file, or use the shortcut (^ Ctrl+B for Windows, and ⌘ Command+B for Mac). A console will show in a pane at the bottom, with the result of your Javascript!
