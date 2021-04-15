import PropTypes from 'prop-types'
import Button from './Button'

function Header({title}) {
    const onClick = () => {
        console.log('hello world')
    }
    return (
        <div>
            <header className = "header">
                <h1>{title}</h1>
                <Button text = "Add" onClick = {onClick}/>
            </header>
        </div>
    )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

Header.propTypes = {
    title : PropTypes.string.isRequired, 
}

export default Header
