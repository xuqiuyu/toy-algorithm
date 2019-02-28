
const schema = require('./schema/clientConfig.shema')
const { rpcJson, apiJson } = require('./schema/mock')


/**
* ------------------------------------------------------------------
* pick one leaf from the rpc json tree based on  branch 
* @data json data
* @branch a route string tags the apiJson leaf  
* ------------------------------------------------------------------
*/
const picker = (data, branch) => !!branch ? branch.split('.').reduce((i, j) => i[j], data) : data

/**
* ------------------------------------------------------------------
* replace one leaf of the rpc json tree based on branch
* @jsonRpc rpc json data
* @branch apiJson leaf branch of the data tree
* @value new leaf value 
* ------------------------------------------------------------------
*/
const reducer = (jsonRpc, branch, value) => {
  const pathArr = branch.split('.')
  const apiJsonKey = pathArr.pop()
  const parentNode = picker(jsonRpc, pathArr.join('.'))
  parentNode[apiJsonKey] = value
}

/**
* ------------------------------------------------------------------
* select whole json data from rpcJson json based on schema
* @rpcJson rpc json data
* @shema an ruled json shema shows the apiJson data structure
* ------------------------------------------------------------------
*/
const sniper = (rpcJson, schema) => Object.keys(schema).reduce((i, j) => {
  const v = picker(rpcJson, schema[j].branch)
  if(schema[j].branch) {
    i[j] = typeof schema[j].whiteHook === 'function' ?  schema[j].whiteHook.call({}, v) : v
  } else {
    i[j] = sniper(v, schema[j])
  }
  return i
}, {})


/**
* ------------------------------------------------------------------
* hang all the structured json value to the rpcJson rpc json tree
* @rpcJson rpc json
* @apiJson structured json
* @schema an ruled json shema shows the apiJson data structure
* ------------------------------------------------------------------
*/
const lantern = (rpcJson, apiJson, schema) => {
  Object.keys(schema).forEach(i => {
    const { branch, whiteHook, blackHook } = schema[i]
    const v = typeof blackHook === 'function' ? blackHook.call({}, apiJson[i]) : apiJson[i] 
    if(branch || v) {
      if(typeof branch === 'string') {
        reducer(rpcJson, branch, v)
        return
      } else lantern(rpcJson, v,  schema[i])
    }
  })
  return rpcJson
}

/**
* ------------------------------------------------------------------
* expose
* ------------------------------------------------------------------
*/
const rpcRepairman = {
  do: (rpcJson, schema) => sniper(rpcJson, schema),
  undo: (rpcJson, apiJson, schema) => lantern(rpcJson, apiJson, schema)
}

console.log(rpcRepairman.do(rpcJson, schema))

// console.log(rpcRepairman.undo(rpcJson, apiJson, schema))
