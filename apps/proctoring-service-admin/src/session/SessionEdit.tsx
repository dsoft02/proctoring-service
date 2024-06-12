import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ExamTitle } from "../exam/ExamTitle";
import { ProctorTitle } from "../proctor/ProctorTitle";
import { StudentTitle } from "../student/StudentTitle";
import { ViolationTitle } from "../violation/ViolationTitle";

export const SessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="endTime" source="endTime" />
        <ReferenceInput source="exam.id" reference="Exam" label="exam">
          <SelectInput optionText={ExamTitle} />
        </ReferenceInput>
        <ReferenceInput source="proctor.id" reference="Proctor" label="proctor">
          <SelectInput optionText={ProctorTitle} />
        </ReferenceInput>
        <DateTimeInput label="startTime" source="startTime" />
        <ReferenceInput source="student.id" reference="Student" label="student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="violations"
          reference="Violation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ViolationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
