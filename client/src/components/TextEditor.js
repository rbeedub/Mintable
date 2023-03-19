import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
// import { UserContext } from "./UserContext";

function TextEditor() {
    const [initialValue, setInitialValue] = useState(undefined);
    // const { user, setUser } = useContext(UserContext);
    // const [initialValue, setInitialValue] = useState(undefined);

  return (
<>
    <Editor
      apiKey="rhoelxuz68rgijapyo6tg71n77d1jmxxxb2hzugo0trdr7hn"
      plugins="wordcount"
      initialValue={initialValue}
      // initialValue={initialValue}
      />
</>
)
}
export default TextEditor;