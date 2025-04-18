import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";


it("Should load a header component with a button",()=>
{
    
    render(
        <BrowserRouter>
        <Provider store = {appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const button =  screen.getByRole("button","Login");
    expect(button).toBeInTheDocument();

});

it("Should load a Cart Item component with 0 items in it",()=>
{
    
    render(
        <BrowserRouter>
        <Provider store = {appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const cart =  screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();

});

it("it should change Login Button to Logout Button on click",()=>
{
    
    render(
        <BrowserRouter>
        <Provider store = {appStore}>
            <Header/>
        </Provider>
        </BrowserRouter> 
    )

    const login_btn =  screen.getByRole("button","Login");

    fireEvent.click(login_btn);

    const logout = screen.getByRole("button","Logout")

    expect(logout).toBeInTheDocument();
    

});