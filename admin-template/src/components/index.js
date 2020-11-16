import requireAll from '@/utils/requireAll'

const requireComponents = require.context('.', true, /\.vue$/)
const components = requireAll(requireComponents, (total, file) => {
  const component = file.default || file
  const { name, global } = component

  if (global) {
    total[name] = component
  }
})

export default components
