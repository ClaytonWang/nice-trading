import { search } from '@/api/stock.js';

import * as plan from '@/api/trading-plan.js';

import * as planDetail from '@/api/trading-detail.js';

import * as setting from '@/api/setting.js';

export default {
	async searchStock({commit},keyword){
		try{
			return await search(keyword);
		}catch(e){
			console.log(e);
		}
	},
	
	async addPlan({commit},data){
		try{
			return await plan.add(data);
		}catch(e){
			console.log(e);
		}
	},
	
	async getPlanList({commit},params){
		try{
			return await plan.get(params);
		}catch(e){
			console.log(e);
		}
	},
	
	async delPlanItem({commit},id){
		try{
			return await plan.del(id);
		}catch(e){
			console.log(e);
		}
	},
	
	async updatePlan({commit},data){
		try{
			return await plan.update(data);
		}catch(e){
			console.log(e);
		}
	},
	
	async addDetail({commit},data){
		try{
			return await planDetail.add(data);
		}catch(e){
			console.log(e);
		}
	},
	
	async getDetailList({commit},plan_id){
		try{
			return await planDetail.getList(plan_id);
		}catch(e){
			console.log(e);
		}
	},
	
	async getDetail({commit},id){
		try{
			return await planDetail.get(id);
		}catch(e){
			console.log(e);
		}
	},
	
	async delDetailItem({commit},id){
		try{
			return await planDetail.del(id);
		}catch(e){
			console.log(e);
		}
	},
	
	async addUpdateSetting({commit},data){
		try{
			data.commission_rate = data.commission_rate/10000;
			data.fee_rate = data.fee_rate / 1000;
			if(data.id){
				return await setting.update(data);
			}else{
				return await setting.add(data);
			}
		}catch(e){
			console.log(e);
		}
	},
	
	async getSetting({commit},id){
		try{
			return await setting.get(id);
		}catch(e){
			console.log(e);
		}
	}
};
