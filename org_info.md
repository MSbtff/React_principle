pnp.cjs는 플러그앤 플러그의 약자로 필요한 라이브러리를 노드 모듈의 만들 수 없다. 파일 입출력이 상당히 소모적이기에
얀은 pnp를 도입함

manifest는 pwa에 필요한 자료

public은 정적인 리소스를 담고

src는 동적인 자료들을 넣는 곳임

package.json 패키지 정보, 라이브러리 정보(디펜던시), 명령어 정보, eslintconfig, browerlist

자바스크립트 어느 버전까지 변경해야 하는지

0.2% 이상은 전세계 브라우저가 0.2% 이상 쓰는 브라우저 지원

README 는 프로젝트 정보( 실행, 설명)

ejct는 포장을 푸는 것이라 보면 된다.

-> package.json의 모든 라이브러리 들이 풀어서 해체 된다.

dot-env 환경설정 할 수 있다.

webpack, babel

꼭 알아야 될 툴

babel은 Javascript transcompiler 프로젝트 빌드 할때 최신 문법을 예전 문법으로 바꿔주는거
Ts, jsx을 바벨로 js로 바꿔줌

webpack은 우리의 코드를 포장해서(번들링) 사용자에게 배포해주는 모듈 번들러
많은 파일을 만들어도 사용자에게 처음에게 가야하는 그룹을 만들어 주는게 웹팩
create react-app 이 번들링 해주는게 웹팩이 하는거랑 비슷하다고 보면됨 사이즈도 줄여주고

ESlint 어떤게 무엇이 잘 못되었는지 알려주는거

Jest testing 하기 위한 프레임 워크

PostCss, tailwind

bundle에 브라우저에 보여지기전에 웹팩으로 다 압축해서
리액트 코드들을 압축해서 하나의 파일로 만들어 줌
어플리케이션 코드들과 리액트 동작을 위한 코드들이 다 압축되어 있음
그래서 가독성이 떨어지고 예전버전 js지원을 위한것도 있음

리액트는 클라이언트 사이더 렌더링이여서 동적으로 작성해서 넣어주게 되는거임 div 태그 안에
즉 브라우저 위에서(클라이언트에서) 만들어진 것이다.
