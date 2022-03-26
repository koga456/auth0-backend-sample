#!/usr/bin/env bash

auth_url="auth0 tenantのURL"
client_id="auth0に登録したclient_id"
client_secret="auth0に登録したclient_secret"
username="トークンを取得したいユーザーのメールアドレス"
password="トークンを取得したいユーザーのパスワード"

echo "Get Token"
curl -s --request POST \
  --url ${auth_url}/oauth/token \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data grant_type=password \
  --data username${username} \
  --data password${password} \
  --data client_id=${client_id} \
  --data client_secret=${client_secret} \ | jq -r
echo "\n"