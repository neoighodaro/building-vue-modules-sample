<template>
  <div class="chat-main">
    <Message/>
    <Message/>
    <Message/>
  </div>
</template>
<script>
import Message from './Message'
export default {
  components:{
    Message
  }
}
</script>

<style>
.chat-main{
  width:500px;
  height: auto;
  box-shadow: 1px 1px 1px #202020;
  padding: 12px;
  margin:0 auto;
}

</style>
