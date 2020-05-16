let nextQuestionId = 0;

export const addQuestion = question => ({
  type: "ADD_QUESTION",
  id: nextQuestionId++,
  question
});

export const editQuestion = (questionId, updatedQuestion) => ({
  type: "EDIT_QUESTION",
  questionId,
  updatedQuestion
});

export const deleteQuestion = questionId => ({
  type: "DELETE_QUESTION",
  questionId
});

