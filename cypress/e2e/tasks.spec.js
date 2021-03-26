describe('Tasks', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successfully adds a task', () => {
    cy.get('input[data-cy=taskInput]').type('Zrobić zadanie 1 #pierwszy1');
    cy.get('button[data-cy=taskSubmit]').click();

    cy.get('[data-cy=tasksList')
      .children()
      .should('contain', 'Zrobić zadanie 1 #pierwszy1')
      .and('have.length', 2);
  });

  it('successfully completes a task', () => {
    cy.get('input[data-cy=taskInput]').type('Zrobić zadanie 2 #pierwszy2');
    cy.get('button[data-cy=taskSubmit]').click();

    cy.get('label').first().click();

    cy.get('label')
      .contains('Zrobić sobie przerwę na kawę #self-care')
      .children('input')
      .should('be.checked');
  });

  it('successfully shows a message after completing all tasks', () => {
    cy.get('[data-cy=tasksList]').should('have.length', 1);
    cy.get('[data-cy=tasksList]').children().click();

    cy.contains('Wszystkie zadania na dziś skończone').should('exist');
    cy.get('[data-cy=tasksList]').should('not.exist');
  });
});