import './SignUp.css';
import Heading from '../Heading';
import SignUpImg from '../../assets/images/SignUp1.jpg'

function SignUp() {
    return (
        <div className="container sign-up__container">
            <div className="row hihi">
                <Heading mixin="Become a member of Pet Store" title="Sign Up" />
                <div className="col-md">
                    <img className="sign-up__img" src={SignUpImg} alt="Sign Up Img" />            
                </div>

                <div className="col-md-6 sign-up__form">
                    <p className="sign-up__label">Fullname (*)</p>
                    <input type="text" className="sign-up__input"></input>
                    <p className="sign-up__label">Email (*)</p>
                    <input type="text" className="sign-up__input"></input>
                    <p className="sign-up__label">Phone Number (*)</p>
                    <input type="text" className="sign-up__input"></input>
                    <p className="sign-up__label">Address (*)</p>
                    <input type="text" className="sign-up__input"></input>
                    <p className="sign-up__label">Username (*)</p>
                    <input type="text" className="sign-up__input"></input>
                    <p className="sign-up__label">Password (*)</p>
                    <input type="text" className="sign-up__input"></input>
                    <p className="sign-up__label">Password Confirm (*)</p>
                    <input type="text" className="sign-up__input"></input>
                    <p className="sign-up__description">If you already have an account, please <a href="#1"><span>Sign In</span></a></p>
                    <input type="button" className="sign-up__btn" value="Sign Up"></input>
                </div>
            </div>
        </div>
    );
}

export default SignUp;