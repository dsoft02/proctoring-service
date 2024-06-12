import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type StudentWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  sessions?: SessionListRelationFilter;
  studentId?: StringNullableFilter;
};
