<template>
  <div>
    <div class="block">
      <div class="title">{{ todo.title }}</div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        type="text"
        v-model="todo.text"
      ></textarea>
    </div>
    <div class="wrapper">
      <b-button :to="{ name: 'main' }">Закрыть</b-button>
      <b-button variant="primary" v-on:click="editTodo">Сохранить</b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  data() {
    return {
      todo: null,
    };
  },
  created() {
    const todo = this.todos.find((todo) => todo.id == this.$route.params.id);
    if (todo) {
      this.todo = todo;
    }
  },
  methods: {
    editTodo() {
      this.$store.dispatch("editTodo", {
        id: this.todo.id,
        text: this.todo.text,
      });
      this.$router.push("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  border: 1px solid #ccc;
  width: 100%;
  margin-bottom: 15px;
  text-align: left;
  padding-left: 10px;
}
textarea {
  width: 100%;
  padding-left: 10px;
  margin-bottom: 15px;
}
.wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
