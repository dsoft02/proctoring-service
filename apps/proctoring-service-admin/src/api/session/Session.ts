import { Exam } from "../exam/Exam";
import { Proctor } from "../proctor/Proctor";
import { Student } from "../student/Student";
import { Violation } from "../violation/Violation";

export type Session = {
  createdAt: Date;
  endTime: Date | null;
  exam?: Exam | null;
  id: string;
  proctor?: Proctor | null;
  startTime: Date | null;
  student?: Student | null;
  updatedAt: Date;
  violations?: Array<Violation>;
};
