import '../../scss/card.scss';

const Card = (props) => {
    const classes = "user " + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )

}

export default Card;