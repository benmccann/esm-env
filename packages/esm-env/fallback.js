if (!import.meta.env) {
	// changes to import.meta only apply to this file
	// we have to do this to be able to directly access import.meta.env.DEV
	// bunlder defines such as Vite will only replace import.meta.env.DEV and not import.meta.env?.DEV
	// we also can't do import.meta.env && import.meta.env.DEV because that breaks tree-shaking
	import.meta.env = {};
}

// import.meta.env.DEV can be replaced by a bundler define such as Vite does and the rest of this
// expression can then be condensed down to a single boolean by the bundler if such a define is used
// Otherwise, if there were no conditions defined and the build time replacement of import.meta.env.DEV
// didn't happen then fallback to runtime check of process.env.NODE_ENV
export default !!(import.meta.env.DEV ?? process?.env?.NODE_ENV !== 'production');
