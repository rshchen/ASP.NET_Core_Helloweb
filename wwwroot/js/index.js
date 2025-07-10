// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// 表單提交

document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // 防止表單預設送出
    var name = document.getElementById('name').value.trim();
    if(name) {
        // encodeURIComponent 防止特殊字元出錯
        window.location.href = '/hello/' + encodeURIComponent(name);
    }
});



// 即時顯示時間 

function pad(n) {
    return n < 10 ? '0' + n : n;
}
function updateTime() {
    var now = new Date();
    var formatted = now.getFullYear() + '-' +
        pad(now.getMonth() + 1) + '-' +
        pad(now.getDate()) + ' ' +
        pad(now.getHours()) + ':' +
        pad(now.getMinutes()) + ':' +
        pad(now.getSeconds());
    document.getElementById('nowTime').textContent = formatted;
}
setInterval(updateTime, 1000);
updateTime(); // 頁面載入馬上顯示一次

