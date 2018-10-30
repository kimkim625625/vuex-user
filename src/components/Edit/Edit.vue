<template>
  <div class="a__edit">
    <form
      @submit.prevent="updateUser(user)"
    >
      <h3>編集ページ</h3>
      <tr>
        <td>名前</td>
        <td>
          <input 
            type="text"
            v-model.trim="user.name"
         >
        </td>
      </tr>
      <tr>
        <td>年齢</td>
        <td>
          <input
            type="text"
            v-model.trim="user.age"
         >
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <input 
            type="submit"
            value="更新する" 
          />
        </td>
      </tr>
    </form>

    <router-link to="/">戻る</router-link>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "Edit",
  data () {
    return {
      user: ""
    }
  },
  computed: {
    ...mapGetters("users", ["getUser"])
  },
  created () {
    setTimeout( () => {
      const id = this.$route.params.id;
      this.user = this.getUser(id);
    }, 0);
  },
  methods: {
    ...mapActions("users", ["updateUser"])
  }
}
</script>

<style lang="scss" scoped>
@import "./Edit";
</style>
