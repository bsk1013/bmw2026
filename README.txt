BMW PWA v6 big icon package

이번 버전의 핵심:
- 홈화면 아이콘과 Android 기본 스플래시가 같은 manifest 아이콘을 쓰는 문제를 인정하고, 둘 다 큰 BI 아이콘으로 통일
- 투명/작은 maskable 아이콘 제거
- 기존 icon-*.png 이름을 사용하지 않음
- 새 파일명: bmw-v6-icon-*.png
- manifest.webmanifest는 v=6 쿼리로 캐시 무효화
- background/theme color는 #081022로 통일
- HTML 커스텀 BoMunWildcard 인트로 유지

GitHub 정리 권장:
- 기존 icons/icon-192.png, icon-512.png, icon-maskable-512.png 삭제 권장
- 기존 manifest-v5.webmanifest 등 이전 manifest 삭제 권장
- 이 패키지 전체 업로드
- 기존 홈화면 앱 삭제 후 다시 추가

BMW PWA v7 precise fixes

반영 사항:
1. manifest.webmanifest에서 purpose: "maskable" 아이콘 항목 제거
   - Android safe zone으로 홈화면 로고가 작아지는 문제 완화
   - any 아이콘 192/512만 유지
   - maskable 파일 자체는 폴더에 남겨도 되지만 manifest에서는 참조하지 않음

2. HTML 인트로 타이밍 조정
   - load 기준 hideIntro 2200ms
   - safety timeout 3000ms

3. BoMunWildcard 텍스트 직접 스윕 빛 수정
   - position: fixed 기반
   - 왼쪽 화면 밖(-38vw)에서 시작
   - 오른쪽 화면 밖(118vw)으로 완전히 종료
   - 시작/종료 opacity 0 처리로 미리 보이거나 멈춰 보이는 현상 완화

업로드 후:
- 기존 홈화면 BMW 앱 삭제
- 기존 브라우저 캐시/사이트 데이터 삭제 권장
- GitHub에 전체 파일 업로드 후 재설치


BMW PWA v8 white launcher icon

변경:
- 홈화면 앱 아이콘 배경을 흰색으로 변경
- 로고 크기는 v7의 확대 비율 유지
- native splash 배경색은 네이비(#081022) 유지
- HTML BoMunWildcard 인트로 유지
- manifest는 any 아이콘만 사용

설치 권장:
1. 기존 홈화면 BMW 앱 삭제
2. GitHub 전체 파일 교체 업로드
3. 브라우저 캐시 삭제 권장
4. 다시 홈화면 추가

BMW PWA v9 intro restore

v8 기준 국소 수정:
- 흰 배경 홈화면 아이콘은 유지
- manifest any 아이콘 구조 유지
- 원래의 세로형 흐릿한 배경 빛 복구
- BoMunWildcard 텍스트 직접 스윕 빛은 별도 fixed 레이어로 분리
- 텍스트 스윕 빛 시작: 화면 밖 왼쪽(-42vw)
- 텍스트 스윕 빛 종료: 화면 밖 오른쪽(124vw)
- 종료 후 빛 잔상/정지 현상 방지
- hideIntro 타이밍 2200ms / 3000ms 유지

BMW PWA v10 intro sweep transform fix

v9 피드백 반영:
- 모바일 PWA에서 인트로 로고가 안 보이는 문제 방지를 위해 intro logo를 파일 경로가 아닌 base64 data URI로 직접 삽입
- 세로로 긴 흐릿한 배경 빛은 v9 상태 유지
- 텍스트 강한 빛은 left 이동 방식 제거
- fixed 레이어 + transform translateX(-160vw -> 160vw) 방식으로 변경
- JS가 실제 BoMunWildcard 텍스트 위치를 계산하여 빛 높이/위치를 맞춤
- 오른쪽에서 갑자기 나타나는 느낌 완화

BMW PWA v11 intro cleanup

v10 기준 국소 수정:
- 스틸 느낌의 빛 라인/세로 빛 디자인은 유지
- 로그인창 뒤, 로그인 후 상단메뉴 위에 인트로 라인/빛이 남는 문제 방지
- hideIntro 시 bmw-intro-text-sweep / bmw-intro-subglow 강제 opacity 0 + display none
- 420ms 후 #bmwIntroSplash 및 잔여 인트로 노드 hard remove
- 3600ms 최종 안전망 hard remove 추가
- pointerdown 시에도 잔상 없이 정리

BMW PWA v12 transparent icon

v11 기준 국소 수정:
- 홈화면/OS 기본 PWA 스플래시 아이콘에서 흰 사각형 배경 제거
- 투명 배경 BI 로고 PNG로 교체
- native splash 배경색은 #081022 네이비 유지
- manifest maskable 없음, any 아이콘 192/512만 유지
- HTML 인트로/스윕/타이밍/기능은 수정하지 않음

설치:
- 기존 홈화면 BMW 앱 삭제
- GitHub 전체 파일 교체 업로드
- 필요 시 브라우저 사이트 데이터 삭제 후 재설치
