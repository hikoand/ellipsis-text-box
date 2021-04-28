$(function () {
  const showText = 98;
  let elem = $(".more_text");
  let moreBtnText = "show more";
  let lessBtnText = "show less";

  elem.each(function (i) {
    console.log(i);
    let content = $(this).html();
    let contentLeng = content.length;
    let lessText = content.substr(0, showText);
    let moreText = content.substr(showText, contentLeng);
    let changeHtml = "";
    if (showText < contentLeng) {
      if (showText < contentLeng) {
        changeHtml =
          lessText +
          "<span>...</span><span class='more_content'><span>" +
          moreText +
          "</span><a href='#'class='more_btn less'><span>Show More</span></a></span>";
        $(this).html(changeHtml);
      }
    }
  });

  $(".more_btn").click(function () {
    //click 시 실행문
    // console.log("click event 실행완료");
    // console.log($(this))
    if ($(this).hasClass("less")) {
      // console.log('less class 가지고 있습니다.');
      $(this).removeClass("less");
      $(this).html("<span>" + lessBtnText + "</span>");
    } else {
      $(this).addClass("less");
      $(this).html("<span>" + moreBtnText + "</span>");
    }

    $(this).prev().toggle();
    $(this).parent().prev().toggle();
  });
});
