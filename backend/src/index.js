import { stringArray } from './data';

export const index = () => {
  const myParagraph = document.createElement('p');
  myParagraph.innerText = `hello ${stringArray}`;
  document.body.appendChild(myParagraph);
};

index();
