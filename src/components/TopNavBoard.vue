<template>

  <div id="top-nav-board-wrap">

          <div class="row no-margin">

            <div class="col-2 no-padding">
              <el-input placeholder="Search for an order"  size="small">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </div>

            <div class="col-9 no-padding">
            </div>

            <div class="col-1 no-padding" id="user-details-wrap">
              <i class="fas fa-user"></i>
            </div>

          </div>
          
    </div> <!-- Top Nav Board wrap ends -->

</template>

<script>
export default {
  name: 'TopNavBoard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#top-nav-board-wrap {
  background: #f2f1ef;
  height: 60px;
  border-bottom: 1px solid #e8e8e8;
  padding: 14px 0 14px 15px;
}

#user-details-wrap {
  padding: 0px 40px 0px 0px;
  text-align: right;
  font-size: 25px;
}

.no-padding {
  padding-right: 0px;
  padding-left: 0px;
}

.no-margin {
  margin-right: 0px;
  margin-left: 0px;
}


</style>
