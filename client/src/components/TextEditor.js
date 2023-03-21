import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
// import { UserContext } from "./UserContext";

function TextEditor( {id, setReflectionText, reflectionText, onReflectionSubmit} ) {

//     // const { user, setUser } = useContext(UserContext);

//     console.log(reflectionText)
//     const [formData, setFormData] = useState({
//       notes: reflectionText.notes
//     })

//     const [initialValue, setInitialValue] = useState(formData.notes);




// function handleFormChange(e) {
//   const {name, value} = e.target;
//   console.log(e.target.value)
//   setFormData({...formData, [name]: value})
//   }


// function handleSubmitForm(e) {
//   // e.preventDefault()

//   fetch(`/reflections/${id}`, {
//       method: 'PATCH',
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify(formData)
//   })
//   .then((res) => res.json())
//   .then(onReflectionSubmit)
//   .then(setFormData(initialValue))
// }

//   return (
// <>

//     <Editor
//       apiKey="rhoelxuz68rgijapyo6tg71n77d1jmxxxb2hzugo0trdr7hn"
//       plugins="wordcount"
//       intitialValue={reflectionText}
//       value={initialValue}
//       name="notes"
//       // onSubmit={handleSubmitForm}
//       onEditorChange={handleSubmitForm}
//       />
//       {/* <button class="ui buton"> Submit </button> */}
 
// </>
// )
// }



// function MyComponent({initialValue}) {
  const [dirty, setDirty] = useState(false);

  function handleFormChange(e) {
  const {name, value} = e.target;
  console.log(e.target.value)
  setFormData({...formData, [name]: value})
  }

const initialData = {
  notes:'',
   }

const [formData, setFormData] = useState(initialData)

  useEffect(() => setDirty(false), [setReflectionText]);
  

function handleSubmitForm(e) {
  e.preventDefault()

  fetch(`/reflections/${id}`, {
      method: 'PATCH',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
  })
  .then((res) => res.json())
  .then(onReflectionSubmit)
  .then(setFormData(initialData))
}

  return (
    <>
      <Editor
        apiKey="rhoelxuz68rgijapyo6tg71n77d1jmxxxb2hzugo0trdr7hn"
        plugins="wordcount"
        name="notes"
        initialValue=''
        onDirty={() => setDirty(true)}
        onChange={handleFormChange}
        onClick={handleSubmitForm}
      />
      <button class="ui button" disabled={!dirty}>Save</button>
      {dirty && <p>You have unsaved content!</p>}
    </>
  );
}
export default TextEditor;