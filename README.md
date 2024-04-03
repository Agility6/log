# Log

<p>💁🏻 When learning JavaScript, I think it's not convenient to use the console .log</p>

## Install

> npm i log-interest

```js
  // use in browser alone 
  // import { agLog, agLine } from '/node_modules/log-interest/index.js'
  
  // webpack build
  import { agLog, agLine } from 'log-interest'

  agLog('Hello Log')
  agLine()(10)
```

## Features

- 💭agLog: Displays the current time, automatically displays the type

  ```js

    agLog('String')
    agLog(1013)
    agLog(undefined)
    agLog(null)

    const obj = {
      name: 'agility'
    }
    agLog('--->',obj)

  ```
  ![example](https://github.com/Agility6/Agility6.github.io/blob/main/content/assets/other/Snipaste_2022-11-02_01-32-09.png)

- 🧵agline: You can customize the color, customize the number of lines

  ```js

    // colorDefault:#13678A
    agLine()(10)
    agLine('#7AB3BF')(10)
    agLine('#308C58')(10)
    agLine('#F2BE5C')(10)
    agLine('#D98E32')(10)
    agLine('#731702')(10)

    const youColorLine = agLine('#FF5A33')
    youColorLine(10)

  ```
  ![example](https://github.com/Agility6/Agility6.github.io/blob/main/content/assets/other/lineColorEx.png)
