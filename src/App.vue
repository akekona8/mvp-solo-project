<template>
  <div id="app">
    <div class="header-container">
      <h1>Travelog</h1>
    </div>
    <link
      href="http://fonts.googleapis.com/css?family=Pacifico"
      rel="stylesheet"
      type="text/css"
    />
    <p class="intro">Welcome back to your personal memory lane!</p>
    <GoogleMap />
  </div>
</template>

<script>
import GoogleMap from "./components/GoogleMap";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    GoogleMap
  },
  data() {
    return {
      loading: true,
      error: false
    };
  },
  async mounted() {
    try {
      await this.retrieveData();
      this.loading = false;
    } catch (err) {
      this.loading = false;
      this.error = true;
    }
  },
  methods: {
    ...mapActions(["retrieveData"])
  },
  computed: {
    travelog() {
      console.log("inside of App", this.$store.state.travelog);
      return this.$store.state.travelog;
    },
    travelogs() {
      console.log("whole log", this.$store.state.travelogs);
      return this.$store.state.travelog;
    }
  }
};
</script>
<style>
#app {
  padding: 10px;
  margin: 10px;
}
.intro {
  margin-top: 10px;
}
h1 {
  background-color: black;
  font: 400 65px/1.5 "Pacifico", Helvetica, sans-serif;
  color: white;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1), 7px 7px 0px rgba(0, 0, 0, 0.05);
}
</style>
