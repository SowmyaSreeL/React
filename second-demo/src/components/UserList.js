import '../scss/user-list.scss';
import { useState } from 'react';

import UserForm from './UserForm';
import UserItem from './UserItem';
import Card from './UI/Card';


const UserList = () => {
    const [userInfo, setUserInfo] = useState('');

    const onSaveUserInfoHandler = (userObj) => {
        setUserInfo((prevUser) => {
            return [userObj, ...prevUser];
        })
    }

    return (
        
        <div>
            <UserForm onSaveUserInfo={onSaveUserInfoHandler}/>
            
            {userInfo.length > 0 ? (
                <Card className="user-list">
                    {userInfo.map((user) => {
                        return (
                            <UserItem userName={user.name} userAge={user.age} key={Math.random()} />
                        )})
                    }
                </Card>
                ) : null
            }
        </div>
    )
}

export default UserList;