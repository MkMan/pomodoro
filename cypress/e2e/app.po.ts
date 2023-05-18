const getEditCounterButton = () =>
  cy.findByRole('button', { name: 'edit counter type' });

const getCounterDropdown = () => cy.findByLabelText('Counter');

const getRemainingTime = () => cy.findByTestId('remainingTime');

const selectCounterByIndex = (index: number) =>
  getCounterDropdown().select(index.toString());

export {
  getCounterDropdown,
  getEditCounterButton,
  getRemainingTime,
  selectCounterByIndex,
};
