export class HomePage {

    webLoators = {

        home_link_xpath: "//a[contains(text(),'Home')]",
        company_services_link_xpath: "//a[normalize-space()='Company Services']",
        services_link_xpath: "//a[normalize-space()='Services']"

    }

    navigate_CompanyservicesPage() {
        cy.xpath(this.webLoators.services_link_xpath).click()
        cy.xpath(this.webLoators.company_services_link_xpath).click()

    }
}
