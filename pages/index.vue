<template>
  <!-- Navigation -->
  <div>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          {{posts}}
          <div class="post-preview" v-for="post in posts">
            <a v-bind:href="'/posts/'+ post.post_id">
              <h2 class="post-title">
                {{post.title}}
              </h2>
              <h3 class="post-subtitle">
                {{post.post}}
              </h3>
            </a>
            <p class="post-meta">Posted by
              <a href="#">Start Bootstrap</a>
              on July 8, 2017</p>
          </div>
          
          <hr>
          <!-- Pager -->
          <div class="clearfix">
            <a class="btn btn-secondary float-right" href="#">Older Posts &rarr;</a>
          </div>
        </div>
      </div>
    </div>

    <hr>
    <footer/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: []
    }
  },
  created () {
    axios.get(`http://localhost:8000/api/postList`)
      .then(response => {
        console.log(response)
        // JSON responses are automatically parsed.
        this.posts = response.data
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>
