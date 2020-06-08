<template>

    <div class="row no-margin">
     
      <div class="col-2 no-padding" id="left-container-wrap">
        <LeftNavBoard/>
      </div>

      <div class="col-2 no-padding">
      </div>

      <div class="col-10 no-padding" id="right-container-wrap">

        <div>
          <TopNavBoard/>
        </div>

        <div  id="dashboard-container">

          <div  id="dashboard-container-title-wrap" >

            <h6 id="dashboard-title"><span>Dashboard</span></h6>
                      
          </div>

          <div  id="dashboard-widget-1-container-wrap">

            <div class="row">

              <div class="col-3">
                <div class="dashboard-widget-1-container">
                  <div class="dashboard-widget-1">
                    <div class="dashboard-widget-1-title-wrap">
                      <h6 class="dashboard-widget-1-title">EXITS THIS MONTH</h6>
                    </div>
                    <div class="dashboard-widget-1-content-wrap">
                      <h2 class="dashboard-widget-1-content">5</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-3">
                <div class="dashboard-widget-1-container">
                  <div class="dashboard-widget-1">
                    <div class="dashboard-widget-1-title-wrap">
                      <h6 class="dashboard-widget-1-title">PENDING</h6>
                    </div>
                    <div class="dashboard-widget-1-content-wrap">
                      <h2 class="dashboard-widget-1-content">10</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-3">
                <div class="dashboard-widget-1-container">
                  <div class="dashboard-widget-1">
                    <div class="dashboard-widget-1-title-wrap">
                      <h6 class="dashboard-widget-1-title">TOTAL</h6>
                    </div>
                    <div class="dashboard-widget-1-content-wrap">
                      <h2 class="dashboard-widget-1-content">30</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-3">
                <div class="dashboard-widget-1-container">
                  <div class="dashboard-widget-1">
                    <div class="dashboard-widget-1-title-wrap">
                      <h6 class="dashboard-widget-1-title">ONGOING</h6>
                    </div>
                    <div class="dashboard-widget-1-content-wrap">
                      <h2 class="dashboard-widget-1-content">6</h2>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div> <!-- Widget 1 Container ends -->


          

          
          
        </div>
        
      </div>

    </div>    

</template>

<script>
import LeftNavBoard from '@/components/LeftNavBoard'
import TopNavBoard from '@/components/TopNavBoard'

export default {
  name: 'DashBoard',
  components: {
    LeftNavBoard,
    TopNavBoard
  },
  data () {
    return {
      tableData: [{
          customer_name: 'ABC',
          name: '5',
          address: 'xxxxx',
          email: '13-8-2008',
          phone: '1236578909'
        }, {
          customer_name: 'OKI',
          name: '7',
          address: 'jjhshjsh',
          email: '13-8-2008',
          phone: '1236578909'
        }, {
          customer_name: 'PLK',
          name: '3',
          address: 'Nuiubds',
          email: '13-8-2008',
          phone: '1236578909'
        }, {
          customer_name: 'ERT',
          name: '4',
          address: 'hyutr',
          email: '13-8-2008',
          phone: '1236578909'
        }],
        search: ''
    }
  },created: function () {
    document.title = "DashBoard : Connekt Manager";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.no-padding {
  padding-right: 0px;
  padding-left: 0px;
}

.no-margin {
  margin-right: 0px;
  margin-left: 0px;
}

#left-container-wrap {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  z-index: 20;
}

#right-container-wrap {
  font-family: 'Montserrat', sans-serif;
  background: #f7f7f7;
  min-height: 100vh;
}

#dashboard-container-title-wrap {
  padding: 10px 10px 20px 10px;
  /* border-bottom: 1px solid #efefef; */
}

#dashboard-title {
  display:inline-block;
  color: #414040;
  /* border-bottom:2px solid  #585858;
  padding-bottom:10px; */
  font-weight: 600;
  font-size: 16px;
}

#dashboard-container {
  padding: 15px;
}


#dashboard-widget-1-container-wrap,#dashboard-widget-2-container-wrap {
  padding: 0 0 30px 0;
}

.dashboard-widget-1-container,.dashboard-widget-2-container {
  padding: 5px;
}

.dashboard-widget-1 {
  height: 100px;
  background: #fff;
  border: 1px solid #e2e2e2;
  padding: 15px;
  border-radius: 3px;
}

.dashboard-widget-1-title {
  font-weight: 600;
  font-size: 13px;
  color: #929191;
}

.dashboard-widget-1-content-wrap {
  text-align: center;
}

.dashboard-widget-1-content {
  font-weight: 600;
  color: #3a70d3;
}

.dashboard-widget-2 {
  background: #fff;
  border: 1px solid #efefef;
}

.dashboard-widget-2-title {
  font-weight: 600;
  font-size: 13px;
  color: #686767;
  background: #f2f1ef;
  padding: 10px;
  border: 1px solid #e4e4e4;
  border-radius: 3px 3px 0 0;
}

.dashboard-widget-2-content-wrap {
  font-size: 10px;
  padding: 10px;
}




</style>
