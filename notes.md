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

**Emmet HTML Syntax**

Create a new HTML document.

Type:

`!`

Output:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

Create a tag element. Type the name of the tag e.g. `div` and hit Tab or Enter. That will create the element with its enclosing tags.

Type:

`div`

Output:

```html
<div></div>
```

Create an element with and id.

Type:

`#app`

Output:

```html
<div id="app"></div>
```

Create an element with a class.

Type:

`.success`

Output:

```html
<div class="success"></div>
```

Create an element with multiple classes.

Type:

`.success.centered.row`

Output:

```html
<div class="success centered row"></div>
```

Create nested elements.

Type:

`div>div`

Output:

```html
<div>
  <div></div>
</div>
```

Nested elements can also have classes or ids.

Type:

`#container>.section`

Output:

```html
<div id="container">
  <div class="section"></div>
</div>
```

Create multiple elements of the same kind.

Type:

`ul>li*3`

Output:

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

Multiple elements with classes and ids. **Notice:** how Emmet is "aware" of what elements need to be created inside the `ul` element.

Type:

`ul#menu>.item*3`

Output:

```html
<ul id="menu">
  <li class="item"></li>
  <li class="item"></li>
  <li class="item"></li>
</ul>
```

Create sibling elements.

Type:

`.section-1+.section-2`

Output:

```html
<div class="section-1"></div>
<div class="section-2"></div>
```

Create complex HTML structures by grouping with parentheses `()`. **Note:** You may need to press `Ctrl` + `Space Bar` to run Emmet.

Type:

`.container>(.section-1>a)+(.section-2>img)`

Output:

```html
<div class="container">
  <div class="section-1"><a href=""></a></div>
  <div class="section-2"><img src="" alt=""></div>
</div>
```

**Emmet CSS Syntax**

Autocomplete any CSS properties by typing the letters.

Type:

`h`

Output:

```css
height: ;
```
Type:

`h100`

Output:

```css
height: 100px;
```

Type:

`h100p`

Output:

```css
height: 100%;
```

Type:

`bgi`

Output:

```css
background-image: url();
```

**Emmet Commands**

* **Balance (outward).** Selects elements from start to end to an outer level. 
  * Suggested shortcut: `Ctrl` + `Shift` + 🔼
* **Balance (inward).** Selects elements from start to end to an inner level.
  * Suggested shortcut: `Ctrl` + `Shift` + 🔽
* **Update Tag.** Useful to rename both the opening and enclosing tags.
* **Go to Matching Pair.** Takes you to the enclosing tag of the selected element.
* **Update Image Size.** Autocompletes the `height` and `width` of an `img` element using the resolution of the source image. This also works for CSS adding the corresponding props.
* **Wrap with Abbreviation.** Wraps the selection with the given Emmet abbreviation.
  * Suggested shortcut: `Ctrl` + `Shift` + `W`

**Prettier**

* Format On Save.
  * `"editor.formatOnSave": true`

**NPM & Intellisense**

- [x] Enable NPM Scripts Explorer. Go to the **View** menu > Select "Open View..." > Type "npm" > Select "NPM Scripts" > Press Enter
- [x] Try the `npm run` command in the terminal to show the scripts available
- [x] Install the extension [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)

**React Snippets**

- [x] Install [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets) extension

Try it out.

Type:

`imr`

Output:

```js
import React from 'react';
```

**VSCode Reload**

  * Press `Cmd` + `R`. For some reason does not work. What's `isDevelopment`?
  * Open the Command Pallette > Type "reload" > Select "Developer: Reload Window"

## Navigation & Refactoring

**Move lines**

You can move lines by pressing `Option (⌥)` + 🔼 or 🔽

**Duplicate lines**

You can duplicate lines by pressing `Shift (⇧)` + `Option ⌥` + 🔼 or 🔽

**Delete lines**

You can delete lines by pressing `Shift (⇧)` + `Cmd (⌘)` + `K`

**Comment Code**

You can comment code by pressing `Shift (⇧)` + `Cmd (⌘)` + `/`

**Fold Code**

1. Open the Command Pallet `Cmd (⌘)` + `Shift (⇧)` + `P`
2. Type "fold"
3. Select "Fold"

**Create Regions**

Regions are a way to fold big blocks of code or lines by comments.

Write a comment like this `#region <insert some fancy description here>` before the code you want to fold.

Then, write a comment like this `#endregion` at the end.

Example:

```js
//#region A very long code
function veryBigProcess() {
  // assume I am a very big function 🤦🏻‍♂️
}
//#endregion
```

This also works with HTML comments:

```html
<!--#region who wrote this piece of crap? -->
<div class="container">
  <!-- assume this is a very long div 😜 -->
</div>
<!--#endregion -->
```

Finally, fold the code 😉.

**Multiple cursors**

* You can select all instances of any selection by pressing `Cmd (⌘)` + `Shift (⇧)` + `L`.
* You can select instance one by one by pressing `Cmd (⌘)` + `D` and deselecting with `K` while holding `Cmd (⌘)` and then pressing `D` again.


**Finding**

* Open the Find box with `Cmd (⌘)` + `F`.
* Open the Find & Replace box with `Option ⌥` + `Cmd (⌘)` + `F`.
* While finding, press `Option ⌥` + `Enter` and that will add a cursor to all the results. Then navigate with `Option ⌥` or `Cmd (⌘)` and the arrows `<-` or `->`.

**Search by symbols**

Open the search bar with `Cmd (⌘)` + `P`.

* Type `@` that will list all the symbols in the file.
* Type `@:` that will list all the symbols by type:
  * In a file with code will list `classes`, `constructors` or `methods`.
  * In a file with HTML will list CSS `classes` and `fields`.
* Type `:<n>` that will take to line of code `<n>`. Example: `:30`.
* Type: `:<n>,<col>` that will take you to line of code `<n>` and column `<col>`. Example: `:30,10`.

**Name Refactor**

1. Select a symbol to be changed, press `F2` and then enter the new name, press `Enter` and all instances should have changed.
   1. Alternatively hit `Shift` + `Enter` to see a preview of the refactor.
2. Confirm that the symbol was changed in all files pressing `F12`.

**Extract Method**

1. Select any code, press `Cmd` + `.` to open the 💡 options, then select any of the extract options:
   a. Extract to method in class...
   b. Extract to function in module scope.

**TypeScript checks**

Option A. At the top of a file add:

```js
// @ts-check
```

That will enable VS code to check your JS as if it were TS.

Option B. Turn the setting on for all files in the workspace.

In the `settings.json` file, add the following:

```json
"js/ts.implicitProjectConfig.checkJs": true
```

That will enable the TS checking for all the workspace.

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
