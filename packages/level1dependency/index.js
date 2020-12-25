import level2Func from "@KichiFinn/level2dependency"

export function level1Func() {
  console.log("Hello from level1Func");
  level2Func();
}