const {Given, When, Then} = require('@cucumber/cucumber')
const {LoginPage} = require ('../pages-objects/login-page')
const {InventoryPage} = require ('../pages-objects/inventory-page')

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()

Given("I visit a login page", async function () {
    await loginPage.navigateToLoginScreen()
})

When("I fill the login form with valid credentials", async function () {
    await loginPage.submitLoginForm()
})

Then("I should see the home page", async function() {
   await inventoryPage.assertUserIsLoggedIn()
})