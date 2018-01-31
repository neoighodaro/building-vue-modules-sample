<template>
  <div class="chat-message">
    <div class="chat-side--bar">
      <user-pop :user="user" :main="user.name"></user-pop>
    </div>
    <div class="chat-inner--sec"></div>
  </div>
</template>
<script>
export default {
  data: function(){
    return {
      user: {
        name: 'Neo Ighodaro',
        username: 'neoighodaro',
        email: 'neo@gmail.com',
        profile: {
          profile_image: 'https://'
        }
      }
    }
  }
}
</script>

<style>
.chat-message{
  width: 100%;
  border:1px solid #222222;
  padding: 4px;
  min-height: 50px;
  margin-top:12px;
}

.chat-side--bar{
  width:20%;
}

.chat-inner--sec{
  width: 80%;
}
</style>

