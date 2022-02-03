# 기본 명령어 모음

> git 기본 명령어들을 정리한 공간입니다.



- `git init`

  - 지역 저장소 생성

    ```bash
    git init
    ```

- `git config user.name` / `git config user.email`

  - 프로젝트별 지역 사용자 등록

    ```bash
    git config user.name "사용자 이름"
    git config user.email "이메일 주소"
    ```

- `git config --global user.name` / `git config --global user.email`

  - 지역 환경의 전체 프로젝트를 위한 사용자 등록

    ```bash
    git config --global user.name "사용자 이름"
    git config --global user.email "이메일 주소"
    ```

- `git remote add`

  - 원격 저장소의 주소를 지역 저장소에 등록

    ```bash
    git remote add "원격 저장소 주소"
    ```

- `git add`

  - 커밋에 포함될 파일 등록

    ```bash
    git add "파일명"
    ```

- `git status`

  - 현재 프로젝트의 파일 상태 확인

    ```bash
    git status
    ```

- `git commit`

  - 새로운 커밋 생성

    ```bash
    git commit
    ```

  - 기존 커밋 수정

    ```bash
    git commit --amend
    ```

  - 기존 커밋 저자 수정

    ```bash
    git commit --amend --author "username<email>"
    ```

- `git log`

  - 커밋 내역 확인

    ```bash
    git log
    ```

  - 커밋 내역 가시적/그래프 표현으로 확인

    ```bash
    git log --pretty=oneline --graph
    ```

- `git push`

  - 원격 저장소에 커밋 반영

    ```bash
    git push "원격 저장소 식별자" "브랜치"
    ```

- `git clone`

  - 원격 저장소 복제

    ```bash
    git clone "원격 저장소 주소"
    ```
