import { Selector } from "testcafe";

class MyAccountPage {
  static heading = Selector('.page-heading');
  static contactUsButton = Selector("[title='Contact Us']");
}

export default MyAccountPage;
