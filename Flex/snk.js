exports.snk = {
  "type": "bubble",
  "direction": "ltr",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "Syarat dan Ketentuan",
        "size": "lg",
        "align": "center",
        "weight": "bold",
        "color": "#D12D55"
      },
      {
        "type": "separator",
        "margin": "md"
      },
      {
        "type": "text",
        "text": "Sebelum memesan yuk ikutin peraturan dari pemesanan daily ketring ini!",
        "margin": "sm",
        "align": "center",
        "wrap": true
      },
      {
        "type": "separator",
        "margin": "sm"
      },
      {
        "type": "text",
        "text": "Dengan klik lanjut maka anda menyetujui syarat dan ketentuan daily katering di KETRINGA",
        "margin": "sm",
        "align": "center",
        "weight": "regular",
        "wrap": true
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "button",
        "action": {
          "type": "uri",
          "label": "Baca S&K",
          "uri": "https://linecorp.com"
        },
        "margin": "md",
        "height": "sm",
        "style": "secondary"
      },
      {
        "type": "button",
        "action": {
          "type": "postback",
          "label": "Lanjut",
          "text": "Lanjut Pesan",
          "data": "daily=lanjut"
        },
        "color": "#D12D55",
        "margin": "md",
        "height": "sm",
        "style": "primary"
      }
    ]
  }
}