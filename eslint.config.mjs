import airbnbBase from "eslint-config-airbnb-base";
import airbnbBaseImports from "eslint-config-airbnb-base/rules/imports";
import importPlugin from "eslint-plugin-import";
export default [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["**/*.js"], // JS 파일에 대해 설정 적용
    languageOptions: {
      ecmaVersion: "latest", // 최신 ECMAScript 버전
      sourceType: "module", // ES 모듈 사용
      globals: {
        window: true,
        document: true,
        console: true,
        process: true,
        module: true,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      import: importPlugin, // eslint-plugin-import 추가
    },
    rules: {
      ...airbnbBase.rules,
      ...airbnbBaseImports.rules,
    },
  },
];