import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  examId?: SortOrder;
  id?: SortOrder;
  proctorId?: SortOrder;
  startTime?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
