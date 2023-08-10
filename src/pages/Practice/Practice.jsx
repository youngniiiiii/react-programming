// 스타일 파일 호출
import './Practice.css';



// 에셋 이미지 호출
import reactImagePath from '@/assets/react.svg';
import viteImagePath from '@/assets/vite.svg';
import DefinitionList from './DefinitionList';

/* 데이터 ---------------------------------------------------------------------- */

let imageType = 'react'; // 'react' | 'vite'

let isShowReactImage = true;

const statusMessage = [
  '⌛️ 대기', // pending
  '⏳ 로딩 중...', // loading
  '✅ 로딩 성공!', // success (resolve)
  '❌ 로딩 실패.', // error (fail, reject)
];

const reactLibrary = {
  name: 'React',
  author: '조던 워케(Jordan Walke)',
  writtenIn: 'JavaScript',
  type: 'JavaScript 라이브러리',
  license: 'MIT',
};

/* -------------------------------------------------------------------------- */

function Practice() {
  const renderList = () => {
    return null;
  };

  // 2-1. 조건 문 (함수 몸체(function body) 내부 사용)
  // let imageComponent; // undefined

  // if (imageType === 'vite') {
  //   imageComponent = <img src={viteImagePath} alt="비트" />;
  //   // imageComponent = React.createElement('img', { src, alt });
  // } else {
  //   imageComponent = <img src={reactImagePath} alt="리액트" />;
  // }

  const imageComponent =
    imageType === 'vite' ? (
      <img src={viteImagePath} alt="비트" />
    ) : (
      <img src={reactImagePath} alt="리액트" />
    );

  // 2-2. 조건 식 (JSX 내부 사용)
  // 2-2-1. 3항 연산식

  return (
    <div className="Practice">
      <h2>JSX 인 액션</h2>
      <hr />
      {/* Extracting Component */}
      <DefinitionList statusMessage={statusMessage} />

      {/* 스크롤 다운/업 버튼에 이벤트를 연결해 App 컴포넌트가 부드럽게 스크롤 되도록 핸들러를 작성합니다. */}
      <div role="group" className="buttonGroup">
        <button
          type="button"
          className="scrollDown"
          aria-label="스크롤 다운"
          title="스크롤 다운"
        >
          <svg
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
          >
            <path
              d="m112 268 144 144 144-144M256 392V100"
              fill="none"
              stroke="currentColor"
              strokeLinecap="square"
              strokeMiterlimit={10}
              strokeWidth="48px"
            />
          </svg>
        </button>
        <button
          type="button"
          className="scrollUp"
          aria-label="스크롤 업"
          title="스크롤 업"
        >
          <svg
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
          >
            <path
              d="m112 268 144 144 144-144M256 392V100"
              fill="none"
              stroke="currentColor"
              strokeLinecap="square"
              strokeMiterlimit={10}
              strokeWidth="48px"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Practice;
