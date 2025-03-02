import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EXAM_TITLE_FIELD } from "../exam/ExamTitle";
import { PROCTOR_TITLE_FIELD } from "../proctor/ProctorTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const SessionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Sessions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="endTime" source="endTime" />
        <ReferenceField label="exam" source="exam.id" reference="Exam">
          <TextField source={EXAM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="proctor" source="proctor.id" reference="Proctor">
          <TextField source={PROCTOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="startTime" source="startTime" />
        <ReferenceField label="student" source="student.id" reference="Student">
          <TextField source={STUDENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
