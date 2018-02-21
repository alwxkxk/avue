const config = require('./config.js')
const {Builder, By, Key, until} = require('selenium-webdriver');

login('akoa','akoa')

async function login (name,password){
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get(config.url)
  // .then((v)=>{console.log('登陆网址成功')})
  .catch((err)=>{console.error('登陆网址失败')})

  await driver.findElement(By.id('loginName'))
  .then((e)=>{
    e.sendKeys(name)
    .catch((err)=>{console.error(err)})
  })
  .catch((err)=>{console.error('定位用户名输入框失败',err)})

  await driver.findElement(By.id('loginPassword'))
  .then((e)=>{
    e.sendKeys(password)
    .catch((err)=>{console.error(err)})
  })
  .catch((err)=>{console.error('定位密码输入框失败',err)})

  await driver.sleep(1000);

  await driver.findElement(By.id('loginButton'))
  .then((e)=>{
    e.click()
    .catch((err)=>{console.error(err)})
  })
  .catch((err)=>{console.error('定位登陆按钮失败',err)})

  await driver.sleep(1000);

  await driver.findElement(By.css('header'))
  .then((e)=>{
    console.log('登陆成功，通过登陆测试')
  })
  .catch(err=>{console.error('没定位到header元素，登陆测试失败')})
  
  await driver.sleep(2000);
  await driver.quit();
}
