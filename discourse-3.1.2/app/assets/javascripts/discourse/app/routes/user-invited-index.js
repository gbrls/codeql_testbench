import DiscourseRoute from "discourse/routes/discourse";

export default DiscourseRoute.extend({
  beforeModel() {
    this.replaceWith("userInvited.show", "pending");
  },
});