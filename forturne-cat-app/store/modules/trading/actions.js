import { search } from '@/api/stock.js';

import * as plan from '@/api/trading-plan.js';

import * as planDetail from '@/api/trading-detail.js';

import * as setting from '@/api/setting.js';

import * as comment from '@/api/comment.js';

import * as notepad from '@/api/notepad.js';

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
			if(data.id){
				return await plan.update(data);
			}else{
				return await plan.add(data);
			}
			
		}catch(e){
			console.log(e);
		}
	},
	async getPlan({commit},id){
		try{
			return await plan.get({id});
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
			if(data.id){
				return await planDetail.update(data);
			}else{
				return await planDetail.add(data);
			}
		}catch(e){
			console.log(e);
		}
	},
	
	async getDetailList({commit},params){
		try{
			return await planDetail.get(params);
		}catch(e){
			console.log(e);
		}
	},
	
	async getDetail({commit},id){
		try{
			return await planDetail.get({id});
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
	},
	
	async addComents({commit},data){
		try{
			if(data.id){
				return await comment.update(data);
			}else{
				return await comment.add(data);
			}
		}catch(e){
			console.log(e);
		}
	},
	
	async deleteComment({commit},id){
		try{
			return await comment.del(id);
		}catch(e){
			console.log(e);
		}
	},
	
	async getComments({commit},param){
		try{
			return await comment.get(param);
		}catch(e){
			console.log(e);
		}
	},
	
	async addUpdateNotePad({commit},data){
		try{
			if(data.id){
				return await notepad.update(data);
			}else{
				return await notepad.add(data);
			}
		}catch(e){
			console.log(e);
		}
	},
	
	async deleteNotePad({commit},id){
		try{
			return await notepad.del(id);
		}catch(e){
			console.log(e);
		}
	},
	
	async getNotePads({commit},param){
		try{
			return await notepad.get(param);
		}catch(e){
			console.log(e);
		}
	},
};
