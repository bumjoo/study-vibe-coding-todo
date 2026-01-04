# ✅ 할일 목록 (Todo App) - Firebase 연동

이 프로젝트는 **Firebase Realtime Database**를 활용하여 할일을 관리할 수 있는 웹 애플리케이션입니다. 실시간 데이터 동기화 기능을 통해 여러 기기에서 동일한 할일 목록을 관리할 수 있습니다.

특히, 이 프로젝트는 직접적인 코드 작성 없이 AI와 대화하며 개발하는 **'바이브 코딩(Vibe Coding)'** 방식으로만 제작되었습니다.

> ⚠️ **참고**: 본 프로젝트는 학습을 위한 스터디 과제용으로 제작되었습니다.

## 🔗 관련 링크

* **GitHub 저장소**: [https://github.com/bumjoo/study-vibe-coding-todo](https://github.com/bumjoo/study-vibe-coding-todo)
* **사용한 서비스**: [Firebase Realtime Database](https://firebase.google.com/products/realtime-database)

## 🛠 사용 기술

* **Language**: HTML5, CSS3, JavaScript (Vanilla JS)
* **Backend**: Firebase v12 (Realtime Database)
* **Deployment**: GitHub Pages (예정)

## 📋 주요 기능

* **실시간 데이터 동기화**: Firebase를 통해 할일 목록이 실시간으로 서버와 동기화됩니다.
* **할일 추가, 수정, 삭제**: 기본적인 CRUD 기능을 지원하여 할일을 편리하게 관리합니다.
* **완료 체크 기능**: 완료된 항목을 시각적으로 구분하여 관리할 수 있습니다.
* **반응형 디자인**: 모바일과 데스크탑 환경 모두에서 사용하기 편리한 UI를 제공합니다.

## 🚀 배포 (Deployment) - Vercel

이 프로젝트는 Vercel을 통해 배포됩니다. 보안을 위해 Firebase 설정값은 환경 변수(`Environment Variables`)로 관리합니다.

### 환경 변수 설정
Vercel 프로젝트 설정에서 다음 변수들을 추가해야 합니다:
* `FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, `FIREBASE_DATABASE_URL` 등

빌드 시 `node generate-config.js` 명령어가 실행되어 `config.js` 파일을 자동으로 생성합니다.

## 👤 제작자

* **이름**: bumjoo
* **역할**: **Vibe Coder** (AI와 대화하며 직접적인 코딩 없이 개발 진행)
* **스터디**: 코딩알려주는누나 - 바이브코딩 스터디 학생

---

© 2026 bumjoo. 학습용 프로젝트입니다.

