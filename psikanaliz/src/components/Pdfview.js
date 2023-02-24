import React, { useState } from "react";
import './pdfview.css';
import {Document,Page,pdfjs} from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;



const Pdfview = ({pdf}) => {

     const [numPages,setnumPages] = useState(null);
     const [pageNumber,setPageNumber] = useState(3);

     const onDocumentLoadSuccess=({numPages})=>{
          setnumPages(numPages);

     }

     const nextPage=()=>{
          if(pageNumber<numPages)
          {
               setPageNumber(pageNumber+1);
          }
     }

     const prevPage=()=>{
          if(pageNumber>1 )
          {
               setPageNumber(pageNumber-1);
          }
     }
     
     return(
          <>
            <div className="wrap" onContextMenu={(e)=>e.preventDefault()} >
               <div className="controls " onContextMenu={(e)=>e.preventDefault()}  >
                    <button onClick={prevPage} disabled={pageNumber===1}  >Prev</button>
                    <button onClick={nextPage} disabled={pageNumber===numPages} >Next</button>
               </div>
               

               <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}
               onContextMenu={(e)=>e.preventDefault()} 
               className="pdf-container"
               
               
               >

                    <Page renderTextLayer={false}	 pageNumber={pageNumber} />
               </Document>
            </div>
          </>
     )
     }

export default Pdfview;