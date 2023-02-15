const getEditCounterButton = () =>
  cy.findByRole('button', { name: 'edit counter type' });
const getCounterChips = () => cy.findAllByRole('radio');
const getChipsLabels = () =>
  cy.get('[data-testid="counters-group"]').get('label');
const getRemainingTime = () => cy.findByTestId('remainingTime');
const clickChipByIndex = (index: number) =>
  getCounterChips().eq(index).click({ force: true });

describe(`App e2e test`, () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it(`should load with defaults`, () => {
    // Opens in counter display mode
    getCounterChips().should('not.exist');
    getEditCounterButton().should('be.visible');
    cy.findByRole('dialog', { name: 'Settings' }).should('not.exist');

    // Open edit mode
    getEditCounterButton().click();

    // Edit mode
    getEditCounterButton().should('not.exist');
    getCounterChips().should('have.length', 8);
    getCounterChips().eq(0).should('be.checked');
    getChipsLabels().should('have.length', 8);
    getChipsLabels().eq(0).should('have.text', 'Pomodoro');
    getChipsLabels().eq(1).should('have.text', 'Short break');
    getChipsLabels().eq(2).should('have.text', 'Pomodoro');
    getChipsLabels().eq(3).should('have.text', 'Short break');
    getChipsLabels().eq(4).should('have.text', 'Pomodoro');
    getChipsLabels().eq(5).should('have.text', 'Short break');
    getChipsLabels().eq(6).should('have.text', 'Pomodoro');
    getChipsLabels().eq(7).should('have.text', 'Long break');

    // Timer values
    getRemainingTime().should('have.text', '25:00');
    clickChipByIndex(1);
    getCounterChips().eq(1).should('be.checked');
    getRemainingTime().should('have.text', '05:00');
    clickChipByIndex(7);
    getCounterChips().eq(7).should('be.checked');
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
    clickChipByIndex(0);
    getRemainingTime().should('have.text', '60:00');
    clickChipByIndex(1);
    getRemainingTime().should('have.text', '10:00');
    clickChipByIndex(7);
    getRemainingTime().should('have.text', '20:00');

    // reload and check again to verify changes persist
    cy.reload();
    getEditCounterButton().click();
    clickChipByIndex(0);
    getRemainingTime().should('have.text', '60:00');
    clickChipByIndex(1);
    getRemainingTime().should('have.text', '10:00');
    clickChipByIndex(7);
    getRemainingTime().should('have.text', '20:00');
  });
});
