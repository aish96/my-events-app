import { useLocation } from "react-router-dom";

function ViewEvent()  {
    let {state} = useLocation();

    console.log(state)
    return <div>View Event{state.toDate}</div>;
}

export default ViewEvent;