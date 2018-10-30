<template>
  <div class="a__top">
    <router-link to="/create">作成する</router-link>

    <table border="1">
      <tr>
        <th>ID</th>
        <th>名前</th>
        <th>年齢</th>
        <th> </th>
      </tr>
      <tr
        v-for="user in getUsers"
        :key="user.id"
      >
        <td>
          <router-link :to="`edit/${user.id}`">{{ user.id }}</router-link>
        </td>
        <td>{{ user.name}}</td>
        <td>{{ user.age}}</td>
        <td>
          <button type="button"
            @click="deleteUser(user.id)"
         >
            削除
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "Top",
  computed: {
    ...mapGetters("users", ["getUsers"])
  },
  methods: {
    ...mapActions("users", ["deleteUser"])
  }
}
</script>

<style lang="scss" scoped>
@import "./Top";
</style>
