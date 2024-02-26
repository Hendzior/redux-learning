import {createSlice, nanoid} from "@reduxjs/toolkit";
import {fetchData} from "../../utils/droneProvider"

const droneList = await fetchData();

const dronesSlice = await createSlice({
    name: 'drones',
    initialState: {
        searchTerm: '',
        drones: droneList
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addDrone(state, action) {
            state.drones.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeDrone(state, action) {
            const index = state.drones.indexOf(action.payload.id);
            state.drones.splice(index);
        }
    }
});

export const {changeSearchTerm, addDrone, removeDrone} = dronesSlice.actions;
export const dronesReducer = dronesSlice.reducer;