import Body from "../Body";
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';

it("Checks if the Body is rendered properly", ()=>{
    render(<Body/>)
}) 