import { stringArray, fruits } from './data';

export const index = () => {
  const myParagraph = document.createElement('p');
  myParagraph.innerText = `hello ${fruits}`;
  document.body.appendChild(myParagraph);
};

index();
