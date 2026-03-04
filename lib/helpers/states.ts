import { getRandomValueFromArray } from "./arrays";

export function randomState() {
    const states = ["California", "Texas", "Florida", "New York", "Washington"];
    return getRandomValueFromArray(states);
}