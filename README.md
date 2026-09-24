# Minseo Kim — 개인 홈페이지

[minseo25.github.io](https://minseo25.github.io)

Jekyll과 [al-folio](https://github.com/alshedivat/al-folio) 테마로 만든 연구자 개인 홈페이지입니다.
소개, 논문, 프로젝트, CV, 소식을 관리하고 GitHub Pages에 배포합니다.

## 로컬 실행

Docker Desktop을 실행한 뒤 레포 루트에서 다음 명령을 실행합니다.

```sh
docker compose up
```

브라우저에서 <http://localhost:8080>에 접속합니다. 파일 변경은 자동으로 반영되며, 종료는 `Ctrl+C`로 합니다.

Ruby를 직접 사용하는 경우 Ruby 3.3 이상, Node.js, ImageMagick, Python과 nbconvert가 필요합니다.
GitHub Actions의 배포 환경은 Ruby 3.3.5를 사용합니다.

```sh
gem install bundler -v 2.7.2
bundle install
bundle exec jekyll serve --livereload --port 8080
```

`Gemfile.lock`은 버전 관리되는 의존성 목록이므로 유지합니다.

## 콘텐츠 수정 위치

| 내용                                         | 파일 또는 폴더                                   |
| -------------------------------------------- | ------------------------------------------------ |
| 자기소개, 프로필 사진, 메인 페이지 표시 항목 | `_pages/about.md`                                |
| 논문 목록                                    | `_bibliography/papers.bib`                       |
| 소식                                         | `_news/`                                         |
| 프로젝트                                     | `_projects/`                                     |
| 웹 CV                                        | `assets/json/resume.json`                        |
| 다운로드용 CV                                | `assets/pdf/mskim_cv.pdf`                        |
| 연락처와 소셜 링크                           | `_data/socials.yml`                              |
| 이름, 사이트 설명, URL, 기능 설정            | `_config.yml`                                    |
| 이미지와 논문 썸네일                         | `assets/img/`, `assets/img/publication_preview/` |
| 페이지 구조와 공통 요소                      | `_layouts/`, `_includes/`                        |
| 스타일                                       | `_sass/`                                         |

- 메인의 대표 논문은 BibTeX 항목에서 `selected={true}`로 지정합니다.
- 메인에는 날짜 기준 최신 소식 3개가 표시되며, 전체 목록은 `/news/`에서 확인할 수 있습니다.
- 프로젝트는 `category`와 `importance`로 분류하고 정렬합니다.
- 웹 CV의 표시 섹션은 `_config.yml`의 `jsonresume` 목록에서 선택합니다. PDF는 별도로 갱신해야 합니다.
- `_data/cv.yml`은 JSON CV를 사용하지 않을 때의 대체 데이터이며, 현재는 비어 있습니다.
- 블로그와 repositories 페이지는 `_config.yml`에서 빌드 대상에서 제외되어 있습니다.

## 빌드와 배포

로컬에서 배포용 HTML을 생성하려면 다음 명령을 실행합니다.

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

결과는 `_site/`에 생성되며 Git에 커밋하지 않습니다.

`main` 또는 `master`에 사이트 관련 변경을 push하면 `.github/workflows/deploy.yml`이
Jekyll 빌드와 미사용 CSS 정리를 실행하고 `gh-pages` 브랜치로 배포합니다.
Pull request에서는 빌드만 실행합니다. GitHub Pages는 `gh-pages` 브랜치를 사용하도록 설정합니다.

논문 인용 수는 `.github/workflows/update-citations.yml`이 매주 월·수·금 UTC 00:00에
`bin/update_scholar_citations.py`를 실행해 `_data/citations.yml`을 갱신합니다.

## 코드 포맷

Node.js 패키지는 Prettier 포맷 도구용입니다.

```sh
npm ci
npx prettier README.md assets/json/resume.json --check
```

다른 파일을 수정했다면 명령에 해당 경로를 지정합니다. 자동 정렬에는 `--write`를 사용합니다.

## 테마 참고 자료

테마의 추가 기능은 [al-folio 문서](https://github.com/alshedivat/al-folio#readme)와
[설정 가이드](https://github.com/alshedivat/al-folio/blob/main/CUSTOMIZE.md)를 참고합니다.
원본 테마의 저작권 및 MIT 라이선스는 [LICENSE](LICENSE)에 유지되어 있습니다.
