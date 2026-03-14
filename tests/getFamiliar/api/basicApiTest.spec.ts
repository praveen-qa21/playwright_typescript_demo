import { test, expect, request as newRequest } from "@playwright/test";

test("a simple GET request to fetch all employees", async ({ request,context,page:adsfasdf }) => {

    adsfasdf.getByRole("alert").click();
     
context.request.get("/");
adsfasdf.request.get("/")

    const response = await request.get("http://localhost:3000/employees/");
    expect(response.status()).toBe(200);


    //     first_name: 'Sebastian',
    //     last_name: 'Eschweiler',
    //     email: 'sebastian@codingthesmartway.com'
    //   },
    //   {
    //     id: 2,
    //     first_name: 'Steve',
    //     last_name: 'Palmer',
    //     email: 'steve@codingthesmartway.com'
    //   },
    //   {
    //     id: 3,
    //     first_name: 'Ann',
    //     last_name: 'Smith',
    //     email: 'ann@codingthesmartway.com'
    //   },
    // ]
    const resObj = await response.json();
    console.log(resObj);

    expect(resObj.length).toBeGreaterThanOrEqual(1);
    expect(resObj[0]).toHaveProperty("id");
    expect(resObj[0]).toHaveProperty("first_name");

});

test("SIMPLE POST, PUT, DELETE Request", async ({ request, page, context }) => {

   
   



    //Creating New Entry using POST
    const postResponse = await request.post("http://localhost:3000/employees", {
        data: {
            first_name: 'Paulo',
            last_name: 'Coelho',
            email: 'paulo.coelho@alchemist.com'
        }
    });
    expect(postResponse.status()).toBe(201);
    const resObj = await postResponse.json();
    console.log('post response object:', resObj);
    const id: number = resObj.id
    expect(resObj.email).toBe("paulo.coelho@alchemist.com")

    //Update the existing records using PUT
    const putResponse = await request.put(`http://localhost:3000/employees/${id}`, {
        data: {
            first_name: 'Ashoka',
            last_name: 'Mithran',
            email: 'Ashoka.mithran@alchemist.com'
        }
    });
    expect(putResponse.status()).toBe(200);
    const putObj = await putResponse.json();
    console.log('put response object:', putObj);
    expect(putObj.email).toBe("Ashoka.mithran@alchemist.com")

    //After Asserting updating the employee, fetching the employee details using GET.
    const getResponse = await request.get(`http://localhost:3000/employees/${id}`)
    expect(getResponse.status()).toBe(200);
    console.log('get response object:', await getResponse.json())

    //deleting the employee.
    const deleteResponse = await request.delete(`http://localhost:3000/employees/${id}`)
    expect(deleteResponse.status()).toBe(200);
    console.log('delete response object:', await deleteResponse.json())

    //After deleting the employee, fetching the employee details using GET.
     const res = await request.get(`http://localhost:3000/employees/${id}`)
    expect(res.status()).toBe(404);
    console.log('get response object after deletion:', await res.json())    


});