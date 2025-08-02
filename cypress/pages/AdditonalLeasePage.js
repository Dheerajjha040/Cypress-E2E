

export class AdditionalLeasePage {


    webLoators = {

        div_new_additional_lease_xpath: "//div[contains(text(),'Additional Lease')]",
        input_submitted_user_designation_xpath: "//input[@name='Submitted User Designation']",
        input_area_xpath: "//input[@name='Area']",
        textarea_comments_xpath: "//textarea[@name='Comments']",
        button_submit_xpath: "//button[@title='SUBMIT']",
        select_typeOfProperty: "//span[contains(text(),'Type of Property')]//..//..//select"

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
        // Assuming you have a fixed locator to the <select> tag itself
        cy.xpath(this.webLoators.select_typeOfProperty).select(property);
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
