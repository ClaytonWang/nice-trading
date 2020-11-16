const fs = require('fs')
const exec = require('child_process').exec
const { dependencies } = require('./package.json')
const { common } = require('./externals.json')

Object.keys(dependencies).forEach(key => {
  const dep = common.find(item => item.id === key)

  if (dep) {
    if (Array.isArray(dep.assets)) {
      dep.assets = dep.assets.map(item =>
        item.replace(/@.*?\//, `@${dependencies[key]}/`)
      )
    } else {
      dep.assets = dep.assets.replace(/@.*?\//, `@${dependencies[key]}/`)
    }
  }
})

fs.writeFileSync('./externals.json', JSON.stringify({ common }))
exec('npx prettier externals.json --write')
