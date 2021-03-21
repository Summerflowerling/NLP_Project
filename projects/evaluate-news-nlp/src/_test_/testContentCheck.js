import {checkForContent } from "./src/client/js/contentChecker"

describe("Testing if user type in any text", () => {
    
    test("Testing the if textArea content is empty string ", () => {
        let input = "";
            
           expect(checkForContent(input)).toBeTruthy();
})});