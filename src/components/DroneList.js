import {useSelector, useDispatch} from "react-redux";
import {removeDrone} from "../store";

const DroneList = () => {
    const dispatch = useDispatch();
    const drones = useSelector(({drones: {drones, searchTerm}}) => {
        return drones.filter((drone) =>
            drone.name.toLowerCase().includes(searchTerm.toLowerCase()));
    });

    const handleDronesDelete = (id) => {
        dispatch(removeDrone(id));
    };

    return (
        <div className="drones-list">
            <ul>
                {drones.map((drone) =>
                    (
                        <li key={drone.id} className="panel">
                            <p>
                                Name: {drone.name} - Cost: {drone.cost}
                            </p>
                            <button className="button is-danger"
                                    onClick={() => handleDronesDelete(drone.id)}
                            >
                                Delete
                            </button>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default DroneList;