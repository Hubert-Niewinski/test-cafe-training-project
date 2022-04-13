import "testcafe";
import { Selector } from "testcafe";
import AuthenticationPage from "../page-objects/authenticationPage";
import HomePage from "../page-objects/homePage";
import MyAccountPage from "../page-objects/myAccountPage";

const testUserEmail = "testcafe-test@example.com";
const testUserPassword = "password1234!";

fixture("Login").page("http://automationpractice.com/index.php");

test("TS_01 - Should successfully login with correct email and password", async (t) => {
  await t
    .click(HomePage.signInButton)
    .typeText(AuthenticationPage.emailInput, testUserEmail)
    .typeText(AuthenticationPage.passwordlInput, testUserPassword)
    .click(AuthenticationPage.loginButton)
    .expect(MyAccountPage.heading.textContent)
    .eql("My account");
});
