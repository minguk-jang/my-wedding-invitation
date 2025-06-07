#!/bin/bash

# 모든 변경사항 스테이지에 추가
git add .

# 커밋 메시지 입력받기 (기본값: "update")
read -p "Enter commit message (default: 'update'): " msg
msg=${msg:-update}

# 커밋
git commit -m "$msg"

# 원격 저장소에 push
git push origin main
