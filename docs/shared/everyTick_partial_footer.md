Common usages for everyTick are the following:

* drawing markers
* drawing text on screen
* drawing rectangles
* drawing nametags

### Examples

```ts
alt.everyTick(() => {
    console.log('lots of spam in the console');   
})
```

```ts
function tick() {
    console.log('lots of spam in the console');
}

alt.everyTick(tick)
```

```ts
// This example shows how to wait 5 seconds for a tick to be invoked.
let nextInvoke = Date.now() + 5000;
let count = 0;

function tick() {
    if (Date.now() < nextInvoke) {
        return;
    }

    nextInvoke = Date.now() + 5000;
    count += 1;

    console.log(`Current Count is: ${count}`);    
}

alt.everyTick(tick);
```

```ts
// This example shows how to clear an every tick after waiting 5 seconds.
let timeToClearAt = Date.now() + 5000;

function tick() {
    if (Date.now() < timeToClearAt) {
        return;
    }

    alt.clearEveryTick(tick);
}

alt.everyTick(tick);
```