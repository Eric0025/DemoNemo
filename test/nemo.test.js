const assert = require('assert');
describe('@firstTest@', function () {
  beforeEach(async function () {
    // Chroem driver issues ? follow this steps : https://tecadmin.net/setup-selenium-chromedriver-on-ubuntu/
    let nemo = this.nemo;
    await nemo.driver.get(nemo.data.baseUrl);
    await nemo.driver.manage().setTimeouts({ implicit: 3000, pageLoad: 3000, script: 3000 });
    await nemo.driver.manage().window().maximize();
  });
  after(async function () {
    let nemo = this.nemo;
    await nemo.driver.close();
  });
  
  xit('should be able to reach jQuery UI website', async function () {
    // // Chroem driver issues ? follow this steps : https://tecadmin.net/setup-selenium-chromedriver-on-ubuntu/
    let nemo = this.nemo;
    await nemo.driver.getTitle().then(function (title) {
      // console.log('The page title is ' + title);
      assert.equal(title, 'jQuery UI');
    });
      
    // let sideBar = await nemo.view._finds('#sidebar');
    // console.log("List of avaliable sidebars : " + sideBar);
    
    // await nemo.driver.sleep(200);
    // await nemo.snap();
    // await nemo.driver.close();
    // await this.nemo.driver.quit();
  });

  it('should load a website', async function () {
    let nemo = this.nemo;
    // await nemo.view._waitVisible('link:Draggable');
    let draggableElem = await nemo.view._find('aside.widget:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)').click();
    // let draggableWait = await nemo.view._waitVisible('#draggable', 5000, 'webelement not able to locate');
    await nemo.view._find('.demo-frame').then(function(frame){
      return nemo.driver.switchTo().frame(frame);
  });
    // temp = await draggableWait.nemo.view_find('#draggable');
    // console.log('swithced to frame', iFrameSwitch.getText());
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
  