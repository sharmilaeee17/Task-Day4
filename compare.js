// 1.compare two JSON have the same properties without order;


          var isEqualsJson = (obj1,obj2)=>{
            keys1 = Object.keys(obj1);
            keys2 = Object.keys(obj2);

            return keys1.length === keys2.length && Object.keys(obj1).every(key=>obj1[key]==obj2[key]);
        }
        
        var obj1 = {name:"person 1",age:5};
        var obj2 = {age:5,name:"person 1"}; 
        
        console.log("json is equals: "+ isEqualsJson(obj1,obj2));
        alert("json is equals: "+ isEqualsJson(obj1,obj2));


        





       