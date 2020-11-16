const requireIcons = require.context('./svg', false, /\.svg$/)
requireIcons.keys().map(requireIcons)
