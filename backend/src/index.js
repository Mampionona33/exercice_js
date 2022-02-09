import { stringArray, fruits } from './data';

export const index = () => {
  const myParagraph = document.createElement('p');
  myParagraph.innerText = `hello : ${fruits}`;
  myParagraph.id = 'myPara';

  const handleClikShow = () => {
    document.body.appendChild(myParagraph);
  };

  const handleClikHide = () => {
    const getPara = document.getElementById('myPara');
    if (getPara) {
      document.body.removeChild(getPara);
    }
  };

  const butShow = document.createElement('button');
  butShow.innerText = 'Show';
  butShow.id = 'btShow';

  const butHide = document.createElement('button');
  butHide.innerText = 'Remove';
  butHide.id = 'btRemove';

  const butGrid = document.createElement('div');
  butGrid.id = 'btGrid';
  butGrid.appendChild(butShow);
  butGrid.appendChild(butHide);

  butShow.onclick = () => handleClikShow();
  butHide.onclick = () => handleClikHide();
  document.body.appendChild(butGrid);
};

index();
