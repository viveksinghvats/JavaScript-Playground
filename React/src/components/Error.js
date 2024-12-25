import { useRouteError } from "react-router-dom";
function Error() {
    const err = useRouteError();
    let name = "Ashish";

    return (
        <div>
            <h1>Oops Error page</h1>
            <h3>Something went wrong</h3>
            <h4>Status:{err.status}, {err.statusText}</h4>
            <h2>{name}</h2>
        </div>
    );
}

export default Error;