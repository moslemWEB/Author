import { render, screen } from '@testing-library/react';
import AuthorQuiz from './AuthorQuiz';

describe("Author quiz", ()=>{
  it("renders without crashing", ()=>{
    const div=document.createElement("div");
    ReactDOM.render(<AuthorQuiz />,div);
  });
});
