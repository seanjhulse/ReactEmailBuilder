import React from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import StylesOption from './StylesOption';

const mapStateToProps = (state) => ({
  ...state.pickedStyle
})

const StylesPickerOptions = ({dispatch, pickedStyle}) => {

  const styles = [
    'UW Box Style',
    'Subtle Drop Shadow',
    'Default'
  ];

  const stylesList = (
    <ul className="stylesList">
      {
        styles.length > 0 ? 
        
        styles.map((style) => {
          
          return (
            <StylesOption 
              key={style}
              pickedStyle={style}
              style={style === pickedStyle ? {border: '2px dashed #777', padding: '.5rem'} : null}
            />
          )
        }) 
        
        :

        "No styles to display! Talk to your administrator about this issue."

      }
    </ul>
  )

  return stylesList;
}

export default connect(mapStateToProps)(StylesPickerOptions);