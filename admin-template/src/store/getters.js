export default {
  isMobile: state => state.app.device === 'mobile',
  permissions: state => state.user.info.permissions
}
