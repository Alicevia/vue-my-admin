const privateRoutes = import.meta.globEager('./*.js')
// console.log(privateRoutes)
export default Object.values(privateRoutes).reduce((pre, item) => {
  pre.push(item.default)
  return pre
}, [])
