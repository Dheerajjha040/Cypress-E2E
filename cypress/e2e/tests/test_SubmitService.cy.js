
import { AdditionalLeasePage } from "../../pages/AdditonalLeasePage";
import { CompanyServicesPage } from "../../pages/CompanyServicesPage";
import { HomePage } from "../../pages/HomePage";
import LoginData from "../../fixtures/LoginData.json"
import "../../support/commands"

const homepage = new HomePage()
const csp = new CompanyServicesPage()
const alp = new AdditionalLeasePage()

describe('HomePageTestcases', () => {
    before(() => {
        cy.login(LoginData.username, LoginData.password)
    });

    it('Create the service', () => {

        homepage.navigate_CompanyservicesPage()
        csp.navigate_AddtionalLicenseServicePage()
        cy.xpath(alp.webLoators.div_new_additional_lease_xpath).should('be.hidden')



    });




});