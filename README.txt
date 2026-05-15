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
