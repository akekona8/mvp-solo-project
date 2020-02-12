<template>
  <div>
    <h2>Your memories:</h2>
    <br />
    <div class="results">
      <div>
        <p v-for="travelog in travelogs" :key="travelog.id">
          <span class="date">{{ travelog.year + "/" + travelog.month }}</span>
          {{ " in " + travelog.country }}<br />
          {{ travelog.city + " " + travelog.favorite_memory }}<br />
          {{ "  with " + travelog.people }}
          {{ check(travelog) }}
        </p>
      </div>
      <p v-for="newLog in this.newLogs" :key="newLog.id">
        <span class="date">{{ newLog.year + "/" + newLog.month }}</span>
        {{ " in " + newLog.country }}<br />
        {{ newLog.city + " " + newLog.favorite_memory }}<br />
        {{ "  with " + newLog.people }}
        {{ check(this.newLogs) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddLog",
  components: {},
  props: { newLogs: Array },
  methods: {
    check(log) {
      console.log({ log });
    }
  },
  computed: {
    travelogs() {
      return this.$store.state.travelogs;
    }
    // newLogs() {
    //   return this.$store.state.newLogs;
    // }
  }
};
</script>

<style>
h2 {
  font: 400 30px/1.5 "Pacifico", Helvetica, sans-serif;
  text-align: center;
}
.results {
  background-color: rgba(185, 185, 185, 0.616);
  padding: 15px;
  border: 5px solid black;
}
.date {
  font-size: 20px;
  font-weight: bold;
}
</style>
