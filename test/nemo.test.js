const assert = require('assert');
describe('@firstTest@', function () {
  // before(async function () {
  //   // // Chroem driver issues ? follow this steps : https://tecadmin.net/setup-selenium-chromedriver-on-ubuntu/
  //   // let nemo = this.nemo;
  //   // let {nav, login, card} = nemo.view;
  //   // await nemo.driver.get(nemo.data.baseUrl);
  //   // await nav.jsLoaded.wait();
  //   // await login.email().sendKeys('me@mine.com');
  //   // await login.password().sendKeys('p4w3rD!');
  //   // await login.button().click();
  //   // await card.form.waitVisible(3000);
  // });
  // after(async function () {
  //   let nemo = this.nemo;
    
  //   // let {nav, login} = nemo.view;
  //   // await nav.logoutLink().click();
  //   // await login.form.waitVisible(3000);
  // });
  
  it('should be able to reach jQuery UI website', async function () {
    // // Chroem driver issues ? follow this steps : https://tecadmin.net/setup-selenium-chromedriver-on-ubuntu/
    let nemo = this.nemo;
    await nemo.driver.get(nemo.data.baseUrl);
    let actualTitle = await nemo.driver.getTitle();
      console.log('Current page title is', actualTitle);
      
    // let sideBar = await nemo.view._finds('#sidebar');
    // console.log("List of avaliable sidebars : " + sideBar);
    await nemo.snap();
    // await nemo.driver.sleep(200);
    await nemo.driver.close();
    // await this.nemo.driver.quit();
  });

  // xit('should load a website', async function () {
  //   await this.nemo.driver.get(this.nemo.data.baseUrl);
  //   await nemo.view._find('#sidebar');
  // }); 

});

  // let nemo = this.nemo;     
  // await nemo.driver.get(this.nemo.data.baseUrl);     
  // await nemo.view._waitVisible('.gLFyf');     
  // await nemo.view._find('.FPdoLc > center:nth-child(1) > input:nth-child(1)').sendKeys('Nemo.js Selenium');     
  // let someVlue = await nemo.view._find("SomeTextElement")          
  // await nemo.snap();     
  // await nemo.view._find('.FPdoLc > center:nth-child(1) > input:nth-child(1)').click();     
  // await nemo.driver.sleep(4000);
  