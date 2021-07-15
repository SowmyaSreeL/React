import '../scss/user-form.scss';

import { useState } from 'react';
import Card from './UI/Card';
import Modal from './Modal';

const UserForm = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState('');
    
    const userNameHandler = (e) => {
        setUserName(e.target.value);
    }

    const userAgeHandler = (e) => {
        setUserAge(e.target.value);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        
        if(userName.trim() === '' || userAge.trim() === '') {
            setError(
                {
                    title: "INVALID INPUT",
                    desc: "please enter both the values before submit"
                }
            )
            return;
        }

        if(+userAge <= 0) {
            setError(
                {
                    title: "INVALID INPUT",
                    desc: "please enter valid age"
                }
            )
            return;
        }


        const userObj = {
            name: userName,
            age: userAge
        }

        props.onSaveUserInfo(userObj);
        setUserName('');
        setUserAge('');
    }

    const onModalClickHandler = () => {
        setError(null)
    }

    return (
        <div>
            <Card className="user-form__wrapper">
                <form onSubmit={formSubmitHandler}>
                    <div className="new-user__controls">
                        <div className="new-user__control">
                            <label>User Name</label>
                            <input type="text" value={userName} onChange={userNameHandler}/>
                        </div>
                        <div className="new-user__control">
                            <label>Age</label>
                            <input type="number" value={userAge} onChange={userAgeHandler}/>
                        </div>
                    </div>
                    <div className="new-user__actions">
                        <button type="submit" >Add User</button>
                    </div>
                </form>
            </Card>
            {error && <Modal title={error.title} desription={error.desc} onModalClick={onModalClickHandler}/>}
        </div>
    )
}

export default UserForm;