import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    patients: [],
  },
  mutations: {
    SET_PATIENTS(state, patients) {
      state.patients = patients;
    },
  },
  actions: {
    async fetchPatients({ commit }) {
      try {
        const username = process.env.VUE_APP_USERNAME;
        const password = process.env.VUE_APP_PASSWORD;
        const auth = btoa(`${username}:${password}`);

        console.log("Fetching patients...");

        const response = await axios.get(
          `${process.env.VUE_APP_API_URL}/patients`,
          {
            headers: {
              Authorization: `Basic ${auth}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status !== 200) {
          throw new Error("Failed to fetch patients");
        }

        console.log("Patients fetched successfully");
        commit("SET_PATIENTS", response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching patients:", error);
        throw error;
      }
    },
  },
  getters: {
    getPatients: (state) => state.patients,
    getPatientById: (state) => (id) => {
      return state.patients.find((patient) => patient.id === id);
    },
  },
});

export default store;
