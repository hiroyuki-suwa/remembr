import { Card } from "@/types";

export const dummyText = (length = 1) => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return Array(length).fill(lorem).join(" ");
}

export const dummyCards = dummyText()
  .split(/\s+/)
  .map((word) => word.replace(/[^a-zA-Z]/g, "").toLowerCase())
  .filter((elem, index, self) => elem && self.indexOf(elem) === index)
  .map((word) => ({ id: word, word } as Card));
