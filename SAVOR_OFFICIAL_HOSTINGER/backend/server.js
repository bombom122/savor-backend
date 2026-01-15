
const express=require('express');
const app=express();
app.use('/api/products',(req,res)=>{
 res.json([
  {name:'Tshirt SAVOR',price:'150000',image:'https://via.placeholder.com/150',shopee:'#',tiktok:'#'}
 ]);
});
app.listen(3000);
