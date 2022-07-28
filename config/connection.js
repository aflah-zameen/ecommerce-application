const redis=require("redis")
const redisClient=redis.createClient()

module.exports.connect=function(done){
    const rdname="shopping"
    redisClient.connect().catch(console.error)
    done()
}
module.exports.client=()=>{
    return redisClient
}
