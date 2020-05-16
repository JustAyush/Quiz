import React, { useState } from "react";

import { Typography, Button, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Question from "./Question";
import EditQuestion from "./EditQuestion";

const QuestionList = ({
  questions,
  setAddDialogOpen,
  editQuestion,
  deleteQuestion,
  editRequest,
}) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [quesToEdit, setQuesToEdit] = useState();

  const displayQuestions = questions.map((item, index) => {
    return (
      <Question
        key={item.id}
        ques={item}
        deleteQuestion={deleteQuestion}
        editRequest={editRequest}
        setEditDialogOpen={setEditDialogOpen}
        setQuesToEdit={setQuesToEdit}
      />
    );
  });

  const classes = useStyles();

  return (
    <>
      <Box className={classes.outerBox}>
        <Box pt={5}>
          <Container maxWidth="sm" className={classes.contentBox}>
            <Box
              mb={2}
              pt={4}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="h4"
                component="h4"
                style={{ textTransform: "uppercase" }}
              >
                Question List
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setAddDialogOpen(true)}
              >
                Add a question{" "}
              </Button>
            </Box>
            <hr />
            <Box pb={4} mt={4}>
              {displayQuestions}
            </Box>
          </Container>
        </Box>
      </Box>
      {editDialogOpen ? (
        <EditQuestion
          quesToEdit={quesToEdit}
          editDialogOpen={editDialogOpen}
          setEditDialogOpen={setEditDialogOpen}
          editQuestion={editQuestion}
        />
      ) : null}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  outerBox: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#F4F4F3",
  },
  contentBox: {
    backgroundColor: "#ffffff",
  },
  question: {
    border: "1px solid #F4F4F3",
  },
  optionList: {
    paddingLeft: theme.spacing(2),
    marginTop: theme.spacing(0.5),
  },
}));

export default QuestionList;
