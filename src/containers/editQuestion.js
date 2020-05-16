import { connect } from "react-redux";

import { editRequest } from "../actions";

import EditQuestion from "../components/EditQuestion";


const mapStateToProps = (state, ownProps) => ({
  addDialogOpen: ownProps.addDialogOpen,
  setAddDialogOpen: ownProps.setAddDialogOpen
})

const mapDispatchToProps = dispatch => ({
    editRequest: (question) => dispatch(editRequest( question))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditQuestion);
