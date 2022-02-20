import './HomeBtn.css'

function HomeBtn( props ) {
    return (
        <>
            <button type="button" className="btn btn-primary btn-lg home-btn">{props.title}</button>
        </>
    );
}

export default HomeBtn;