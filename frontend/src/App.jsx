import React from "react";
import MainLayout from "./components/MainLayout";
import TaskMain from "./components/TaskMain";
import Loading from "./components/ui/Loading";

const App = () => {
  return (
    <div>
      <MainLayout>
        <TaskMain />
      </MainLayout>
    </div>
  );
};

export default App;
