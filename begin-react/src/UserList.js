import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
        </div>
    )
}

function UserList({users}) {
    return (
        <div>
            {users.map(
                user =><User user={user} key={user.id} />
                // Array.map은 reRendering시 성능 향상을 위해
                // 고유한 key를 주어야 한다.
                // key가 없을 경우 map 함수의 두번째 인자인 index를 사용.
                // (user, index) =><User user={user} key={index} />
                // 하지만 index 사용 시 에러는 사라지지만 성능 향상은 없다.
                )
            }
        </div>
    )
}

export default UserList;