function devicePrintReleaseHook(inputs, actions) {
  // ユーザー名を取得
  var username = inputs.heldJob.username;
  
  // ユーザーの残高を取得
  var balance = inputs.user.getBalance();
  
  // 印刷コストを取得
  var cost = inputs.heldJob.cost;
  
  // コストが残高を超えた場合にメールを送信
  if (cost > balance) {
    // メールの件名
    var subject = "残高通知";
    
    // メール本文
    var body = "印刷が行えませんでした。残高をご確認ください。\n" +
        "残高:" +  balance + "\n" +
        "コスト: " + cost + "\n";
    
    // メールの宛先
    var recipient = username;
    
    // メールを送信
    actions.utils.sendEmail(recipient, subject, body);
  }
}
​
