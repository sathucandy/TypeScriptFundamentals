import { Coach } from "./Coach";

export class CricketCoach implements Coach {
  getDailyWorkout(): string {
    return "Practicing your spin bowling technique";
  }
}
