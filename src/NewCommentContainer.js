import {connect} from 'react-redux';
import {NewComment} from './NewComment';
import {addComment} from './actions';

const mapDispatchToProps = dispatch => ({
    addComment: (id) => dispatch(addComment(id))
})

export default connect(null, mapDispatchToProps)(NewComment);
