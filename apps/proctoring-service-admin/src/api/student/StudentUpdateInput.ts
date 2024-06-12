import { SessionUpdateManyWithoutStudentsInput } from "./SessionUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  email?: string | null;
  name?: string | null;
  sessions?: SessionUpdateManyWithoutStudentsInput;
  studentId?: string | null;
};
