import React from "react";
import "../../static/styles/signup.css";
import male from "../../static/images/app.svg";
import female from "../../static/images/dogwoman.svg";
import submitForm from "../../helpers/Form";


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genderSelected: "Male",
      firstName: "",
      lastName: "",
      email: "",
      age: 21,
      password: "",
      weight: 150.5,
      goalWeight:140.5,
      calorieGoal: 1900
    };
  }

  setIsMaleSelected = () => this.setState({ genderSelected: this.state.genderSelected === "Male" ? "Female" : "Male" });

  render() {
    const maleSelected = this.state.genderSelected === "Male" ? { background: "#b9f2ff", padding: "15px" } : { background: "white", padding: "0px" };
    const femaleSelected = this.state.genderSelected === "Female" ? { background: "lightpink", padding: "15px" } : { background: "white", padding: "0px" };
    return (

      <form method="POST" onSubmit={ async (e) => await submitForm(
        e,
        "POST",
        "/signup",
        { 'Content-Type': 'application/json' },
        true,
        "/food",
        this.props.history,
        {
          genderSelected : this.state.genderSelected,
          firstName :this.state.firstName,
          lastName : this.state.lastName,
          email :this.state.email,
          age : this.state.age,
          password : this.state.password,
          weight: this.state.weight,
          goalWeight: this.state.goalWeight,
          calorieGoal:this.state.calorieGoal
        },
        this.props.updateErrors,
        (result) => { }
      )} id="signup" >


        <h2 id="signupHeading">Sign Up</h2>
        <div className="inputField">
          <label className="inputFieldLabel">First Name</label>
          <span ><input onChange={(e) => this.setState({firstName:e.target.value}) } required name="firstName" type="text" placeholder="First Name" /></span>
        </div>

        <div className="inputField">
          <label className="inputFieldLabel">Last Name</label>
          <input onChange={(e) => this.setState({lastName:e.target.value})} required type="text" placeholder="Last Name" name="lastName" />
        </div>

        <div className="inputField">
          <label className="inputFieldLabel">Email</label>
          <input onChange={(e) => this.setState({email:e.target.value})} required type="email" name="email" placeholder="Email" />
        </div>

        <div className="inputField">
          <label className="inputFieldLabel">Password</label>
          <input onChange={(e) => this.setState({password:e.target.value}) } required type="password" name="password" placeholder="Password" />
        </div>

        <div id="tap">Tap or Click To Choose</div>

        <div id="inputFieldSpecial">
          <div className="flex-inner-wrapper">
            <div id="maleCheck" style={maleSelected} onClick={() => this.setIsMaleSelected()}>
              <span id="maleLabel">Male</span>
              <input type="radio" name="gender" id="male" />
              <img alt="" src={male} width="100" id="maleImage" />
            </div>
            <div id="genderMiddle">
              <div id="or">or</div>
            </div>
            <div id="femaleCheck" style={femaleSelected} onClick={() => this.setIsMaleSelected()}>
              <span id="femaleLabel">Female</span>
              <input type="radio" name="gender" id="female" />
              <img alt="" src={female} width="80" id="femaleImage" />
            </div>
          </div>
        </div>

        <div className="inputField">
          <label className="inputFieldLabel">Age</label>
          <input onChange={(e) => this.setState({age: e.target.value})} required type="number" min="16" step="1" name="age" placeholder="Age" />
        </div>

        <div className="inputField">
          <label className="inputFieldLabel">Weight (lbs)</label>
          <input onChange={(e) => this.setState({weight: e.target.value}) } required type="number" step="0.5" min="90" max="700" name="weight" placeholder="Weight" />
        </div>

        <div className="inputField">
          <label className="inputFieldLabel">Goal Weight (lbs)</label>
          <input onChange={(e) => this.setState({goalWeight:e.target.value})} required type="number" step="0.5" min="90" max="700" name="goalWeight" placeholder="Goal Weight" />
        </div>

        <div className="inputField">
          <label className="inputFieldLabel">Calorie Goal</label>
          <input onChange={(e) => this.setState({calorieGoal:e.target.value}) } required type="number" step="50" min="1000" max="20000" name="calorieGoal" placeholder="Calorie Goal" />
        </div>

        <input type="submit" value="Sign Up" className="signupSubmit" />
      </form>
    );
  }

}


export default Signup;