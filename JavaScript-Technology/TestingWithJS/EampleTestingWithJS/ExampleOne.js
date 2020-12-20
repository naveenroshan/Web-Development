//Demo WebSite "https://rori4.github.io/selenium-practice/#/pages/practice/"
const {
    Builder,
    By
} = require("selenium-webdriver");

const driver = new Builder().forBrowser("safari").build();

driver.manage().window().maximize();
//test one
async function registration() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.name("email")).sendKeys("ramkapoor@gmail.com");
        await driver.findElement(By.id("password")).sendKeys("12345");
        await driver.findElement(By.name("submit")).click();
        console.log("registration test passed !")
    } catch (error) {
        console.log("some thing went worng")
    }
}

//test two
async function radioButton() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
        await driver.findElement(By.css("#title")).sendKeys("Title has to be atleast 20 char");
        await driver.findElement(By.css("#description")).sendKeys("Description has to be atleast 20 char");
        await driver.findElement(By.xpath("//div[contains(@class,'col-lg-6')]//div[2]//label[1]//span[1]")).click();
        await driver.findElement(By.css("#submit")).click();
        console.log("radioButton test passed !")
    } catch (error) {
        console.log("some thing went worng")
    }
}

//testTwo
async function checkboxForm() {
    try {
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form');
        await driver.findElement(By.xpath("//input[@id='name']")).sendKeys("My Name");
        await driver.findElement(By.xpath("//input[@id='comment']")).sendKeys('My funny comment');
        await driver.findElement(By.xpath("//input[@value='presidential-suite']/following::span")).click();
        await driver.findElement(By.xpath("//nb-checkbox[@value='breakfast']/label/span")).click();
        await driver.findElement(By.xpath("//nb-checkbox[@value='lunch']/label/span")).click();
        await driver.findElement(By.xpath("//button[@id='submit']")).click();
        console.log("checkbox test passed !")
    } catch (error) {
        console.log(error);
    }
}

//test four
async function dropdownFormn() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form");
        const select1 = await driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']/button"));
        await select1.click();
        await driver.findElement(By.xpath("//nb-option[@value='1']")).click();
        await driver.findElement(By.xpath("//nb-option[@value='2']")).click();
        await select1.click();
        await driver.findElement(By.xpath(`//select[@formcontrolname='select2']/option[@value="0: 'volvo'"]`)).click();
        await driver.findElement(By.xpath(`//select[@formcontrolname='select2']/option[@value="2: 'opel'"]`)).click();
        const select3 = await driver.findElement(By.xpath("//nb-select[@formcontrolname='select3']/button"));
        await select3.click();
        await driver.findElement(By.xpath("//nb-option[@value='3']")).click();
        const select4 = await driver.findElement(By.xpath("//select[@formcontrolname='select4']"));
        await select4.click();
        await driver.findElement(By.xpath("//select[@formcontrolname='select4']/option[@value='audi']")).click();
        await driver.findElement(By.xpath("//button[@id='submit']")).click();
        console.log("dropdown test passed !")
    } catch (error) {
        console.log(error);
    }
}

//test five
async function datepickerFrom() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form")
        await driver.findElement(By.xpath("//input[@formcontrolname='dateOne']")).sendKeys("Apr 16, 2019");
        await driver.findElement(By.xpath("//input[@formcontrolname='dateTwo']")).sendKeys("Apr 7, 2019 - Apr 16, 2019");
        await driver.findElement(By.id("submit")).click();
        console.log("date picker passed")
    } catch (error) {
        console.log(error);
    }
}

//test six
async function iframeFrom() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form");
        await driver.switchTo().frame(0);
        await driver.findElement(By.xpath("//input[@aria-label='Name']")).sendKeys("Naveen");
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.actions()
        .sendKeys(Key.chord(Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.TAB)).perform();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.chord(Key.SPACE)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, "08")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, "26")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, "1991")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, "Secret answer")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
        console.log("iframe passed")
    } catch (error) {
        console.log(error);
    }
}




//calling functions
//registration();
//radioButton();
//checkboxForm();
//dropdownFormn();
//datepickerFrom();
//iframeFrom();