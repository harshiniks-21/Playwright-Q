//!test Annotations
//! test only

import{test} from "@playwright/test";
// test("test1",()=>{
//     console.log("test1");
// })
// // test.only("test2",()=>{
// //     console.log("test2");
// // });
// //Test Skip
// test.skip("test3",()=>{
//     console.log("test3");
// });
// //Test FixMe
// test.fixme("test4",()=>{
//     console.log("test4");
// });

// //! test fail
// //? Valid URL-errror Msg -> Expected to fail, but passed.
// // test.fail("test5",async({page})=>{
// //     await page.goto("https://www.amazon.in/");
// // })
// //? invalid URL
// test.fail("test5",async({page})=>{
//     await page.goto("https://www.amzn.in/");
// })

//Test Describe
test.describe("login",()=>{
     test.skip("Flipkart",async ({page})=>{
        await page.goto("https://www.flipkart.com/");
        })
     test.skip("Myntra",async({page})=>{
        await page.goto("https://www.myntra.com/")
        })
     test("Amazon",async({page})=>{
        await page.goto("https://www.amazon.com/")
        })
    })
