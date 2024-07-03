describe("Visit Webdriver University Page Object Model Page", () => {
  beforeEach(() => {
    // Load data from fixture before each test
    cy.fixture("example.json").as("contactData");
  });

  it("Visits the Page Object Model page, clicks Contact Us button, and fills out the form", function () {
    // Visit the website
    cy.visit("http://www.webdriveruniversity.com/Page-Object-Model/index.html");

    // Assertion to ensure the page loaded correctly, if needed
    cy.url().should("include", "/Page-Object-Model/index.html");
    cy.wait(2000);
    // Click on the Contact Us button using text-based selector
    cy.get(":nth-child(3) > a").click();

    // Wait for form to load, if needed
    cy.wait(1000);

    // Fill out the form using data from fixture
    cy.get('[name="first_name"]').type(this.contactData.firstName);
    cy.get('[name="last_name"]').type(this.contactData.lastName);
    cy.get('[name="email"]').type(this.contactData.email);
    cy.get('textarea[name="message"]').type(this.contactData.message);
    //submit
    cy.get('[type="submit"]').click();
  });
});

// uploading to git repo
