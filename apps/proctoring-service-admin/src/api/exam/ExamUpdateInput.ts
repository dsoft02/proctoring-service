import { SessionUpdateManyWithoutExamsInput } from "./SessionUpdateManyWithoutExamsInput";

export type ExamUpdateInput = {
  date?: Date | null;
  duration?: number | null;
  name?: string | null;
  sessions?: SessionUpdateManyWithoutExamsInput;
};
