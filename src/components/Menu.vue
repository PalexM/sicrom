<template>
    <div>
        <div @click="isOpen = !isOpen" v-bind:class="{ 'menu-icon close': isOpen, 'menu-icon open': !isOpen }">
            <span></span>
        </div>
        <ul v-bind:class="{ 'displayOff': isOpen }">
      		<li v-for="item in menu">
      			<a>{{item}}</a>
      		</li>
      	</ul>
    </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
        return {
          menu:{
              home:'Home',
              work: 'Our Work',
              contact: 'Contact'
          },
          isOpen : true,
        }
    },
    computed: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media only screen and (min-width : 1224px){
    div{
    	z-index: 1;
    	position: absolute;
    	width: 100%;
        margin-top: -100vh;
    }

     li{
    	 color: #950CFF;
    	 display: inline-block;
    	 font-size: 2.5vw;
    	 margin: 5vw;
     }
     a {
      position: relative;
      display: block;
      margin: 0 2px;
      padding: 0.625rem 1.25rem;
      text-transform: uppercase;
      overflow: hidden;
    }

     a:before {
       box-sizing: border-box;
       transform: translateX(100%);
       content: '';
       position: absolute;
       bottom: 0;
       left: 0;
       width: 99.5%;
       height: 2px;
       border-bottom: 2px solid transparent;
       border-left: 2px solid transparent;

    }
    a:after {
      box-sizing: border-box;
      transform: translateX(-100%);
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 99.5%;
      height: 2px;
      border-top: 2px solid transparent;
      border-right: 2px solid transparent;
    }
    a:hover {
      color: inherit;
      text-decoration: none;
    }

    a:hover:before {
      transition: .1s transform linear, .1s height linear .1s;
      transform: translateX(0);
      height: 100%;
      border-color: blue;
    }
    a:hover:after {
      transition: .1s transform linear .2s, .1s height linear .3s;
      transform: translateX(0);
      height: 100%;
      border-color:#AC4D05;
    }
}
@media only screen and (max-width : 1224px){
    div{
        margin-top: -95vh;
    }
     a {
      position: relative;
      display: block;
      margin: 0 2px;
      padding: 0.625rem 1.25rem;
      text-transform: uppercase;
      overflow: hidden;
    }

     a:before {
       box-sizing: border-box;
       transform: translateX(100%);
       content: '';
       position: absolute;
       bottom: 0;
       left: 0;
       width: 99.5%;
       height: 2px;
       border-bottom: 2px solid transparent;
       border-left: 2px solid transparent;

    }
    a:after {
      box-sizing: border-box;
      transform: translateX(-100%);
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 99.5%;
      height: 2px;
      border-top: 2px solid transparent;
      border-right: 2px solid transparent;
    }
    a:hover {
      color: inherit;
      text-decoration: none;
    }

    a:hover:before {
      transition: .1s transform linear, .1s height linear .1s;
      transform: translateX(0);
      height: 100%;
      border-color: blue;
    }
    a:hover:after {
      transition: .1s transform linear .2s, .1s height linear .3s;
      transform: translateX(0);
      height: 100%;
      border-color:#AC4D05;
    }

    ul{
        margin-top: 20px;
        margin-right:40px;
    }

    li{
        width:30%;
        display: table;
        margin: 0 auto;
    }
    /*
      menu icon css3
    */

    .menu-icon {
      position: relative;
      top: 0px;
      display: block;
      width: 4em;
      height: 4em;
      cursor: pointer;
      /* to center */
      margin: 0 auto;
      float: none;
      -webkit-transition: all 0.3s;
    	        transition: all 0.3s;
    }

    .menu-icon > span {
      position: absolute;
      top: 50%;
      display: inline-flex;
      width: 50%;
      height: 0.5em;
      margin-top: -0.5em;
      background-color: #e74c3c;
      border-radius: 3px;
    }

    .menu-icon > span:before,
    .menu-icon > span:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #e74c3c;
      border-radius: 3px;
      -webkit-transition: all 0.3s;
    	        transition: all 0.3s;
    }

    .menu-icon > span:before {
      -webkit-transform: translateY(-1em);
    	        transform: translateY(-1em);
    }

    .menu-icon > span:after {
      -webkit-transform: translateY(1em);
    	        transform: translateY(1em);
    }

    /* OPENED */

    .menu-icon.open {
      -webkit-transform: rotate(45deg);
    	        transform: rotate(45deg);
    }

    .menu-icon.open > span:before {
      -webkit-transform: rotate(90deg);
    	        transform: rotate(90deg);
    }

    .menu-icon.open > span:after {
      -webkit-transform: rotate(90deg);
    	        transform: rotate(90deg);
    }
    .displayOff{
        display: none;
    }
}
</style>
