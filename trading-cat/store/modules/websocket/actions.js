export default {
	WEBSOCKET_INIT({
		commit
	}, url) {
		commit('WEBSOCKET_INIT', url)
	},
	WEBSOCKET_SEND({
		commit
	}, p) {
		commit('WEBSOCKET_SEND', p)
	}
}
