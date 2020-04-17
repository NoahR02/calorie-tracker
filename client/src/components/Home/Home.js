import React from "react";
import "../../static/styles/index.css";
import superwoman from "../../static/images/superwoman.svg";
import dogwoman from "../../static/images/dogwoman.svg";
import man from "../../static/images/app.svg";
import progress from "../../static/images/progress.svg";
import {Link} from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    };
  }

  async componentDidMount() {
    const authResult = await this.props.isAuthenticated();
    if(authResult) await this.setState({isAuth: true});
    if(!authResult) await this.setState({isAuth: false});
  }

  isLoggedIn = () => {
    if (!this.state.isAuth) {
      return (
        <div id="introPortal">
          <Link to="/signup" className="portalSignUp">Sign Up</Link>
          <span id="portalOr">or</span>
          <Link to="/login" className="portalLogin">Login</Link>
        </div>
      );
    }
  }


  render() {
    return(
      <main id="index">

        <div id="indexContainerOne">
          <div id="indexIntro">
            <h3 id="introHeading">Track Calories<br /> Lose Weight & <br /> Reach Your Goals.</h3>
            {this.isLoggedIn()}
          </div>
          <img alt="" id="indexIntroImage" src={superwoman} width="200" height="200" />
        </div>

        <div id="indexContainerTwo">
          <h3 id="introCalories">Why track calories?</h3>
          <div className="caloriesReason">
            <h4 className="caloriesReasonHeading">It's Easy To Track Calories <br /> Even I Can Do It!</h4>
            <img alt="" className="caloriesReasonImage" src={dogwoman} width="200" height="200" />
          </div>

          <div className="caloriesReason">
            <h4 className="caloriesReasonHeading">Tracking progress and making goals<br /> has never been easier!</h4>
            <img alt="" className="caloriesReasonImage" src={progress} width="200" height="200" />
          </div>

          <div className="caloriesReason">
            <h4 className="caloriesReasonHeading">Add, Edit, and Remove Food<br /> to Track Your Calories!</h4>
            <img alt="" className="caloriesReasonImage" src={man} width="200" height="200" />
          </div>

        </div>
      </main>
    );
  }

}


export default Home;
