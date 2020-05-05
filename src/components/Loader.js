import React from 'react';
import {connect} from 'react-redux';
import {View, ActivityIndicator} from 'react-native';

const Loader = ({loading}) => {
    if (loading) {
        return <ActivityIndicator/>
    }
    return null;
}

const mapStateToProps = (state) => {
    const {loading} = state.LoaderReducer;
    return {loading};
}

export default connect(mapStateToProps)(Loader);
