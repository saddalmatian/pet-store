import './CateItemLink.css';

function CateItemLink( props ) {
    return (
        <ul>
            <li className="category-item__link">{props.title}</li>
        </ul>
    );
}

export default CateItemLink;