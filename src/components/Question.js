import React, {useState} from "react";

import { Typography, Box, Button, Dialog, DialogContent, DialogActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const Question = ({ ques, deleteQuestion, setEditDialogOpen, setQuesToEdit }) => {
  const classes = useStyles();
 
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const displayOptions = ques.options.map((item, index) => {
    return (
      <li key={item.id}>
        <Typography variant="body1" component="p">
          {item.option}
        </Typography>
      </li>
    );
  });

  const correctOption = ques.options.find(
    (item) => item.id !== ques.correctOption
  );

  const handleQuesDelete = () => {
    deleteQuestion(ques.id);
    setDeleteDialogOpen(false);
  }

  const handleEditRequest = async (callback) => {
    await setQuesToEdit(ques)
    callback();
  }

  const handleEditDialog = () => {
    setEditDialogOpen(true);
  }

  return (
    <Box className={classes.question} py={2} px={2} mb={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" component="h5">
          {ques.question}
        </Typography>
        <Box ml={2}>
          <EditIcon className={classes.editIcon} onClick={() => handleEditRequest(handleEditDialog)} />
          <DeleteIcon className={classes.deleteIcon} onClick={() => setDeleteDialogOpen(true)} />
        </Box>
      </Box>
      <Box mt={1.4}>
        <Typography
          variant="subtitle2"
          component="p"
          style={{ color: "#9988b1" }}
        >
          Options
        </Typography>
        <ol className={classes.optionList}>{displayOptions}</ol>
      </Box>
      <Box>
        <Typography
          variant="subtitle2"
          component="p"
          style={{ color: "#9988b1" }}
        >
          Correct Option
        </Typography>
        <Typography variant="body1" component="p">
          {" "}
          {correctOption.option}{" "}
        </Typography>
      </Box>

      <DeleteConfirmationDialog deleteDialogOpen={deleteDialogOpen} setDeleteDialogOpen={setDeleteDialogOpen} handleQuesDelete={handleQuesDelete} />
    </Box>
  );
};


const DeleteConfirmationDialog = ({deleteDialogOpen, setDeleteDialogOpen, handleQuesDelete}) => {
    return ( 
        <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)} aria-labelledby="form-dialog-title">
        <DialogContent>
            <Typography variant="subtitle1" component="p">Are you sure you want to delete this question?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}  color="primary">
            Cancel
          </Button>
          <Button onClick={handleQuesDelete}  color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
     );
}
 


const useStyles = makeStyles((theme) => ({
  question: {
    border: "1px solid #F4F4F3",
  },
  optionList: {
    paddingLeft: theme.spacing(2),
    marginTop: theme.spacing(0.5),
  },
  editIcon: {
    color: "#a5a5a5",
    transition: "all 0.4s ease",
    cursor: "pointer",
    "&:hover": {
      color: "blue",
    },
  },
  deleteIcon: {
    color: "#a5a5a5",
    transition: "all 0.4s ease",
    cursor: "pointer",
    marginLeft: theme.spacing(1),
    "&:hover": {
      color: "red",
    },
  },
}));

export default Question;
