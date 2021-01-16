<template>
  <div class="hj">
    <h1>This is an HJ page</h1>

    <div>
      <div id="box" class="box">
        <div id="timerBox" class="timerBox">
          {{ formatTime }}
        </div>
        <div class="btnBox">
          <i @click="startbtn" class="fa fa-play" aria-hidden="true"></i>
          <i @click="pausebtn" class="fa fa-pause" aria-hidden="true"></i>
          <i @click="stopbtn" class="fa fa-stop" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <br />
    <br />
    <h1>전구1</h1>

    <div v-if="light1 === true">켜짐</div>
    <div v-else >꺼짐</div>

    <h1>전구2</h1>

    <div v-if="light2 === true">켜짐</div>
    <div v-else>꺼짐</div>
    <h1>전구3</h1>

    <div v-if="light3 === true">켜짐</div>
    <div v-else>꺼짐</div>
  
  </div>
</template>

<script>

export default {
  name: "HJ",
  data() {
    return {
      timer: null,
      time: 0,
      starFlag: true,
      timeString: null,
    };
  },
  timeLight() {
    return {
      light1: false,
      light2: false,
      light3: false,
    };
  },
  //ES6
  
  computed: {
    formatTime() {
      var min = Math.floor(this.time / 60);
      var hour = Math.floor(min / 60);
      var sec = this.time % 60;
      min = min % 60;
      var timeString =
        String(hour).padStart(2, "0") +
        ":" +
        String(min).padStart(2, "0") +
        ":" +
        String(sec).padStart(2, "0");
      // console.log(timeString);
      return timeString;
      // return "sss"
    },
  },
  methods: {
    startbtn() {
      this.timer = setInterval(() => {
        this.time++;

        if (this.time % 3 == 0) {
          this.light1 = !this.light1;
          console.log(this.light1);
        }

        if (this.time % 7 == 0) {
          this.light2 = !this.light2;
        }
        if (this.time % 10 == 0) {
          this.light3 = !this.light3;
        }
      }, 1000);
    },
    stopbtn() {
      clearInterval(this.timer);
    },
    pausebtn() {
      this.time = 0;
    },
  },
};
</script>

<style>
.yellow1 {
  color: yellow;
}

.black1 {
  color: black;
}

.box {
  width: 200px;
  height: 200px;
}

.timerBox {
  width: 200px;
  outline: 2px solid black;
}

.timerBox .time {
  font-size: 30pt;
  color: #4c4c4c;
  text-align: center;
  font-family: sans-serif;
}

.btnBox {
  margin: 20px auto;
  text-align: center;
}

.btnBox .fa {
  margin: 0px 5px;
  font-size: 30pt;
  color: #faed7d;
  cursor: pointer;
}
</style>