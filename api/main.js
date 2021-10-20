const axios=require('axios')
module.exports = async function(req, res) {
    console.log(params);
    const clientID='d918917058a90dea8772';
    const clientSecret='c7c19b3dfc8ca35524e18295ef3c992e2b190932'
    const {code}=req.query;
    let token;
    
    try{
      console.log('获取token')
      token=await axios(`https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${code}`)
      }
      catch(err){
        console.log(err.message)
      }
    console.log('token:',token)
    let userData;
    let access_token=token.data.slice(13,53)
    console.log(access_token)
    try{
      userData = await axios({
        method:'post',
        url:'https://api.github.com/user?',
        headers:{accept: 'application/json', Authorization: `token ${access_token}`}
        })
    }catch(err){
      console.log(err.message)
    }
    console.log('userdata',userData);
    res.status(200).send(JSON.stringify(userData));
  }