<template>
  <CRow>
    <CCol sm="12" md="12">
      <CCard>
        <CCardHeader> <strong>添加计划</strong> </CCardHeader>
        <CCardBody>
          <CForm validated novalidate>
            <CInput label="代码：" v-model="trade.code" placeholder="代码" required invalid-feedback="Input is not required." />
            <CInput label="名称：" v-model="trade.name" placeholder="名称" required invalid-feedback="Please provide a required input." />
            <CInput label="止损价：" v-model="trade.stop_loss" placeholder="止损价" valid-feedback="Input is not required." />
            <CInput label="止赢价：" v-model="trade.take_profit" placeholder="止赢价" valid-feedback="Input is not required." />
            <CInput label="买入数量：" v-model="trade.plan_amount" placeholder="买入数量" valid-feedback="Input is not required." />
            <CInput label="执行日期：" v-model="trade.exec_date" type="date" />
            <CTextarea label="理由：" v-model="trade.comment" placeholder="理由..." rows="9" />
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="primary" @click="submit"><CIcon name="cil-check-circle" /> Submit</CButton>
          <!-- <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton> -->
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from '@plugins/axios';
import api from '@resource/api-routes';
export default {
  name: 'TradePlan',
  data(){
    return {
      trade:{
        code:'',
        name:'',
        stop_loss:0.00,
        take_profit:0.00,
        plan_amount:100,
        exec_date:'',
        comment:''
      }
    };
  },
  methods:{
    submit(){
      axios.post(api.TRADE,this.trade).then(function(res){
        console.log(res);
      });
    },
  }
};
</script>

<style></style>
