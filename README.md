# Monaco editor in Angular v11


To load the editor in the app we need to install `@angular-builders/custom-webpack` and `monaco editor` 

```
$: npm i monaco-editor@0.44.0
```

```
$: npm i @angular-builders/custom-webpack@11
```

custom webpack builder

- change the `builder` path and `serve` field in `angular.json`

from: 

```
architect: {
    {
        ...
        "build": {
                "builder": "@angular-devkit/build-angular:browser",
                ...
        },
        "serve": {
                "builder": "@angular-devkit/build-angular:browser",
                ...
        }
    }
}
 ```

to: 

```
architect: {
    {
        ...
        "build": {
                "builder": ""@angular-devkit/build-angular:dev-server",
                ...
        },
        ...
        "serve": {
                "builder": "@angular-builders/custom-webpack:dev-server",
                ...
        }
        ...
    }
}
```

export monaco from node_modules configuring globs in angular.json

```
assets: {
    ...
    {
        "glob": "**/*",
        "input": "./node_modules/monaco-editor/min/vs",
        "output": "/vs"
    }
}
```




# references

- [Monaco editor AMD loading](https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-amd.md)
- [Monaco editor AMD integrate in angular](https://github.com/alxpsr/ng-monaco-editor-integration)
- [Monaco editor AMD integrate in angular](https://ngohungphuc.wordpress.com/2019/01/08/integrate-monaco-editor-with-angular/)
- [custom webpack](https://www.npmjs.com/package/@angular-builders/custom-webpack)