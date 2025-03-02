import noFunc from "./no-func.ts";

export default {
  name: "studios-lint",
  rules: {
    ...noFunc.rules,
  },
} as Deno.lint.Plugin;
