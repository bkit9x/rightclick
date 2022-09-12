var folderRightClicked = ''; // thư mục vừa nhấn chuột phải

// hàm xử lý khi nhấn chuột phải vào thư mục
$(document).on('contextmenu','#grid > div', function(e) {
    folderRightClicked = $(this).attr('data');//lưu lại thư mục vừa nhấn

    //hiển thị menu
    $('#contextMenu').css({
        display: "block",
        left: (($(this).offset().left + $(this).width() + 20 + $('#contextMenu').width()) > $(window).width()) ? $(this).offset().left - $('#contextMenu').width() + 10 : $(this).offset().left + $(this).width() + 20,
        top: $(this).offset().top
    });
    e.preventDefault(); //ngăn sự kiện mặc định hiện menu của trình duyệt
});

//đóng menu khi di chuột ra khỏi menu
$(document).on('mouseleave','#contextMenu', function (e) {
    $('#contextMenu').hide();
});


$(document).on('click', '#contextMenu li', function (e) {
    alert('Bạn vừa nhấn vào ' + $(this).text() + ' của thư mục thứ ' + folderRightClicked);
    $('#contextMenu').hide();
});


