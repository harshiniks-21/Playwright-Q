import{test} from "@playwright/test";
test("Set ViewPort",async({page})=>{
await page.setViewportSize({
    width:375,
    height:667
})
await page.goto("https://www.amazon.in/");
await page.setViewportSize({
    width:1366,
    height:768
})
await page.waitForTimeout(3000);

let screenSize=await page.viewportSize()
console.log(screenSize);
})

//default:
test("check default size",async({page})=>{
 await page.goto("https://www.amazon.in/");
 let ss= await page.viewportSize();
 console.log(ss);
 await page.waitForTimeout(3000);
})

test("Set viewPort",async({page})=>{
    await page.goto("https://www.flipkart.com/");
     let title=await page.title();
     console.log(title);
     let url = await page.url();
     console.log(url);
})
