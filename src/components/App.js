import React, {useState} from "react";

import { AddQuesContainer, QuesListContainer } from "../containers";

import Header from "../header"

const App = () => {

  const [addDialogOpen, setAddDialogOpen] = useState(false);

  return (
    <>
      <Header />
      <AddQuesContainer addDialogOpen={addDialogOpen} setAddDialogOpen={setAddDialogOpen} />
      <QuesListContainer setAddDialogOpen={setAddDialogOpen} />
    </>
  );
};

export default App;
