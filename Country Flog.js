<!-- Using rest countries api url Display all countries flog in console: -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all', true);
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{
        console.log(element.flag,element.name);
    })}
    </script>
</body>
</html>

<!-- Same rest countries url display all countries name,region,subregion,population: -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all', true);
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{
        console.log(element.region,element.subregion,element.name,element.population);
    })}
    </script>
</body>
</html>