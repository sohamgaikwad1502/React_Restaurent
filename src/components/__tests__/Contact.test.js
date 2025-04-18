import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Testing Contact Page", ()=>{
    it("Contact Page Loading",()=>
        {
            render(<Contact/>)
            const heading = screen.getByRole("heading");
            expect(heading).toBeInTheDocument();
        });
        
    it("Input Boxes exists" , ()=>
    {
        render(<Contact/>);
        const input_box = screen.getAllByRole("textbox");
        
        // console.log(input_box);
    });
    
    it("TextBox exists" , ()=>
    {
        render(<Contact/>);
        const tb = screen.getByPlaceholderText("Name");
        expect(tb).toBeInTheDocument();
    });
    
    it("Submit Button exists",()=>
    {   
        render(<Contact/>)
        const btn = screen.getByRole("button");
        expect(btn).toBeInTheDocument();
    });
})




