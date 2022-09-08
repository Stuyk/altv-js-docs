---
title: IVehicleModel
order: 0
---

# {{ $frontmatter.title }}

<!--@include: ./iVehicleModel_partial_header.md-->

## Interface Definition

```ts
interface IVehicleModel {
    readonly title: string;
    readonly type: shared.ModelType;
    readonly wheelsCount: number;
    readonly hasArmoredWindows: boolean;
    readonly primaryColor: number;
    readonly secondaryColor: number;
    readonly pearlColor: number;
    readonly wheelsColor: number;
    readonly interiorColor: number;
    readonly dashboardColor: number;
    readonly hasAutoAttachTrailer: boolean;
    readonly availableModkits: ReadonlyArray<boolean>;
    hasExtra(extraId: number): boolean;
    hasDefaultExtra(extraId: number): boolean;
};
```

## Documentation

<!--@include: ./iVehicleModel_partial_footer.md-->
