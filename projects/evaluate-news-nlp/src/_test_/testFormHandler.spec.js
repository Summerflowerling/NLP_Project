import { updateUi } from "../client/js/formHandler";
import { handleSubmit } from "..src/client/js/formHandler"


describe("Testing the submit functionality", () => {
    
    test("Testing the handleSubmit() function", () => {
            
           expect(handleSubmit().toBeDefined());
})});