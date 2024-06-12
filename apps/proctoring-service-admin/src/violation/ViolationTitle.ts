import { Violation as TViolation } from "../api/violation/Violation";

export const VIOLATION_TITLE_FIELD = "typeField";

export const ViolationTitle = (record: TViolation): string => {
  return record.typeField?.toString() || String(record.id);
};
