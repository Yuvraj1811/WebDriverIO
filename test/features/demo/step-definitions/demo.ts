import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai"


Given(/^Google page is open$/, async function () {
  await browser.url("https://www.google.com/")
});

When(/^Search with (.*)$/, async function (searchitem) {
  console.log(`>> searchitem: ${searchitem}`);

  let ele = await $(`[name=q]`);
  await ele.setValue(searchitem);
  await browser.keys("Enter");
});

Then(/^Click on first search result$/, async function () {
  let ele = await $(`<h3>`);
  await ele.click();
});

Then(/^Url should match (.*)$/, async function(expectedURL){
    console.log(`>> expectedUrl: ${expectedURL}`)

    let url = await browser.getUrl()
    expect(url).to.equal(expectedURL)


    
    

})
