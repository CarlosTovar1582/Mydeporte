import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];
module.exports = {
  // ...other configurations
  rules: {
    "@typescript-eslint/no-explicit-any": "off", // To disable the rule entirely
    // or
    // "@typescript-eslint/no-explicit-any": ["error", { fixToUnknown: true }], // To enforce and suggest fixing to unknown
  },
};

export default eslintConfig;
