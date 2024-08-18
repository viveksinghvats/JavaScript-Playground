import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Oops Error page</h1>
            <h3>Something went wrong</h3>
            <h4>Status:{err.status}, {err.statusText}</h4>
        </div>
    );
}

export default Error;