# pango-toolbar



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description | Type                     | Default               |
| ---------------- | ------------------ | ----------- | ------------------------ | --------------------- |
| `apiVersion`     | `api-version`      | PAN-GO API version. Controls download URLs and version-specific configuration. | `"pango-1" \| "pango-2"` | `ApiVersions.V2`      |
| `headerSubTitle` | `header-sub-title` |             | `string`                 | `'Human Functionome'` |
| `headerTitle`    | `header-title`     |             | `string`                 | `'PAN-GO'`            |
| `pangoHome`      | `pango-home`       |             | `string`                 | `'/'`                 |


## Dependencies

### Depends on

- [pango-dropdown](../pango-dropdown)

### Graph
```mermaid
graph TD;
  pango-toolbar --> pango-dropdown
  style pango-toolbar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
