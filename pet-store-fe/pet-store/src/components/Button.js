import './Button.css';

function Button( props ) {
    return (
        <button type="button" class="btn btn-primary button">{props.title}</button>
    );
}

export default Button;