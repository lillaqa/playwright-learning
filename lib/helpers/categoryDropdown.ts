import { randomValueFromArray } from "@helpers/arrayPicker";

export function pickRandomCategory() {
  const randomCategory = ["Hand Tools", "Power Tools", "Other", "Special Tools"];
  return randomValueFromArray(randomCategory);
}