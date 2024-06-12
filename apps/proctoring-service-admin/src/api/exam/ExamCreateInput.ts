import { SessionCreateNestedManyWithoutExamsInput } from "./SessionCreateNestedManyWithoutExamsInput";

export type ExamCreateInput = {
  date?: Date | null;
  duration?: number | null;
  name?: string | null;
  sessions?: SessionCreateNestedManyWithoutExamsInput;
};
