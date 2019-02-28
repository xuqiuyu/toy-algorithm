const RpcTailor = require('./RpcTailor')
const schema = require('./schema/clientConfig.shema')
const { rpcJson, apiJson } = require('./schema/mock')


const tailor = new RpcTailor(schema)

// console.log(tailor.cut(rpcJson))

console.log(tailor.seam(rpcJson, apiJson))

