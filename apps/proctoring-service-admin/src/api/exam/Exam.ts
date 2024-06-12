import { Session } from "../session/Session";

export type Exam = {
  createdAt: Date;
  date: Date | null;
  duration: number | null;
  id: string;
  name: string | null;
  sessions?: Array<Session>;
  updatedAt: Date;
};
