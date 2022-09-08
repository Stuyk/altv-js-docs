---
title: IClientEvent
order: 0
---

# {{ $frontmatter.title }}

<!--@include: ./iClientEvent_partial_header.md-->

## Interface Definition

```ts
interface IClientEvent {
    anyResourceError: (resourceName: string) => void;
    anyResourceStart: (resourceName: string) => void;
    anyResourceStop: (resourceName: string) => void;
    changedVehicleSeat: (vehicle: Vehicle, oldSeat: number, seat: number) => void;
    connectionComplete: () => void;
    consoleCommand: (name: string, ...args: string[]) => void;
    disconnect: () => void;
    enteredVehicle: (vehicle: Vehicle, seat: number) => void;
    gameEntityCreate: (entity: Entity) => void;
    gameEntityDestroy: (entity: Entity) => void;
    keydown: (key: number) => void;
    keyup: (key: number) => void;
    leftVehicle: (vehicle: Vehicle, seat: number) => void;
    removeEntity: (object: Entity) => void;
    resourceStart: (errored: boolean) => void;
    resourceStop: () => void;
    resourceError: (error: Error, file: string, line: number, stackTrace: string) => void;
    syncedMetaChange: (entity: Entity, key: string, value: any, oldValue: any) => void;
    streamSyncedMetaChange: (entity: Entity, key: string, value: any, oldValue: any) => void;
    globalMetaChange: (key: string, value: any, oldValue: any) => void;
    globalSyncedMetaChange: (key: string, value: any, oldValue: any) => void;
    taskChange: (oldTask: number, newTask: number) => void;
    spawned: () => void;
    localMetaChange: (key: string, newValue: any, oldValue: any) => void;
    netOwnerChange: (entity: Entity, owner: Player, oldOwner: Player) => void;
    windowFocusChange: (isFocused: boolean) => void;
    windowResolutionChange: (oldResolution: shared.IVector2, newResolution: shared.IVector2) => void;
    playerAnimationChange: (target: Player, oldAnimDict: number, newAnimDict: number, oldAnimName: number, newAnimName: number) => void;
    playerWeaponShoot: (weaponHash: number, totalAmmo: number, ammoInClip: number) => void;
};
```

## Documentation

<!--@include: ./iClientEvent_partial_footer.md-->
