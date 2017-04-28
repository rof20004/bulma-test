<template>
  <div class="login">
    <div class="section">
      <div class="container">
        <div class="box">
        <form @submit.stop.prevent="execute">
          <div class="columns is-mobile">
            <div class="column">
              <div class="field">
                <label for="" class="label">Login</label>
                <p class="control has-icons-left">
                  <input type="text" class="input" :disabled="isLoading">
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label for="" class="label">Password</label>
                <p class="control has-icons-left">
                  <input type="password" class="input" :disabled="isLoading">
                  <span class="icon is-small is-left">
                    <i class="fa fa-user-secret"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column">
              <button :class="['button', 'is-primary', {'is-loading': isLoading}]" @click="isLoading = !isLoading">Salvar</button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    execute () {
      console.log('Executou!')
    }
  }
}
</script>

<style scoped>
</style>
