const code = {};

code.default = `<template>
        <ivue-progress
        :percent="25"
        :strokeColor="['#5AB2FF', '#5B8EFF']"
        boxShadowColor="#5B8EFF"
    ></ivue-progress>
        <ivue-progress :percent="25" />
        <ivue-progress :percent="45" status="active" />
        <ivue-progress :percent="65" status="wrong" />
        <ivue-progress :percent="100" />
        <ivue-progress :percent="25" hide-info />
</template>
<script>
    export default {

    }
</script>
`;


code.animation = `<template>
    <h4>动画进度条</h4>
    <div>
        <ivue-progress :percent="45" indeterminate></ivue-progress>
        <ivue-progress :percent="100" indeterminate :duration="5"></ivue-progress>

        <ivue-progress
            indeterminate
            :duration="10"
            :percent="25"
            :strokeColor="['#5AB2FF', '#5B8EFF']"
            boxShadowColor="#5B8EFF"
        ></ivue-progress>
    </div>
</template>
`;

code.percentage = `<template>
    <h4>百分比内显</h4>
    <div>
        <ivue-progress :percent="25" :stroke-width="20" text-inside></ivue-progress>
        <ivue-progress :percent="45" :stroke-width="20" status="active" text-inside></ivue-progress>
        <ivue-progress :percent="65" :stroke-width="20" status="wrong" text-inside></ivue-progress>
        <ivue-progress :percent="25" :stroke-width="20" status="warning" text-inside></ivue-progress>
        <ivue-progress :percent="100" :stroke-width="20" text-inside></ivue-progress>
    </div>
</template>
`;

code.vertical = `<template>
    <h4>垂直方向</h4>
    <div class="content">
        <ivue-progress :percent="50" vertical></ivue-progress>
        <ivue-progress :percent="45" status="active" vertical></ivue-progress>
        <ivue-progress :percent="25" status="wrong" vertical></ivue-progress>
        <ivue-progress :percent="25" status="warning" vertical></ivue-progress>
        <ivue-progress :percent="100" vertical></ivue-progress>
        <ivue-progress :percent="25" hide-info vertical></ivue-progress>
    </div>
</template>
`;
export default code;
