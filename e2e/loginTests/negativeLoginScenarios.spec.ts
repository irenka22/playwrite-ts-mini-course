import {test} from "@playwright/test";
import LoginPage from "../../pages/LoginPage";
import UserCredentials from "../../helpers/UserCredentials";
import { ErrorMessages } from "../../helpers/ErrorMessages";
import ApplicationURL from "../../helpers/ApplicationURL";


test.describe("Negative Login Scenarios", () => {

    let loginPage : LoginPage;
    test.beforeEach(async({page}) =>{

        loginPage = new LoginPage(page);

    })

    test("Login with locked_out_user", async({page})=>{
        
        await loginPage.loginToApplcation(UserCredentials.LOCKED_OUT_USER,UserCredentials.CORRECT_PASSWORD);
        await loginPage.validateErrorMessage(ErrorMessages.LOGIN_WITH_LOCKER_USER);
        await loginPage.validatePageUrl(ApplicationURL.BASE_URL);
        

    })
    
    test("Login with incorrect u.n.", async({page})=>{
        
        await loginPage.loginToApplcation("useruser");
        //await loginPage.validateErrorMessage("");
        await loginPage.validatePageUrl(ApplicationURL.BASE_URL);

    })

     test("Login with incorrect pwd", async({page})=>{
       
        await loginPage.loginToApplcation(UserCredentials.STANDARD_USER,"kuku");
        //await loginPage.validateErrorMessage("");
        await loginPage.validatePageUrl(ApplicationURL.BASE_URL);

    })

})