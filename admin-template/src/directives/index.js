import requireAll from '@/utils/requireAll'

const requireDirectives = require.context('.', false, /^((?!index).)*.js$/)
const directives = requireAll(requireDirectives)

export default directives
