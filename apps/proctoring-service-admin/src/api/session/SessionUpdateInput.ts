import { ExamWhereUniqueInput } from "../exam/ExamWhereUniqueInput";
import { ProctorWhereUniqueInput } from "../proctor/ProctorWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { ViolationUpdateManyWithoutSessionsInput } from "./ViolationUpdateManyWithoutSessionsInput";

export type SessionUpdateInput = {
  endTime?: Date | null;
  exam?: ExamWhereUniqueInput | null;
  proctor?: ProctorWhereUniqueInput | null;
  startTime?: Date | null;
  student?: StudentWhereUniqueInput | null;
  violations?: ViolationUpdateManyWithoutSessionsInput;
};
