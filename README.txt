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
