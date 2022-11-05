const arr=[1,1,3,4,5,6]
var avg=0;
for(var i=0;i+1<arr.length;i++)
for(var j=0;i+2<arr.length;j++)
{
    console.log("Average of 2 no are:" , (arr[i]+arr[i+1])/2);
    console.log("Average of 3 no are:" , (arr[j]+arr[j+1]+arr[j+2])/3);
    break;
    
}
