import './Heading.css';

function Heading( props ) {
    return (
        <div className="row heading">
            <p className="mixin-font">{props.mixin}</p>
            <p className="title">{props.title}</p>
        </div>
    );
}

export default Heading;