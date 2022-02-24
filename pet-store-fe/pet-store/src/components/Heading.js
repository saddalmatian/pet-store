import './Heading.css';

function Heading( props ) {
    return (
        <div className="row ms-5 ps-5 heading">
            <p className="mixin-font">{props.mixin}</p>
            <p className="title">{props.title}</p>
        </div>
    );
}

export default Heading;