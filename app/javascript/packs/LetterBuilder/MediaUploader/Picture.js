import React from 'react'
import { connect } from 'react-redux'
import { selectPicture } from '../store/actions'

const mapStateToProps = (state) => ({
  ...state.selectedPicture
})

const Picture = ({dispatch, selectedPicture, style}) => {
  return (
    <li key={selectedPicture.id} className="mediaUploaderListItem" onClick={() => {dispatch(selectPicture(selectedPicture))} }>
      <img src={selectedPicture.picture.url} className="mediaUploaderImageItem" style={style}/>
    </li>
  )
}

export default connect(mapStateToProps)(Picture);