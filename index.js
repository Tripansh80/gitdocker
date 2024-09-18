const express=require('express')
const app=express();


app.get('/',(req,res)=>{
res.json([
    {
        id: 1,
        name: "neeraj"
    },
    {
        id: 2,
        name: "Raju"
    },
    {
        id: 3,
        name: "Neha"
    },
    {
        id: 4,
        name: "Saloni"
    },
])
})

app.listen(3000,()=>{
    console.log(`your port is running at 3000`);
})