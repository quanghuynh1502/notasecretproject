import React from 'react'
import {
    View,
    Text,
    Image,
    ImageBackground
} from 'react-native'

import ImageSlider from 'react-native-image-slider' 

import styles from './MuseumItemStyle'

export default class MuseumItem extends React.PureComponent {
    render() {
        const { data, index = -1 } = this.props
        if (index > 0) {
            return (
                <View style={styles.container}>
                    <Image source={{uri: data.images[0]}} style={styles.previewImage}/>
                    <View style={styles.infoView}>
                        <Text style={styles.museumName} numberOfLines={2}>{data.name}</Text>
                        <Text style={styles.museumLocation} numberOfLines={1}>{data.city + ', ' + data.country}</Text>
                    </View>
                    <View style={styles.separateView}/>
                </View>
            )
        } else {
            return (
                <View style={styles.topContainer}>
                    <View style={styles.topPreviewImage}>
                        <ImageSlider
                            autoPlayWithInterval={3000}
                            images={data.images}
                        />
                    </View>
                    <View style={styles.topInfoView}>
                        <Text style={styles.topMuseumName} numberOfLines={2}>{data.name}</Text>
                        <Text style={styles.topMuseumLocation}>{data.city + ', ' + data.country}</Text>
                    </View>
                    <View style={styles.separateView}/>
                </View>
            )
        }
    }
}