import { randomValueFromArray } from "@helpers/arrayPicker";

export function pickRandomProduct() {
  const randomProduct = ["Hammer", "Claw Hammer", "Thor Hammer", "Plier", "Pliers", "Bolt Cutter", "Wrench", "Saw", "Screwdriver", "Spanner", "Tape", "Circular Saw", "Leather toolbelt", "Sander", "Sheet Sander", "Chisel"];
  return randomValueFromArray(randomProduct);
}