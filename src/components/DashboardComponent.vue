<template>
  <div class="w-full h-full bg-[#F6F7F8] opacity-100">
    <div class="p-4 relative">
      <div>
        <NavbarComponent />
      </div>
      <div class="flex justify-between">
        <div class="mt-8 w-[367px] h-[85vh] bg-white rounded-lg overflow-y-scroll">
          <PatientComponent :patients='getPatients' />
        </div>
        <div>
          <div class="mt-8 w-[980px] h-[60vh] bg-white rounded-lg overflow-y-scroll">
            <PatientDiagnosis :patients='getPatients' />
          </div>
          <div class="mt-4 w-[980px] h-[23vh] bg-white rounded-lg overflow-y-scroll">
            <DiagnosisList :patients='getPatients' />
          </div>
        </div>
        <div>
          <div class="mt-8 w-[367px] h-[65vh] bg-white rounded-lg overflow-y-scroll">
            <PatientProfile :patients='getPatients' />
          </div>
          <div class="mt-4 w-[367px] h-[18vh] bg-white rounded-lg overflow-y-scroll">
            <LabResult :patients='getPatients' />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from '@/views/navbarComponent.vue';
import PatientComponent from '@/views/patientComponent.vue';
import PatientProfile from '@/views/patientProfileComponent.vue';
import PatientDiagnosis from '@/views/chartsComponent.vue';
import DiagnosisList from '@/views/listComponent.vue';
import LabResult from '@/views/resultsComponent.vue';
import { mapActions, mapGetters } from 'vuex';


export default {
  name: 'Dashboard-Component',
  components: {
    NavbarComponent,
    PatientComponent,
    PatientProfile,
    LabResult,
    DiagnosisList,
    PatientDiagnosis
  },
  computed: {
    ...mapGetters(['getPatients'])
  },
  methods: {
    ...mapActions(['fetchPatients']),
    async loadPatients() {
      try {
        await this.fetchPatients();
        console.log('Patients loaded:');
      } catch (error) {
        console.error('Failed to load patients:', error);
      }
    },
    isJessicaTaylor(name) {
      return name === 'Jessica Taylor';
    }
  },
  mounted() {
    this.loadPatients();
  }
}
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
