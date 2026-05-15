BMW Official PWA Package - Large BI Logo

수정 내용:
- 홈화면 아이콘 BI 로고 확대
- 앱 실행 스플래시용 maskable 아이콘 확대
- BI 로고 크롭 후 아이콘 재생성
- service worker cache name 변경: bmw-pwa-large-bi-v2

기준 HTML:
- 업로드된 index.html

앱 이름:
- BMW

업로드 대상:
- https://bsk1013.github.io/bmw2026/

업로드 파일:
- index.html
- manifest.webmanifest
- service-worker.js
- icons 폴더 전체

BI 로고:
- 원본: 158 x 160
- 크롭 후: 165 x 167

중요:
- 기존 홈화면 아이콘은 캐시될 수 있으므로, 삭제 후 다시 홈화면 추가해야 새 아이콘이 확실히 반영됩니다.
- Android/Chrome은 service worker 캐시도 있으므로 앱 재실행 또는 사이트 데이터 삭제가 필요할 수 있습니다.

CUSTOM INTRO SPLASH:
- BI 로고 + BoMunWildcard 입체 텍스트
- 좌→우 빛 스윕 애니메이션
- 로딩바 없음
- 약 2초 후 본 화면 전환

XL HOME ICON REVISION:
- 홈화면/Apple touch icon용 BI 로고 초대형 버전
- 180/192 아이콘 로고 점유율 약 128%
- 512 일반 아이콘 로고 점유율 약 118%
- maskable 아이콘은 잘림 방지를 위해 약 102%
- 기존 홈화면 앱은 반드시 삭제 후 다시 추가 필요
- Android/Chrome 캐시가 남으면 사이트 데이터 삭제 또는 새 URL 파라미터 접속 권장

BI original: (158, 160)
BI cropped: (157, 159)
