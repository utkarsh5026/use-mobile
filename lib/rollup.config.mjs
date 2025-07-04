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
      exports: "named", // Changed to "named" to fix the mixed exports warning
    },
    plugins: [
      resolve(),
      typescript({
        tsconfig: "./tsconfig.build.json", // Use build config instead of main config
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
        tsconfig: "./tsconfig.build.json", // Use build config instead of main config
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
        tsconfig: "./tsconfig.build.json", // Use build config instead of main config
        declaration: true,
        emitDeclarationOnly: true, // Fixed: was "declarationOnly"
        declarationDir: "dist",
      }),
    ],
  },
];
