import { StatusValue } from "./status";

export type Guess = {
  id: string;
  text: string;
  statusArray: StatusValue[];
};
