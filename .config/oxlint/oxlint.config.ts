import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "error",
    perf: "warn",
    suspicious: "warn"
  },
  plugins: ["eslint", "typescript", "import", "node", "oxc", "react", "unicorn"],
  jsPlugins: [
    {
      name: "react-effect",
      specifier: "eslint-plugin-react-you-might-not-need-an-effect"
    },
    {
      name: "anti-slop",
      specifier: "./tools/oxlint/anti-slop/index.ts"
    }
  ],
  env: {
    browser: true
  },
  options: {
    typeAware: true,
    typeCheck: true
  },
  rules: {
    curly: ["error", 'all'],
    "no-unused-vars": ['error', {
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      ignoreRestSiblings: true,
      varsIgnorePattern: "^_"
    }],
    "no-console": "off",
    "unicorn/no-process-exit": "off",
    "react/react-in-jsx-scope": "off",
    "typescript/no-floating-promises": ["error", {
      "ignoreVoid": true
    }],
    "typescript/no-unsafe-assignment": "error",
    "typescript/no-explicit-any": "error",
    "typescript/consistent-type-imports": ["error", {
      prefer: "type-imports", fixStyle: "inline-type-imports"
    }],
    "react-effect/no-derived-state": "error",
    "react-effect/no-chain-state-updates": "error",
    "react-effect/no-event-handler": "error",
    "react-effect/no-adjust-state-on-prop-change": "error",
    "react-effect/no-reset-all-state-on-prop-change": "error",
    "react-effect/no-pass-live-state-to-parent": "error",
    "react-effect/no-pass-data-to-parent": "error",
    "react-effect/no-external-store-subscription": "error",
    "react-effect/no-initialize-state": "error",
    "anti-slop/no-chained-type-assertions": "error",
    "anti-slop/no-conditional-empty-object-spread": "error",
    "anti-slop/no-known-value-widening": "error",
    "anti-slop/no-module-mocking": "error",
    "anti-slop/no-object-parameters": "error",
    "anti-slop/no-reflect-apply": "error",
    "anti-slop/no-reflect-get": "error",
    "anti-slop/no-runtime-typeof": "error",
    "anti-slop/no-shape-in-symbol-names": "error",
    "anti-slop/no-unknown-parameters": "error",
    "anti-slop/no-unknown-returns": "error",
    "anti-slop/no-unknown-type-aliases": "error",
    "anti-slop/no-unsafe-dictionary-type": "error",
    "anti-slop/no-widen-then-assert": "error",
    "anti-slop/require-safety-comment-for-type-assertion": "error"
  },
  ignorePatterns: [
    ".agent/**",
    ".agents/**",
    ".claude/**",
    ".codex/**",
    ".continue/**",
    ".cursor/**",
    ".gemini/**",
    ".opencode/**",
    ".pi/**",
    ".roo/**",
    ".windsurf/**",
    "tools/oxlint/anti-slop/**"
  ]
})
