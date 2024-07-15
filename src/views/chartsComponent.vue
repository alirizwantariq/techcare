<template>
    <div class="bg-white rounded-lg p-6 ">
        <p class="text-xl font-semibold text-[#072635]">Diagnosis History</p>
        <div v-for=" patient in patients" :key="patient.name" class="">
            <div v-if="isJessicaTaylor(patient.name)">
                <div class="w-full h-[298px] bg-[#F4F0FE] rounded-lg mt-8">

                </div>
                <div class="flex justify-between gap-4 mt-8">
                    <div class="bg-blue-100 rounded-lg p-4 flex-1">
                        <div class="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2">
                            <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 3v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3M4 13h4m8 0h4M4 18h4m8 0h4"></path>
                            </svg>
                        </div>
                        <h3 class="text-sm text-gray-600">Respiratory Rate</h3>
                        <p class="text-2xl font-bold">{{ averageRespiratoryRate }} bpm</p>
                        <p class="text-sm" :class="{ 'text-green-600': isNormal(averageRespiratoryRateLevel) }">
                            {{ averageRespiratoryRateLevel }}
                        </p>
                    </div>

                    <div class="bg-red-100 rounded-lg p-4 flex-1">
                        <div class="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2">
                            <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13a9 9 0 0 1 9-9 9 9 0 0 1 9 9m-9 5v-5"></path>
                            </svg>
                        </div>
                        <h3 class="text-sm text-gray-600">Temperature</h3>
                        <p class="text-2xl font-bold">{{ averageTemperature }}°F</p>
                        <p class="text-sm" :class="{ 'text-green-600': isNormal(averageTemperatureLevel) }">
                            {{ averageTemperatureLevel }}
                        </p>
                    </div>

                    <div class="bg-pink-100 rounded-lg p-4 flex-1">
                        <div class="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2">
                            <svg class="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-sm text-gray-600">Heart Rate</h3>
                        <p class="text-2xl font-bold">{{ averageHeartRate }} bpm</p>
                        <p class="text-sm" :class="{ 'text-green-600': isNormal(averageHeartRateLevel) }">
                            {{ averageHeartRateLevel }}
                        </p>
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
    computed: {
        jessicaTaylor() {
            return this.patients.find(patient => this.isJessicaTaylor(patient.name));
        },
        averageRespiratoryRate() {
            return this.calculateAverage(this.jessicaTaylor.diagnosis_history, 'respiratory_rate');
        },
        averageTemperature() {
            return this.calculateAverage(this.jessicaTaylor.diagnosis_history, 'temperature');
        },
        averageHeartRate() {
            return this.calculateAverage(this.jessicaTaylor.diagnosis_history, 'heart_rate');
        },
        averageRespiratoryRateLevel() {
            return this.calculateAverageLevel(this.jessicaTaylor.diagnosis_history, 'respiratory_rate');
        },
        averageTemperatureLevel() {
            return this.calculateAverageLevel(this.jessicaTaylor.diagnosis_history, 'temperature');
        },
        averageHeartRateLevel() {
            return this.calculateAverageLevel(this.jessicaTaylor.diagnosis_history, 'heart_rate');
        }
    },
    methods: {
        isJessicaTaylor(name) {
            return name === 'Jessica Taylor';
        },
        calculateAverage(history, key) {
            const sum = history.reduce((acc, curr) => acc + curr[key].value, 0);
            return Math.round(sum / history.length);
        },
        calculateAverageLevel(history, key) {
            const levels = history.map(item => item[key].levels);
            return levels.reduce((a, b) => a === b ? a : 'Varied', levels[0]);
        },
        isNormal(level) {
            return level === 'Normal';
        }
    }
}
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>