// BASE_URL = "http://localhost:8000";

// // Create
// export const createNewTimeTracker = async (newTimeTracker) => {
//     try {
//       const res = await Client.post(`/${BASE_URL}/time-trackers/`, newTimeTracker);
//       return res.data;
//     } catch (error) {
//       throw error;
//     }
//   };
  
//   // Read
//   export const getAddictions = async () => {
//     try {
//       const res = await Client.get(`${BASE_URL}/addictions/`);
//       return res.data;
//     } catch (error) {
//       throw error;
//     }
//   };
  
//   // Update
//   export const updateExistingTimeTracker = async (timeTrackerId, updatedTimeTracker) => {
//     try {
//       const res = await Client.put(`/${BASE_URL}/time-trackers/${timeTrackerId}/`, updatedTimeTracker);
//       return res.data;
//     } catch (error) {
//       throw error;
//     }
//   };
  
//   // Delete
//   export const deleteTimeTracker = async (timeTrackerIdToDelete) => {
//     try {
//       const res = await Client.delete(`/${BASE_URL}/time-trackers/${timeTrackerIdToDelete}/`);
//       return res.data;
//     } catch (error) {
//       throw error;
//     }
//   };