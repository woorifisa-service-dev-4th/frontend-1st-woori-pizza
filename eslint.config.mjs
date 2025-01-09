import airbnbBase from "eslint-config-airbnb-base";
import airbnbBaseImports from "eslint-config-airbnb-base/rules/imports";
import importPlugin from "eslint-plugin-import";

export default [
  {
    ignores: ["node_modules/**"], // 무시할 파일/디렉토리 설정
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
      import: importPlugin, // eslint-plugin-import 플러그인 추가
    },
    rules: {
      'no-console': 'warn', // console.log() 사용 시 경고
      'no-var': 'error', // var 사용 금지
      'prefer-const': 'warn', // const 사용 권장
      'quotes': ['error', 'double'], // 따옴표는 항상 double quote
      'semi': ['error', 'always'], // 세미콜론 항상 필요
      ...airbnbBase.rules,
      ...airbnbBaseImports.rules,
    },
  },
];
