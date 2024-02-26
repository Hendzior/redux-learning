import DroneForm from "./components/DroneForm";
import DroneList from "./components/DroneList";
import DroneSearch from "./components/DroneSearch";
import DroneValue from "./components/DroneValue";

const App = () => {
    return (
        <>
            <div className="container is-fluid">
                <DroneForm/>
                <DroneSearch/>
                <DroneList/>
                <DroneValue/>
            </div>
        </>
    )
}

export default App;