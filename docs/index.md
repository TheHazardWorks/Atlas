# Atlas

[![VERSION](https://img.shields.io/badge/dynamic/json.svg?color=blue&label=version&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2FYourNetworkNerd%2FAtlas%2Fmaster%2Fpackage.json)](https://github.com/YourNetworkNerd/Atlas)
[![LICENSE](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/YourNetworkNerd/Atlas/blob/master/LICENSE)
[![TWITTER](https://img.shields.io/badge/Twitter-YourNetworkNerd-1DA1F2.svg?logo=twitter)](https://twitter.com/YourNetworknerd)
[![DOWNLOAD](https://img.shields.io/badge/Download-JavaScript-F7DF1E.svg?logo=javascript)](https://raw.githubusercontent.com/YourNetworkNerd/Atlas/master/dist/atlas.js)
[![DOWNLOAD](https://img.shields.io/badge/Download-TypeScript-007ACC.svg?logo=typescript)](https://raw.githubusercontent.com/YourNetworkNerd/Atlas/master/src/atlas.ts)

🗺✏️ An extended version of JavaScript's Map

## Why Atlas?
Atlas is an ongoing way to simplify and expand the default Map variable in JavaScript. The project
was coded originally in TypeScript as nothing more than something to do after using Map's several
times across many of my projects.

## Features of Atlas
- Iterators replaced with Array Returns
- Ability to Save your Atlas to File

## Demo/Docs
Here you will find the various ways that Atlas works.

##### In Node.JS Javascript (CommonJS):
```js
let Atlas = require('./atlas');

let atlas = new Atlas();
```

##### In Node.JS TypeScript (ES6):
```ts
import Atlas from './atlas';

let atlas = new Atlas();
```

##### Quick Demo of Atlas
```js
// Establish Atlas
// let atlas = new Atlas();

// Establish with Optional Vars
let atlas = new Atlas({
    filepath: './storage',
    filename: 'myStorage'
})
// This will save changes to the file located at:
// ./storage/myStorage.atlas

// Load previously stored data if applicable
atlas.initialize();

// You can set various items by <Key, Value>
atlas.set('myVar', 'Some Variable');        // Strings
atlas.set('myVar2', 100);                   // Numbers
atlas.set('myVar3', ['Some','Variables']);  // Arrays
atlas.set('myVar4', { myKey: 'myValue' });  // Objects
atlas.set('myVar5', true);                  // Booleans
// NOTE: When you set an object this will save the data!

// Get an Item from the Atlas
altas.get('myVar'); // Returns: 'Some Variable'

// Remove an Item from the Atlas
atlas.remove('myVar5');

// Check if the Atlas has the value
atlas.contains('myVar3'); // Returns: true

// Get an array of the Atlas' Keys
atlas.keys(); // Returns: ['myVar','myVar2'...]

// Get all Keys and Items from Atlas as an Array
atlas.entries(); // Returns: [{key: 'myVar', value: 'Some Variable'}...]

// Get the size of the atlas
atlas.size(); // Returns: 4

// Completly clear the Atlas of all Items
atlas.empty();
// NOTE: This will also save the Atlas!
```