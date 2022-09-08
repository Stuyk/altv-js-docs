### Examples

```ts
const uniqueToken = player.authToken;
if (uniqueToken !== 'blahBlahBlah') {
    player.kick('bad token');
    return;
}
```