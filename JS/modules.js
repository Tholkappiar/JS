/*
  CommonJS (CJS) vs ECMAScript Modules (ESM or .mjs)
  --------------------------------------------------
  
  1. **Security:**
     - CJS: Insecure by design, allowing modules to be dynamically modified.
     - ESM: More secure by default. ESM exports are immutable, preventing external modification of the module's exports.

  2. **Syntax:**
     - CJS: Uses `require` for importing and `module.exports` for exporting.
       Example:
         const module = require('./module');
         module.exports = { key: 'value' };
     - ESM: Uses `import` for importing and `export` for exporting.
       Example:
         import module from './module.mjs';
         export const key = 'value';

  3. **Tree Shaking:**
     - CJS: Does not inherently support tree shaking; bundlers struggle with dead code elimination.
     - ESM: Bundlers can efficiently tree shake, avoiding unused code in output, which is particularly useful for large apps.

  4. **Live Bindings:**
     - CJS: Values are copied when `require` is called, meaning updates to the module won't reflect in the importer.
     - ESM: Live bindings ensure that any change to an exported value is reflected everywhere it's imported.

  6. **File Extensions:**
     - CJS: Traditionally uses `.js` as the extension. CJS modules are identified by Node.js via this extension.
     - ESM: Introduced `.mjs` extension, but files can also be `.js` if `"type": "module"` is declared in `package.json`.

  8. **Module System:**
     - CJS: Synchronous and works primarily with filesystems.
     - ESM: Designed with async behavior in mind, making it more suitable for web use cases and HTTP-based module loading.

  Conclusion:
  Both CJS and ESM have their strengths and weaknesses. While CJS is more flexible and easier for testing, ESM is the modern, secure, and scalable module system that aligns with the future of JavaScript.
*/
