import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import {getImages} from "../redux/actions";
import Loader from '../components/Loader';


const Home = ({navigation, images, getImages}) => {
    useEffect(() => {
        getImages();
    }, [])

    return (
        <View style={{padding: 5}}>
            <Loader/>
            <FlatList
                data={images}
                keyExtractor={(item) => {
                    return `key-${item.id}`;
                }}
                renderItem={({item}) => {
                    return (
                        <View style={{
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: "#d1d1d1",
                            margin: 10,
                            paddingBottom: 20
                        }}>
                            <TouchableOpacity
                                style={{
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowOpacity: 0.20,
                                    shadowRadius: 1.41,

                                    elevation: 2,
                                }}
                                onPress={() => {
                                    navigation.navigate('Details', {
                                        imageId: item.id
                                    });
                                }}>
                                <Image
                                    source={{uri: item.imageUrl}}
                                    style={{
                                        height: 250,
                                        borderRadius: 20,
                                        borderBottomLeftRadius: 0,
                                        borderBottomRightRadius: 0,
                                    }}/>
                            </TouchableOpacity>
                            <View style={{padding: 20}}>
                                <Text>{item.title}</Text>
                            </View>

                        </View>
                    )
                }}
            />
        </View>
    );
}

const mapStateToProps = (state) => {
    const {images} = state.ImagesReducer;
    return {images};
}

export default connect(mapStateToProps, {getImages})(Home);
