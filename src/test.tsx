import * as ReactDOM from 'react-dom';
import Spoiler from "./components/Spoiler";

const element = (
  <>
    <Spoiler>
      <h1>Hello!</h1>
    </Spoiler>
  </>
);

ReactDOM.render(element, document.getElementById('root'));