<template>
    <div>
        <transition-group name="fade" tag="h2">
            <h2>
                <li v-for="colleague in newList" :key="colleague.id" class="fade-item">
                    {{ colleague.name }} - {{ colleague.age }}
                </li>
            </h2>
        </transition-group>
    </div>
  </template>
  
  <script>
  export default {
    props: ["newList"],
  };
  </script>

  <style scoped>
    ul {
        list-style-type: none;
        box-shadow: 0 2px 8px rgba(0,0,0,0.26);
        margin: 3rem auto;
        border-radius: 10px;
        padding: 1 rem;
        width: 90%;
        max-width: 40rem;
    }

    .fade-item {
    transition: opacity 0.5s;
    }

    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.5s;
    }

    .fade-enter,
    .fade-leave-to {
    opacity: 0;
    }
  </style>