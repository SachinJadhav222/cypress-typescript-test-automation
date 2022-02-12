/// <reference types="@bahmutov/cy-api" />

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = Cypress.env('open-weather-api-key');
const cityName = 'mumbai';

describe('Open Weather API Test', () => {
  it('Get the City Weather', () => {
    cy.api({
      url: baseUrl,
      method: 'GET',
      qs: { q: cityName, appid: API_KEY },
    })
      .its('status')
      .should('eq', 200);
  });
});
