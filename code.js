var selectedDay;
$(document).ready(function () {
    // semi colon for pseudo selectors
    $(":radio").click(chooseDay);

    function chooseDay() {
        selectedDay = this.id;
        switch (selectedDay) {
            case "monday":
                $("#event1").text("Class");
                $("#time1").text("12:00 PM - 10:00 PM");
                $("#event2").text("Homework");
                $("#time2").text("10:00 PM - 12:00 AM");
                break;
            case "tuesday":
                $("#event1").text("Work");
                $("#time1").text("11:30 AM - 8:00 PM");
                $("#event2").text("Game");
                $("#time2").text("10:00 PM - 12:00 AM");
                break;
            case "wednesday":
                $("#event1").text("Class");
                $("#time1").text("12:00 PM - 10:00 PM");
                $("#event2").text("Homework");
                $("#time2").text("10:00 PM - 12:00 AM");
                break;
            case "thursday":
                $("#event1").text("Work");
                $("#time1").text("11:30 AM - 8:00 PM");
                $("#event2").text("Game");
                $("#time2").text("10:00 PM - 12:00 AM");
                break;
            case "friday":
                $("#event1").text("Work");
                $("#time1").text("11:30 AM - 8:00 PM");
                $("#event2").text("Game");
                $("#time2").text("10:00 PM - 12:00 AM");
                break;
            case "saturday":
                $("#event1").text("Work");
                $("#time1").text("11:30 AM - 8:00 PM");
                $("#event2").text("Game");
                $("#time2").text("10:00 PM - 12:00 AM");
                break;
            case "sunday":
                $("#event1").text("Work");
                $("#time1").text("11:30 AM - 8:00 PM");
                $("#event2").text("Game");
                $("#time2").text("10:00 PM - 12:00 AM");
                break;
        }
    }
});