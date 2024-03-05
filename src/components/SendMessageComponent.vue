<template>
  <div class="message_bar">
    <input v-model="newMessage" @keyup.enter="sendNewMessage" type="text"  class="message_input"/>
    <img :src="sendImage" @click="sendNewMessage" class="send_message_icon" :class="{'send_not_active': !newMessage}"/>
    <!-- <button @click="sendNewMessage">Send</button> -->
  </div>
</template>

<script setup>
import { sendMessage, useAuth } from "@/firebase";
import { ref } from 'vue'
import sendImage from '../assets/sendbuttonimage.png';

const { user } = useAuth();

const newMessage = ref('');

function sendNewMessage(){
  if(newMessage.value == '') return; //covering enter click to submit problem

  const message = {
    userId: user.value.uid,
    sender: user.value.displayName,
    text: firstLetterUpperCase(newMessage.value),
    photoUrl: user.value.photoURL
  }


  sendMessage(message);
  newMessage.value = '';
}

function firstLetterUpperCase(word){
  const newWord = word[0].toUpperCase() + word.slice(1);
  return newWord;
}

</script>

<style lang="scss">
@import '../colors.scss';


    .message_bar{
        height: 48px;
        display: flex;
        justify-content: space-between;
        background-color: $color_5;
        gap: 10px;
        padding: 5px;

        .message_input{
            width: 100%;
            border-radius: $borders;
            border: solid .8px $color_4;
            padding: 5px;

            &:focus{
                outline: 1px solid $color_3;
            }
        }
        
        .send_message_icon{
          width: 40px;
          height: 40px;
          margin-right: 10px;
          cursor: pointer;
          border-radius: 30%;
          padding: 2px;

          &:hover{
            background-color: #e2dedeec;
          }
        }

        .send_not_active{
          opacity: .5;
          pointer-events: none;
          cursor: none;
        }
    }
</style>