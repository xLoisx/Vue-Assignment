<template>
    <div>
      <h2>{{ name }} - {{ age }}</h2>
      <button @click="addToSecondList">Add to List</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ["name", "age"],
    methods: {
      addToSecondList() {
        this.$emit("add-to-second-list", {
          name: this.name,
          age: this.age,
        });
      },
    },
  };
  </script>
  