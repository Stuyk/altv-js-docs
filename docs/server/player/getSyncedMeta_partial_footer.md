### Examples

```ts
const result = somePlayer.getSyncedMeta('myData');
if (!result) {
    // Data does not exist
    return;
}

console.log(result);
```