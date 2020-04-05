const assert = require('assert');
const { inspect } = require('util');
const By = require('selenium-webdriver').By
const until = require('selenium-webdriver').until
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

  it('should be able to reach jQuery UI website', async function () {
    // // Chroem driver issues ? follow this steps : https://tecadmin.net/setup-selenium-chromedriver-on-ubuntu/
    nemo = this.nemo;
    let actualTitle = await nemo.driver.getTitle();
    assert.equal(actualTitle, 'jQuery UI');
  });

  it('should drage and drop', async function () {
    nemo = this.nemo;
    await nemo.view._find('xpath://a[contains(text(),"Draggable")]').click();
    await nemo.driver.switchTo().frame(0);
    let draggableWB = await nemo.view._find('id:draggable');
    await nemo.driver.actions().dragAndDrop(draggableWB, { x: 100, y: 100 }).perform();
  });

  it('should drop to the location', async function () {
    nemo = this.nemo;
    await nemo.view._find('xpath://a[contains(text(),"Droppable")]').click();
    await nemo.driver.switchTo().frame(0);
    let draggableWB = await nemo.view._find('id:draggable');
    let droppableWB = await nemo.view._find('id:droppable');
    await nemo.driver.actions().dragAndDrop(draggableWB, droppableWB).perform();
  });

  it('should resize the resizeable element', async function () {
    nemo = this.nemo;
    await nemo.view._find('xpath://a[contains(text(),"Resizable")]').click();
    await nemo.driver.switchTo().frame(0);
    let resizableWB = await nemo.view._find('xpath://*[@id="resizable"]/div[3]');
    await nemo.driver.actions().dragAndDrop(resizableWB, { x: 100, y: 250 }).perform();
  });

  it('should select the selectable iteams', async function () {
    nemo = this.nemo;
    await nemo.view._find('xpath://a[contains(text(),"Selectable")]').click();
    await nemo.driver.switchTo().frame(0);
    let selectableWB = await nemo.view._finds('xpath:/html/body/ol');
    // this is not promise-aware 
    // array.forEach(element => {
    // });
    let promises = selectableWB.map(async element =>{
      return await element.getText();
    });

    let finalPromise = await Promise.all(promises);
    console.log(inspect(finalPromise));
    await nemo.driver.sleep(3000);

    // return await Promise.all(selectableWB.map(el => el.getText()));
    // selectableWB.forEach(async element =>{
      // let text = await element.getText();
      // console.log(text);
      // await nemo.driver.sleep(2000);
      // await nemo.driver.next().click();
      // await nemo.driver.actions().doubleClick(element).perform();
    // });

  });

  it('should sort the sortable iteams', async function () {
    nemo = this.nemo;
    await nemo.view._find('xpath://a[contains(text(),"Sortable")]').click();
    await nemo.driver.switchTo().frame(0);
    let sortableWB = await nemo.view._find('xpath://li[@class="ui-state-default ui-sortable-handle"]');
    await nemo.driver.actions().click(sortableWB).dragAndDrop(sortableWB, { x: 7, y: 100 }).perform();
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
