
function Form() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="alert alert-primary text-center">Bookshelf Apps</h1>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <form id="form">
                  <input type="hidden" name="id" id="inputBookId" />

                  <label htmlFor="inputBookTitle">Title</label>
                  <input type="text" placeholder="Title" className="form-control" id="inputBookTitle" required />
                  <br />
                  <label htmlFor="inputAuthor">Author</label>
                  <input type="text" placeholder="Author" className="form-control" id="inputBookAuthor" required />
                  <br />
                  <label htmlFor="inputBookYear">Year</label>
                  <input type="number" placeholder="Year" className="form-control" id="inputBookYear" required />
                  <br />
                  <label htmlFor="inputBookIsComplete">Finished reading</label>
                  <input type="checkbox" id="inputBookIsComplete" required />
                  <br />
                  <br />
                  <label htmlFor="inputBookIsAvailable">Available</label>
                  <input type="radio" id="inputBookIsAvailable" className="js-stock" name="Stock" value="Available" required />
                  <label htmlFor="inputBookIsNotAvailable">Not Available</label>
                  <input type="radio" id="inputBookIsNotAvailable" name="Stock" className="js-stock" value="Not Available" required />
                  <br />
                  <br />
                  <label style={{ marginBottom: '5px', fontWeight: 600 }}>Format</label><br />
                  <input type="radio" id="ebook" className="inputBookFormat" name="Format" value="eBook" required />
                  <label htmlFor="ebook">eBook</label>
                  <input type="radio" id="physical" className="inputBookFormat" name="Format" value="Physical" required />
                  <label htmlFor="physical">Physical Book</label>
                  <br />
                  <br />
                  <button className="btn btn-sm btn-primary" type="button">Save</button>
                  <button className="btn btn-sm btn-primary" type="button">Reset</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <h2>Unread</h2>

                <div className="table-responsive">
                  <table id="datatable" className="table table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>In Stock</th>
                        <th>Format</th>
                        <th>Read</th>
                        <th>Edit</th>
                        <th>Hapus</th>
                      </tr>
                    </thead>
                    <tbody id="table">

                    </tbody>
                  </table>
                </div><hr />

                <h2>Read</h2>

                <div className="table-responsive">
                  <table id="datatable" className="table table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>In Stock</th>
                        <th>Format</th>
                        <th>Unread</th>
                        <th>Edit</th>
                        <th>Hapus</th>
                      </tr>
                    </thead>
                    <tbody id="table2">

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form;

