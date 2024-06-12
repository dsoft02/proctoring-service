import { Session } from "../session/Session";

export type Student = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  sessions?: Array<Session>;
  studentId: string | null;
  updatedAt: Date;
};
