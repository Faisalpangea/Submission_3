var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BB2n1M4o7USHW1usnMg4NZy2NDdbIcHI6JoAuFn9tGdI-e3jrmi_6bKcHKCaYrkCxxi3rkGiFXzFbOO5GCRxn8I",
    "privateKey": "ModxBvU9U3c7KnR3XmHqJfSFNBM1KlxnMKigv-irS3E"
};


webPush.setVapidDetails(
    'mailto:faisal.saleh127@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/dBk96jCY0IU:APA91bFfoXX6okbCSJPcZbCg9tHyhVYDs6leC0_trV0NwJ3FBrMUpN2YdIj_gXrTOEWLtzukcJt6ScXt1Enibll3ocnQPrr02Z9Lop5GLQMjIx3TYGuVKt-ha8f4D5zmIcxZEPGWlmak",
    "keys": {
        "p256dh": "BNYb+5cLeqgJMk7eCrrRLQYtCHUmZKdy0pGgVwdNu3AfCIIJTl63elo+ZNTmJYcQ6sqJonOr+Ea7y5b3aLEs7lg=",
        "auth": "ySgqSgRJjqGNhTbmVjDTEQ=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey: '123816854773',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);