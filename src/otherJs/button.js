import PropTypes from "prop-types"
import styles from "./button.module.css"

// 비구조화 할당
// button.module.css로 부터 css를 불러와서 Button에 적용
function Button({text}) {
    return <button className={styles.btn}>{text}</button>
}

Button.propTypes = {
    text : PropTypes.string.isRequired
}

export default Button;