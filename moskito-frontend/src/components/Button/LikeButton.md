```js
import { AiFillPushpin } from 'react-icons/ai';
const [ isPinned, setIsPinned ] = React.useState(false);

<div style={{width: '100px', position: 'relative', height: '100px'}}>
    <LikeButton isPinned={isPinned} onClick={() => setIsPinned(!isPinned)}>
        <AiFillPushpin/>
    </LikeButton>
</div>
```
