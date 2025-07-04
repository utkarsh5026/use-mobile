import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

const external = ["react"];

export default [
  {
    input: "src/index.ts",
    external,
    output: {
      file: "dist/index.js",
      format: "cjs",
      exports: "default",
    },
    plugins: [
      resolve(),
      typescript({
        declaration: false,
        declarationDir: undefined,
      }),
    ],
  },
  {
    input: "src/index.ts",
    external,
    output: {
      file: "dist/index.esm.js",
      format: "esm",
    },
    plugins: [
      resolve(),
      typescript({
        declaration: false,
        declarationDir: undefined,
      }),
    ],
  },

  {
    input: "src/index.ts",
    external,
    output: {
      file: "dist/index.d.ts",
      format: "esm",
    },
    plugins: [
      typescript({
        declaration: true,
        declarationOnly: true,
        declarationDir: "dist",
      }),
    ],
  },
];
