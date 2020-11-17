import requireAll from '@/utils/requireAll';

const requireApi = require.context('.', false, /^((?!index).)*.js$/);
const api = requireAll(requireApi);

export default api;
