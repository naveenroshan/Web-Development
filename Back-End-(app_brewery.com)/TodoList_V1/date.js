
function getData() {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    //this will output the day and month with date
    let day = today.toLocaleDateString("en-US", options);
    return day;
}

module.exports = getData;