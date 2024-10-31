function sendSilentMessageToDiscord() {
  const webhookUrl = "https://discord.com/api/webhooks/WEBHOOK_ID/WEBHOOK_TOKEN"; // Webhook URLを入れる場所

  const payload = {
    content: "", // contentはいったん空にしてある
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
