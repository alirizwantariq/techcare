<template>
    <div class="bg-white rounded-lg p-6 ">
        <p class="text-xl font-semibold text-[#072635]">Lab Results</p>
        <div v-for="patient in patients" :key="patient.name" class="mt-4">
            <div v-if="isJessicaTaylor(patient.name)">
                <div v-for="results, i in patient.lab_results" :key="i" class="flex justify-between items-center mb-3">
                    <p class="text-sm font-normal text-[#072635] capitalize">{{ results }}</p>
                    <img src="@/assets/images/icons/download.svg" alt="" class="w-5 h-5">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        patients: {
            type: Array,
            required: true
        }
    },
    methods: {
        isJessicaTaylor(name) {
            return name === 'Jessica Taylor';
        },
    }
}
</script>

<style scoped></style>
