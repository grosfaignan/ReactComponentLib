import React from 'react'
import styles from'./submitButton.module.css'
import PropTypes from 'prop-types';


const SubmitButton = ({btnLink, btnTxt, btnClick}) => {
  console.log('btnLink = '+btnLink)
  console.log('btnTxt = '+btnTxt)
  console.log('btnClick = '+btnClick)
  if(!btnLink){
    btnLink='#'
  }
  return (
    <div className={[styles.button, styles.submit]} onClick={btnClick}>
      <a href={btnLink} >{btnTxt}</a>
    </div>
  )
}
// SubmitButton.PropTypes
SubmitButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
};

// SubmitButton.defaultProps = {
//   onClick: () => {},
//   href: null,
// };
export default SubmitButton