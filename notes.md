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

**Breakpoints**

There are different ways of adding breakpoints:

* A regular Breakpoint
* A Conditional Breakpoint
  * By an Expression. e.g. `pokemon.name === 'pikachu'`
  * By a Hit Count. e.g. `allPokemon.length > 10`
* A Logpoint. e.g. `Current pokemon is: {pokemon}`


**TypeScript debugging**

1. Install `npm i -g typescript`
2. Install `npm i -D @types/node`
3. Create `index.ts` file
4. From the "Terminal" menu select "Run Build Task.."
5. Select `tsc: build`
6. JS and map files will be created
7. Create a `.vscode/settings.json` file
8. Ignore the JS and map files from the editor by adding the following:

```json
{
  "files.exclude": {
    "**/{*.js,*.js.map}": true
  }
}
```
9. Create a `.vscode/launch.json` file with the following:
```json
{
  "configurations": [
    {
      "name": "Launch CLI",
      "program": "${workspaceFolder}/index.js",
      "request": "launch",
      "skipFiles": ["<node_internals>/**"],
      "type": "pwa-node",
      "console": "integratedTerminal"
    }
  ]
}
```
10. Add a breakpoint to the `.ts` file
11. Run the "Launch CLI" from the Debug panel
12. Breakpoint should work in the `.ts` file even that the process is running from the `.js` file.

**Toggle Auto Attach**

1. Open the Command Pallet
2. Search for "Toggle Auto Attach"
3. Select "Only With Flag"
5. Add a breaking point to the scripting file. e.g. `index.js`
6. Run the script with the `--inspect` flag. e.g. `node --inspect index.js`
7. Debugging should work in attached mode

**Env vars while debugging**

In the `.vscode/launch.json` file for every `configurations.[]` you can either:

a. Add the property `env` that is an object with the env variables:

```json
{
  "configurations": [
    {
      "name": "Launch CLI",
      "program": "${workspaceFolder}/index.js",
      "request": "launch",
      "skipFiles": ["<node_internals>/**"],
      "type": "pwa-node",
      "console": "integratedTerminal",
      "env": {
        "API_BASE": "https://pokeapi.co/api/v2"
      }
    }
  ]
}
```

b. Add the property `envFile` when you have an `.env` file.

```json
{
  "configurations": [
    {
      "name": "Launch CLI",
      "program": "${workspaceFolder}/index.js",
      "request": "launch",
      "skipFiles": ["<node_internals>/**"],
      "type": "pwa-node",
      "console": "integratedTerminal",
      "envFile": "${workspaceFolder}/.env"
    }
  ]
}
```

**Browser debugging**

1. Create a new `.vscode/launch.json` file
2. Add the following configuration:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Chrome",
      "request": "launch",
      "type": "pwa-chrome",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```
3. Add a breakpoint
4. Run the debug configuration
5. Chrome should open a new instance in debug mode

**Compound debugging (Fullstack)**

1. Add a launch configuration both for React (Chrome) & Server (Node.js) and use the `compounds` config:

```json
{
  "version": "0.2.0",
  "compounds": [
    {
      "name": "Launch Fullstack",
      "configurations": ["Launch React", "Launch Server"]
    }
  ],
  "configurations": [
    {
      "name": "Launch Server",
      "program": "${workspaceFolder}/server/server.js",
      "request": "launch",
      "skipFiles": ["<node_internals>/**"],
      "type": "pwa-node",
      "env": {
        "API_BASE": "https://lifx-lamp-api.azurewebsites.net/api"
      }
    },
    {
      "type": "pwa-chrome",
      "request": "launch",
      "name": "Launch React",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

**Debugging with Nodemon**

1. Add the following launch configuration:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "name": "Launch Server",
      "program": "${workspaceFolder}/server/server.js",
      "request": "launch",
      "restart": true,
      "runtimeExecutable": "nodemon",
      "skipFiles": ["<node_internals>/**"],
      "type": "pwa-node",
      "env": {
        "API_BASE": "https://lifx-lamp-api.azurewebsites.net/api"
      }
    }
  ]
}
```

## Docker

The Docker extension offers a very good UI to inspect the containers, images, registries, networks and volumes. I have not learned anything new about it. The extension it is handy but I prefer to run the commands manually.

The coolest thing is that the extension can create all the docker files you may need to get started.

**Debugging within a Docker container**

The extension will create a docker-compose file `docker-compose.debug.yml` file exposing the port `9229` and also it will create the `.vscode/launch.json` file in order to run the debug.

1. Just run the created launched configuration "Docker Node.js Launch" and that will spin up a container in debug mode.

The `launch.json` configuration file looks as follows:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Docker Node.js Launch",
      "type": "docker",
      "request": "launch",
      "preLaunchTask": "docker-run: debug",
      "platform": "node"
    }
  ]
}
```

The `docker-compose.debug.yml` file:

```yml
version: '3.4'

services:
  expressreactstarter:
    image: expressreactstarter
    build:
      context: .
      dockerfile: ./Dockerfile
    environment:
      NODE_ENV: development
    ports:
      - 3000:3000
      - 9229:9229
    command: ["node", "--inspect=0.0.0.0:9229", "./server.js"]
```

The `Dockerfile`:

```Dockerfile
FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
```

## Remote Development

There are three "flavors" of remote development:

* SSH
* Containers
* WSL

What's interesting about this section is that you can develop inside a Docker container using the Remote - Container extension. There a few steps to do it:

1. Open the Command Palette
2. Run "Remote-Containers: Add Development Container Configuration Files..."
3. It will request for a "container configuration definition"
4. Choose any of the definitions, (Node.js, Python, Java, etc)
5. A folder `.devcontainer` will be created with a `Dockerfile` and a `devcontainer.json` files.
6. Then, from the bottom left corner there's an icon like `><` for Remote options, select "Reopen in Container".
7. That will create a docker image an a container and attach it to the VS Code instance, meaning that you can be developing as if you were in your localhost but inside a container.

NOTE: I couldn't debug the `exercise-6` app because it was requiring a set of debugging tools for Azure installed in my local, even though I installed them (maybe I should install them inside the container and not my localhost) it didn't work, but the container run correctly.

VSCode extensions can be installed inside containers and they will be save in the `devcontainer.json` file.

## Working with Data

The author uses an [Azure extension](https://marketplace.visualstudio.com/items?itemName=cosmoconsult.cosmo-azure-devops) to connect to MongoDB, MySQL and Sqlite. I didn't want to install that extension (because requires sign in) but rather use different ones. The only extension that worked for me was the [MongoDB VSCode](https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode). Other extensions for MySQL or Sqlite broke and were buggy.

Using the MongoDB is quite simple, just need to add a new connection and then create a script to run MongoDB queries as if you were in the shell.

## Git

> TODO
