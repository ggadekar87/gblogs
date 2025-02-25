
import './redux-toolkit.css'
import { Codeblockcontainer } from '../../ui/codeblockcontainer/codeblockcontainer'
import { CodeComponent } from '../../ui/codecomponent/codecomponent'
import { code } from './codeblocks'
import { ALink } from '../../ui/link/link'
import { Auther } from '../../ui/auther/auther'
export const ReduxToolkit = () => {
    return <div className='ReduxToolkit'>
        {/* <div>
            <ul>
                <li><a href="#Introduction">Introduction</a></li>
                <li><a href="#What's Included">What's Included</a></li>
                <li><a href="#Install Redux Toolkit and React-Redux">Install Redux Toolkit and React-Redux</a></li>
                <li><a href="#Create a Redux Store">Create a Redux Store</a></li>
                <li><a href="#Provide the Redux Store to React">Provide the Redux Store to React</a></li>
                <li><a href="#Create a Redux State Slice">Create a Redux State Slice</a></li>
                <li><a href="#Add Slice Reducers to the Store">Add Slice Reducers to the Store</a></li>
                <li><a href="#Use Redux State and Actions in React Components">Use Redux State and Actions in React Components</a></li>
                <li><a href="#Use Redux State and Actions">Use Redux State and Actions</a></li>
            </ul>
        </div> */}
        <div className='ReduxToolkit-content'>
            {/* <a name="Introduction"></a> */}
            <div className='ReduxToolkit-block'>
                <h1>Introduction</h1>
                <p>
                    <div className="ReduxToolkit-card">
                        <h4><strong>It was originally created to help address three common concerns about Redux:</strong></h4>
                        <ul className='UlCss'>
                            <li>Configuring a Redux store is too complicated</li>
                            <li>I have to add a lot of packages to get Redux to do anything useful</li>
                            <li>Redux requires too much boilerplate code</li>
                        </ul>
                        Redux Toolkit also includes a powerful data fetching and caching capability that we've dubbed "<a href='https://redux-toolkit.js.org/introduction/getting-started#rtk-query' rel="noreferrer" target="_blank">RTK Query</a>".
                    </div>
                </p>
            </div>
            {/* <a name="What's Included"></a> */}
            <div className='ReduxToolkit-block'>
                <h1>What's Included</h1>
                <p>
                    Redux Toolkit includes these APIs:
                    <ul className='UlCss'>
                        <li>
                            <span className='text-highlighter'>
                                <ALink href='https://redux-toolkit.js.org/api/configureStore' rel="noreferrer" target="_blank">configureStore()</ALink>
                            </span>: wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.</li>
                        <li>
                            <span className='text-highlighter'>
                                <ALink href='https://redux-toolkit.js.org/api/createReducer' rel="noreferrer" target="_blank"> createReducer()</ALink>
                            </span>: that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.</li>
                        <li>
                            <span className='text-highlighter'>
                                <ALink href='https://redux-toolkit.js.org/api/createAction' rel="noreferrer" target="_blank"> createAction()</ALink>
                            </span>: generates an action creator function for the given action type string.</li>
                        <li>
                            <span className='text-highlighter'>
                                <ALink href='https://redux-toolkit.js.org/api/createSlice' rel="noreferrer" target="_blank"> createSlice()</ALink>
                            </span>: accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.</li>
                        <li>
                            <span className='text-highlighter'>
                                <ALink href='https://redux-toolkit.js.org/api/combineSlices' rel="noreferrer" target="_blank"> combineSlices()</ALink>
                            </span>: combines multiple slices into a single reducer, and allows "lazy loading" of slices after initialisation.</li>
                        <li>
                            <span className='text-highlighter'>
                                <ALink href='https://redux-toolkit.js.org/api/createAsyncThunk' rel="noreferrer" target="_blank"> createAsyncThunk</ALink>
                            </span>: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches <span className='text-highlighter-inner'>pending/fulfilled/rejected</span> action types based on that promise</li>
                        <li>
                            <span className='text-highlighter'>
                                <ALink href='https://redux-toolkit.js.org/api/createEntityAdapter' rel="noreferrer" target="_blank"> createEntityAdapter</ALink>
                            </span>: generates a set of reusable reducers and selectors to manage normalized data in the store</li>
                        <li> The
                            <span className='text-highlighter'>
                                <ALink href='https://redux-toolkit.js.org/api/createSelector' rel="noreferrer" target="_blank">  createSelector</ALink>
                            </span>utility from the <ALink href='https://github.com/reduxjs/reselect' rel="noreferrer" target="_blank">Reselect </ALink>library, re-exported for ease of use.</li>
                    </ul>
                </p>
            </div>
            {/* <a name="Install Redux Toolkit and React-Redux"></a> */}
            <div className='ReduxToolkit-block'>
                <h1>Install Redux Toolkit and React-Redux</h1>
                <p>Add the <a href='https://www.npmjs.com/package/@reduxjs/toolkit' rel="noreferrer" target="_blank"> Redux Toolkit</a> and <a href='https://www.npmjs.com/package/react-redux' rel="noreferrer" target="_blank"> React-Redux </a> packages to your project:</p>
                <Codeblockcontainer >
                    npm install @reduxjs/toolkit react-redux
                </Codeblockcontainer>
            </div>
            {/* <a name="Create a Redux Store"></a> */}
            <div className='ReduxToolkit-block'>
                <h1>Create a Redux Store</h1>
                <p>
                    Create a file named <span className='text-highlighter-inner'>src/app/store.js</span>. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:
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
                <p>This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.</p>
            </div>
            {/* <a name="Provide the Redux Store to React"></a> */}
            <div className='ReduxToolkit-block'>

                <h1>Provide the Redux Store to React</h1>
                <p>
                    Once the store is created, we can make it available to our React components by putting a React-Redux   Provide  around our application in <span className='text-highlighter-inner'>src/index.js</span>. Import the Redux store we just created, put a   Provider  around your   App , and pass the store as a prop:
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
            </div>
            {/* <a name="Create a Redux State Slice"></a> */}
            <div className='ReduxToolkit-block'>
                <h1>Create a Redux State Slice</h1>
                <p>
                    Add a new file named <span className='text-highlighter-inner'>src/features/counter/counterSlice.js</span>. In that file, import the createSlice API from Redux Toolkit.
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
            </div>
            {/* <a name="Add Slice Reducers to the Store"></a> */}
            <div className='ReduxToolkit-block'>
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
            </div>
            {/* <a name="Use Redux State and Actions in React Components"></a> */}
            <div className='ReduxToolkit-block'>
                <h1>Use Redux State and Actions in React Components</h1>
                <p>
                    Now we can use the <ALink href='https://www.npmjs.com/package/react-redux' rel="noreferrer" target="_blank">React-Redux</ALink> hooks to let React components interact with the Redux store. We can read data from the store with useSelector, and dispatch actions using useDispatch. Create a <span className='text-highlighter-inner'>src/features/counter/Counter.js</span> file with a  Counter  component inside, then import that component into <span className='text-highlighter-inner'>App.js</span> and render it inside of  App .
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
            </div>
            {/* <a name="Use Redux State and Actions"></a> */}
            <div name="Use Redux State and Actions" className="ReduxToolkit-card">
                <h4><strong> Now, any time you click the "Increment" and "Decrement" buttons:</strong></h4>
                <ul className='UlCss'>
                    <li>The corresponding Redux action will be dispatched to the store</li>
                    <li>The counter slice reducer will see the actions and update its state</li>
                    <li>The  Counter  component will see the new state value from the store and re-render itself with the new data</li>
                </ul>
            </div>

            <div className="AutherDiv">
                 <Auther name="Ganesh Gadekar" email="ggadekar87@gmail.com" linkedin="https://www.linkedin.com/in/ganesh-gadekar-a1132135/"></Auther>
            </div>
        </div>
    </div>
}