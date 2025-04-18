import MOCK_DATA from "../mocks/resCardDataMock.json";
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Restaurent_cart ,{RestaurentWithDiscountInfo} from "../Restaurent_card";

it("Should Render the Restaurent Cart compontnt with props given to it",()=>
{
    console.log(MOCK_DATA);
    render(<Restaurent_cart data = {MOCK_DATA}/>)
    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();

});

// it ("Should render the restaurent with discount card component" , ()=>
// {
//     const Dis_card = RestaurentWithDiscountInfo(Restaurent_cart);
//     render(<Dis_card props1 = {MOCK_DATA}/>);
//     const name = screen.getByText("Pizza Hut");
//     expect(name).toBeInTheDocument();
// });