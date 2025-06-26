const DisplayData = ({ bookList, isRead, removeData }) => {

  return (
    <>
      {
        bookList.filter(book => book.isComplete === (isRead ? 1 : 0)).map((value, i) => (
          <tr key={value.id}>
            <td>{i + 1}</td>
            <td>{value.title}</td>
            <td>{value.author}</td>
            <td>{value.year}</td>
            <td>{value.isAvailable}</td>
            <td>{value.format}</td>
            <td>
              <button
                className="btn btn-sm btn-warning"
              // onClick={() => toggleReadStatus(
              //   value.id,
              //   value.title,
              //   value.author,
              //   value.year,
              //   value.isAvailable,
              //   value.format,
              //   value.genre,
              //   value.image,
              //   1
              // )}
              >
                <i className="fa fa-check"></i>
              </button>
            </td>
            <td>
              <button
                className="btn btn-sm btn-success"
              // onClick={() => findBook(value.id, 'listItem4')}
              >
                <i className="fa fa-edit"></i>
              </button>
            </td>
            <td>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => removeData(value.id, isRead ? 1 : 0)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        ))
      }
    </>
  )
}

export default DisplayData;