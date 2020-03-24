describe('@firstTest@', function () {
  
  it('should load a website', async function () {
    // Chroem driver issues ? follow this steps : https://tecadmin.net/setup-selenium-chromedriver-on-ubuntu/
    let nemo = this.nemo;
    await nemo.driver.get(this.nemo.data.baseUrl);
    // ID locator
    let sideBar = await nemo.view._finds('#sidebar');
    console.log("List of avaliable sidebars : " + sideBar);
    await nemo.snap();  
    await nemo.driver.sleep(4000);
    await nemo.driver.quite();
  });

  xit('should load a website', async function () {
    await this.nemo.driver.get(this.nemo.data.baseUrl);
    await nemo.view._find('#sidebar');
  }); 

});

      // let nemo = this.nemo;     
      // await nemo.driver.get(this.nemo.data.baseUrl);     
      // await nemo.view._waitVisible('.gLFyf');     
      // await nemo.view._find('.FPdoLc > center:nth-child(1) > input:nth-child(1)').sendKeys('Nemo.js Selenium');     
      // let someVlue = await nemo.view._find("SomeTextElement")          
      // await nemo.snap();     
      // await nemo.view._find('.FPdoLc > center:nth-child(1) > input:nth-child(1)').click();     
      // await nemo.driver.sleep(4000);

