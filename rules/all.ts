import noFunc from "./no-func.ts";

/**
 * All functions within this repo
 * @module
 */
export default {
  name: "studios-lint",
  rules: {
    ...noFunc.rules,
  },
} as Deno.lint.Plugin;
