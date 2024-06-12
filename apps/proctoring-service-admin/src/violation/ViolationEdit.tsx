import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { SessionTitle } from "../session/SessionTitle";

export const ViolationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="session.id" reference="Session" label="session">
          <SelectInput optionText={SessionTitle} />
        </ReferenceInput>
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
