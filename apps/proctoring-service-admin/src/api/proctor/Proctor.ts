import { Session } from "../session/Session";

export type Proctor = {
  createdAt: Date;
  email: string | null;
  employeeId: string | null;
  id: string;
  name: string | null;
  sessions?: Array<Session>;
  updatedAt: Date;
};
