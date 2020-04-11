import React from "react";
import Pagination from "../../../../components/organisms/pagination";
import ShowSearch from "../../../../components/organisms/show_search";
import Button from "../../../../components/atoms/Button";
import NewTopicModal from './Modal/NewTopic';
import ViewCommentModal from './Modal/ViewComment';

 export default function GroupDetails(props)  {
   const [modalShow, setModalShow] = React.useState(false);
   const [modalShow2, setModalShow2] = React.useState(false);
  
    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Support Groups - Topics</h1>
          <Button             
            onClick={() => setModalShow(true)}
            title="  New Topic"
            showIcon={true}
            icon={"fas fa-plus fa-sm text-white-50"}
          />  
          <NewTopicModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />   
          
        </div>

        <div className="card shadow mb-4">
          <div className="mycard card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="table-responsive">
                <ShowSearch />

                <table
                  className="table"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <th className="text-dark-100">Group</th>
                    <th className="text-dark-100">Title</th>
                    <th className="text-dark-100">No of Comments</th>
                    <th className="text-dark-100">Actions</th>
                  </thead>
                  <tbody>
                    <tr className="odd gradeX">
                      <td>
                        <div
                          className="btn btn-link circle action-button ml-15 mr-10"
                          onClick={() => setModalShow2(true)}
                        >
                          <i className="fa fa-eye"></i>
                        </div>
                        <ViewCommentModal
                          show={modalShow2}
                          onHide={() => setModalShow2(false)}
                          />
                        {" "}
                        AA
                      </td>

                      <td>Hello there</td>
                      <td>50</td>
                      <td className="pa-0">
                        <form method="post" action="" name="buy" id="buy">
                          <button
                            type="submit"
                            className="btn btn-danger circle action-button"
                          >
                            <i className="fa fa-trash"></i> Remove
                          </button>
                          <input
                            name="buyalbum"
                            type="hidden"
                            id="buyalbum"
                            value=""
                          />
                        </form>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    );
  }

