import { title } from "process"
import LoginData from "../../fixtures/LoginData.json"

export class AdditionalLeasePage {


    webLoators = {

        div_new_additional_lease_xpath: "//div[contains(text(),'Additional Lease')]",
        input_submitted_user_designation_xpath: "//input[@name='Submitted User Designation']",
        input_area_xpath: "//input[@name='Area']",
        textarea_comments_xpath: "//textarea[@name='Comments']",
        button_submit_xpath: "//button[@title='SUBMIT']"

    }

    getTypeOfPropertyXPath(property) {
        return "//span[contains(text(),'Type of Property')]//..//..//select/option[text()='${property}']";
    }

    verify_additionalLeasePage() {
        return cy.xpath(this.webLoators.div_new_additional_lease_xpath).invoke(text)
    }

    enter_Submitted_User_Designation(designation)
    {
        cy.xpath(this.webLoators.input_submitted_user_designation_xpath).type(designation)
    }

    enter_area(area)
    {
        cy.xpath(this.webLoators.input_area_xpath).type(area)
    }

    select_typeOfProperty(property) {
        const xpath = this.getTypeOfPropertyXPath(property);
        cy.xpath(xpath).click();
    }

    enter_comments(comment)
    {
        cy.xpath(this.webLoators.textarea_comments_xpath).type(comment)
    }

    click_submit()
    {
        cy.xpath(this.webLoators.button_submit_xpath).click()
    }
}
