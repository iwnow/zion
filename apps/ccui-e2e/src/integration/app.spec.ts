import { getGreeting } from '../support/app.po';

describe('ccui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ccui!');
  });
});
