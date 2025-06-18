export enum Status {
  correct = "correct",
  misplaced = "misplaced",
  incorrect = "incorrect",
}

export type StatusValue = Status.correct | Status.misplaced | Status.incorrect;
