import { Session } from "../session/Session";

export type Violation = {
  createdAt: Date;
  description: string | null;
  id: string;
  session?: Session | null;
  timestamp: Date | null;
  typeField: string | null;
  updatedAt: Date;
};
