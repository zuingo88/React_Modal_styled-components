import './index.css';
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppEvaluationAdmin2 from "./components/committee/AppEvaluationAdmin2/AppEvaluationAdmin2";
import AppAskAdmin from './components/committee/AppAskAdmin/AppAskAdmin';
import Login from './components/committee/Login/Login';
import AppEvaluationAdmin1 from './components/committee/AppEvaluationAdmin1/AppEvaluationAdmin1';
import AppEvaluation1 from './components/committee/AppEvaluation1/AppEvaluation1';
import AppEvaluation2 from './components/committee/AppEvaluation2/AppEvaluation2';
import AppEvaluation3 from './components/committee/AppEvaluation3/AppEvaluation3';
import { NavBar } from './components';
import InDeclaration from './components/invest/InDeclaration/InDeclaration';
import InProspectusAccept from './components/invest/InProspectusAccept/InProspectusAccept';


function App() {
  return (
    <>
    <GlobalStyle />
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact />
          <Route path='/ae1' exact component={AppEvaluation1} />
          <Route path='/ae2' exact component={AppEvaluation2} />
          <Route path='/ae3' exact component={AppEvaluation3} />
          <Route path='/aea1' exact component={AppEvaluationAdmin1} />
          <Route path='/aea2' exact component={AppEvaluationAdmin2} />
          <Route path='/login' exact component={Login} />
          <Route path='/aaa' exact component={AppAskAdmin} />
          <Route path='/indeclaration' exact component={InDeclaration} />
          <Route path='/inprospectusaccept' exact component={InProspectusAccept} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

