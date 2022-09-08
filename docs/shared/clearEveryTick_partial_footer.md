Clearing an every tick requires a listener function to clear it correctly.

### Examples

```ts
function tick() {
    console.log('logs once, then clears');
    alt.clearEveryTick(tick);
}

alt.everyTick(tick)
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