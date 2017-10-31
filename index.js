import React from 'react'
import PropTypes from 'prop-types'
import { TouchableWithoutFeedback } from 'react-native'

class ModalSelector extends React.Component {
	render() {
		const children = this.props

		return (
			<TouchableWithoutFeedback>
				{ children }
			</TouchableWithoutFeedback>
		)
	}
}

export default ModalSelector
