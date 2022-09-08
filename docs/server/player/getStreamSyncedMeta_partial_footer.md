### Examples

```ts
const data = player.getStreamSyncedMeta('myData');
if (!data) {
    // Does does not exist.
    return;
}

console.log(data);
```