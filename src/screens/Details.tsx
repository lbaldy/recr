import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import {getImage} from "../redux/actions";
import {connect} from 'react-redux';
import Loader from "../components/Loader";

const {width} = Dimensions.get('window');

const Details = ({navigation, route, imageDetail, getImage}) => {
    useEffect(() => {
        const {params: {imageId}} = route;
        getImage(imageId);
    }, [])

    useEffect(()=>{
        navigation.setOptions({title: imageDetail.title})
    }, [imageDetail])


    return (
        <View style={{padding: 10}}>
            <Loader/>
            {imageDetail && <Image
                source={{uri: imageDetail.imageUrl}}
                style={{
                    height: width - 20,
                    borderRadius: 10,
                }}/>}
        </View>
    )
}

const mapStateToProps = (state) => {
    const {imageDetail} = state.ImageDetailsReducer;
    return {imageDetail};
}


export default connect(mapStateToProps, {getImage})(Details);
