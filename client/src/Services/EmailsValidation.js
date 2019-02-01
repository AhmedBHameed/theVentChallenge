class Email {
  constructor() {
    this.sortEmailsArray = [];
  }
  isValid(email = "") {
    const regExp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return regExp.test(email);
  }
  isExists(email = "") {
    const emails = this.grab();
    return emails.includes(email);
  }
  grab() {
    if (window.localStorage && localStorage.getItem("emails") !== null) {
      return JSON.parse(localStorage.getItem("emails"));
    }
    return [];
  }
  store(email = "") {
    if (window.localStorage) {
      let emails = this.grab();
      emails.push(email);
      emails = this.sort(emails).by("domain");
      emails = this.sort(emails).by("name");
      localStorage.setItem("emails", JSON.stringify(emails));
    }
  }
  sort(emails) {
    this.sortEmailsArray = null;
    this.sortEmailsArray = emails;
    return this;
  }
  by(by = "domain") {
    let index = by === "domain" ? 1 : 0;
    // First sorting by domain name
    this.sortEmailsArray.sort((ea, eb) => {
      let domainA = ea.split("@")[index].toUpperCase(), // Ignoring upercase or lowercase
        domainB = eb.split("@")[index].toUpperCase(); // Ignoring upercase or lowercase
      if (domainA < domainB) {
        return -1;
      }
      if (domainA > domainB) {
        return 1;
      }
      return 0;
    });
    return this.sortEmailsArray;
  }
  remove(index) {
    let emails = this.grab();
    emails.splice(index, 1);
    if (window.localStorage) {
      localStorage.setItem("emails", JSON.stringify(emails));
    }
    return emails;
  }
}

export default new Email();
