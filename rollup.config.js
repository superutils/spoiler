import typescript from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      typescript({
        typescript: require("typescript"),
      }),
      image(),
    ],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" },
    ],
  },
];
