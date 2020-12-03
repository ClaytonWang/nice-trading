import { search } from '@/api/stock.js';

import * as plan from '@/api/trading-plan.js';

import * as planDetail from '@/api/trading-detail.js';

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
	
	async addDetail({commit},data){
		try{
			return await planDetail.add(data);
		}catch(e){
			console.log(e);
		}
	}
};
