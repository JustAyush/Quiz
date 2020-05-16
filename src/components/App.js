import React, {useState} from "react";

import { AddQuesContainer, QuesListContainer } from "../containers";

const App = () => {

  const [addDialogOpen, setAddDialogOpen] = useState(false);

  return (
    <>
      <AddQuesContainer addDialogOpen={addDialogOpen} setAddDialogOpen={setAddDialogOpen} />
      <QuesListContainer setAddDialogOpen={setAddDialogOpen} />
    </>
  );
};

export default App;
