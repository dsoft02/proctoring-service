import { Exam as TExam } from "../api/exam/Exam";

export const EXAM_TITLE_FIELD = "name";

export const ExamTitle = (record: TExam): string => {
  return record.name?.toString() || String(record.id);
};
