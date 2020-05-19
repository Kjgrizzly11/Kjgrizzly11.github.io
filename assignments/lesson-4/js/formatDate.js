function formatDate() {
    var raw_date = new Date();
    var daysofWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayofWeek = daysofWeek[raw_date.getDay()];
    var monthsofyear = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
    var monthofYear = monthsofyear[raw_date.getMonth()];

    var output = dayofWeek + ', ' + raw_date.getDate() + ' ' +  monthofYear + ' ' + raw_date.getFullYear();
    document.getElementById('formatDate').innerHTML = output;
}
formatDate();