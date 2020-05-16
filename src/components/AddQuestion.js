import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  TextField,
  Box,
  Typography,
  Chip,
  Select,
  FormControl,
  Container,
  FormHelperText,
  Dialog, 
} from "@material-ui/core";

let nextOptionId = 0;

const AddQuestion = ({ addQuestion, addDialogOpen, setAddDialogOpen }) => {
  const [ques, setQues] = useState({
    question: "",
    options: [],
    correctOption: ""
  });

  const [optionToAdd, setOptionToAdd] = useState("");

  // validation error
  const [error, setError] = useState({
    question: false,
    options: false,
    correctOption: false
  });

  // helper txt
  const [helperTxt, setHelperTxt] = useState({
    question: "",
    options: "Add 2 to 5 options",
    correctOption: ""
  });

  // after user adds the option
  const onOptionSubmit = e => {
    e.preventDefault();
    if (!optionToAdd.trim() || optionToAdd.length > 200) {
      setError({ ...error, options: true });
      setHelperTxt({
        ...helperTxt,
        options:
          optionToAdd.length > 200
            ? "Max char limit exceeded"
            : "This field is required"
      });
      return;
    }

    const sameOptionExists = ques.options.some(
      item => item.option === optionToAdd.trim()
    );

    if (sameOptionExists) {
      setError({ ...error, options: true });
      setHelperTxt({
        ...helperTxt,
        options: "There shouldn't same option twice."
      });
      return;
    }

    let option = {
      id: nextOptionId++,
      option: optionToAdd.trim()
    };
    setQues({ ...ques, options: [...ques.options, option] });
    setOptionToAdd("");
  };

  // after user clicks save btn
  const handleSave = () => {
    let readyToDispatch = true;

    if (ques.options.length < 2) {
      setError({ ...error, options: true });
      setHelperTxt({
        ...helperTxt,
        options: "Add at least 2 options "
      });
      readyToDispatch = false;
    } else {
      if (!ques.correctOption.trim()) {
        setError({ ...error, correctOption: true });
        setHelperTxt({
          ...helperTxt,
          correctOption: "Select a correct option"
        });
        readyToDispatch = false;
      }
    }
    if (!ques.question.trim() || ques.question.length > 250) {
      setError({ ...error, question: true });
      setHelperTxt({
        ...helperTxt,
        question:
          ques.question.length > 250
            ? "Max char limit exceeded"
            : "This field is required"
      });
      readyToDispatch = false;
    }

    if (readyToDispatch) {
      addQuestion(ques);
      setAddDialogOpen(false);
    }
  };

  // display options as chips
  const displayOptions = ques.options.map((item, index) => (
    <Chip
      key={item.id}
      label={item.option}
      onDelete={() => handleDelete(item)}
      style={{ marginRight: "10px", marginBottom: "10px" }}
    />
  ));

  // delete a option
  const handleDelete = option => {
    setQues({ ...ques, options: ques.options.filter(i => i !== option) });
  };

  const classes = useStyles();

  return (
    <>
      <Dialog open={addDialogOpen} onClose={() => setAddDialogOpen(false)}>
        <Container maxWidth="sm">
        <Box p={2}>
        <Box mt={2}>
          <Typography variant="subtitle1" component="h6">
            Question
          </Typography>
          <TextField
            value={ques.question}
            onChange={e => {
              setQues({ ...ques, question: e.target.value });
              setError({ ...error, question: false });
              setHelperTxt({ ...helperTxt, question: "" });
            }}
            variant="outlined"
            size="small"
            fullWidth
            error={error.question}
            helperText={helperTxt.question}
          />
        </Box>
        <Box mt={2} width="100%">
          <form onSubmit={onOptionSubmit}>
            <Typography variant="subtitle1" component="h6">
              Options
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <TextField
                variant="outlined"
                name="option"
                size="small"
                value={optionToAdd}
                onChange={e => {
                  setOptionToAdd(e.target.value);
                  setError({ ...error, options: false });
                  setHelperTxt({ ...helperTxt, options: "Add 2 to 5 options" });
                }}
                fullWidth
                disabled={ques.options.length > 4}
                helperText={helperTxt.options}
                error={error.options}
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.addOptionBtn}
                disabled={ques.options.length > 4}
              >
                {" "}
                Add
              </Button>
            </Box>
          </form>
        </Box>
        <Box mt={2}>{displayOptions}</Box>
        <Box mt={2}>
          <Typography variant="subtitle1" component="h6">
            Correct Option
          </Typography>
          <FormControl
            variant="outlined"
            className={classes.formControl}
            size="small"
            fullWidth
            disabled={ques.options.length < 2 || ques.options.length > 5}
            error={error.correctOption}
          >
            <Select
              native
              inputProps={{
                name: "correctOption",
                id: 'correct-option"'
              }}
              value={ques.correctOption}
              onChange={e => {
                setQues({ ...ques, correctOption: e.target.value });
                setError({ ...error, correctOption: false });
                setHelperTxt({ ...helperTxt, correctOption: "" });
              }}
            >
              <option aria-label="Choose Correct Option" value="" />
              {ques.options.map((item, index) => (
                <option value={item.id} key={item.id}>
                  {item.option}
                </option>
              ))}
            </Select>
            <FormHelperText error={error.correctOption}>
              {helperTxt.correctOption}
            </FormHelperText>
          </FormControl>
        </Box>
        <Box mt={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            fullWidth
          >
            Save
          </Button>
        </Box>
        </Box>
        </Container>
      </Dialog>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 200
  },
  addOptionBtn: {
    marginLeft: "10px"
  }
}));

export default AddQuestion;
