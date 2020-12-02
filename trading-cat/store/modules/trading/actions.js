import { search } from '@/api/stock.js'

export default {
	async searchStock({commit},keyword){
		return await search(keyword);
	}
};
