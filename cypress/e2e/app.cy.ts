const getEditCounterButton = () =>
  cy.findByRole('button', { name: 'edit counter type' });
const getCounterDropdown = () => cy.findByRole('combobox');
const getRemainingTime = () => cy.findByTestId('remainingTime');
const selectCounterByIndex = (index: number) =>
  getCounterDropdown().select(index.toString());

describe(`App e2e test`, () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it(`should load with defaults`, () => {
    // Opens in counter display mode
    getCounterDropdown().should('not.exist');
    getEditCounterButton().should('be.visible');
    cy.findByRole('dialog', { name: 'Settings' }).should('not.exist');

    // Open edit mode
    getEditCounterButton().click();

    // Edit mode
    getEditCounterButton().should('not.exist');
    getCounterDropdown().should('exist');
    getCounterDropdown().should('have.value', '0');
    getCounterDropdown()
      .find('option')
      .then((options) => {
        expect(options.length).to.eq(8);
      });

    // Timer values
    getRemainingTime().should('have.text', '25:00');
    selectCounterByIndex(1);
    getRemainingTime().should('have.text', '05:00');
    selectCounterByIndex(7);
    getRemainingTime().should('have.text', '10:00');
  });

  it('should update and persist timer settings', () => {
    // open settings menu
    cy.findByRole('button', { name: 'settings menu' }).click();
    cy.findByRole('dialog', { name: 'Settings' }).should('be.visible');

    // update timers
    cy.findByRole('spinbutton', { name: 'Pomodoro' }).clear().type('60');
    cy.findByRole('spinbutton', { name: 'Short break' }).clear().type('10');
    cy.findByRole('spinbutton', { name: 'Long break' }).clear().type('20');

    // close settings menu
    cy.findByRole('button', { name: 'close settings menu' }).click();
    cy.findByRole('dialog', { name: 'Settings' }).should('not.exist');

    // check timers updated
    getEditCounterButton().click();
    selectCounterByIndex(0);
    getRemainingTime().should('have.text', '60:00');
    selectCounterByIndex(1);
    getRemainingTime().should('have.text', '10:00');
    selectCounterByIndex(7);
    getRemainingTime().should('have.text', '20:00');

    // reload and check again to verify changes persist
    cy.reload();
    getEditCounterButton().click();
    selectCounterByIndex(0);
    getRemainingTime().should('have.text', '60:00');
    selectCounterByIndex(1);
    getRemainingTime().should('have.text', '10:00');
    selectCounterByIndex(7);
    getRemainingTime().should('have.text', '20:00');
  });
});
