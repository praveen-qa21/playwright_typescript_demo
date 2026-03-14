import { test } from '../../../src/fixtures'



// test.beforeEach(async ({ page }) => {
//     console.log("This is before each method")
// })

test('Test 1', async ({ fixtureOne  }) => {
    console.log("This is test 1")
})

test('Test 2', async ({ page }) => {
    console.log("This is test 2")
})  

