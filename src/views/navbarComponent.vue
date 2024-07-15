<template>
    <div class="w-full h-[72px] bg-white rounded-full opacity-100 flex items-center justify-between px-4 relative">
        <img class="w-[211px] h-[48px] bg-transparent opacity-100" src="@/assets/images/icons/TestLogo.svg"
            alt="Test Logo">
        <div id="navitems" class="flex items-center space-x-10">
            <div v-for="item in navItems" :key="item.title" :class="[
                'flex items-center space-x-2',
                item.title === 'Patients' ? 'bg-[#01F0D0] rounded-full w-[122px] h-[41px] justify-center' : 'w-[88px] h-[19px]'
            ]">
                <img :src="item.logo" alt=""
                    :style="{ width: `${item.style.width}px`, height: `${item.style.height}px` }">
                <p class=" text-[14px] leading-[19px] font-normal text-[#072635]">{{ item.title }}</p>
            </div>
        </div>
        <div class="flex items-center">
            <div class="flex items-center space-x-2 mr-[12px] w-[181px] h-[44px] opacity-100">
                <img src="@/assets/images/person/swd.png" alt="" class="w-[44px] h-[44px]">
                <div class="flex flex-col justify-center">
                    <p class="text-[14px] leading-[19px] font-normal text-[#072635]">Dr. Jose Simmons</p>
                    <p class="text-[14px] leading-[19px] font-normal text-[#707070]">General Practitioner</p>
                </div>
            </div>
            <div class="flex items-center space-x-4 mr-[32.24px] border-l border-gray-400 h-[44px] pl-4">
                <img class="w-[19px] h-[20px] bg-transparent opacity-100" src="@/assets/images/icons/settings.svg"
                    alt="Settings">
                <img class="w-[4px] h-[18px] bg-transparent opacity-100" src="@/assets/images/icons/dropdown.svg"
                    alt="Dropdown">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBarComponent',
    data() {
        return {
            navItems: [
                {
                    logo: require('@/assets/images/icons/overview.png'),
                    title: 'Overview',
                    style: {
                        width: '16',
                        height: '17'
                    }
                },
                {
                    logo: require('@/assets/images/icons/patient.png'),
                    title: 'Patients',
                    style: {
                        width: '24',
                        height: '17'
                    }
                },
                {
                    logo: require('@/assets/images/icons/schedule.png'),
                    title: 'Schedule',
                    style: {
                        width: '15',
                        height: '17'
                    }
                },
                {
                    logo: require('@/assets/images/icons/message.png'),
                    title: 'Message',
                    style: {
                        width: '19',
                        height: '17'
                    }
                },
                {
                    logo: require('@/assets/images/icons/transaction.png'),
                    title: 'Transaction',
                    style: {
                        width: '22',
                        height: '17'
                    }
                }
            ]
        }
    }
}
</script>

<style scoped></style>
