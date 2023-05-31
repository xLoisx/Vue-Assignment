import { createApp } from 'vue'
import App from './App.vue';
import ColleagueDetails from './components/ColleagueDetails.vue';
import SecondList from './components/SecondList.vue';


const app = createApp(App);

app.component('second-list', SecondList);
app.component('colleague-details', ColleagueDetails)

app.mount('#app');