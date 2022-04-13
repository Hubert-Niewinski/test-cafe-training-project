import { Selector } from "testcafe";

class HomePage {
  static signInButton = Selector(".login");
  static contactUsButton = Selector("[title='Contact Us']");
}

export default HomePage;
