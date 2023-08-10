// 내부에 분리된 컴포넌트 호출
// 학습 주제별 컴포넌트
import ConditionalDisplay from './parts/ConditionalDisplay';
import ConditionalRendering from './parts/ConditionalRendering';
import DisplayingData from './parts/DisplayingData';
import RenderingLists from './parts/RenderingLists';

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

/* 컴포넌트 --------------------------------------------------------------------- */

function DefinitionList() {
  const renderList = () => {
    return null;
  };

  return (
    <dl className="descriptionList">
      <DisplayingData hidden statusMessage={statusMessage} />
      {/* 조건부 렌더링(rendering) vs. 조건부 표시(display) */}
      {/* SSR (존재 혹은 존재하지 않음) vs. Client (화면에 표시 혹은 감춤) */}
      <ConditionalRendering hidden imageType={imageType} />
      <ConditionalDisplay isShowReactImage={isShowReactImage} />
      <RenderingLists renderList={renderList} />
    </dl>
  );
}

export default DefinitionList;
