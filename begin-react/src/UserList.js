import React, {useEffect} from 'react';

const User = React.memo(function User({user, onRemove, onToggle}) {
    const {id, username, email, active} = user;

    useEffect(()=> {
        console.log('컴포넌트가 화면에 나타남');
        return () => {
            console.log('컴포넌트가 화면에 사라짐');
        }
    }, []);

    return (
        <div>
            <b 
                style={{
                color: active? 'green' : 'black',
                cursor: 'pointer'
                }}
                onClick={()=>onToggle(id)}
            >{username}</b>
            <span>({email})</span>
            <button onClick={()=>onRemove(id)}>삭제</button>
        </div>
    );
});

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {users.map(
                user =>
                    (<User 
                        user={user} 
                        key={user.id} 
                        onRemove={onRemove} 
                        onToggle={onToggle}
                    />)
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

export default React.memo(UserList, (prevProps, nextProps) => prevProps.users === nextProps.users);