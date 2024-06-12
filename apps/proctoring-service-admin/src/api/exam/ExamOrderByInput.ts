import { SortOrder } from "../../util/SortOrder";

export type ExamOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
