let nextQuestionId = 0;

export const addQuestion = question => ({
  type: "ADD_QUESTION",
  id: nextQuestionId++,
  question
});
