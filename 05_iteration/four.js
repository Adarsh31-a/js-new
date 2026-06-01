const array = ["js" , "python" , "cpp" , "ruby"]
array.forEach(function(item){
    // console.log(item);
    
})
array.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
    
})

const mycoding = [
    {
        language : "javascript",
        sign : "js"
    }
    ,
    {
        language : "java",
        sign : "java"
    }
    ,
    {
        language : "python",
        sign : "py"
    }
    
]

mycoding.forEach((item)=>{
    console.log(item.language);
    
})