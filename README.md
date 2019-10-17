# Issue Repro
Run `npm run start` to see the following issue
```
Uncaught TypeError: Object(...) is not a function
    at vendor.js:139874
    at Module.../../node_modules/ngx-loadable/fesm5/ngx-loadable.js (vendor.js:139876)
    at __webpack_require__ (runtime.js:84)
    at Module../src/app/app.module.ts (main.js:13778)
    at __webpack_require__ (runtime.js:84)
    at Module../src/main.ts (main.js:13934)
    at __webpack_require__ (runtime.js:84)
    at Object.0 (main.js:13958)
    at __webpack_require__ (runtime.js:84)
    at checkDeferredModules (runtime.js:46)
```