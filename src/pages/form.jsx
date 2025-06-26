import { useState, useEffect} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import DisplayData from '../components/DispalyData';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/header';


const Form = () => {
  const [read, setRead] = useState(0)
  const [readBooks, setReadBooks] = useState([]);
  const [unreadBooks, setUnreadBooks] = useState([]);

  const [books, setBooks] = useState({
    id: '',
    title: '',
    author: '',
    year: '',
    isComplete: 0,
    isAvailable: '',
    format: '',
  });

  const HandleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      ...books,
      id: Date.now().toString(), // ✅ generated only once
      isComplete: read ? 1 : 0,
    };

    if (read) {
      const updatedRead = [...readBooks, newBook];
      setReadBooks(updatedRead);
      localStorage.setItem('listItemRead', JSON.stringify(updatedRead));
    } else {
      const updatedUnread = [...unreadBooks, newBook];
      setUnreadBooks(updatedUnread);
      localStorage.setItem('listItemUnread', JSON.stringify(updatedUnread));
    }
    setBooks({
      id: '',
      title: '',
      author: '',
      year: '',
      isComplete: 0,
      isAvailable: '',
      format: '',
    });

    setRead(0);

    console.log("Data saved successfully:", );
  }

  const removeData = (id, isRead) => {
    const storageKey = isRead ? 'listItemRead' : 'listItemUnread';
    let bookList = JSON.parse(localStorage.getItem(storageKey)) ?? [];
    bookList = bookList.filter(item => item.id !== id);
    localStorage.setItem(storageKey, JSON.stringify(bookList));
    if (isRead) {
      setReadBooks(bookList);
    } else {
      setUnreadBooks(bookList);
    }
    
  };

  useEffect(() => {
    const unreadData = JSON.parse(localStorage.getItem('listItemUnread')) ?? [];
    const readData = JSON.parse(localStorage.getItem('listItemRead')) ?? [];

    setUnreadBooks(unreadData);
    setReadBooks(readData);
    console.log('rendered');
    
  }, []);


  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="alert alert-primary text-center">Bookshelf Apps</h1>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <form id="form" onSubmit={HandleSubmit}>
                  <input type="hidden" name="id" id="inputBookId" />

                  <label htmlFor="inputBookTitle">Title</label>
                  <input type="text" placeholder="Title" className="form-control" id="inputBookTitle"
                    name='title'
                    value={books.title}
                    onChange={(e) => setBooks({ ...books, title: e.target.value })}
                    required />
                  <br />
                  <label htmlFor="inputAuthor">Author</label>
                  <input type="text" placeholder="Author" className="form-control" id="inputBookAuthor"
                    name='author'
                    value={books.author}
                    onChange={(e) => setBooks({ ...books, author: e.target.value })}
                    required />
                  <br />
                  <label htmlFor="inputBookYear">Year</label>
                  <input type="number" placeholder="Year" className="form-control" id="inputBookYear"
                    name='year'
                    value={books.year}
                    onChange={(e) => setBooks({ ...books, year: e.target.value })}
                    required />
                  <br />
                  <label htmlFor="inputBookIsComplete">Finished reading</label>
                  <input type="checkbox" id="inputBookIsComplete"
                    name='isComplete'
                    checked={read}
                    onChange={(e) => setRead(e.target.checked ? 1 : 0)}
                  />
                  <br />
                  <br />
                  <label htmlFor="inputBookIsAvailable">Available</label>
                  <input type="radio" id="inputBookIsAvailable" className="js-stock" name="Stock" value="Available"
                    onChange={(e) => setBooks({ ...books, isAvailable: e.target.value })}
                    checked={books.isAvailable === 'Available'}
                    required />
                  <label htmlFor="inputBookIsNotAvailable">Not Available</label>
                  <input type="radio" id="inputBookIsNotAvailable" name="Stock" className="js-stock" value="Not Available"
                    onChange={(e) => setBooks({ ...books, isAvailable: e.target.value })}
                    checked={books.isAvailable === 'Not Available'}
                    required />
                  <br />
                  <br />
                  <label style={{ marginBottom: '5px', fontWeight: "600" }}>Format</label><br />
                  <input type="radio" id="ebook" className="inputBookFormat" name="Format" value="eBook"
                    onChange={(e) => setBooks({ ...books, format: e.target.value })}
                    checked={books.format === 'eBook'}
                    required />
                  <label htmlFor="ebook">eBook</label>
                  <input type="radio" id="physical" className="inputBookFormat" name="Format" value="Physical"
                    onChange={(e) => setBooks({ ...books, format: e.target.value })}
                    checked={books.format === 'Physical'}
                    required />
                  <label htmlFor="physical">Physical Book</label>
                  <br />
                  <br />
                  <Button />
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
                      <DisplayData bookList={unreadBooks} isRead={false} removeData={removeData} />
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
                      <DisplayData bookList={readBooks} isRead={true} removeData={removeData} />
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

function Button() {
  return (
    <>
      <button className="btn btn-sm btn-primary" style={{ marginRight: '10px' }} type="submit">Save</button>
      <button className="btn btn-sm btn-primary" type="button">Reset</button>
    </>
  );
}

export default Form;


