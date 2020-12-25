import {level2Func} from "@KichiFinn/level2dependency"

export function level1Func() {
  console.log("Hello from level1Func update 3");
  level2Func();
}