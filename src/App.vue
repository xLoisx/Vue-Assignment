<template>
  <section>
    <header>
      <h2>Colleagues</h2>
    </header>
    
    <ul>
      <li>
        <colleague-details
        v-for="colleague in colleagues"
        :key="colleague.id"
        :name="colleague.name"
        :age="colleague.age"
        @add-to-second-list="addColleagueToSecondList"
        ></colleague-details>
      </li>
    </ul>

    <header>
        <h2>Second List</h2>
    </header>

    <ul>
      <li>
        <second-list :new-list="newList"></second-list>
      </li>
    </ul>
  </section>
</template>

<script>
import ColleagueDetails from "./components/ColleagueDetails.vue";
import SecondList from "./components/SecondList.vue";
export default {
  
  components: {
    ColleagueDetails,
    SecondList,
  },

  data () {
    return {
      colleagues: [{
      "id": 1,
      "name": "Joseph", 
      "age": 26
      }, {
      "id": 2,
      "name": "Daniel", 
      "age": 38
      }, {
      "id": 3,  
      "name": "Joshua", 
      "age": 50
      }, {
      "id": 4,
      "name": "Yuri", 
      "age": 42
      }, {
      "id": 5,
      "name": "Rose", 
      "age": 25
      }, {
      "id": 6,
      "name": "Maria", 
      "age": 29
      }, {
      "id": 7,
      "name": "Mark", 
      "age": 40
      }, {
      "id": 8,
      "name": "Pauline", 
      "age": 38
      }, {
      "id": 9,
      "name": "Jasmine", 
      "age": 38
      }, {
      "id": 10,
      "name": "Angel", 
      "age": 39
        }],
      newList: []
      }
    },
      methods: {
    addColleagueToSecondList(colleague) {
      this.newList = [...this.newList, colleague]; 
      const index = this.colleagues.findIndex((c) => c.name === colleague.name);
      if (index !== -1) {
        this.colleagues.splice(index, 1);
      }
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }

  header {
    box-shadow: 0 2px 8px rgba(0,0,0,0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1 rem;
    background-color: #88033e;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
  }

  ul {
    list-style-type: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1 rem;
    width: 90%;
    max-width: 40rem;
  }
</style>
