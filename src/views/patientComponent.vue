<template>
    <div>
        <div class="p-5">
            <div class="flex justify-between items-center mb-4">
                <p class="text-xl font-semibold text-[#072635]">Patients</p>
                <img src="@/assets/images/icons/search.png" alt="Search Icon" class="w-6 h-6">
            </div>
            <div v-if="patients.length > 0" class="mt-[40px]">
                <div v-for="patient in patients" :key="patient.id" class="mb-4">
                    <div :class="{ 'bg-[#D8FCF7] w-[353px], h-[80px], z-40': isJessicaTaylor(patient.name) }"
                        class="flex justify-between items-center">
                        <span class="flex space-x-4">
                            <img :src="patient.profile_picture" alt="Profile Picture" class="w-12 h-12 rounded-full">
                            <div>
                                <p class="text-base font-medium text-[#072635]">{{ patient.name }}</p>
                                <p class="text-sm text-[#707070]">{{ patient.gender }}, {{ patient.age }}</p>
                            </div>
                        </span>
                        <span>
                            <img src="@/assets/images/icons/dropdown2.png" alt="Dropdown Icon"
                                class="w-[19px] h-[4px] ml-auto">
                        </span>
                    </div>
                </div>
            </div>
            <div v-else>
                <p class="text-gray-600 mt-[40px]">No patients found.</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'patientComponent',
    computed: {
        ...mapGetters(['getPatients'])
    },
    props: {
        patients: {
            type: Array,
            required: true
        }
    },
    methods: {
        isJessicaTaylor(name) {
            return name === 'Jessica Taylor';
        }
    },
}
</script>

<style scoped></style>
