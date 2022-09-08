---
title: VehicleLockState
order: 0
---

# {{ $frontmatter.title }}

<!--@include: ./vehicleLockState_partial_header.md-->

## Enum Definition

```ts
enum VehicleLockState {
    None,
    Unlocked,
    Locked,
    LockoutPlayerOnly,
    LockPlayerInside,
    InitiallyLocked,
    ForceDoorsShut,
    LockedCanBeDamaged,
};
```

## Documentation

<!--@include: ./vehicleLockState_partial_footer.md-->
