<template>
    <div class="main_view">
        <ChatWindow></ChatWindow>
    </div>
</template>

<script setup>
import ChatWindow from '@/components/ChatWindow.vue';
</script>

<style lang="scss">
    @import '../colors.scss';
    

    .main_view{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $color_6;  
    }
</style>