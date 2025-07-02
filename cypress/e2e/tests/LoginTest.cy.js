import {LoginPage} from "../../pages/LoginPage"

import LoginData from "../../fixtures/LoginData.json"

const LoginPageObj = new LoginPage()


describe('Login testcases', () => {


    it('Login to Portal as valid user', () => {
        
        LoginPageObj.OpenURL()
        LoginPageObj.enterUsername(LoginData.username)
        LoginPageObj.enterPassword(LoginData.password)
        LoginPageObj.clickLogin()
    

    });
});