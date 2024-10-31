function doPost(e) {
  const webhookUrl = "YOUR_WEBHOOK_URL"; // 送信先Webhook URL
  const receivedData = JSON.parse(e.postData.contents); // 受信したJSONメッセージをパース
  
  // 転送するペイロードを作成
  const payload = {
    content: receivedData.content || "", // 必要に応じて受信したメッセージの内容を利用
    flags: 4096  // 4096フラグで通知をサイレントに設定
  };
  
  const options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
  };

  try {
    const response = UrlFetchApp.fetch(webhookUrl, options);
    Logger.log("サイレントメッセージが送信されました: " + response.getContentText());
  } catch (error) {
    Logger.log("エラーが発生しました: " + error.message);
  }
}
