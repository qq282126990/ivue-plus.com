<template>
    <div class="elevation-demo">
        <div
            :class="`ivue-content ivue-elevation-${index}`"
            v-for="(item, index) in length"
            :key="index"
        >{{ index }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const length = ref(25);
</script>

<style lang="scss" scoped>
.elevation-demo {
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
}

.ivue-content {
    width: 100px;
    height: 100px;
    margin: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
