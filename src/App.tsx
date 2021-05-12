import React from 'react';
import Container from 'react-bootstrap/Container';

import AppRouter from './components/AppRouter';

import './App.css';

function App() {
  return (
    <Container fluid={true}>
      <AppRouter />
    </Container>
  );
}

export default App;



// export default function ParentCmp (props: IAppProps) {
//   return (
//     <div>
//       <ChildCmp xxx={props.props}/>
//     </div>
//   );
// }

