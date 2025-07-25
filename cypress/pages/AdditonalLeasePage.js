import { title } from "process"

export class AdditionalLeasePage {

    webLoators = {

        div_new_additional_lease_xpath: "//div[contains(text(),'New Additional Lease')]"


    }

    verify_additionalLeasePage() {
        return cy.xpath(this.webLoators.div_new_additional_lease_xpath).invoke(text)
    }



}
