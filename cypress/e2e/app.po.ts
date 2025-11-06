const getEditCounterButton = () =>
  cy.findByRole('button', { name: 'edit counter type' });

const getCounterDropdown = () => cy.findByLabelText('Counter');

const getRemainingTime = () => cy.findByTestId('remainingTime');

const selectCounterByIndex = (index: number) =>
  getCounterDropdown().select(index.toString());

const getAllTodos = () => cy.findAllByTestId('todo-item');

const getNewTodoDescriptionField = () =>
  cy.findByLabelText('New todo description');

const createATodo = (todoDescription: string) => {
  getNewTodoDescriptionField().type(todoDescription).type('{enter}');
};

export {
  createATodo,
  getAllTodos,
  getCounterDropdown,
  getEditCounterButton,
  getRemainingTime,
  selectCounterByIndex,
};
