const getCurrentDate = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let minute = date.getMinutes();
    let currentDate = `${month}-${day}-${year}-${minute}`;
    return(
        currentDate
    )
};
export default getCurrentDate;