import './index.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppEvaluationAdmin2 from "./pages/AppEvaluationAdmin2/AppEvaluationAdmin2";
import AppAskAdmin from './pages/AppAskAdmin/AppAskAdmin';
import Login from './pages/Login/Login';
import AppEvaluationAdmin1 from './pages/AppEvaluationAdmin1/AppEvaluationAdmin1';
import AppEvaluation1 from './pages/AppEvaluation1/AppEvaluation1';
import AppEvaluation2 from './pages/AppEvaluation2/AppEvaluation2';
import AppEvaluation3 from './pages/AppEvaluation3/AppEvaluation3';
import { NavBar } from './components';
import InDeclaration from './components/invest/InDeclaration/InDeclaration';
import InProspectusAccept from './components/invest/InProspectusAccept/InProspectusAccept';


function App() {
  return (
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
  );
}

export default App;

