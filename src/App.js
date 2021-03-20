import classNames from "classnames";

import { useSelector, useDispatch } from "react-redux";

import { setCurrentPage, setInputValue } from "./redux/actions/pages";
import {
  sortNumbers,
  sortFirst,
  sortLast,
  search,
} from "./redux/actions/tables";

import "./index.scss";

function App() {
  const pages = useSelector(({ pages }) => pages);
  const indexOfLastTable = pages.currentPage * pages.postsPerPage;
  const indexOfFirstTable = indexOfLastTable - pages.postsPerPage;
  const dispatch = useDispatch();
  const allTables = useSelector(({ tables }) => tables);
  let tables = useSelector(({ tables }) =>
    tables.slice(indexOfFirstTable, indexOfLastTable)
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allTables.length / pages.postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const onCurrentPage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const onSortNumber = (desc) => {
    dispatch(sortNumbers(desc));
    pages.sortNumbers = !pages.sortNumbers;
    pages.sortFirst = true;
    pages.sortLast = true;
  };

  const onSortFirst = (desc) => {
    dispatch(sortFirst(desc));
    pages.sortFirst = !pages.sortFirst;
    pages.sortNumbers = true;
    pages.sortLast = true;
  };

  const onSortLast = (desc) => {
    dispatch(sortLast(desc));
    pages.sortLast = !pages.sortLast;
    pages.sortNumbers = true;
    pages.sortFirst = true;
  };

  const onInputValue = (value) => {
    dispatch(setInputValue(value));
  };

  const setSearchValue = (value) => {
    dispatch(search(value));
  };

  const onSerach = (e) => {
    onInputValue(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="input-group mb-3">
          <input
            onChange={onSerach}
            value={pages.inputValue}
            type="text"
            className="form-control"
            placeholder="Text"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th
                className="poiner"
                onClick={() => onSortNumber(pages.sortNumbers)}
                scope="col"
              >
                #
              </th>
              <th
                onClick={() => onSortFirst(pages.sortFirst)}
                className="poiner"
                scope="col"
              >
                First
              </th>
              <th
                onClick={() => onSortLast(pages.sortLast)}
                className="poiner"
                scope="col"
              >
                Last
              </th>
            </tr>
          </thead>
          <tbody>
            {tables.map((table) => (
              <tr key={table.id}>
                <th scope="row">{table.id}</th>
                <td>{table.first}</td>
                <td>{table.last}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a
                onClick={() =>
                  onCurrentPage(
                    pages.currentPage === 1
                      ? pageNumbers.length
                      : pages.currentPage - 1
                  )
                }
                className="page-link"
                href="#"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={classNames("page-item", {
                  active: pages.currentPage === number,
                })}
              >
                <a
                  onClick={() => onCurrentPage(number)}
                  className="page-link"
                  href="#"
                >
                  {number}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a
                onClick={() =>
                  onCurrentPage(
                    pages.currentPage === pageNumbers.length
                      ? pageNumbers[0]
                      : pages.currentPage + 1
                  )
                }
                className="page-link"
                href="#"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
