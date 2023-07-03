import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style = {{height: '100vh'}}>
        <PrettyChatWindow
            
            projectId='bb10ac97-27a3-4050-b07f-16687c030e3e'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
            />
    </div>
    )
}


export default ChatsPage