import { CopyBlock, dracula } from 'react-code-blocks';
export const CodeComponent = (props) => {
    return (
        <CopyBlock
            text={props.code}
            language={props.language}
            showLineNumbers={props.showLineNumbers} theme={dracula}
            wrapLines={false}
            codeBlock
        />
    );
}