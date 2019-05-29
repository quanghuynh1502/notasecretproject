import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import MuseumList from '../components/MuseumList/MuseumList'

import { SearchBar } from 'react-native-elements'

import firebase from 'react-native-firebase';

export default class MuseumSearchScreen extends React.PureComponent {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = ({
            search: '',
            museums: [],
        })
        this.ref = firebase.firestore().collection('museums')
        this.unsubscribe = null
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate) 
    }
    
    componentWillUnmount() {
        this.unsubscribe()
    }

    onCollectionUpdate = (querySnapshot) => {
        const museums = [];
        querySnapshot.forEach((doc) => {
            const { name, city, country, images } = doc.data();
            
            museums.push({
                key: doc.id,
                doc, 
                name,
                city,
                country, 
                images
            });
        });

        this.setState({ 
            museums,
        });
    }
    
    updateSearch = search => {
        this.setState({ search });
        this.unsubscribe = null
        if (search.length == 0) {
            this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate) 
        } else {
            var museums = this.ref.where('keywords', 'array-contains', search.toLowerCase())
            this.unsubscribe = museums.onSnapshot(this.onCollectionUpdate)
        }
        
    };
    
    render(){
        const { search, museums } = this.state;

        return(
            <View style={styles.container}>
                <View style={styles.searchBarView}>
                    <SearchBar
                        style={styles.searchBar}
                        placeholder="Type Here..."
                        onChangeText={this.updateSearch}
                        value={search}
                        lightTheme={true}
                    />
                </View>
                
                <MuseumList data={museums}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        justifyContent : 'center',
        alignItems: 'center',
    },
    searchBarView: {
        width: '100%',
        height: 60
    },
    searchBar: {
        flex: 1
    }
})
