// This is a fallback code on old environments that doesn't support the custom `exports` field in `package.json`,
//  so they will load this file instead, when importing `esm-env`.
// These old environments will not enjoy the minification abilities and correctness of the newer environments,
//  but at least the user code could be built with reasonable environment values and not getting errors during the build.

// This value is a reasonable universal technique to check if we're on browser or not,
//  but it's not constant and therefore doesn't allow code minification during the build (e.g. dead code elimination).
export const BROWSER = typeof window !== 'undefined';

// Cannot have a better guess, sadly.
export const DEV = false;
