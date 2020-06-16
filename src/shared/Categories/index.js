import React, { Component } from "react";
import Button from "../../components/atoms/Button";
import NewCategory from "./Modal/NewCategory";
import selectors from "./redux/selectors";
import { connect } from "react-redux";
import { fetchCategories, deleteCategory } from "./redux/actions";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }

  componentDidMount() {
    const { categories } = this.props;
    //Only fetch when state is empty
    if (categories.length > 0) return;
    this.props.fetchCategories();
  }

  render() {
    const { categories, isLoading, errorLoading, userType } = this.props;
    const { modalShow } = this.state;
    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Categories</h1>
          {userType === 'admin' &&
            <Button
              onClick={() => this.setState({ modalShow: true })}
              title="New Categories"
              showIcon={true}
              icon={"fas fa-comments fa-sm text-white-50"}
            />
          }
          <NewCategory
            show={modalShow}
            onHide={() => this.setState({ modalShow: false })}
          />
        </div>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Manage Categories
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              {isLoading && <p className="text-info text-center">Loading...</p>}
              {errorLoading && (
                <p className="text-danger">
                  Error fetching new hotlines, please try again.
                </p>
              )}
              <table
                className="table"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th className="text-dark-100">Name</th>
                    {/* <th className="text-dark-100">Actions</th> */}
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => (
                    <tr key={category._id} className="odd gradeX">
                      <td>{category.category} </td>
                      {/* <td className="pa-0">
                        <FlatButton
                          onClick={() =>
                            this.props.deleteCategory(category._id)
                          }
                          title="Remove"
                          icon="fa fa-trash"
                          className="btn btn-danger circle action-button"
                        />
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    deleteCategory: (id) => dispatch(deleteCategory(id)),
  };
};
export default connect(selectors, mapDispatchToProps)(Categories);
