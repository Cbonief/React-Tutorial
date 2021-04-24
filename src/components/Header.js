import Button from './Button'


const Header = ({title, onClick, showAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red':'green'} text={showAdd ? 'Close' : 'Add'} onClick={onClick}></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
