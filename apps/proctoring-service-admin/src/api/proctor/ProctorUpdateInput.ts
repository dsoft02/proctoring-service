import { SessionUpdateManyWithoutProctorsInput } from "./SessionUpdateManyWithoutProctorsInput";

export type ProctorUpdateInput = {
  email?: string | null;
  employeeId?: string | null;
  name?: string | null;
  sessions?: SessionUpdateManyWithoutProctorsInput;
};
