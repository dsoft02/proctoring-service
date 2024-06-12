import { SessionCreateNestedManyWithoutProctorsInput } from "./SessionCreateNestedManyWithoutProctorsInput";

export type ProctorCreateInput = {
  email?: string | null;
  employeeId?: string | null;
  name?: string | null;
  sessions?: SessionCreateNestedManyWithoutProctorsInput;
};
