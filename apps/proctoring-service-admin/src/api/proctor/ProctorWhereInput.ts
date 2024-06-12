import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type ProctorWhereInput = {
  email?: StringNullableFilter;
  employeeId?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  sessions?: SessionListRelationFilter;
};
