<template>
    <div class="bg-white rounded-lg p-6 max-w-md mx-auto">
        <div v-for="patient in patients" :key="patient.name">
            <div v-if="isJessicaTaylor(patient.name)">
                <div class="flex flex-col items-center mb-6">
                    <img :src="patient.profile_picture" :alt="patient.name" class="w-32 h-32 rounded-full mb-4">
                    <h2 class="text-2xl font-bold text-gray-800">{{ patient.name }}</h2>
                </div>

                <div class="space-y-4">
                    <div class="flex items-center">
                        <span class="text-gray-500 w-8">📅</span>
                        <div>
                            <div class="text-sm text-gray-500">Date Of Birth</div>
                            <div>{{ formatDate(patient.date_of_birth) }}</div>
                        </div>
                    </div>

                    <div class="flex items-center">
                        <span class="text-gray-500 w-8">♀️</span>
                        <div>
                            <div class="text-sm text-gray-500">Gender</div>
                            <div>{{ patient.gender }}</div>
                        </div>
                    </div>

                    <div class="flex items-center">
                        <span class="text-gray-500 w-8">📞</span>
                        <div>
                            <div class="text-sm text-gray-500">Contact Info.</div>
                            <div>{{ patient.phone_number }}</div>
                        </div>
                    </div>

                    <div class="flex items-center">
                        <span class="text-gray-500 w-8">📞</span>
                        <div>
                            <div class="text-sm text-gray-500">Emergency Contacts</div>
                            <div>{{ patient.emergency_contact }}</div>
                        </div>
                    </div>

                    <div class="flex items-center">
                        <span class="text-gray-500 w-8">🛡️</span>
                        <div>
                            <div class="text-sm text-gray-500">Insurance Provider</div>
                            <div>{{ patient.insurance_type }}</div>
                        </div>
                    </div>
                </div>

                <button
                    class="w-full mt-6 py-3 bg-[#01F0D0] text-[#072635] rounded-full text-center hover:bg-[#73f5e4]  transition duration-300">
                    Show All Information
                </button>
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
        formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        },
        isJessicaTaylor(name) {
            return name === 'Jessica Taylor';
        }
    }
}
</script>

<style scoped></style>