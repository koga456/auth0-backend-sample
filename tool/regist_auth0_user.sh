#!/usr/bin/env bash

auth_url="auth0 tenantのURL"
client_id="auth0に登録したclient_id"
email="登録するユーザーのメールアドレス"
username="登録するユーザーの名前"
password="登録するユーザーのパスワード"

echo "Register user"
curl -X POST "${auth_url}/dbconnections/signup" \
  -H 'Content-Type: application/json' \
  -d "{\"client_id\": \"${client_id}\",\"email\":\"${email}\",\"password\": \"${password}\",\"connection\": \"Username-Password-Authentication\",\"username\":\"${username}\",\"name\":\"${username}\",\"nickname\": \"${username}\"}"
echo "\n"