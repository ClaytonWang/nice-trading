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
		  }
		  return v
	  }
  },
  methods: {
	  isLogin(){
		  if(!this.loginInfo.hasLogin){
		  	uni.navigateTo({
		  		url: '/pages/public/login'
		  	})
		  } else {
		  	return true
		  }
	  },
	  navTo(url, auth){
		  if(auth && !this.loginInfo.hasLogin){
			  uni.navigateTo({
			  	url: '/pages/public/login'
			  })
			  return
		  }
		  uni.navigateTo({
		  	url: url
		  })
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
