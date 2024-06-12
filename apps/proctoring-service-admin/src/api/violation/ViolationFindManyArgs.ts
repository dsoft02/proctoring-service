import { ViolationWhereInput } from "./ViolationWhereInput";
import { ViolationOrderByInput } from "./ViolationOrderByInput";

export type ViolationFindManyArgs = {
  where?: ViolationWhereInput;
  orderBy?: Array<ViolationOrderByInput>;
  skip?: number;
  take?: number;
};
