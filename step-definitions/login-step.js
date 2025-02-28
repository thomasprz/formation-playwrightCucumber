const {Given, When, Then, defineStep} = require('@cucumber/cucumber')
const {LoginPage} = require ('../pages-objects/login-page')
const {InventoryPage} = require ('../pages-objects/inventory-page')

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()

defineStep("I visit a login page", async function () {
    await loginPage.navigateToLoginScreen()
})

defineStep("I fill the login form with valid credentials", async function () {
    await loginPage.submitLoginForm()
})

defineStep("I should see the home page", async function() {
    await inventoryPage.assertUserIsLoggedIn()
})

defineStep("I wait for 3 seconds", async function () {
    await loginPage.pause()
})

defineStep(/I fill the login form with "([^"]*)" and "([^"]*)"/, async function (username, password) {
    await loginPage.submitLoginFormWithParameters(username, password);
})