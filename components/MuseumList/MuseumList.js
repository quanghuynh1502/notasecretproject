import React from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native'
import MuseumItem from '../MuseumItem/MuseumItem'

export default class MuseumList extends React.PureComponent {
    _keyExtractor = (item, index) => index + "";

    _renderItem = ({ item, index }) => (
        <MuseumItem data={item} index={index} />
    )

    render() {
        const { data } = this.props
        return (
            <FlatList style={{flex: 1, width: '100%'}}
                numColumns={1}
                data={data}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        )
    }
}