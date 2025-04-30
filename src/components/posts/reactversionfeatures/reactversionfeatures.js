import React from "react";
import "./reactversionfeatures.css"
import "../common/common.css"
import { Codeblockcontainer } from '../../ui/codeblockcontainer/codeblockcontainer'
import { CodeComponent } from '../../ui/codecomponent/codecomponent'
import { code } from '../common/codeblocks'
import { ALink } from '../../ui/link/link'
import { Auther } from '../../ui/auther/auther'
import CommentList from "../../comments/commentList";

export const ReactVersionFeatures = () => {
    return <div className='post'>
        <div>
            <ul>
                <li><a href="#ReactJs 15">ReactJs 15</a></li>
                <li><a href="#ReactJs 16">ReactJs 16</a></li>
                <li><a href="#ReactJs 17">ReactJs 17</a></li>
                <li><a href="#ReactJs 18">ReactJs 18</a></li>
                <li><a href="#ReactJs 19">ReactJs 19</a></li>
            </ul>
        </div>
        <div className='post-content'>
            <a name="ReactJs 15"></a>
            <div className='post-block'>
                <h1>ReactJs 15</h1>
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
            <a name="ReactJs 16"></a>
            <div className='post-block'>
                <h1>React 16</h1>
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
            <a name="ReactJs 17"></a>
            <div className='post-block'>
                <h1>ReactJs 17</h1>
                <p>Add the <a href='https://www.npmjs.com/package/@reduxjs/toolkit' rel="noreferrer" target="_blank"> Redux Toolkit</a> and <a href='https://www.npmjs.com/package/react-redux' rel="noreferrer" target="_blank"> React-Redux </a> packages to your project:</p>
                <Codeblockcontainer >
                    npm install @reduxjs/toolkit react-redux
                </Codeblockcontainer>
            </div>
            <a name="ReactJs 18"></a>
            <div className='post-block'>
                <h1>ReactJs 18</h1>
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
            <a name="ReactJs 19"></a>
            <div className='post-block'>

                <h1>ReactJs 19</h1>
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
            <div className='post-block'>
                <CommentList blogId="1"></CommentList>
            </div>
            <div className="AutherDiv">
                <Auther name="Ganesh Gadekar" email="ggadekar87@gmail.com" linkedin="https://www.linkedin.com/in/ganesh-gadekar-a1132135/"></Auther>
            </div>
        </div>
    </div>
}