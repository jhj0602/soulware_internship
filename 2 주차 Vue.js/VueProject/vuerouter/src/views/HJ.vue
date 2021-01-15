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
    <!-- <h3>전구 1</h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-lightbulb"
        viewBox="0 0 16 16" id='light1'>
        <path
            d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
    </svg>
    <h3>전구 2</h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-lightbulb"
        viewBox="0 0 16 16" id='light2'>
        <path
            d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
    </svg>
    <h3>전구 3</h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-lightbulb"
        viewBox="0 0 16 16" id='light3'>
        <path
            d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
    </svg>
    <h3>전구 1,2,3 켜지는 시간</h3>
    <p id="lightAll">다 켜졌어요 00:00:00</p>
    <p id="min3">3분이 지났을때 00:00:00</p> -->
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
  timeSplit() {
    return {
      // hour: 0,
      // min: 0,
      // sec: 0,
      //   timeString: null,
    };
  },
  //ES6
  computed: {
    formatTime() {
      var min = Math.floor(this.time / 60);
      var hour = Math.floor(min / 60);
      var sec = this.time % 60;
      min = min % 60;
      var pp = String(hour).padStart(2, '0') + ":" + String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
      console.log(pp);
      return pp;
      // return "sss"
    },
  },
  methods: {
    startbtn() {
      this.timer = setInterval(() => {
        this.time++;
        // generateStopwatchText(this.time);
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