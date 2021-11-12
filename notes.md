# Course Notes

## Introduction

🙇🏻‍♂️ **What I've learned**
 
 I have learned the essential [shortcuts](./shortcuts.md) for VSCode as well as the names of some parts of the editor, like the sidebar, the status bar, the command pallette, etc.

 I also learned some useful [commands](./commands.md) for inspecting which processes are running to an specific port.

✔️ **Tasks**

- [ ] 👀 Watch YouTube video [#FiveThings About Create React App](https://www.youtube.com/watch?v=9t2GWFegnkQ&ab_channel=MicrosoftDeveloper)
- [ ] 🤔 What's [GitBook](https://www.gitbook.com/)?

## Customizing the Editor

**Themes**

To switch over themes do:

* `Cmd` + `Shift` + `P` > Select "Preference: Color Theme".


Dark/Light Themes:

* [Hop Light](https://marketplace.visualstudio.com/items?itemName=bubersson.theme-hop-light)
* [Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)
* [Cobalt 2](https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2)
* [Noctis](https://marketplace.visualstudio.com/items?itemName=liviuschera.noctis)
* [Min](https://marketplace.visualstudio.com/items?itemName=miguelsolorio.min-theme)
* [Dracula](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)


Fun Themes:

* [Hot Dog](https://marketplace.visualstudio.com/items?itemName=somekittens.hot-dog-stand)
* [Win95](https://marketplace.visualstudio.com/items?itemName=asilva.win95)

Stand out Themes:

* [SynthWave](https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode)
* [Slack](https://marketplace.visualstudio.com/items?itemName=felipe-mendes.slack-theme)

**Icons**

* [Material icons](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
* [Chalice icons](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

**Fonts**

* [Fira Code](https://github.com/tonsky/FiraCode)

**How to install a font into VSCode?**

1. Download the zip file
2. Install the font into your computer by double clicking the font file
3. Open VSCode settings
4. Search for "font"
5. Change the **Editor: Font Family** value with the name of your font:
   * e.g. _Fira Code_
   * default: _Menlo, Monaco, 'Courier New', monospace_

**How to enable font ligatures?**

1. Open VSCode settings
2. Search for "ligatures"
3. Enable the checkbox **Editor: Font Ligatures**
   * alternatively edit the `settings.json` file adding `"editor.fontLigatures": true` 

**Settings JSON file**

You can customize almost any thing in the editor. e.g. if you'd like to change the tabs:

In the `settings.json` file, add the following:

```json
{
  "workbench.colorCustomizations": {
    "tab.activeBackground": "#FBFBFB",
    "tab.activeBorder": "#ef476f"
  },
  "window.title": "🐱 ${rootPath}"
}
```

**Tweaks for Default Settings**

- [x] Always show the `settings.json` file instead of the UI
  * `"workbench.settings.editor": "json"`
- [x] Add a shortcut to open the UI Settings
  * `Shift` + `Cmd` + `,`
- [x] Get rid of the minimap
  * `"editor.minimap.enabled": false`
- [x] Get rid of the opened files editor.
  * `"explorer.openEditors.visible": 0`
- [x] Move the Side Bar to the right
  * `"workbench.sideBar.location": "right"`
- [x] Hide the Activity Bar
  * `"workbench.activityBar.visible": false`
- [x] Add a shortcut to toggle the Activity Bar
  * `Shift` + `Cmd` + `B`
- [x] Get rid of the breadcrumbs for paths
  * `"breadcrumbs.enabled": false`
- [x] Get rid of things you don't use in the Status bar


**Peacock**

- [x] Install [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock) extension
- [x] Configure a color. `Cmd` + `Shift` + `P` > "Peacock: Enter a color"
  * `#c02d28` _(frontend masters)_ 😉
- [x] Update settings with:
  * `"peacock.affectActivityBar": false`
  * `"peacock.affectStatusBar": false`


## Productivity Tricks

> TODO

## Navigation & Refactoring

> TODO

## Debugging

> TODO

## Docker

> TODO

## Remote Development

> TODO

## Working with Data

> TODO

## Git

> TODO
