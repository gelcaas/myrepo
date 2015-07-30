    var now = new Date();
    var endtime = $("#end_time").val();
    // var endDate = new Date(endtime.getFullYear(), endtime.getMonth(), endtime.getDate(), 0, 0, 0);
    var endDate = parseFloat(endtime) * 1000;
    var leftTime = endDate - now.getTime();
    function ShowCountDown() {
    	var buyCount = $("#buyCount").val();
    	var max = $("#max").val();
        var leftsecond = parseInt(leftTime / 1000);
        var day = Math.floor(leftsecond / (60 * 60 * 24));
        var hour = Math.floor((leftsecond - day * 24 * 60 * 60) / 3600);
        var minute = Math.floor((leftsecond - day * 24 * 60 * 60 - hour * 3600) / 60);
        var second = parseFloat(parseFloat(leftTime / 1000 - day * 24 * 60 * 60 - hour * 3600 - minute * 60).toFixed(1));
        if (hour < 10) {
            hour = '0' + hour;
        }
        if (minute < 10) {
            minute = '0' + minute;
        }
        if (second < 10 && second >= 0) {
            second = '0' + second;
        } else if (second < 0) {
            second = 60 + second;
        }
        if (day>0) {
        	$('#day1').html(day);
        	$('#tian').html('天');
        };
        $('#hour1').html(hour);
        $('#minute1').html(minute);
        $('#second1').html(second);
        leftTime = leftTime - 100;
        if (leftTime <= 0 || buyCount == max ) {
        	$("#countdown").html('<br />');
        	$("#buyCount").html(max);
        	$(".padl-10 .btn").attr('href', 'javascript:;');
        	$(".padl-10 .btn").addClass('disabled');
        };
    }
    ShowCountDown();
    $('#countdown').css('display', '');
    window.setInterval(function () {
        ShowCountDown();
    }, 100);
