<template>
  <div class="a__create">
    <form
      @submit.prevent="addUser(form)"
    >
      <h3>ユーザーを追加</h3>
      <table>
        <tr>
          <td>名前</td>
          <td>
            <input 
              type="text"
              v-model.trim="form.name"
           >
          </td>
       </tr>
       <tr>
        <td>年齢</td>
        <td>
          <input 
            type="text" 
            v-model.trim="form.age"
         >
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <input type="submit">
        </td>
      </tr>
      </table>
    </form>

    <router-link to="/">戻る</router-link>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Create",
  data () {
    return {
      form : {
        name: "",
        age: ""
      }
    };
  },
  methods: {
    ...mapActions("users", ["addUser"])
  },
}
</script>

<style lang="scss" scoped>
@import "./Create";
</style>
