<template>
    <h4>Autosize 为 true</h4>
    <ivue-input v-model="value" type="textarea" :autoHeight="true" placeholder="Enter something..."></ivue-input>
    <h4>Autosize 指定最小行数和最大行数</h4>
    <ivue-input
        v-model="value"
        type="textarea"
        :autoHeight="{minRows: 3,maxRows: 5}"
        placeholder="Enter something..."
    ></ivue-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
