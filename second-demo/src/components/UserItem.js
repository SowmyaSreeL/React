import '../scss/user-item.scss'


const UserItem = (props) => {
    return (
        <p className="user-item">{props.userName} ({props.userAge} years age)</p>

    )
}

export default UserItem;