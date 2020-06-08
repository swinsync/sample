<template>
  <div class="left-nav-board col-12">

    <div class="left-nav-bar-logo">
      <img :src="param.logoURL">
      
    </div>
    
    <div class="left-nav-bar-vert">
      <h6 class="nav-bar-content-title">MENU</h6>
      <ul id="nav-accordion" class="nav nav-pills flex-column">
          <li class="nav-item">
              <router-link to="/" style="text-decoration: none;" class="nav-item"><a class="nav-link" ><i class="fas fa-chalkboard"></i> &nbsp; Dashboard</a></router-link>
          </li>

          

          <li class="nav-item">
              <a class="nav-link" data-toggle="collapse" href="#item-1" data-parent="#nav-accordion"><i class="fas fa-users"></i> &nbsp; Termination</a>
              <div id="item-1" class="collapse">
                  <ul class="nav flex-column ml-3">
                      <li class="nav-item">
                          <router-link to="/exit-user" class="nav-link"><i class="fas fa-users"></i> &nbsp; Exit User</router-link>
                      </li>
                  </ul>
              </div>
          </li>

          
          
          
      </ul>

    </div>
    
  </div>
</template>

<script>
import configParams from '../param/params.json'
export default {
  name: 'LeftNavBoard',
  data () {
    return {
      param: configParams,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.left-nav-board {
  background: #22313f;
  padding:  0;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
}

.left-nav-bar-vert {
  padding: 15px;
}

.left-nav-bar-vert a {
  color: #bbbbbb;
  font-size: 15px;
}

.nav-bar-content-title {
  color: #7e7e7e;
  font-size: 11px;
}

.left-nav-bar-logo {
  border-bottom: 1px solid #686767;
  text-align: center;
  height: 60px;
  margin-bottom: 20px;
  padding: 8px;
}

.nav-link:hover {
    border-left: 2px solid #22a7f0;
    border-radius: 0;
}



</style>
