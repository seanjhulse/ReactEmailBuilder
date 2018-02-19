function previewEmail(state) {
    // iterate over rows

  // var header;

  // const preview = template.template.rows.map((row) => {
  
  //   // iterate over columns
  //   const r_row = row.columns.map((column) => {
      
  //     // create column divs by Type
  //     var columnDiv;
      
  //     // HEADER
  //     if(column.type === 'Header') {

  //       if(column.image !== undefined) {
  //         header = (
  //           `<container background=${column.image.picture.url} style="margin-bottom: 2rem">
  //               <row>
  //                 <columns>
  //                   <h1 style="color: #333; textShadow: 'white 0px 0px 30px'; text-align: center">University of Wisconsin</h1>
  //                   <p style="color: #333; textShadow: 'white 0px 0px 30px'; text-align: center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore laboriosam beatae expedita, saepe sequi placeat nemo ipsam voluptatum eveniet aspernatur nihil odit nobis illo commodi neque. Quae accusamus suscipit doloribus.</p>
  //                 </columns>
  //               </row>
  //             </container>`
  //         )
  //       } else {
  //         header = (
  //           `<wrapper style="background-color: #C5050B; margin-bottom: 2rem;">
  //             <h1 style="color: white; text-align: center">University of Wisconsin – Madison</h1>
  //           </wrapper>`
  //         )
  //       }
        
  //     }

  //     // TEXT
  //     else if(column.type === 'Text') {
  //       var textValue = '';
  //       if(column.text !== undefined) {
  //         textValue = column.text;
  //       }
  //       columnDiv = (
  //         `<p>${textValue}</p>`
  //       )
  //     } 

  //     // IMAGE
  //     else if(column.type === 'Image') {
  //       columnDiv = (
  //         `<img alt="test" width="100" src=${column.image !== undefined ? column.image.picture.url : null} />`
  //       )
  //     }

  //     // IMAGE WITH TEXT
  //     else if(column.type === 'Image_With_Text') {
  //       columnDiv = (
  //         `
  //           <img alt="test" width="100" src=${column.image !== undefined ? column.image.picture.url : null} />
  //           <p>${column.text}</p>
  //         `
  //       )
  //     }

  //     // FOOTER
  //     else if(column.type === 'Footer') {
  //       columnDiv = (
  //         `<p>Footer</p>`
  //       )
  //     }
  //     // return the column with the right type
  //     if(columnDiv !== undefined) {
  //       return (
  //         `<columns large=${row.columns.length}>
  //           ${columnDiv}
  //         </columns>`
  //       )
  //     } else {
  //       return;
  //     }

  //   })

  //   // return the row with the columns
  //   return (`
  //     <row>
  //       ${r_row.join('')}
  //     </row>
  //   `);
  // })

  // // tack on the extra info into an interpolated string
  // var email = (
  //   `<container>
  //     ${header}
  //     ${preview.join('')}
  //   </container>`
  // );


  // console.log(email);

  fetch('/test_email', {
    method: 'post',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({'letter': state})
  })
  // send email to mailer
  // fetch('/test_email', {
  //   method: 'post',
  //   headers: {
  //     "Accept": "application/json",
  //     "Content-Type": "application/json"
  //     },
  //   body: JSON.stringify({'email': email})
  // })

};

export { previewEmail };