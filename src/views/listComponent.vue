<template>
    <div class="bg-white rounded-lg p-6 ">
        <p class="text-xl font-semibold text-[#072635]">Lab Results</p>

        <!-- Header for Diagnostic List -->
        <div class="flex justify-between mt-4 bg-[#F6F7F8] rounded-full p-4">
            <div class="w-1/3 h-5 flex rounded-lg">
                <p class="text-sm font-semibold text-[#072635]">Name</p>
            </div>
            <div class="w-2/3 h-5 flex rounded-lg">
                <p class="text-sm font-semibold text-[#072635]">Description</p>
            </div>
            <div class="w-1/3 h-5 flex rounded-">
                <p class="text-sm font-semibold text-[#072635]">Status</p>
            </div>
        </div>

        <!-- Iterate over each patient's diagnostic list -->
        <div v-for="patient in patients" :key="patient.name" class="mt-4">
            <div v-if="isJessicaTaylor(patient.name)">
                <div v-for="(diagnosis, i) in patient.diagnostic_list" :key="i"
                    class="flex justify-between items-center mb-3">
                    <div class="w-1/3">
                        <p class="text-sm text-[#072635]">{{ diagnosis.name }}</p>
                    </div>
                    <div class="w-2/3">
                        <p class="text-sm text-[#072635]">{{ diagnosis.description }}</p>
                    </div>
                    <div class="w-1/3">
                        <p class="text-sm text-[#072635]">{{ diagnosis.status }}</p>
                    </div>
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

<style scoped>
/* Add any additional styles here if needed */
</style>
