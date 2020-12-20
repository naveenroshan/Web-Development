//Demo WebSite "https://rori4.github.io/selenium-practice/#/pages/practice/"
const { Builder, By } = require("selenium-webdriver");

const driver = new Builder().forBrowser("safari").build();

driver.manage().window().maximize();

async function extractTable() {
  let result = [];
  try {
    await driver.get("https://rori4.github.io/selenium-practice/#/pages/tables/smart-table");
    let numberOfPages = 6;
    for (let i = 0; i < numberOfPages; i++) {
      let rows = await driver.findElements(By.xpath("//tbody//tr"));
      for (const row of rows) {
        let rowData = await row.getText();
        let user = rowData.split(/\n/);
        result.push({
          id: user[0],
          firstName: user[1],
          lastName: user[2],
          userName: user[3],
          email: user[4],
          age: user[5]
        });
      }
      if (i !== numberOfPages - 1) {
        await driver.findElement(By.css(".page-link-next")).click();
      }
    }
    console.table(result);
  } catch (error) {
    console.log(error);
  }
}

//calling the methods
extractTable();