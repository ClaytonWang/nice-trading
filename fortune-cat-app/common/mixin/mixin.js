import {
		mapState,
		mapActions
	} from 'vuex'

export const commonMixin = {
  computed:{
  	...mapState('user', ['loginInfo'])
  },
  data() {
    return { }
  },
  filters: {
	  fixed(v, scale,unit){
		  if(v){
			  if(!scale){
				  scale = 2
			  }
			  if(!unit){
				  unit = "";
			  }
			  return parseFloat(v).toFixed(scale) +unit;
		  }else{
			  return '0.00'
		  }
	  }
  },
  methods: {
	  isLogin(){
	  },
	  navTo(url, auth){
	  }
  }
}

export const authMixin = {
  computed:{
  	...mapState('user', ['loginInfo'])
  },
  onLoad() {
	  if(!this.loginInfo.hasLogin){
	  	uni.navigateTo({
	  		url: '/pages/public/login'
	  	})
	  }
  },
  methods: {
  }
}

