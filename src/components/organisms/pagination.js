import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class Pagination extends Component {

  
render() {
    return (
     
<div className="row">
                        <div className="col-sm-12 col-md-5">
                            <div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 13 entries</div>
                        </div>
                        <div className="col-sm-12 col-md-7">
                            <div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                                <ul className="pagination">
                                    <li className="paginate_button page-item previous disabled" id="dataTable_previous">
                                        <Link to="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" className="page-link">Previous</Link>
                                    </li>
                                    <li className="paginate_button page-item active">
                                        <Link to="#" aria-controls="dataTable" data-dt-idx="1" tabindex="0" className="page-link">1</Link>
                                    </li>
                                    <li className="paginate_button page-item ">
                                        <Link to="#" aria-controls="dataTable" data-dt-idx="2" tabindex="0" className="page-link">2</Link>
                                    </li>
                                    <li className="paginate_button page-item next" id="dataTable_next">
                                        <Link to="#" aria-controls="dataTable" data-dt-idx="3" tabindex="0" className="page-link">Next</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
  
    );
  }
}
export default Pagination;