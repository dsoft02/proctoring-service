import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type ViolationCreateInput = {
  description?: string | null;
  session?: SessionWhereUniqueInput | null;
  timestamp?: Date | null;
  typeField?: string | null;
};
