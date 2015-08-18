---
layout: post
title: Javascript build using node.js
---

http://www.wikihow.com/Create-a-Javascript-Console-in-Sublime-Text

Node.js (Node) is a platform built to allow Javascript to run on a server. However, it can also be installed on your local computer, providing a relatively simple way to run Javascript and get the results without using a browser.

1. Download the Node installer from the project's homepage and run it. Simply use the default settings.
ToolsBuildSytemCreate.png2
2. Go to "Tools > Build System > New Build System" in the top bar.
Creatingnodebuilder.png3
Paste this code into the resulting new tab that Sublime Text opened, replacing anything else in it: 
`{
"cmd": ["node", "$file"],
"selector": "source.js"
}`
 NodeSave.png4
3. Save the file as "node.sublime-build" in the default "user" folder. Now you have created your build system!

###Usage
1. Open the Javascript file that you want to run in Sublime Text.
ChooseNode.png2
2. Go to "Tools > Build System" in the top bar and select "node". This is the build system that you just created.
NodeBuilded1.png3
3. Build the Javascript file, using either the build shortcut (^ Ctrl+B for Windows, and ⌘ Command+B for Mac), or by choosing "Build" from the "Tools" menu. A console will now appear in a pane at the bottom of the window, showing the results of your script!
