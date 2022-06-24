import { useState } from "react";

function Folder({ explorer }) {
    const [expand, setExpand] = useState(false);
    if (explorer.dir === true) {
        return (
            <>
                <div onClick={() => setExpand(!expand)}>
                    {explorer.name}
                </div>
                <div style={{ display: expand ? "block" : "none", paddingLeft: 10 }}>
                    {
                        explorer.items.map(item => {
                            return (
                                <Folder key={item.name} explorer={item} />
                            )
                        })
                    }
                </div>

            </>
        )
    }
    else { return (<div>{explorer.name}</div>) }
}

export default Folder