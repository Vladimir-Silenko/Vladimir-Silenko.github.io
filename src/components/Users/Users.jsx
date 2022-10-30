import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { followAC, unFollowAC, setUsersAC } from '../../redux/users-reducer'
import styles from './Users.module.css'
const userPhotoUrl = 'https://thumbs.dreamstime.com/b/%D0%BE%D1%87%D0%B5%D0%BD%D1%8C-%D1%81%D0%B5%D1%80%D1%8C%D0%B5%D0%B7%D0%BD%D1%8B%D0%B9-%D0%BC-%D0%B0-%D0%B5%D0%BD%D0%B5%D1%86-39968623.jpg'
// [
//     {
//         id: 1,
//         name: 'Alisa',
//         surname: 'Silenko',
//         ava: 'https://krot.info/uploads/posts/2021-03/1615285482_44-p-kotenok-gav-art-kartinki-46.jpg',
//         followed: true,
//         status: 'in kindergarden',
//         location: { city: 'Saint-Petersburg', country: "Russia" }
//     },
//     {
//         id: 2,
//         name: 'Karina',
//         surname: 'Silenko',
//         ava: 'https://funart.pro/uploads/posts/2021-10/1633940898_1-funart-pro-p-zlaya-taksa-zhivotnie-krasivo-foto-2.jpg',
//         followed: true,
//         status: 'busy',
//         location: { city: 'Saint-Petersburg', country: "Russia" }
//     },
//     {
//         id: 3,
//         name: 'Mikel',
//         surname: 'Ramazov',
//         ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGFzx_58JF2vM5_r82NKOuNxOcOGzhRGRuA&usqp=CAU',
//         followed: true,
//         status: "chillin'",
//         location: { city: 'Yerevan', country: "Armenia" }
//     },]
const Users = () => {
    const dispatch = useDispatch()
    const st = useSelector(state => state.users)
    console.log(st.users.length)
    const Follow = (userId) => { dispatch(followAC(userId)) }
    const UnFollow = (userId) => dispatch(unFollowAC(userId))
    const SetUsers = (users) => dispatch(setUsersAC(users))
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        if (st.users.length === 0) SetUsers(response.data.items);
    })

    return <div>
        <h1>hey</h1>
        {st.users.map(u => <div className={styles.user}>
            <span>
                <div className={styles.photo_container}><img
                    className={styles.photo}
                    src={u.photos.small != null ? u.photos.small : userPhotoUrl} />
                </div>
                <div className={styles.follow_btn}>
                    {u.followed ? <button onClick={() => UnFollow(u.id)}>unfollow</button>
                        : <button onClick={() => Follow(u.id)}>follow</button>}
                </div>
            </span>
            <span className={styles.personal_data}>
                <div className={styles.name}>{u.name} {"u.surname"}</div>
                <div className={styles.status}>{u.id}</div>
            </span>
            <span className={styles.location}>{"u.location.city"}, {"u.location.country"}</span>
        </div>)}
    </div>
}
export { Users }