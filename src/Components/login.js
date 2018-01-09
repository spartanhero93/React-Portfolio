import React ,{Component} from "react";

class Login extends Component {
    constructor(props){
        super(props);
        this.handleLoginCheck = this.handleLoginCheck.bind(this);
        this.handleLogoutCheck = this.handleLogoutCheck.bind(this);
        this.state = {isLoggedIn: false}
    }
    handleLoginCheck(){
        this.setState({isLoggedIn: true})
    }
    handleLogoutCheck(){
        this.setState({isLoggedIn: false})
    }
    render(){

        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutCheck} />;
        } else {
            button = <LoginButton onClick={this.handleLoginCheck} />;
        }

        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }
}
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

export default Login;