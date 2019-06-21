# Atlas

[![VERSION](https://img.shields.io/badge/dynamic/json.svg?color=blue&label=version&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2FYourNetworkNerd%2FAtlas%2Fmaster%2Fpackage.json)](https://github.com/YourNetworkNerd/Atlas)
[![LICENSE](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/YourNetworkNerd/Atlas/blob/master/LICENSE)
[![TWITTER](https://img.shields.io/badge/Twitter-YourNetworkNerd-1DA1F2.svg?logo=twitter)](https://twitter.com/YourNetworknerd)

🗺✏️ An extended version of JavaScript's Map

### Why Atlas?
Atlas is an ongoing way to simplify and expand the default Map variable in JavaScript. The project
was coded originally in TypeScript as nothing more than something to do after using map's several
times across many of my projects.

### Features of Atlas
- Iterators replaces with Array Returns
- Ability to Save your Atlas to File

### Demo/Docs
Here you will find the various ways that Atlas works.

In the Browser:
```html
<script src="atlas.min.js"></script>
<script type="text/javascript">
// Atlas will attach itself to the window in a Browser
// NOTE: In browser it cannot save to a file!
let atlas = new Atlas();
</script>
```

In Node.JS Javascript (CommonJS):
```js
let Atlas = require('./atlas');

let atlas = new Atlas();
```

In Node.JS TypeScript (ES6):
```ts
import Atlas from './atlas';

let atlas = new Atlas();
```