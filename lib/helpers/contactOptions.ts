import { randomValueFromArray } from "@helpers/arrayPicker";

export function pickRandomOption() {
  const randomOption = ["Customer service", "Webmaster", "Return", "Payments", "Warranty", "Status of my order"];
  return randomValueFromArray(randomOption);
}