/**
* ------------------------------------------------------------------
* schme rule
* from rcp json to standard node api json
* usage tips: 
*  1、define the api data structure you need
*  2、add some properties for you every json leaf node description 
*  3、only supports three properties now. 
*     > branch: stirng,  (record the leaf node related branch of rpc json tree, separeted with dot, like 'a.b.c') 
*     > whiteHook?: function,  (auto execute when converting data from rpc to api and return the excuted result)
*     > blackHook?: function   (the reverse of whiteHook)
* 4、schema module recommend for reuse
* ------------------------------------------------------------------
*/

const pobo111 = {
  branch: 'pobo',
  blackHook: v => v && 'true 变成真的了 。。。'
}

const allowedBuyCcys111 = {
  branch: 'conversionSettings.allowedBuyCcys'
}

const cardedRateSettings = {
  cardedRateSettings: {
    branch: 'conversionSettings.cardedRateSettings.cardedRateSettings',
    blackHook: v => 99999999999
  }
}

module.exports = {
  pobo111,
  allowedBuyCcys111,
  cardedRateSettings
}


