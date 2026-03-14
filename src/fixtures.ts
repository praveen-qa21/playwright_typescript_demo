import {test as Base} from '@playwright/test'

type customFixtureType ={
    fixtureOne:any
}


export const test = Base.extend<customFixtureType>({
    fixtureOne: async({},use:any)=>{
 console.log("Before Hooks")
        await use();
        console.log("After Hooks")

    }
});




