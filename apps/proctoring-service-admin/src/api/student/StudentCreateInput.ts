import { SessionCreateNestedManyWithoutStudentsInput } from "./SessionCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  email?: string | null;
  name?: string | null;
  sessions?: SessionCreateNestedManyWithoutStudentsInput;
  studentId?: string | null;
};
