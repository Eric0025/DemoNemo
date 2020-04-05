const assert = require('assert');
const { inspect } = require('util');
let nemo

describe('@firstTest@', function () {
  beforeEach(async function () {
    // Chroem driver issues ? follow this steps : https://tecadmin.net/setup-selenium-chromedriver-on-ubuntu/
    nemo = this.nemo;
    await nemo.driver.get(nemo.data.baseUrl);
    await nemo.driver.manage().setTimeouts({ implicit: 3000, pageLoad: 3000, script: 3000 });
    await nemo.driver.manage().window().maximize();
  });

  after(async function () {
    nemo = this.nemo;
    await nemo.driver.close();
  });
  
  xit('should be able to reach jQuery UI website', async function () {
    // // Chroem driver issues ? follow this steps : https://tecadmin.net/setup-selenium-chromedriver-on-ubuntu/
    nemo = this.nemo;
    await nemo.driver.getTitle().then(function (title) {
      // console.log('The page title is ' + title);
      assert.equal(title, 'jQuery UI');
    });
    
  });

  xit('should drage and drop', async function () {
    nemo = this.nemo;
    await nemo.view._find('xpath://a[contains(text(),"Draggable")]').click();
    await nemo.view._find('css:.demo-frame').then(function(frame){
      return nemo.driver.switchTo().frame(frame);
  });
    let draggableWB = await nemo.view._find('id:draggable');
    await nemo.driver.actions().dragAndDrop(draggableWB, { x: 100, y: 100 }).perform();
  }); 

  xit('should drop to the location', async function () {
    nemo = this.nemo;
    await nemo.view._find('xpath://a[contains(text(),"Droppable")]').click();
    await nemo.view._find('css:.demo-frame').then(function(frame){
      return nemo.driver.switchTo().frame(frame);
  });
    let draggableWB = await nemo.view._find('id:draggable');
    let droppableWB = await nemo.view._find('id:droppable');
    await nemo.driver.actions().dragAndDrop(draggableWB, droppableWB).perform();
  }); 

  xit('should resize the resizeable element', async function () {
    nemo = this.nemo;
    await nemo.view._find('xpath://a[contains(text(),"Resizable")]').click();
    await nemo.view._find('css:.demo-frame').then(function(frame){
      return nemo.driver.switchTo().frame(frame);
  });
    let resizableWB = await nemo.view._find('xpath://*[@id="resizable"]/div[3]');
    await nemo.driver.actions().dragAndDrop(resizableWB, { x: 100, y: 250 }).perform();
  }); 

  it('should select the selectable iteams', async function () {
    nemo = this.nemo;
    await nemo.view._find('xpath://a[contains(text(),"Selectable")]').click();
    await nemo.view._find('css:.demo-frame').then(function(frame){
      return nemo.driver.switchTo().frame(frame);
  });
  
    // let selectableWB = await nemo.view._finds('xpath:/html/body/ol');
    // let temp = selectableWB.getSize();
    // console.log(temp)
    
  //   for (let i = 0; i < 7; i++) {
  //     await nemo.view._finds('xpath:/html/body/ol/li['+i+']');
  //     await nemo.driver.actions().click(selectableWB).perform();
  // }

  // let listArray = new listArray();
  // let element1 = await nemo.view._find('xpath:/html/body/ol');
  
  
    await nemo.view._finds('#selectable').then(function(elements){      
      elements.forEach(function (el) {
        let size = el.getSize();
        console.log('******************'+size.toString);
        console.log('******************'+inspect(el));
        el.click();
        nemo.driver.sleep(2500);
      })
    });



      // nemo.view._find('xpath:/html/body/ol/li['+i+']');
      // nemo.driver.actions().click(i).perform();

    

    // array.forEach(element => {
    //   nemo.driver.actions().click(selectableWB).perform();
    // });
    
    // await nemo.driver.actions().click(selectableWB).perform();
  }); 

  xit('should sort the sortable iteams', async function () {
    nemo = this.nemo;
    await nemo.view._find('xpath://a[contains(text(),"Sortable")]').click();
    await nemo.view._find('css:.demo-frame').then(function(frame){
      return nemo.driver.switchTo().frame(frame);
  });
    let sortableWB = await nemo.view._find('xpath://li[@class="ui-state-default ui-sortable-handle"]');
    await nemo.driver.actions().click(sortableWB).dragAndDrop(sortableWB, { x: 7, y: 100 }).perform();
    await nemo.driver.sleep(4000);
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

  // await nemo.view._waitVisible('id:draggable', 5000, 'webelement not able to locate').getText().then(function(txt){
  //   console.log('draggable element name is: ', txt);
  //   assert.equal(txt, 'Drag me around', 'expected element name not found Please check for the log-AssertionError');
  // });
  