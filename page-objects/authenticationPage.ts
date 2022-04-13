import { Selector } from "testcafe";

class AuthenticationPage {
  static emailInput = Selector("#email");
  static passwordlInput = Selector("#passwd");
  static loginButton = Selector('#SubmitLogin')
}

export default AuthenticationPage;
