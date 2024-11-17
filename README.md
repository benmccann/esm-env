# esm-env

Uses export conditions to return environment information in a way that works with major bundlers and runtimes.

## Usage

Install with `npm install esm-env`, then import as needed:

```js
import { BROWSER, DEV, NODE } from 'esm-env';
```

Specify `conditions` in your bundler or runtime. For example:
- [Node.js](https://nodejs.org/api/cli.html#-c-condition---conditionscondition)
- [Bun](https://bun.sh/docs/runtime/modules#custom-conditions)
- [Vite/Vitest](https://vite.dev/config/shared-options#resolve-conditions)
- [webpack](https://webpack.js.org/configuration/resolve/#resolveconditionnames)

## Acknowledgements

Thank you to [dominikg](https://github.com/dominikg) for refining the approach used by this library to suggest a more scalable method for adding additional conditions.

## License

[MIT](LICENSE)
