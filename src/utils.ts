import { Status } from "./model/status";

export function range(start: number, end?: number, step = 1) {
  let output = [];

  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
}

export function pickAnswer(words: string[]): string {
  return words[Math.floor(Math.random() * words.length)];
}

export function checkGuess(word: string, answer: string): Status[] {
  const statusArray = Array(5).fill(Status.incorrect);
  const checked = Array(5).fill(false);

  for (let i = 0; i < 5; i++) {
    if (word[i] === answer[i]) {
      statusArray[i] = Status.correct;
      checked[i] = true;
    }
  }

  for (let j = 0; j < 5; j++) {
    if (statusArray[j] === Status.correct) continue;

    for (let k = 0; k < 5; k++) {
      if (!checked[k] && word[j] === answer[k]) {
        statusArray[j] = Status.misplaced;
        checked[k] = true;
        break;
      }
    }
  }

  return statusArray;
}
