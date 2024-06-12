import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type ExamWhereInput = {
  date?: DateTimeNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  sessions?: SessionListRelationFilter;
};
