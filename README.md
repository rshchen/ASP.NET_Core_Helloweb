# README
這是我的第一個ASP.NET專案，類型為簡單的Razor Pages 專案，將預設的Razor Pages做了一下調整。

練習用docker部署在vps上，可以參考網站
[我的第一個 ASP.NET Core 練習專案](https://helloweb.blesstw.com)


1. 修改`Pages/Shared/_Layout.cshtml`的`bootstrap`，變成深色模式。
2. 修改`wwwroot/css`，改變背景顏色以及讓文字置中，也調整了`div`的`padding`。
3. 修改首頁文字，並加入即時顯示的時間。
4. `Pages`底下新增網頁`Hello`，只要輸入網址`https://helloweb.blesstw.com/hello/<name>`，就會顯示你所輸入的`name`。