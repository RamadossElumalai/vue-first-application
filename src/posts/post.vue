<template>
<div>
  <div>
    <label>Title</label>
    <input type="text" id="title" v-model="post.title">
  </div>
  <div>
    <label>Body</label>
    <input type="text" id="body" v-model="post.body">
  </div>
  <button type="button" class="btn btn-primary" @click="onSubmit()">Save</button>
</div>
</template>

<script lang='ts'>
import { Vue } from 'vue-class-component'
import Service from '../services/service'
import { Post } from '../posts/post'
export default class PostList extends Vue {
  post: Post = {}
  onSubmit () {
    console.log(this.post)
    alert('button submitted')
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
@import'~bootstrap/dist/css/bootstrap.css'
</style>
