const getCurrentDate = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let minute = date.getMinutes();
    let hour = date.getHours();
    let currentDate = `${month}-${day}-${year}-${hour}-${minute}`;
    return(
        currentDate
    )
};
export default getCurrentDate;