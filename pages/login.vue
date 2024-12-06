<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Welcome back!</h2>

          <Notification :message="error" v-if="error"/>

          <form method="post" @submit.prevent="login" disabled>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  type="email"
                  class="input"
                  name="email"
                  v-model="email"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="password"
                />
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth" @click="login()">Log In</button>
            </div>
          </form>
          <div class="has-text-centered" style="margin-top: 20px">
            <p>
              Don't have an account? <nuxt-link to="/register">Register</nuxt-link>
            </p>
          </div>
        </div>
      </div>
       <div class="center">
        <button class="button" @click="loginWithGithub()">Login with Github</button>
        <button class="button" @click="loginWithGoogle()">Login with Google</button>
        <button class="button" @click="loginWithFacebook()">Login with Facebook</button>
  </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification'

export default {
    middleware: 'guest',
  components: {
    Notification,
  },

  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
          username: 'johan.remy@graines-digitales.online',
          password: 'test_1234'
          }
        })

        // this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    async loginWithGithub() {
      this.$auth.loginWith('github')
      .then(() => console.log('Logged In!'))
      .catch(e => {
        console.log('Logged Error');
      })
    },
    async loginWithGoogle() {
      this.$auth.loginWith('google')
      .then(() => console.log('Logged google In!'))
      .catch(e => {
        console.log('Logged google Error');
      })
    },
    async loginWithFacebook() {
      this.$auth.loginWith('facebook')
      .then(() => console.log('Logged facebook In!'))
      .catch(e => {
        console.log('Logged facebook Error');
      })
    }
  }
}
</script>