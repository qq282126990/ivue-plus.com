<template>
    <div>
        <ivue-circular class="circular" :stroke-color="color" :percent="percent">
            <span class="circular-text">{{ `${percent}%` }}</span>
        </ivue-circular>
        <div>
            <ivue-button class="button" @click="handleAdd">add</ivue-button>
            <ivue-button class="button" @click="handleMinus">remove</ivue-button>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const percent = ref(0);

const color = computed(() => {
    let color = '#D7FCF2';

    if (percent.value == 100) {
        color = '#5BC0BF';
    }

    return color;
});

const handleAdd = () => {
    if (percent.value >= 100) {
        return false;
    }

    percent.value += 10;
};

const handleMinus = () => {
    if (percent.value <= 0) {
        return false;
    }

    percent.value -= 10;
};
</script>

<style scoped>
.circular {
    margin-right: 20px;
}

.circular-text {
    font-size: 24px;
}

.button {
    margin-top: 10px;
    margin-right: 10px;
}
</style>
