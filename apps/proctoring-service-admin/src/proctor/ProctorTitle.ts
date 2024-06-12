import { Proctor as TProctor } from "../api/proctor/Proctor";

export const PROCTOR_TITLE_FIELD = "name";

export const ProctorTitle = (record: TProctor): string => {
  return record.name?.toString() || String(record.id);
};
