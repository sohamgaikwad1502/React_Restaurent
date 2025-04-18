import { useRouteError } from "react-router-dom";

const Error = ()=>
{
    const err = useRouteError();
    return (
        <div>
            <h1>Error Occured</h1>
            <h3>Error status : {err.status}</h3>
        </div>
        
    )
}

export default Error;