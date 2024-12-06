<template>
<div id="app">
<section class="section">
    <div class="container">
      <h1 class="title">Nuxt Auth</h1>
    </div>
</section>
</div>
</template>

<script>

export default {
  mounted() {
    console.log("this.$auth.user")
    console.log( this.$auth.user)
  },
  methods: {
    login() {
      this.$auth.loginWith('github')
      .then(() => console.log('Logged In!'))
      .catch(e => {
        console.log('Logged Error');
      })
    }
  }
}

</script>