# react-tutorial

## ====== Hook ========
### 1. useState
```c
const [변수, 변수의 상태를 바꿀 콜백 함수] = useState('변수의 초기 값');
```
```c
const [number, setNumber] = useState(0);
const onIncrease = () => {
    setNumber(number + 1);
    setNumber(number + 1);
            .
            .
            .
    setNumber(number + 1);
}

```
* React는 변경 사항을 한번에 모은 다음에 반영
* 변수를 직접 변경할 경우 변경된 사항이 저장되지 않음
* setNumber를 여러번 사용해도 변경된 number는 1
```c
const [number, setNumber] = useState(0);
const onIncrease = () => {
    setNumber(number => number + 1);
    setNumber(number => number + 1);
                    .
                    .
                    .
    setNumber(number => number + 1);
}
```
* 변경된 사항을 저장하는 방법
```c
const [number, setNumber] = useState(0);
const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);  // 최적화 
}
```
* number를 직접 쓰지않고 이와 같이 사용하면 최적화 가능
```c
const [number, setNumber] = useState({
    name:"", 
    password:"", 
    email:""
});
```
* 상태를 관리할 변수가 많은 경우 객체 형식으로 사용
<br/>
<br/>
<br/>

### 2. useEffect

```c
useEffect(매개변수 1, [매개변수 2]);

```
* 매개변수 1: 마운트/업데이트 마운트/언마운트 시 작동하는 함수
* 매개변수 2: 매개변수 1에서 사용할 의존성 관계가 있는 객체(deps라고 부른다.)
```c
useEffect(() => {
    console.log("component did mount or update")
    return () => {
        console.log("component will unmount or update")
    }
})
```
```c
// 매개변수 2개 (함수 + 빈 배열)
useEffect(() => {
    console.log("component did mount") // 1번
    return () => {
        console.log("component will unmount") // 2번
    }
}, [])
``` 
* 1번: 컴포넌트가 처음 나타날때 호출
* 2번: 컴포넌트가 사라질 때 호출
```c
// 매개변수 2개 (함수 + 배열)
useEffect(() => {
    console.log("component did (mount or update) and states   changed") // 1번
    return () => {
        console.log("component will (unmount or update) and states changed") // 2번
    }
}, [state, state2, ...])
```
* 1번: 컴포넌트가 처음 나타날때/state가 바뀔때 호출
* 2번: state가 바뀌기 직전/컴포넌트가 사라지기 전에 호출
* 2번 호출 후 1번 호출