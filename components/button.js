function Button({id, inner, onClick}){
    return <button id={id} type="button" className="btn btn-default" onClick={onClick}>
        {inner}
    </button>;
}

export default Button;