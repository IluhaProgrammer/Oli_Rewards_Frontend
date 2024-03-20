import { createSlice } from "@reduxjs/toolkit";

interface IInt {
    scrip : 'Golos_Text' | 'Poppins '| 'Roboto '| 'PT_Serif' | 'Nosifer' | 'Dancing_Script' | 'Anton' | 'Pacifico'
}

const initialState = {
    script : 'Golos_Text'
}

const ScriptSlice = createSlice({
    name: 'Script',
    initialState,
    reducers: {
        setScript(state, {payload}) {
            state.script = payload
        }
    }
})

export default ScriptSlice.reducer
export const {setScript} = ScriptSlice.actions