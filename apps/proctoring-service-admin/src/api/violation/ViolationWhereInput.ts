import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ViolationWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  session?: SessionWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
  typeField?: StringNullableFilter;
};
