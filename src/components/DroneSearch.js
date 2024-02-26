import {useDispatch, useSelector} from "react-redux";
import {changeSearchTerm} from "../store";

const DroneSearch = () => {
    const searchTerm = useSelector(state => {
        return state.drones.searchTerm;
    })
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        event.preventDefault();
        dispatch(changeSearchTerm(event.target.value));

    };

    return (
        <div className="list-header">
            <h3 className="title is-3">My Drones</h3>
            <div className="search field is-horizontal">
                <label className="label">Search</label>
                <input
                    className="input"
                    value={searchTerm}
                    onChange={handleSearch}
                >
                </input>
            </div>
        </div>
    )
}

export default DroneSearch;