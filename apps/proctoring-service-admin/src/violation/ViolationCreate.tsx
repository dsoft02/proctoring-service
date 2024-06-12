import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { SessionTitle } from "../session/SessionTitle";

export const ViolationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="session.id" reference="Session" label="session">
          <SelectInput optionText={SessionTitle} />
        </ReferenceInput>
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
