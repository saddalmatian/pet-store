import './SignIn.css';
import Heading from '../Heading';
import SignInImg from '../../assets/images/SignIn.jpg'

function SignIn() {
    return (
        <div className="container sign-in">
            <div className="row">
                <Heading mixin="Welcome to Pet Store" title="Sign In" />
                <div className="col-md sign-in__form">
                    <p className="sign-in__label">Username (*)</p>
                    <input type="text" className="sign-in__input"></input>
                    <p className="sign-in__label">Password (*)</p>
                    <input type="text" className="sign-in__input"></input>
                    <p className="sign-in__description">If you dont's have an account, please <a href="#1"><span>Sign Up</span></a></p>
                    <input type="button" className="sign-in__btn" value="Sign Up"></input>
                </div>

                <div className="col-md sign-in__image">
                    <img className="sign-in__img" src={SignInImg} alt="Sign In"></img>
                </div>
            </div>
        </div>
    );
}

export default SignIn;