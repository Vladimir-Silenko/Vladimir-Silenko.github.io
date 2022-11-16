
import ProfileInfo from './profileInfo/ProfileInfo';
import SendPostContainer from './sendPost/SendPost container';
import MyPostsContainer from './myPosts/MyPosts-container';
import { GetUserProfile } from '../../redux/profile-reducer';
import { useDispatch, useSelector, } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRedirect } from '../../hooks/useRedirect';


let ProfileContainer = (props) => {
    const st = useSelector(state => state.profile)
    const redirect = useRedirect()
    const auth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()
    const params = useParams()
    const [isAuth, setAuth] = useState(auth)
    useEffect(() => {
        dispatch(GetUserProfile(params))
        setAuth(auth)
    }, [null])

    if (!auth) return redirect

    return <div >
        <ProfileInfo state={st.profile} />
        <SendPostContainer state={st} />
        <MyPostsContainer />
    </div >
}
export default ProfileContainer;