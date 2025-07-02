 export class LoginPage {

    weLocators = {

        username: "input[placeholder$='Username']",
        password: "input[placeholder$='Password']",
        logIn: "button"

    }

    OpenURL()
    {
        cy.visit(Cypress.env('URL'))
    }
    enterUsername(username)
    {
        cy.get(this.weLocators.username).type(username)
    }
    enterPassword(password)
    {
        cy.get(this.weLocators.password).type(password)
    }
    clickLogin()
    {
        cy.get(this.weLocators.logIn).click()
    }
}