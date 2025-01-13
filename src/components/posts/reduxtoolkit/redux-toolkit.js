
import './redux-toolkit.css'
import { Codeblockcontainer } from '../../ui/codeblockcontainer/codeblockcontainer'
import { CodeComponent } from '../../ui/codecomponent/codecomponent'
import { code } from './codeblocks'
export const ReduxToolkit = () => {
    return <div className='ReduxToolkit'>
        <div className='ReduxToolkit-content'>
            <h1>Install Redux Toolkit and React-Redux</h1>
            <p>Add the Redux Toolkit and React-Redux packages to your project:

            </p>
            <Codeblockcontainer >
                npm install @reduxjs/toolkit react-redux
            </Codeblockcontainer>
            <h1>Create a Redux Store</h1>
            <p>Create a file named src/app/store.js. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:

            </p>
            <Codeblockcontainer hideCopyBtn={true} >
                app/store.js
            </Codeblockcontainer>
            <div className="demo">
                <CodeComponent
                    code={code.bash}
                    showLineNumbers={false}
                    language="javascript"
                ></CodeComponent>
            </div>
            <p>This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.
            </p>
            <h1>Provide the Redux Store to React</h1>
            <p>
                Once the store is created, we can make it available to our React components by putting a React-Redux   Provide  around our application in src/index.js. Import the Redux store we just created, put a   Provider  around your   App , and pass the store as a prop:
            </p>
            <Codeblockcontainer hideCopyBtn={true} >
                index.js
            </Codeblockcontainer>
            <div className="demo">
                <CodeComponent
                    code={code.code1}
                    showLineNumbers={false}
                    language="javascript"
                ></CodeComponent>
            </div>



            <h1>Create a Redux State Slice</h1>
            <p>
                Add a new file named src/features/counter/counterSlice.js. In that file, import the createSlice API from Redux Toolkit.

                Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.

                Redux requires that we write all state updates immutably, by making copies of data and updating the copies. However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.            </p>
            <Codeblockcontainer hideCopyBtn={true} >
                features/counter/counterSlice.js
            </Codeblockcontainer>
            <div className="demo">
                <CodeComponent
                    code={code.code2}
                    showLineNumbers={false}
                    language="javascript"
                ></CodeComponent>
            </div>



            <h1>Add Slice Reducers to the Store</h1>
            <p>
                Next, we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.
            </p>
            <Codeblockcontainer hideCopyBtn={true} >
                app/store.js
            </Codeblockcontainer>
            <div className="demo">
                <CodeComponent
                    code={code.code3}
                    showLineNumbers={false}
                    language="javascript"
                ></CodeComponent>
            </div>


            <h1>Use Redux State and Actions in React Components</h1>
            <p>
                Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with useSelector, and dispatch actions using useDispatch. Create a src/features/counter/Counter.js file with a  Counter  component inside, then import that component into App.js and render it inside of  App .
            </p>
            <Codeblockcontainer hideCopyBtn={true} >
                app/store.js
            </Codeblockcontainer>
            <div className="demo">
                <CodeComponent
                    code={code.code4}
                    showLineNumbers={false}
                    language="javascript"
                ></CodeComponent>
            </div>


            <p>Now, any time you click the "Increment" and "Decrement" buttons:
                <ul>
                    <li>The corresponding Redux action will be dispatched to the store</li>
                    <li>The counter slice reducer will see the actions and update its state</li>
                    <li>The  Counter  component will see the new state value from the store and re-render itself with the new data</li>
                </ul>
            </p>
        </div>
    </div>
}