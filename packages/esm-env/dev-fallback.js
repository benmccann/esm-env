const node_env = globalThis.process?.env?.NODE_ENV;
if (!node_env) {
	console.warn('If bundling, conditions should include development or production. If not bundling, conditions or NODE_ENV should include development or production. See https://www.npmjs.com/package/esm-env for tips on setting conditions in popular bundlers and runtimes.');
}

export default node_env && !node_env.toLowerCase().includes('prod');
