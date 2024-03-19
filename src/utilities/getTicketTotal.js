export const getTicketTotal = (dataArray) => {
    let sum=0;
    for(let i=0; i<dataArray.length; i++) {
        sum += dataArray[i].tickets.length;
    } 
    return sum;
}