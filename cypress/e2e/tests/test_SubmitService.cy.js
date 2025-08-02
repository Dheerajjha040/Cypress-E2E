
import { AdditionalLeasePage } from "../../pages/AdditonalLeasePage";
import { CompanyServicesPage } from "../../pages/CompanyServicesPage";
import { HomePage } from "../../pages/HomePage";
import LoginData from "../../fixtures/LoginData.json"
import "../../support/commands"
import { generateFakeleasedata } from '../support/fakerAdditionallease';

const homepage = new HomePage()
const csp = new CompanyServicesPage()
const alp = new AdditionalLeasePage()
const leasedata = generateFakeleasedata()

describe('HomePageTestcases', () => {
    before(() => {
        cy.login(LoginData.username, LoginData.password)
    });

    it('Create the service', () => {

        homepage.navigate_CompanyservicesPage()
        csp.navigate_AddtionalLicenseServicePage()
        cy.xpath(alp.webLoators.div_new_additional_lease_xpath).should('be.visible')
        alp.enter_Submitted_User_Designation(leasedata.designation)
        alp.enter_area(leasedata.area)
        alp.select_typeOfProperty(LoginData.TypeofProperty)
        alp.enter_comments(leasedata.comments)
        alp.click_submit()






    });




});