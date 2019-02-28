const SKETCH = Symbol('SKETCH')
const PICKER = Symbol('PICKER')
const REDUCER = Symbol('REDUER')
const SNIPPER = Symbol('SNIPPER')
const LANTERN = Symbol('LANTERN')

/**
* ------------------------------------------------------------------
* Rpc and node api data structure convertion
* @sketch data structure definition
* ------------------------------------------------------------------
*/
class RpcTailor {
  constructor(sketch) {
    if(!sketch || typeof sketch !== 'object') throw new Error('RpcTailor sketch must be a json object !')
    this[SKETCH] = sketch
  }
  
  /**
  * ------------------------------------------------------------------
  * pick one leaf from the rpc json tree based on  branch 
  * @data json data
  * @branch a route string tags the apiJson leaf  
  * ------------------------------------------------------------------
  */
  [PICKER](data, branch) {
    return branch ? branch.split('.').reduce((i, j) => i[j], data) : data
  }

  /**
  * ------------------------------------------------------------------
  * replace one leaf of the rpc json tree based on branch
  * @originJson rpc json data
  * @branch apiJson leaf branch of the data tree
  * @value new leaf value 
  * ------------------------------------------------------------------
  */
  [REDUCER](originJson, branch, value) {
    const pathArr = branch.split('.')
    const apiJsonKey = pathArr.pop()
    const parentNode = this[PICKER](originJson, pathArr.join('.'))
    parentNode[apiJsonKey] = value
  }

  /**
  * ------------------------------------------------------------------
  * select whole json data from originJson json based on schema
  * @originJson rpc json data
  * @shema an ruled json shema shows the apiJson data structure
  * ------------------------------------------------------------------
  */
  [SNIPPER] (originJson, schema) {
    return Object.keys(schema).reduce((i, j) => {
      const { branch, whiteHook } = schema[j]
      const v = this[PICKER](originJson, branch)
      if(branch) {
        i[j] = typeof whiteHook === 'function' ?  whiteHook.call({}, v) : v
      } else {
        i[j] = this[SNIPPER](v, schema[j])
      }
      return i
    }, {})
  }

  /**
  * ------------------------------------------------------------------
  * hang all the structured json value to the originJson rpc json tree
  * @originJson rpc json
  * @apiJson structured json
  * @schema an ruled json shema shows the apiJson data structure
  * ------------------------------------------------------------------
  */
  [LANTERN] (originJson, apiJson, schema) {
    Object.keys(schema).forEach(i => {
      const { branch, blackHook } = schema[i]
      const v = typeof blackHook === 'function' ? blackHook.call({}, apiJson[i]) : apiJson[i] 
      if(branch || v) {
        if(typeof branch === 'string') {
          this[REDUCER](originJson, branch, v)
          return
        } else this[LANTERN](originJson, v,  schema[i])
      }
    })
    return originJson
  }

  ['cut'] (originJson) {
    return this[SNIPPER](originJson, this[SKETCH])
  }

  ['seam'] (originJson, apiJson) {
    return this[LANTERN](originJson, apiJson, this[SKETCH])
  }
}

module.exports = RpcTailor

{}