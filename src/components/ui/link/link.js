import './link.css'

export const ALink = (props) => {
    return <a className='LinkCSS' href={props.href} rel={props.rel} target={props.target}>{props.children}</a>
}