import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

export default function Resume () {
  // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const url = 'Norman_Teodoro.pdf'

  document.addEventListener('contextmenu', event => {
    event.preventDefault()
  })

  function onDocumentLoadSuccess ({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  function changePage (offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  function previousPage () {
    changePage(-1)
  }

  function nextPage () {
    changePage(1)
  }

  return (
    <>
      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', delay: 0, duration: 0.8 }}
      >
        <p>
          <a
            href='Norman_Teodoro.pdf'
            target='_blank'
            rel='noreferrer'
          >
            Download a copy here
          </a>
        </p>    
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <div>
          <div className='pagec'>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </div>
          <div className='buttonc'>
            <button
              type='button'
              disabled={pageNumber <= 1}
              onClick={previousPage}
              className='Pre'
            >
              Previous
            </button>
            <button
              type='button'
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </>
  )
}
