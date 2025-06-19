import { StatusValue } from "./model/status";

export function pickAnswer(words: string[]): string {
  return words[Math.floor(Math.random() * words.length)];
}

export function checkGuess(word: string, answer: string): StatusValue[] {
  const statusArray = Array(5).fill("incorrect");
  const checked = Array(5).fill(false);

  for (let i = 0; i < 5; i++) {
    if (word[i] === answer[i]) {
      statusArray[i] = "correct";
      checked[i] = true;
    }
  }

  for (let j = 0; j < 5; j++) {
    if (statusArray[j] === "correct") continue;

    for (let k = 0; k < 5; k++) {
      if (!checked[k] && word[j] === answer[k]) {
        statusArray[j] = "misplaced";
        checked[k] = true;
        break;
      }
    }
  }

  return statusArray;
}
