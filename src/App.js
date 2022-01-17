import './App.css';
import styled from 'styled-components';
// import NewUserList from './components/WithHooks/NewUserList';
// import DataFetch from './components/WithHooks/DataFetch';
// import Counter from './components/WithHooks/Counter';
// import StateDiff from './components/WithHooks/StateDiff';
// import UseContext from './components/ContextEx/UseContext';
// import UserList from './components/UserList';
// import PostDemo from './components/PostDemo';
import Navbar from './components/StylesElement/Navbar';

const Container = styled.div`
  background: #67bc98;
  height: 100vh;
`;

function App() {
  return (
    <div>
      <Container>
      <Navbar/>
      </Container>
      {/* <UserList/> */}
      {/* <PostDemo/> */}
      {/* <NewUserList/>  */}
      {/* <Counter/> */}
      {/* <StateDiff/> */}
      {/* <UseContext/> */}
      {/* <DataFetch/> */}
    </div>
  );
}

export default App;

