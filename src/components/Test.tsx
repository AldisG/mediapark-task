import {
    RecoilRoot,
    atom,
    selector,
    atomFamily,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

const elementPositionStateFamily = atomFamily({
    key: 'ElementPosition',
    default: (val: number[]) => [val[0], val[1]]|| [0, 0],
  });
  
  function ElementListItem() {
    const position = useRecoilValue(elementPositionStateFamily([5,5]));
    return (
      <div>
        Position: {position}
      </div>
    );
  }
  export default ElementListItem