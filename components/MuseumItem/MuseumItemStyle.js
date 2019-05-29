import {
    StyleSheet,
    Dimensions
} from 'react-native'
const { height, width } = Dimensions.get('window');

const CELL_HEIGHT = 105
const IMAGE_WIDTH = 100
const IMAGE_HEIGHT = 80
const IMAGE_LEFT_MARGIN = 16
const INFO_RIGHT_MARGIN = 16
const INFO_LEFT_MARGIN = 10
const ICON_SIZE = 15

const TOP_INFO_HEIGHT = 70
const TOP_CELL_HEIGHT = width * 2/3 + TOP_INFO_HEIGHT

export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: CELL_HEIGHT,
        alignItems: 'center'
    },
    previewImage: {
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
        marginLeft: IMAGE_LEFT_MARGIN,
    },
    infoView: {
        height: IMAGE_HEIGHT,
        marginLeft: INFO_LEFT_MARGIN,
        marginRight: INFO_RIGHT_MARGIN,
        flex: 1,
        justifyContent: 'space-evenly',
    },
    museumName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    museumLocation: {
        fontSize: 12,
        fontWeight: '500',
        color: '#6e6e6e'
    },

    separateView: {
        height: 1,
        width: '100%',
        backgroundColor: '#E2E2E2',
        bottom: 0,
        position: 'absolute'
    },

    topContainer: {
        backgroundColor: 'white',
        height: TOP_CELL_HEIGHT,
    },
    topPreviewImage: {
        width: '100%',
        aspectRatio: 3/2,
    },
    topInfoView: {
        height: TOP_INFO_HEIGHT,
        marginLeft: IMAGE_LEFT_MARGIN,
        marginRight: INFO_RIGHT_MARGIN,
        flex: 1,
        justifyContent: 'space-evenly'
    },
    topMuseumName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    topMuseumLocation: {
        fontSize: 16,
        fontWeight: '500',
        color: '#6e6e6e'
    },
})