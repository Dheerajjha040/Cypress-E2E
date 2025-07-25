export class CompanyServicesPage {

    webLoators = {

        a_additional_lease_xpath: "//a[contains(text(),'Additional Lease')]"


    }

    navigate_AddtionalLicenseServicePage() {
        cy.xpath(this.webLoators.a_additional_lease_xpath).click()

    }


}
