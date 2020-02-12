<template>
  <div>
    <div>
      <form id="new-log">
        <input class="form-ele" type="text" v-model="year" placeholder="Year" />
        <input
          class="form-ele"
          type="text"
          v-model="month"
          placeholder="Month"
        />
        <input
          class="form-ele"
          type="text"
          v-model="favorite_memory"
          placeholder="Favorite memory"
        />
        <input
          class="form-ele"
          type="text"
          v-model="people"
          placeholder="Who were you with?"
        />
      </form>
      <label>
        <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
        <button class="button-add-pin" @click="onSubmit">
          Add
        </button>
      </label>
      <br />
      <br />
      <div class="map-container">
        <gmap-map
          class="map"
          :center="center"
          :zoom="5"
          style="width:80%;  height: 350px;"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center = m.position"
          ></gmap-marker>
        </gmap-map>
      </div>
    </div>
    <AddLog class="log-display" />
  </div>
</template>

<script>
import AddLog from "./AddLog";

export default {
  name: "GoogleMap",
  components: {
    AddLog
  },
  data() {
    return {
      center: { lat: 36.2, lng: 138.25 },
      markers: [],
      places: [],
      currentPlace: null,
      traveLogs: [],
      year: "",
      month: "",
      country: "",
      city: "",
      favorite_memory: "",
      people: "",
      newLogs: []
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    addLog: function() {
      console.log("before", this.newLogs);
      let newId = this.$store.state.travelogs.length + this.newLogs.length + 1;
      const newLog = {
        id: newId,
        year: this.year,
        month: this.month,
        country: this.country,
        city: this.month,
        favorite_memory: this.favorite_memory,
        people: this.people,
        photo_url: null,
        latitude: null,
        longitude: null
      };
      this.newLogs.push(newLog);
      console.log("after", this.newLogs);
    },
    onSubmit: function() {
      this.addMarker();
      this.addLog();
      const inputs = document.getElementsByClassName("form-ele");
      [...inputs].map(e => (e.value = null));
    }
  }
};
</script>

<style>
#new-log {
  margin: 3px;
}
.button-add-pin {
  margin-left: 5px;
}
.map {
  display: flexbox;
}
.log-display {
  margin-top: 30px;
}
.form-ele {
  margin-left: 2px;
  padding: 5px;
  height: 30px;
  width: 180px;
}
.map-container {
  display: flexbox;
  align-items: center;
  justify-content: center;
}
</style>
