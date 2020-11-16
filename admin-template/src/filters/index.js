import requireAll from '@/utils/requireAll'

const requireFilters = require.context('.', false, /^((?!index).)*.js$/)
const filters = requireAll(requireFilters)

export default filters
