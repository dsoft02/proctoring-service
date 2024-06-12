import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ExamWhereUniqueInput } from "../exam/ExamWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProctorWhereUniqueInput } from "../proctor/ProctorWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { ViolationListRelationFilter } from "../violation/ViolationListRelationFilter";

export type SessionWhereInput = {
  endTime?: DateTimeNullableFilter;
  exam?: ExamWhereUniqueInput;
  id?: StringFilter;
  proctor?: ProctorWhereUniqueInput;
  startTime?: DateTimeNullableFilter;
  student?: StudentWhereUniqueInput;
  violations?: ViolationListRelationFilter;
};
