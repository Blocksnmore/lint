/**
 * Disallows creating functions via `Function`.
 * @module
 */
export default {
	name: "studios-lint",
	rules: {
		"no-func": {
			create(context) {
				return {
					FunctionDeclaration(node) {
						context.report({
							node,
							message: "Creating functions via `Function` is not allowed",
							hint: "Use arrow functions instead",
						});
					}
				};
			},
		},
	},
} as Deno.lint.Plugin;
