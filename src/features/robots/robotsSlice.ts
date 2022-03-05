import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface Robot {
  id: string;
  name: string;
  purpose: string;
}

interface RobotsState {
  robots: Robot[];
}

// Define the initial state using that type
const initialState: RobotsState = {
  robots: [],
};

export const robotsSlice = createSlice({
  name: "robots",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Robot[]>) => {
      state.robots = action.payload;
    },
    removeRobotById: (state, action: PayloadAction<string>) => {
      state.robots = state.robots.filter((r) => r.id !== action.payload);
    },
  },
});

export const { update, removeRobotById } = robotsSlice.actions;

export default robotsSlice.reducer;
