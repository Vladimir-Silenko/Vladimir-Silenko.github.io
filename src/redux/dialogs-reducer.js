const AddMessage = 'AddMessage'
const UpdateMessageText = 'UpdateMessageText'
let initialstate = {
    dialogsData: [
        { name: 'Alisa', surname: 'Silenko', ava: 'https://krot.info/uploads/posts/2021-03/1615285482_44-p-kotenok-gav-art-kartinki-46.jpg', age: 4, id: 1, },
        { name: 'Karina', surname: 'Silenko', ava: 'https://funart.pro/uploads/posts/2021-10/1633940898_1-funart-pro-p-zlaya-taksa-zhivotnie-krasivo-foto-2.jpg', age: 26, id: 2, },
        { name: 'Mikel', surname: 'Ramazov', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGFzx_58JF2vM5_r82NKOuNxOcOGzhRGRuA&usqp=CAU', age: 31, id: 3, },
        { name: 'Elmishan', surname: 'Aliev', ava: 'https://militaryarms.ru/wp-content/uploads/2021/07/31089611.jpg', age: 55, id: 4, },
        { name: 'Inga', surname: 'Alieva', ava: 'https://pbs.twimg.com/profile_images/755466885953679360/cKVxXXWg_400x400.jpg', age: 28, id: 5, },
        { name: 'Dasha', surname: 'Deshko', ava: 'https://pic.rutubelist.ru/user/3f/a4/3fa484531693f2716dc6d5f4ec102cff.jpg', age: 27, id: 6, },
    ],
    newMessageText: '',
    messageData:
        [
            { id: 1, message: "Hey dad! How is it goin'?" },
            { id: 2, you: 'you', message: "I miss u so much" },
            { id: 2, you: 'you', message: "I miss u so much" },
            { id: 3, message: "Waiting for your return" },
            { id: 2, you: 'you', message: "I hope it will be soon" },
            { id: 2, you: 'you', message: "I hope it will be soon" },
            { id: 2, you: 'you', message: "I hope it will be soon" },
        ],
}
const DialogsReducer = (state = initialstate, action) => {
    switch (action.type) {
        case AddMessage:
            let newMessage = { id: 2, you: 'you', message: state.newMessageText };
            state.messageData.push(newMessage)
            state.newMessageText = ''
            return state

        case UpdateMessageText:
            state.newMessageText = action.newText;
            return state
        default:
            return state
    };
}
export let sendMessageActionCreator = () => ({ type: AddMessage });
export let UpdateMessageTextActionCreator = (text) => ({
    type: UpdateMessageText,
    newText: text
});
export default DialogsReducer