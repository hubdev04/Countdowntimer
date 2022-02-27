const days=document.querySelector('.dead1');
const hour=document.querySelector('.dead2');
const min=document.querySelector('.dead3');
const sec=document.querySelector('.dead4');
const give=document.querySelector('.give');


const futuredate=new Date(2022,2,1,11,59,59);

console.log(futuredate);
// const curr=new Date();
// const  currentmili=curr.getTime();
// const t=futuredate.getTime()- currentmili;
// console.log(futuredate.getTime()- currentmili);
// days.innerHTML=Math.floor((t/(24*60*60*1000)));
// const rem1=t%(24*60*60*1000);
// const rem2=rem1%(60*60*1000);
// const rem3=rem2%(60*1000);
// console.log(rem3);
// hour.innerHTML=Math.floor(rem1/(60*60*1000));
// min.innerHTML=Math.floor(rem2/(60*1000));
// sec.innerHTML=Math.floor(rem3/(1000));
// setInterval(secs, {

// }, 1000);
function remaining()
{
    const curr=new Date();
const  currentmili=curr.getTime();
const t=futuredate.getTime()- currentmili;
const oneday=24*60*60*1000;
const onehour=60*60*1000;
const onemin=60*1000;
const onesec=1000;
let d=Math.floor(t/oneday);
if(d<10)
{
    days.innerHTML=`0${d}`;
}
else{
    days.innerHTML=d;
}

let h=Math.floor((t%oneday)/onehour);
hour.innerHTML=h;
let m=Math.floor((t % onehour) / onemin);
if(m<10)
{
    min.innerHTML=`0${m}`;
}
else{
    min.innerHTML=m;
}


let seconds = Math.floor((t % onemin) / 1000);
if(seconds<10)
{
    sec.innerHTML=`0${seconds}`;
}
else{
    sec.innerHTML=seconds;
}

}
let start=setInterval(remaining,1000);
remaining();