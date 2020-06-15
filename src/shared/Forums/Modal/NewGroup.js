import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { fetchCategories } from "../../Categories/redux/actions";
import { getCategoriesData, isLoading } from "../../Categories/redux/selectors.js";
import { setBg } from "../../../helpers";
import { createPost } from "../redux/actions";

export class NewGroupModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      content: '',
      tag: '',
      tags: [],
      shouldUpdate: false
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      shouldUpdate: false
    })
  }
  componentDidMount() {
    const { categories } = this.props;
    //Only fetch when state is empty
    if (categories.length > 0) return;
    this.props.fetchCategories();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { topic, tags, category, content } = this.state
    const data = {
      topic,
      tags,
      category,
      content
    }
    this.props.createPost(data)
  }

  addNewTag = () => {
    const { tag, tags } = this.state
    tag && tags.push(tag)
    this.setState({ tags, tag: '', shouldUpdate: true })
  }

  render() {
    const { categories, isLoading } = this.props
    const { tags } = this.state
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h5 className="modal-title">Add New Post </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body" id="orderDetails">
            <div className="card shadow mb-4">
              <div className="card-body">
                <form id="regform" name="regform" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pr-50">
                        <label htmlFor="sname">Topic</label>
                        <input type="text" className="form-control" id="topic" name="topic" placeholder="" value={this.state.topic} onChange={this.handleChange} required />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pr-50">
                        <label htmlFor="sname">Category</label>
                        <select onChange={this.handleChange} className="form-control" id="category" name="category" required >
                          <option value="">{isLoading ? 'Loading' : 'Select Category'}</option>
                          {categories.map((category) =>
                            <option value={category._id} key={category._id}>{category.category}</option>
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pl-50">
                        <label htmlFor="addy">Content</label>
                        <textarea rows="3" type="text" className="form-control" name="content" id="content" value={this.state.content} onChange={this.handleChange} placeholder="" required></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-6 mb-15 pl-50">
                        <input type="text" className="form-control" name="tag" id="tag" value={this.state.tag} onChange={this.handleChange} placeholder="Add Tag" />
                      </div>
                      <div className="col-md-6 mb-15 pl-50">
                        <span onClick={this.addNewTag} className="btn btn-success" id="btnreg" name="btnreg">Add Tag</span>
                      </div>
                      <Tags shouldUpdate={this.state.shouldUpdate} tags={tags} />
                    </div>
                  </div>
                  <br />
                  <div className="d-flex">
                    <button type="submit" className="btn btn-primary mybtn" id="btnreg" name="btnreg">Create Post</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }

}
class Tags extends React.Component {
  shouldComponentUpdate = (nextProps) => {
    return nextProps.shouldUpdate
  }
  render() {
    const { tags } = this.props;
    return (
      tags.map((tag, idx) => <span key={idx} style={{ padding: 5, backgroundColor: setBg(), marginLeft: 3, color: 'white', fontSize: 12, marginTop: 5, borderRadius: 5 }}>{tag}</span>)
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: getCategoriesData(state),
    isLoading: isLoading(state)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    createPost: (payload) => dispatch(createPost(payload))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewGroupModal);