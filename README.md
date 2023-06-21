# map-box-vue

This is an application demo for MapLibre GL service. It's showing possibilities this plugin.

In this project you can see pinball points in Portland (USA) and points in Berlin (Germany) on map.

Project use open services [PinballMap](https://pinballmap.com/api/v1) and [OpenSenseMap](https://api.opensensemap.org/) .

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


## Project Description

Main directory in project is `src`

There you can see directories: 
- `assets` (main styles for project)
- `components` (contains `layouts`, `map`, `ui`)
- `helpers` (contains mapBox class and configs)
- `models` (typescript models)
- `services` (http services)
- `store` (vuex)

Directory `layouts` contains header and main content
Directory `map` contains main map component and additional components
Directory `ui` contains simple html components with additional styles
