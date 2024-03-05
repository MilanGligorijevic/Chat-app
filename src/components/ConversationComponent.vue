<template>
  <div class="conversation_field">
   <SingleMessage 
    :class="{'received_message': user.uid != message.userId}" 
    v-for="message in messages" 
    :key="message.id" 
    :messageInfo="message"
   />
   <div id="scroll_bottom"></div>
  </div>


</template>

<script setup>
import { useChat, useAuth } from "@/firebase";
import SingleMessage from "./SingleMessage.vue";
import { watch, ref, nextTick } from 'vue';

const messages = useChat();
const { user } = useAuth();

watch(messages, () => {
  nextTick(() => {
    var scrollElement = document.getElementById("scroll_bottom");
    scrollElement.scrollIntoView({
        behavior: "smooth"
    });
  })
})

</script>

<style lang="scss">
@import '../colors.scss';

    .conversation_field{
        background-color: $color_7;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        overflow-x: hidden;
        
    }
    .received_message{
      display: flex;
      justify-content: flex-start;
        .text_message{
          width: 35%;
          min-height: 38px;
          background-color: $color_4;
          color: rgba(0, 0, 0, 0.87);
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          border-radius: $borders;
          box-shadow: 1.5px 1.5px 5px .5px rgba(173, 173, 173, 0.212);
          font-size: $font_4;
        }
    }
    
</style>