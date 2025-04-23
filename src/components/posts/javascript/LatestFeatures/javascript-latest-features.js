
import './javascript-latest-features.css'
import { Codeblockcontainer } from '../../../ui/codeblockcontainer/codeblockcontainer'
import { CodeComponent } from '../../../ui/codecomponent/codecomponent'
import { code } from './codeblocks'
import { ALink } from '../../../ui/link/link'
import { Auther } from '../../../ui/auther/auther'
export const JavascriptLatestFeatures = () => {
    return <div className='JavascriptLatestFeatures'>
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
        <div className='JavascriptLatestFeatures-content'>
            {/* <a name="Introduction"></a> */}
            <div className='JavascriptLatestFeatures-block'>
                <h1>Javascript latest features</h1>
                <h2>2024 (ECMAScript 2024)</h2>
                <p>
                    <div className="JavascriptLatestFeatures-card">
                        <h4><strong>Features:</strong></h4>
                        <ul className='UlCss'>
                            <li>
                                <p><strong>Object.groupBy():</strong></p>
                                <p> Groups elements of an object based on a callback function.</p>
                                <Codeblockcontainer hideCopyBtn={true} >
                                    javascript
                                </Codeblockcontainer>
                                <div className="demo">
                                    <CodeComponent
                                        code={code.code1}
                                        showLineNumbers={false}
                                        language="javascript"
                                    ></CodeComponent>
                                </div>
                            </li>
                            <li>
                                <p><strong>Temporal.PlainDate:</strong></p>
                                <p>A new way to handle dates.</p>
                                <Codeblockcontainer hideCopyBtn={true} >
                                    javascript
                                </Codeblockcontainer>
                                <div className="demo">
                                    <CodeComponent
                                        code={code.code2}
                                        showLineNumbers={false}
                                        language="javascript"
                                    ></CodeComponent>
                                </div>
                            </li>
                        </ul>
                    </div>
                </p>
            </div>
            {/* <a name="What's Included"></a> */}
            <div className='JavascriptLatestFeatures-block'>
                <h2>2023 (ECMAScript 2023)</h2>
                <p>
                    <div className="JavascriptLatestFeatures-card">
                        <h4><strong>Features:</strong></h4>
                        <ul className='UlCss'>
                            <li>
                                <p><strong>Array.prototype.findLast():</strong></p>
                                <p>Finds the last element in an array that satisfies a condition.</p>
                                <Codeblockcontainer hideCopyBtn={true} >
                                    javascript
                                </Codeblockcontainer>
                                <div className="demo">
                                    <CodeComponent
                                        code={code.code3}
                                        showLineNumbers={false}
                                        language="javascript"
                                    ></CodeComponent>
                                </div>
                            </li>
                            <li>
                                <p><strong> Array.prototype.findLastIndex(): </strong></p>
                                <p> Finds the index of the last element that satisfies a condition.</p>
                                <Codeblockcontainer hideCopyBtn={true} >
                                    javascript
                                </Codeblockcontainer>
                                <div className="demo">
                                    <CodeComponent
                                        code={code.code4}
                                        showLineNumbers={false}
                                        language="javascript"
                                    ></CodeComponent>
                                </div>
                            </li>
                        </ul>
                    </div>
                </p>
            </div>
            {/* <a name="Install Redux Toolkit and React-Redux"></a> */}
            <div className='JavascriptLatestFeatures-block'>
                <h2>ECMAScript 2022 (ES2022)</h2>
                <p>
                    <div className="JavascriptLatestFeatures-card">
                        <h4><strong>Features:</strong></h4>
                        <ul className='UlCss'>
                            <li>
                                <p><strong> Top-Level Await</strong></p>
                                <p>Allows the use of await outside of async functions, making module initialization more straightforward. </p>
                                <Codeblockcontainer hideCopyBtn={true} >
                                    javascript
                                </Codeblockcontainer>
                                <div className="demo">
                                    <CodeComponent
                                        code={code.code5}
                                        showLineNumbers={false}
                                        language="javascript"
                                    ></CodeComponent>
                                </div>
                            </li>
                            <li>
                                <p><strong> Private Instance Fields, Methods, and Accessors</strong></p>
                                <p>Introduced truly private properties and methods using the # symbol. </p>
                                <Codeblockcontainer hideCopyBtn={true} >
                                    javascript
                                </Codeblockcontainer>
                                <div className="demo">
                                    <CodeComponent
                                        code={code.code6}
                                        showLineNumbers={false}
                                        language="javascript"
                                    ></CodeComponent>
                                </div>
                            </li>
                            <li>
                                <p><strong> Static Class Fields and Methods</strong></p>
                                <p>Static fields and methods can now be declared directly in classes. </p>
                                <Codeblockcontainer hideCopyBtn={true} >
                                    javascript
                                </Codeblockcontainer>
                                <div className="demo">
                                    <CodeComponent
                                        code={code.code7}
                                        showLineNumbers={false}
                                        language="javascript"
                                    ></CodeComponent>
                                </div>
                            </li>
                            <li>
                                <p><strong> Array, String, and TypedArray .at() Method</strong></p>
                                <p>Provides a cleaner way to access elements using positive or negative indices. </p>
                                <Codeblockcontainer hideCopyBtn={true} >
                                    javascript
                                </Codeblockcontainer>
                                <div className="demo">
                                    <CodeComponent
                                        code={code.code8}
                                        showLineNumbers={false}
                                        language="javascript"
                                    ></CodeComponent>
                                </div>
                            </li>
                            <li>
                                <p><strong>Object.hasOwn() </strong></p>
                                <p>A safer alternative to Object.prototype.hasOwnProperty. </p>
                                <Codeblockcontainer hideCopyBtn={true} >
                                    javascript
                                </Codeblockcontainer>
                                <div className="demo">
                                    <CodeComponent
                                        code={code.code9}
                                        showLineNumbers={false}
                                        language="javascript"
                                    ></CodeComponent>
                                </div>
                            </li>
                            <li>
                                <p><strong>Error Cause </strong></p>
                                <p> Allows specifying the cause of an error.</p>
                                <Codeblockcontainer hideCopyBtn={true} >
                                    javascript
                                </Codeblockcontainer>
                                <div className="demo">
                                    <CodeComponent
                                        code={code.code10}
                                        showLineNumbers={false}
                                        language="javascript"
                                    ></CodeComponent>
                                </div>
                            </li>
                            <li>
                                <p><strong>  RegExp Match Indices (/d Flag)</strong></p>
                                <p> Provides start and end indices of matches.</p>
                                <Codeblockcontainer hideCopyBtn={true} >
                                    javascript
                                </Codeblockcontainer>
                                <div className="demo">
                                    <CodeComponent
                                        code={code.code11}
                                        showLineNumbers={false}
                                        language="javascript"
                                    ></CodeComponent>
                                </div>
                            </li>
                        </ul>
                    </div>
                </p>
            </div>

            <div className='JavascriptLatestFeatures-block'>
                <h2>ECMAScript 2021 (ES2021)</h2>
                <p>
                    <div className="JavascriptLatestFeatures-card">
                        <h4><strong>Features:</strong></h4>
                        <ul className='UlCss'>
                            <li>
                                <p><strong> String.prototype.replaceAll()</strong></p>
                                <p> Allows replacing all occurrences of a substring without using a global regular expression.</p>
                                <Codeblockcontainer hideCopyBtn={true} >
                                    javascript
                                </Codeblockcontainer>
                                <div className="demo">
                                    <CodeComponent
                                        code={code.code12}
                                        showLineNumbers={false}
                                        language="javascript"
                                    ></CodeComponent>
                                </div>
                            </li>
                            <li>
                                <p><strong>Logical Assignment Operators</strong></p>
                                <p>Combines logical operators (&&, ||, ??) with assignment. </p>
                                <ul className='UlCss'>
                                    <li>
                                        <p><strong>AND Assignment (&&=):</strong></p>
                                        <Codeblockcontainer hideCopyBtn={true} >
                                            javascript
                                        </Codeblockcontainer>
                                        <div className="demo">
                                            <CodeComponent
                                                code={code.code13}
                                                showLineNumbers={false}
                                                language="javascript"
                                            ></CodeComponent>
                                        </div></li>
                                    <li>
                                        <p><strong> OR Assignment (||=):</strong></p>
                                        <Codeblockcontainer hideCopyBtn={true} >
                                            javascript
                                        </Codeblockcontainer>
                                        <div className="demo">
                                            <CodeComponent
                                                code={code.code14}
                                                showLineNumbers={false}
                                                language="javascript"
                                            ></CodeComponent>
                                        </div>
                                    </li>
                                    <li>
                                        <p><strong>Nullish Coalescing Assignment (??=): </strong></p>
                                        <Codeblockcontainer hideCopyBtn={true} >
                                            javascript
                                        </Codeblockcontainer>
                                        <div className="demo">
                                            <CodeComponent
                                                code={code.code15}
                                                showLineNumbers={false}
                                                language="javascript"
                                            ></CodeComponent>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p><strong> Numeric Separators</strong></p>
                                <p>Improves readability of numeric literals by using underscores (_). </p>
                                <Codeblockcontainer hideCopyBtn={true} >
                                    javascript
                                </Codeblockcontainer>
                                <div className="demo">
                                    <CodeComponent
                                        code={code.code16}
                                        showLineNumbers={false}
                                        language="javascript"
                                    ></CodeComponent>
                                </div>
                            </li>
                            <li>
                                <p><strong> Promise.any() </strong></p>
                                <p> Returns the first fulfilled promise, ignoring rejected ones.</p>
                                <Codeblockcontainer hideCopyBtn={true} >
                                    javascript
                                </Codeblockcontainer>
                                <div className="demo">
                                    <CodeComponent
                                        code={code.code17}
                                        showLineNumbers={false}
                                        language="javascript"
                                    ></CodeComponent>
                                </div>
                            </li>
                            <li>
                                <p><strong>WeakRefs and FinalizationRegistry </strong></p>
                                <p>Allows referencing objects without preventing their garbage collection. </p>
                                <ul className='UlCss'>
                                    <li>
                                        <p><strong> WeakRef Example:</strong></p>
                                        <Codeblockcontainer hideCopyBtn={true} >
                                            javascript
                                        </Codeblockcontainer>
                                        <div className="demo">
                                            <CodeComponent
                                                code={code.code18}
                                                showLineNumbers={false}
                                                language="javascript"
                                            ></CodeComponent>
                                        </div>
                                    </li>
                                    <li>
                                        <p><strong>FinalizationRegistry Example:</strong></p>
                                        <Codeblockcontainer hideCopyBtn={true} >
                                            javascript
                                        </Codeblockcontainer>
                                        <div className="demo">
                                            <CodeComponent
                                                code={code.code19}
                                                showLineNumbers={false}
                                                language="javascript"
                                            ></CodeComponent>
                                        </div>
                                    </li></ul>
                            </li>
                        </ul>
                    </div>
                </p>
            </div>
            <div className="AutherDiv">
                <Auther name="Ganesh Gadekar" email="ggadekar87@gmail.com" linkedin="https://www.linkedin.com/in/ganesh-gadekar-a1132135/"></Auther>
            </div>
        </div>
    </div>
}