import{test} from "@playwright/test"
test("page",async({page})=>{
 await page.goto("https://www.google.com/");
await page.goto("https://www.amazon.in/");
await page.goto("https://www.myntra.com/")
await page.goBack();
await page.goForward();
await page.reload();
})
