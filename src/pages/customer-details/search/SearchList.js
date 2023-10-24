import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { HeaderCardSkeleton } from "../../../components/Loader/CardSkeleton";
import ReactPaginate from "react-paginate";
import { loanList } from "../../../dummyData/data";
import NoUser from "./NoUser";
import { Icons } from "../../../assets/icons";

function SearchList(props) {
  const [loading, setLoading] = useState(true);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [gotoPage, setGotoPage] = useState("");
  const pageId = useRef(null);

  const recordsPerPage = 10;
  const lastIndex = CurrentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = loanList.slice(firstIndex, lastIndex);

  const pageCount = loanList.length
    ? Math.ceil(loanList.length / recordsPerPage)
    : 0;

  // const pageCount = 0;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    displayPaginate();

    console.log("pageid---------", pageId.current.className);
  }, [loading]);

  // -----------------------------------------------
  //  Function for paginate display
  // -----------------------------------------------

  const displayPaginate = async () => {
    const windowHeight = window.innerHeight;
    const divHeight = pageId.current.clientHeight + 200;

    if (divHeight <= windowHeight) {
      document.getElementById("paginate-buttons").classList.add("bottom-fixed");
    } else {
      document
        .getElementById("paginate-buttons")
        .classList.remove("bottom-fixed");
    }
  };

  // -----------------------------------------------
  //  page changing
  // -----------------------------------------------

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
    setGotoPage(event.selected + 1);
    setLoading(true);
    displayPaginate();
  };

  return (
    <>
      <div className="container-fluid" ref={pageId}>
        <div className="row">
          <div className="col-md-12">
            <div className="card border-0">
              {loading ? (
                <HeaderCardSkeleton />
              ) : pageCount === 0 ? (
                <NoUser />
              ) : CurrentPage > pageCount ? (
                <NoUser />
              ) : (
                <>
                  <div className="card-header d-flex justify-content-between bg-white text-secondary px-4 py-2">
                    List of Loan
                    <div>Total Records: {loanList.length}</div>
                  </div>
                  <div className="card-body border-0 mb-0 pb-0">
                    <div className="table-responsive">
                      <table className="table table-bordered text-nowrap">
                        <thead>
                          <tr>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Loan ID</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Loan Start Date</th>
                            <th scope="col">Loan Status</th>
                            <th scope="col">OPD Bucket</th>
                            <th scope="col">Loan Amount </th>
                            <th scope="col">State</th>
                            <th scope="col">EMI Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {records.map((person, i) => (
                            <tr key={i}>
                              <td>{person.Customer_Name}</td>
                              <td>
                                <NavLink
                                  to="/customer-details/overview"
                                  className="text-decoration-none"
                                >
                                  {person.Loan_Id}
                                </NavLink>
                              </td>
                              <td>{person.Phone_Number}</td>
                              <td>{person.Loan_start_Data}</td>
                              <td>{person.Loan_status}</td>
                              <td>{person.OPD}</td>
                              <td>{person.Loan_Amount}</td>
                              <td>{person.State}</td>
                              <td>{person.EMI_Date}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------
				Pagination
			----------------------------------- */}

      <form
        className="d-flex justify-content-center"
        onSubmit={(e) => {
          e.preventDefault();
          handlePageClick({ selected: gotoPage - 1 });
        }}
      >
        <div
          id="paginate-buttons"
          className="m-3 d-flex justify-content-center"
        >
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            forcePage={CurrentPage - 1}
            containerClassName={"px-0 mx-0 me-2 pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
            disabledClassName={"disabled"}
          />

          <div className="my-2 me-0 px-0 text-end col-2">Go to page</div>

          <div className="col-1 px-1 d-flex justify-content-center">
            <input
              className="form-control size-md form-control-sm"
              type="number"
              value={gotoPage}
              placeholder={CurrentPage}
              onChange={(e) => {
                setGotoPage(e.target.value);
              }}
            />
          </div>

          <div className="col-1 ms-2">
            <button type="submit" className="btn size-md btn-primary btn-sm">
              Go {Icons.RiArrowRightSLine}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SearchList;
