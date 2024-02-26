import {useDispatch, useSelector} from "react-redux";
import {addDrone, changeCost, changeName} from "../store";

const DroneForm = () => {
    const dispatch = useDispatch();
    const {name, cost} = useSelector((state) => {
        return state.form;
    });
    const handleCostChange = (event) => {
        const cost = parseInt(event.target.value) || 0;
        dispatch(changeCost(cost));
    }

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addDrone({name, cost}));
    }

    return (
        <div className="drone-form panel">
            <h4 className="subtitle is-3">Add Drone</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input
                            className="input is-expanded"
                            value={name}
                            onInput={handleNameChange}
                        />
                    </div>
                    <div className="field">
                        <label className="label">Cost</label>
                        <input
                            type="number"
                            className="input is-expanded"
                            value={cost || ''}
                            onInput={handleCostChange}
                        />
                    </div>
                </div>
                <div className="field">
                    <button
                        className="button is-link"
                        type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default DroneForm;