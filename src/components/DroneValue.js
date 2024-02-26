import {useSelector} from "react-redux";

const DroneValue = () => {
    const totalCost = useSelector(({drones: {drones, searchTerm}}) => {
        const filteredDrones = drones.filter((drone) => {
            return drone.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
        return filteredDrones.reduce((acc, drone) => acc + drone.cost, 0);
    });

    return (
        <div className="drone-value">
            Total Cost: ${totalCost}
        </div>
    )
}

export default DroneValue;