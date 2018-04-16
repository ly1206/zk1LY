var str = "";
var content = $(".content");
// $.ajax({
//     url: './data/data.json',
//     success: function(data) {
//         str += `
//             <dl>
//                 <dt><img src="${data.src}" alt=""></dt>
//                 <dd>${data.tit}</dd>
//             </dl>
//         `;
//         content.appendTo(str);
//     }
// });
new Swiper(".swiper-container", {
    autoplay: 1000
});
$(".list li").on("click", function() {
    $(this)
        .css("color", "#fff")
        .siblings()
        .css("color", "#ccc");
});