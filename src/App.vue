<template>

  <div id="app">
      <resize-observer @notify="adapt" />
      <div id="home">
          <div  class="contain" id="contain">
              <video loop muted autoplay class="video-background" id="video-background">
                  <source src="https://static.videezy.com/system/resources/previews/000/002/313/original/electric-bulb-hd-stock-video.mp4" />
                  <img src="placeholder.jpg" alt="placeholder" />
              </video>
              <div class="overlay">
                  <div class="title">

                  </div>
              </div>
          </div>
          <div class="animation-container">
  <svg viewBox="0 205 600 600">
    <symbol id="text">
      <text text-anchor="middle" x="50%" y="50%">SICROM</text>
    </symbol>
    <use xlink:href="#text" class="text"></use>
    <use xlink:href="#text" class="text"></use>
    <use xlink:href="#text" class="text"></use>
    <use xlink:href="#text" class="text"></use>
  </svg>
</div>
      </div>
    <router-view/>
    <homepage></homepage>
  </div>

</template>

<script>
import Homepage from './components/Homepage.vue'
export default {
  name: 'App',
  components: {Homepage},
  data () {
        return {
          data:true
        }
    },
    mounted:function(){
        this.adapt()//method1 will execute at pageload
    },
    methods: {
        adapt(){
            // var contain = document.getElementById('contain');
            // var video = document.getElementById('video-background');
            // var contain_width = contain.offsetWidth;
            // var contain_height = contain.offsetHeight;
            // video.style.height = 'auto';
            // video.style.width = contain_width +100+ 'px';
            // if(video.offsetHeight < contain_height) {
            //     video.style.height = contain_height + "px";
            //     video.style.width = 'auto';
            // }
            // this.adapt()
            var tab = [1,2,3,4,3,4,5]
            var sum =8
            var results = []

            for( let i in tab){
                var tmp = sum - tab[i]
                var count = {};
                // tab.forEach(function(x) {count[x] = ((count[x] || 0 ) + 1) === tmp  })
                // console.log(count)
                if(tab.includes(tmp)){
                    console.log(tmp + " + " + tab[i])
                }
            }

        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.contain {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.contain .video-background,
.contain .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.contain .overlay {
  background: repeating-linear-gradient(0deg, rgba(0, 0, 255, 0.3), transparent);
  background-size: 100% 5px;
}
.contain .title {
  font-size: 1.25em;
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 100%;
  width: 15em;
  height: 15em;
  color: #FFF;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  top: calc(50% - 7.5em);
  left: calc(50% - 7.5em);
  display: table;
}
.contain .title h1 {
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 2px;
  mix-blend-mode: overlay;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
}


/********SVG ********/
.animation-container {
  font-weight: 800;
  font-size: 8em;
  opacity: 1;
}

.animation-container svg {
  width: 90%;
  display: block;
  top: 50%;
  margin: -8% 0 0 5%;
  position: fixed;
}

.animation-container svg .text {
  width: 100%;
  fill: transparent;
  stroke-width: 1;
  stroke-linejoin: round;
  stroke-dasharray: 90,310;
  stroke-dashoffset: 0;
  -webkit-animation: text 8s infinite linear;
  animation: text 8s infinite linear;
}

.animation-container svg .text:nth-child(4n + 1) {
  stroke: #999;
  -webkit-animation-delay: -2s;
  animation-delay: -2s;
}

.animation-container svg .text:nth-child(4n + 2) {
  stroke: #999;
  -webkit-animation-delay: -4s;
  animation-delay: -4s;
}

.animation-container svg .text:nth-child(4n + 3) {
  stroke: #999;
  -webkit-animation-delay: -6s;
  animation-delay: -6s;
}

.animation-container svg .text:nth-child(4n + 4) {
  stroke: #999;
  -webkit-animation-delay: -8s;
  animation-delay: -8s;
}

@-webkit-keyframes text {
  100% {
    stroke-dashoffset: -400;
  }
}

</style>
