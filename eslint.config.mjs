// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

import stylistic from "@stylistic/eslint-plugin";

// @ts-expect-error This plugin does not come with typings.
import jsxA11y from "eslint-plugin-jsx-a11y";
// @ts-expect-error This plugin does not come with typings.
import nextPlugin from "@next/eslint-plugin-next";
// @ts-expect-error This plugin does not come with typings.
import reactPlugin from "eslint-plugin-react";
// @ts-expect-error This plugin does not come with typings.
import hooksPlugin from "eslint-plugin-react-hooks";

import globals from "globals";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  stylistic.configs.customize({
    flat: true,
    indent: 2,
    semi: true,
    commaDangle: "never"
  }),
  {
    files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
    plugins: {
      react: reactPlugin
    },
    languageOptions: {
      ...reactPlugin.configs.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser
      }
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  {
    plugins: {
      "react-hooks": hooksPlugin
    },
    rules: hooksPlugin.configs.recommended.rules
  },
  {
    plugins: {
      "@next/next": nextPlugin
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules
    }
  },
  {
    files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
    ...jsxA11y.flatConfigs.recommended,
    languageOptions: {
      ...jsxA11y.flatConfigs.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser
      }
    }
  },
  {
    // TypeScript
    languageOptions: {
      parserOptions: {
        project: "tsconfig.eslint.json",
        tsconfigRootDir: import.meta.dirname,
        warnOnUnsupportedTypeScriptVersion: false
      },
      globals: {
        ...globals.node
      }
    },
    plugins: {
      ["@stylistic"]: stylistic
    },
    rules: {
      // ESLint
      curly: ["warn", "multi-line"],
      ["prefer-arrow-callback"]: "warn",
      ["prefer-template"]: "warn",
      yoda: ["error", "never", { onlyEquality: true }],

      // Stylistic
      ["@stylistic/arrow-parens"]: ["warn", "as-needed"],
      ["@stylistic/brace-style"]: ["warn", "1tbs", { allowSingleLine: true }],
      ["@stylistic/indent"]: ["warn", 2, { SwitchCase: 1 }],
      ["@stylistic/linebreak-style"]: ["warn", "unix"],
      ["@stylistic/max-statements-per-line"]: "off",
      ["@stylistic/jsx-one-expression-per-line"]: "off",
      ["@stylistic/member-delimiter-style"]: ["warn", { singleline: { delimiter: "comma" }, multiline: { delimiter: "none" } }],
      ["@stylistic/quotes"]: ["warn", "double", { avoidEscape: true }],
      ["@stylistic/space-before-function-paren"]: ["warn", "never"],
      ["@stylistic/no-multi-spaces"]: ["error", { ignoreEOLComments: true }],

      // @typescript-eslint
      ["@typescript-eslint/array-type"]: ["warn", { default: "array-simple" }],
      ["@typescript-eslint/prefer-literal-enum-member"]: [
        "error",
        { allowBitwiseExpressions: true }
      ],
      ["@typescript-eslint/ban-ts-comment"]: ["error", {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": true,
        "ts-nocheck": true,
        "ts-check": false,
        "minimumDescriptionLength": 5
      }],
      // KENOS SKILL ISSUE START
      // ["@typescript-eslint/explicit-function-return-type"]: ["warn", {
      //           allowExpressions: true,
      //           allowTypedFunctionExpressions: true,
      //           allowHigherOrderFunctions: true,
      //           allowDirectConstAssertionInArrowFunctions: true,
      //           allowConciseArrowFunctionExpressionsStartingWithVoid: false,
      //           allowFunctionsWithoutTypeParameters: false,
      //           allowedNames: [],
      //           allowIIFEs: false
      //       }],
      // ["@typescript-eslint/restrict-template-expressions"]: ["error", {
      //   allowAny: true,
      //   allowBoolean: true,
      //   allowNullish: true,
      //   allowNumber: true,
      //   allowRegExp: true
      // }],
      // KENOS SKILL ISSUE END
      ["@typescript-eslint/prefer-readonly"]: "error",
      ["@typescript-eslint/no-unused-vars"]: ["error", {
        vars: "all",
        args: "none"
      }],

      // Disabled rules
      ["@typescript-eslint/no-explicit-any"]: "off",
      ["@typescript-eslint/no-non-null-assertion"]: "off",
      ["@typescript-eslint/no-unsafe-argument"]: "off",
      ["@typescript-eslint/no-unsafe-assignment"]: "off",
      ["@typescript-eslint/no-unsafe-call"]: "off",
      ["@typescript-eslint/no-unsafe-member-access"]: "off",
      ["@typescript-eslint/no-unsafe-return"]: "off",
      ["@typescript-eslint/explicit-function-return-type"]: "off", // kenos skill issue filter
      ["@typesript-eslint/no-unnecessary-condition"]: "off",
      ["no-cond-assign"]: "off",
      ["no-return-assign"]: "off",
      ["@typescript-eslint/no-confusing-void-expression"]: "off",
      ["@typescript-eslint/consistent-type-definitions"]: "off",
      ["@typescript-eslint/no-this-alias"]: "off",
      ["@typescript-eslint/prefer-nullish-coalescing"]: "off",
      ["@typescript-eslint/require-await"]: "off",
      ["@typescript-eslint/prefer-reduce-type-parameter"]: "off",
      ["@typescript-eslint/no-unnecessary-condition"]: "off",
      ["@typescript-eslint/no-redundant-type-constituents"]: "off",
      ["@typescript-eslint/no-base-to-string"]: "off",
      ["@typescript-eslint/restrict-template-expressions"]: "off",
      ["@typescript-eslint/no-non-null-asserted-optional-chain"]: "off", // literal skill issue filter

      // jsx-a11y
      ["jsx-a11y/no-static-element-interactions"]: "off",
      ["jsx-a11y/click-events-have-key-events"]: "off",

      // wiki-specific
      ["@typescript-eslint/no-deprecated"]: "off"
    }
  },
  {
    ignores: [".next/**", "vendor/**"]
  }
);
