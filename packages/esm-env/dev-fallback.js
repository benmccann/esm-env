const node_env = globalThis.process?.env?.NODE_ENV;
if (!node_env) {
	throw new Error('conditions should include development or production. See https://www.npmjs.com/package/esm-env for tips on setting conditions in popular bundlers and runtimes.');
}

export default node_env !== 'production';
