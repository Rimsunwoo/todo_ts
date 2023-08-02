import Router from './shared/Router';
export  interface Todo {
  id: number,
  title: string,
  content: string,
  isDone: boolean
 }



function App() {
  return  <Router />
}



export default App;
