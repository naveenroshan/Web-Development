const {
    Builder
} = require("selenium-webdriver");

const driver = new Builder().forBrowser("safari").build();

driver.manage().window().maximize();

async function openwedsite() {
    try {
        await driver.get("http://yahoo.com");
        await driver.get("http://google.com");
    } catch (error) {
        console.log("some thing went worng")
    }
}
openwedsite();