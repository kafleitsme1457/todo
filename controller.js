const userRegister = (req,res)=>{}
const homepage = ('/', (req,res)=>{
    res.status(200).json({message:"Home page"})
})
const userLogin = (req,res)=>{
}








module.exports = {
    homepage:homepage,
    userRegister:userRegister,
    userLogin:userLogin
}