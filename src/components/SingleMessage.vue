<template>
  <div class="single_message">
    <img class="user_icon" :src="messageInfo.photoUrl"/>
    <div class="text_message">
      <p>{{ messageInfo.text }}</p>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from '@/firebase';
import { ref, nextTick, watch } from 'vue'

const bottom = ref(null);

const props = defineProps({
  messageInfo: {
    userId: String,
    text: String,
    sender: String,
    photoUrl: String
  }
})


</script>

<style lang="scss">
@import '../colors.scss';


    .single_message{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 5px;
        margin: 5px;
       
        .text_message{
          width: 35%;
          min-height: 38px;
          background-color: $color_6;
          color: rgba(0, 0, 0, 0.87);
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          border-radius: $borders;
          box-shadow: 1.5px 1.5px 5px .5px rgba(173, 173, 173, 0.212);
          font-size: $font_4;
        }
        
        .user_icon{
          width: 35px;
          border-radius: 50%;
        }
    }
</style>