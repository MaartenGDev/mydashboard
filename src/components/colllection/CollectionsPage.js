import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as collectionActions from '../../actions/collectionActions';

class CollectionsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            collection: { title: '' }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    onTitleChange({target}){
        const {collection} = this.state;
        collection.title = target.value;

        this.setState({collection: collection});
    }

    onClickSave(){
        const { collection } = this.state;
        this.props.dispatch(collectionActions.createCollection(collection));
    }

    collectionRow(collection, index){
        return <li key={index}>{collection.title}</li>;
    }

    render() {
        return (
            <section>
                <h1>Collections {this.state.collection.title}</h1>

                <ul>
                    {this.props.collections.map(this.collectionRow)}
                </ul>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.collection.title}
                />

                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}
                />
            </section>
        );
    }
}

CollectionsPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    collections: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        collections: state.collections
    };
}
export default connect(mapStateToProps)(CollectionsPage);