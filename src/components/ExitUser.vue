<template>

<div class="row no-margin">

    <!-- 
      <div class="modal fade" id="addItemModal" tabindex="-1" role="dialog" aria-labelledby="addItemModalTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">

            <div class="modal-header">
              <h6 class="modal-title" id="addItemModalTitle">Add New Item</h6>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">

              <el-form ref="form" :model="addNewItemForm" label-width="110px">

                <el-form-item label="Product Name">
                  <el-input v-model="addNewItemForm.name" style="width: 90%;"></el-input>
                </el-form-item>

                <el-form-item label="Quantity">

                  <el-row style="width: 90%;">
                    <el-col :span="12">
                      <el-select v-model="addNewItemForm.uom" placeholder="Unit of meassure" style="width: 100%;">
                        <el-option label="Meter" value="m"></el-option>
                        <el-option label="No's" value="n"></el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="10">
                      <el-input v-model="addNewItemForm.quantity" placeholder="Quantity" style="width: 100%;"></el-input>
                    </el-col>
                  </el-row>

                </el-form-item>

                <el-form-item label="Principal">
                  <el-select v-model="addNewItemForm.principal" placeholder="Select principal" style="width: 90%;">
                    <el-option label="OEM Inc" value="oem"></el-option>
                    <el-option label="First Inc" value="first"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="Exp. Price">

                  <el-row style="width: 90%;">
                    <el-col :span="12">
                      <el-select v-model="addNewItemForm.uom" placeholder="Currency" style="width: 100%;">
                        <el-option label="Indian Rupees" value="m"></el-option>
                        <el-option label="Dollar" value="n"></el-option>
                        <el-option label="GBP" value="n"></el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="10">
                      <el-input v-model="addNewItemForm.exp_price" placeholder="Price" style="width: 90%;"></el-input>
                    </el-col>
                  </el-row>

                </el-form-item>

                <el-form-item label="Exp. DOD">

                    <el-date-picker type="date" value-format="dd-MM-yyyy" format="dd-MM-yyyy" placeholder="Expected date of delivery" v-model="addNewItemForm.exp_date" style="width: 90%;"></el-date-picker>

                </el-form-item>

                <el-form-item label="Remarks">
                  <el-input type="textarea" v-model="addNewItemForm.remarks" style="width: 90%;"></el-input>
                </el-form-item>

              </el-form>

            </div>

            <div class="modal-footer">
              <el-button data-dismiss="modal" size="small" >Close</el-button>
              <el-button type="primary" size="small" @click="addNewItem">Add</el-button>
            </div>
          </div>
        </div>
      </div>

      Add Item Modal -->

    <div class="col-2 no-padding" id="left-container-wrap">
        <LeftNavBoard/>
    </div>

    <div class="col-2 no-padding">
    </div>

    <div class="col-10 no-padding" id="right-container-wrap">

        <div>
            <TopNavBoard/>
        </div>

        <div id="new-query-container-wrap">

            <div id="new-query-container-title-wrap">
                <h6 id="create-query-title"><span>Exit User</span></h6>
                <div style="float:right;">
                    <!-- <el-button type="primary" size="mini" round>Hello</el-button> -->
                </div>
            </div>

            <div id="new-query-container">

                <div id="new-query-container-body-wrap">

                    <el-form  label-width="30%" size="small">

                        <p class="enq-details-title">User Termination</p>
                        <hr>
                        <br>

                        <!-- <el-row :gutter="0">

                            <el-col :span="12">

                                <el-form-item label="Customer" prop="businessPartnerId">
                                    <el-select v-model="createEnquiryModel.businessPartnerId" filterable placeholder="Select Customer" style="width:100%" @change="getContact">
                                        <el-option v-for="bp in businessPartnerList" :key="bp.businessPartnerId" :label="bp.name" :value="bp.businessPartnerId">
                                        </el-option>
                                    </el-select>
                                </el-form-item>

                            </el-col>

                            <el-col :span="12">

                                <el-form-item label="Contact" prop="contactId">
                                    <el-select v-model="createEnquiryModel.contactId" filterable placeholder="Select Contact" style="width:100%" :disabled="isBuyerDropDownDisabled">
                                        <el-option v-for="contact in contactList" :key="contact.contactId" :label="contact.name" :value="contact.contactId">
                                        
                                        </el-option>
                                    </el-select>
                                </el-form-item>

                            </el-col>

                        </el-row> -->

                        <el-row :gutter="0">

                            <el-col :span="24">
                                <el-form-item label="Username(s)" >

                                    <el-input placeholder="Username(s)" v-model="input_username" style="width:60%"></el-input>

                                </el-form-item>
                            </el-col>

                        </el-row>

                        <!-- <el-switch v-model="hasProjectDetails" active-color="#13ce66" active-text="" inactive-text=""></el-switch> -->
                        
                        <el-form-item style="text-align:right;">
                            <el-button type="primary" size="small" @click="getDetails()" >Submit</el-button>
                        </el-form-item>

                      <el-tabs :tab-position="terminationUserTabPosition" style="height: auto;">
                        
                        <el-tab-pane v-for="(item, key, index) in user_detail" :key="index" :label="key">
                          
                          <el-tabs type="border-card" stretch>
                            
                            <el-tab-pane  v-for="(item1, key1, index1) in item" :key="index1" :label="key1">

                                <p class="enq-details-title">Details</p>
                                <hr>

                                <el-row :gutter="0">

                                    <el-col :span="12">
                                        <el-form-item >

                                            <el-switch
                                              disabled=""
                                              v-model="item1.userExists"
                                              active-text="Yes"
                                              inactive-text="Is User Exists: "
                                              active-color="#13ce66"
                                              inactive-color="#ff4949">
                                            </el-switch>

                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="12">
                                        <el-form-item >

                                            <el-switch
                                              disabled=""
                                              v-model="item1.userHasObjects"
                                              active-text="Yes"
                                              inactive-text="User has objects: "
                                              active-color="#13ce66"
                                              inactive-color="#ff4949">
                                            </el-switch>

                                        </el-form-item>
                                    </el-col>

                                </el-row>

                                <p class="enq-details-title">User Objects</p>
                                <hr>
                                <el-table size="mini" fit border stripe
                                  :data="item1.userObjects"
                                  style="width: 100%">
                                  <el-table-column
                                    prop="objtype"
                                    label="Object Type"
                                    >
                                  </el-table-column>
                                  <el-table-column
                                    prop="schemaname"
                                    label="Schema Name"
                                    >
                                  </el-table-column>
                                  <el-table-column
                                    prop="objname"
                                    label="Object Name">
                                  </el-table-column>
                                </el-table>

                                <br>
                                <p class="enq-details-title">Actions</p>
                                <hr>
                                <el-row > 
                                    <el-button type="warning" size="mini" @click="changeOwnership(item1.userName, key1)"> Change Ownership</el-button>
                                    <el-button type="danger" size="mini" @click="dropUser(item1.userName)">Drop</el-button>
                                  </el-row>

                            </el-tab-pane>
                            
                          </el-tabs>                         

                        </el-tab-pane>
                        
                      </el-tabs>


                    </el-form>

                </div>
            </div>
        </div>

    </div>

