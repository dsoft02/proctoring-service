import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { ExamList } from "./exam/ExamList";
import { ExamCreate } from "./exam/ExamCreate";
import { ExamEdit } from "./exam/ExamEdit";
import { ExamShow } from "./exam/ExamShow";
import { ProctorList } from "./proctor/ProctorList";
import { ProctorCreate } from "./proctor/ProctorCreate";
import { ProctorEdit } from "./proctor/ProctorEdit";
import { ProctorShow } from "./proctor/ProctorShow";
import { ViolationList } from "./violation/ViolationList";
import { ViolationCreate } from "./violation/ViolationCreate";
import { ViolationEdit } from "./violation/ViolationEdit";
import { ViolationShow } from "./violation/ViolationShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ProctoringService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="Exam"
          list={ExamList}
          edit={ExamEdit}
          create={ExamCreate}
          show={ExamShow}
        />
        <Resource
          name="Proctor"
          list={ProctorList}
          edit={ProctorEdit}
          create={ProctorCreate}
          show={ProctorShow}
        />
        <Resource
          name="Violation"
          list={ViolationList}
          edit={ViolationEdit}
          create={ViolationCreate}
          show={ViolationShow}
        />
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
