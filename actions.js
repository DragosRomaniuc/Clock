function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegree = ((seconds/60) * 360 ) + 90;
    console.log(secondDegree);
    const secondline=document.querySelector(".secondline");
    console.log(secondline);
    secondline.style.transform=`rotate(${secondDegree}deg)`

    const minute = now.getMinutes();
    const minutesDegree = ((minute/60)*360)+90;
    const minuteline=document.querySelector(".minuteline");

    const hours = now.getHours();
    const hoursDegree = ((hours/12)*360)+90;
    const hourline=document.querySelector(".hourline");
    console.log(hoursDegree);

    minuteline.style.transform=`rotate(${minutesDegree}deg)`;
    hourline.style.transform=`rotate(${hoursDegree}deg)`;

    const oms = document.querySelector(".oms");
    oms.textContent = `${hours}:${minute}:${seconds}`;

}

setInterval(setDate,1000);
