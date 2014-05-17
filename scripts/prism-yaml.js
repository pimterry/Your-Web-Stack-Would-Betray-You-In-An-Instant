/**
 * YAML approximates ruby well enough for reasonable highlighting,
 * particularly when much of the YAML here has Ruby embedded.
 *
 * Also highlight \u003a, for the JSON vulnerability
 */
Prism.languages.yaml = Prism.languages.extend('ruby', {
	'property': /\\u003a/g
});
