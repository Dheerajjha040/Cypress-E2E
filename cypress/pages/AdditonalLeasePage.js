
import 'cypress-wait-until';
export class AdditionalLeasePage {


    webLocators = {

        div_new_additional_lease_xpath: "//div[contains(text(),'Additional Lease')]",
        input_submitted_user_designation_xpath: "//input[@name='Submitted User Designation']",
        input_area_xpath: "//input[@name='Area']",
        textarea_comments_xpath: "//textarea[@name='Comments']",
        button_submit_xpath: "//button[@title='SUBMIT']",
        select_typeOfProperty: "//span[contains(text(),'Type of Property')]//..//..//select",
        label_ThankYou: "//div[contains(text(),'Thank You')]",
        b_DAFZid: "//b"

    }

    verify_additionalLeasePage() {
        return cy.xpath(this.webLocators.div_new_additional_lease_xpath).invoke(text)
    }

    enter_Submitted_User_Designation(designation)
    {
        cy.xpath(this.webLocators.input_submitted_user_designation_xpath).type(designation)
    }

    enter_area(area)
    {
        cy.xpath(this.webLocators.input_area_xpath).type(area)
    }

    select_typeOfProperty(property) {
        // Assuming you have a fixed locator to the <select> tag itself
        cy.xpath(this.webLocators.select_typeOfProperty).select(property);
    }

    enter_comments(comment)
    {
        cy.xpath(this.webLocators.textarea_comments_xpath).type(comment)
    }

    click_submit()
    {
        cy.xpath(this.webLocators.button_submit_xpath).click()
    }
    verify_additionalLeasePageVisible() {
        cy.xpath(this.webLocators.div_new_additional_lease_xpath).should('be.visible');
    }
    verify_ThankYouVisible()
    {
        cy.waitUntil(() => cy.xpath(this.webLocators.label_ThankYou));
        cy.xpath(this.webLocators.label_ThankYou).should('be.visible');
    }
    save_DAFZid()
    {
        return cy.xpath(this.webLocators.b_DAFZid).invoke(text)
    }
}
