<template>
  <div class="chat_window">
    <div class="user_info_bar">
      <h1 v-if="!user">Chatting made easy.</h1>
      <div v-if="!user" class="join_us">
        <h1 class="join_us_text">Join us!</h1>
        <button v-if="!user" @click="signIn()" class="btn sign_in">Sign in</button>
      </div>
      <div v-if="user" class="user_info">
        <img :src="user.photoURL" class="user_icon"/> 
        <!-- make new component for navbar? -->
      </div>
      <img v-if="user" @click="signOutUser()" :src="signOutImage" class="sign_out_icon"/>
      <!-- <button v-if="user" @click="signOutUser()" class="btn sign_out">Sign out</button> -->
    </div>
    <ConversationComponent v-if="user"></ConversationComponent>  
    <SendMessageComponent v-if="user"></SendMessageComponent>
  </div>
</template>

<script setup>
 import SendMessageComponent from './SendMessageComponent.vue';
 import ConversationComponent from './ConversationComponent.vue';
 import signOutImage from '../assets/signoutimage.png';
 import { useAuth } from '@/firebase';

 const { user, signIn, signOutUser } = useAuth();

</script>

<style lang="scss">
    @import '../colors.scss';

    

    .chat_window{
        width: 46%;
        height: 80%;
        // background-image: linear-gradient(to bottom,#b3cde06c,rgba(68, 95, 153, 0.226)), url("../assets/backgroundimage3.jpg");
        background: url('../assets/chatimage.png') no-repeat center;
        background-color: $color_5;
        border-radius: $borders;
        display: flex;
        flex-direction: column;
        
        .user_info_bar{
          width: 100%;
          height: 65px;
          display: flex;
          justify-content: space-between;
          padding: 20px;
          align-items: center;
          background: linear-gradient(#005a96ea, #03396cd5);
          border-top-left-radius: inherit;
          border-top-right-radius: inherit;
          color: $color_6;
          
          h1{
            font-size: $font_1;
          }
          
          .btn{
            width: 95px;
            height: 35px;
            font-size: $font_3;
            border: solid 1px $color_4;
            border-radius: $borders;
            background-color: $color_6;
            color: $color_3;
            box-shadow: 1.5px 1.5px 5px .5px rgba(173, 173, 173, 0.212);
            transition: all .25s ease-in;
            cursor: pointer;

            &:hover{
              opacity: .95;
            }
          }

          .sign_out_icon{
            width: 35px;
            background-color: white;
            border-radius: $borders;
            cursor: pointer;

            &:hover{
              background-color: rgb(255, 245, 245);
            }
          }

          .join_us{
            display: flex;
            gap: 20px;
            align-items: center;
          }

          .user_info{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 20px;

            .user_icon{
              width: 50px;
              border-radius: 50%;
            }
          }
        }
    }

    @media screen and (max-width: 1250px){
      .chat_window{
        .user_info_bar{
          width: 100%;
          height: 65px;
          display: flex;
          justify-content: space-between;
          padding: 20px;
          align-items: center;   
          
          h1{
            font-size: $font_2;
          }

          .btn{
            width: 75px;
            height: 30px;
            font-size: $font_4;
          }
        }
      }    
    }
      
    @media screen and (max-width: 1000px){
      .chat_window{
        .user_info_bar{
          .join_us_text{
            display: none;
          }  
        }
      }
      

    }

    @media screen and (max-width: 850px){
      .chat_window{
        width: 100%;
        height: 100%;

        .user_info_bar{
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;

          .join_us_text{
            display: block;
          }  
        }
      }
    }

    @media screen and (max-width: 490px){
      .chat_window{
        .user_info_bar{
          .join_us_text{
            display: none;
          }
        }
      }
    }

</style>