</div>

</template>

<script>
import LeftNavBoard from '@/components/LeftNavBoard'
import TopNavBoard from '@/components/TopNavBoard'

export default {
    name: 'ExitUser',
    components: {
        LeftNavBoard,
        TopNavBoard,
        
    },
    data() {
        return {
            localHost: 'http://localhost:8080/',
            input_username: '',
            user_detail: {},
            terminationUserTabPosition: 'left',
            disabled_user: {},
        }
    },
    methods: {
      isClusterDisabled(key, key1) {
        console.log("Cluster called");
        if(this.disabled_user.hasOwnProperty[key]) {
          if( key1 in this.disabled_user[key] ) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      },
      getDetails() {
        
        var keymap = new Array();
        this.$http.get(this.localHost + 'get-detail', {
                params: {
                    user: this.input_username
                }
            })
            .then(function(response) {
                if (response.status === 200) {
                    this.user_detail = response.body;
                    
                } else {
                    this.user_detail = {};
                }
                console.log(this.user_detail);
            }, function(err) {
                this.user_detail = {};
            })
            
    },
    dropUser(_username) {
        this.$confirm('This will permanently drop the user <b>' + _username + '</b>. Continue?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            dangerouslyUseHTMLString: true,
            type: 'danger'
        }).then(() => {
            this.$message({
                type: 'success',
                message: 'Drop completed'
            });
        }).catch(() => {
            this.$message({
                type: 'info',
                message: 'Drop canceled'
            });
        });
    },
    changeOwnership(current_username, cluster) {
        this.$prompt('Please enter the username to which ownership needs to be changed:', 'Enter Username', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
        }).then(({ value }) => {

          this.$http.get(this.localHost + 'change-ownership', {
                params: {
                    user: current_username,
                    new_ownership_username: value,
                }
            })
            .then(function(response) {
                if (response.status === 200) {
                    this.$message({
                      type: 'success',
                      message: 'Ownership updated to ' + value
                    });

                    try {
                      if(this.disabled_user[current_username].length != 0) {
                          this.disabled_user[current_username].push(cluster);
                      } else {
                          this.disabled_user[current_username] = [cluster];
                      }
                    } catch (error) {
                        this.disabled_user[current_username] = [cluster];
                        console.log(this.disabled_user);
                    }
                    
                    
                } else {
                    this.$message({
                      type: 'error',
                      message: 'Error occured. ' + response.body.error
                    });
                }
                
            }, function(err) {
                this.$message({
                  type: 'error',
                  message: 'Error occured. '
                });
            })

          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Input canceled'
          });       
        });
    },
        getContact() {
            this.$http.get(this.localHost + 'contact', {
                    params: {
                        user: this.input_username
                    }
                })
                .then(function(response) {
                    if (response.status === 200) {
                        var newList = [];
                        for (var i = 0; i < response.body.length; i++) {

                            if (response.body[i].businessPartnerId == this.createEnquiryModel.businessPartnerId) {
                                newList.push(response.body[i]);
                                this.isBuyerDropDownDisabled = false;
                            }

                        }
                        if(newList.length > 0) {
                          this.contactList = newList;
                        }else {
                          this.$notify.error({
                          title: 'Error',
                          message: 'No contacts found for the selection.',
                        });
                        }
                        
                    } else {
                        this.contactList = [];                        
                    }

                }, function(err) {
                    this.contactList = [];
                })
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.handleCreateEnquiry();
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        handleCreateEnquiry(){
            this.$http.post(this.localHost+'enquiry', this.createEnquiryModel).then(function (response) {
                
                if (response.status === 200) {

                  var enqRefNo = response.body.ENQUIRY_REFERENCE_NUMBER;
                  var enqId = response.body.ENQUIRY_ID;

                  if(this.hasProjectDetails === true) {

                      this.projectDetails.enquiryId = enqId;

                      this.$http.post(this.localHost+'enquiry/project-detail', this.projectDetails).then(function (response) {
                
                            if (response.status === 200) {

                              this.showEnquiryCreateSucess(enqRefNo, enqId);                              
                                
                            }else {
                              this.showEnquiryCreateFail();
                            }
                            
                        }, function (err) {
                            this.showEnquiryCreateFail();
                        })

                  } else {

                    this.showEnquiryCreateSucess(enqRefNo, enqId);
                  
                  }
                    
                }else {
                  this.showEnquiryCreateFail();
                }
                
            }, function (err) {
                this.showEnquiryCreateFail();
            })
        },
        showEnquiryCreateSucess(enqRefNo, enqId) {
          this.$alert('Enquiry created successfully. '+enqRefNo+'.', 'Success', {
            confirmButtonText: 'OK',
            type: 'success', 
            center: true,
            showClose:false,
            callback: action => {
              this.$router.push('/manage-enquiry/'+enqRefNo);
            }
          });
        },
        showEnquiryCreateFail() {
          this.$alert('Enquiry could not be created!', 'Failed', {
            confirmButtonText: 'OK',
            callback: action => {
            }
          });
        }
    },
    created: function() {
        document.title = "Exit User : User Termination";
        
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

#new-query-container-title-wrap {
  padding: 10px 10px 18px 10px;
  /* border-bottom: 1px solid #efefef; */
}

#create-query-title {
  display:inline-block;
  color: #414040;
  /* border-bottom:2px solid  #585858;
  padding-bottom:10px; */
  font-weight: 600;
  font-size: 16px;
}

#new-query-container-wrap {
  padding: 15px;
}

#new-query-container {
  border: 1px solid #efefef;
  background: #fff;
  padding: 15px;
}

#new-query-container-body-wrap {
  padding: 15px;
}

/* .el-table::before {
  background: none !important;
}
*/
#item-table {
  margin-top: 5px;
} 

.el-form-item__label {
  font-weight: 600 !important;
}

.proj-details-title {
  display: inline;
  font-size: 15px;
  position: absolute;
  padding: 4px 0 0 10px;
}

.enq-details-title {
  font-size: 13px;
  font-weight: 600;
  padding-bottom: 0;
}


</style>
