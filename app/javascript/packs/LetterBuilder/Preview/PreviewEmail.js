import { mjml2html } from 'mjml'

function previewEmail(template) {
    // iterate over rows
  const preview = template.template.rows.map((row) => {
    
    // iterate over columns
    const r_row = row.columns.map((column) => {
      
      // create column divs by Type
      var columnDiv = null;
      
      // HEADER
      if(column.type === 'Header') {

        columnDiv = (
          `<mj-hero
            mode="fluid-height"
            background-width="600px"
            background-height="200px"
            background-url="${column.image !== undefined ? column.image.picture.url : null}"
            background-color="#2a3448">
          </mj-hero>`
        )
      }

      // TEXT
      else if(column.type === 'Text') {
        var textValue = '';
        if(column.text !== undefined) {
          textValue = column.text;
        }
        columnDiv = (
          `<mj-text>${textValue}</mj-text>`
        )
      } 

      // IMAGE
      else if(column.type === 'Image') {
        columnDiv = (
          `<mj-image src="${column.image !== undefined ? column.image.picture.url : null}" ></mj-image>`
        )
      }

      // IMAGE WITH TEXT
      else if(column.type === 'Image_With_Text') {
        columnDiv = (
          `<mj-image src="${column.image !== undefined ? column.image.picture.url : null}" ></mj-image>
           <mj-text>${column.text}</mj-text>`
        )
      }

      // FOOTER
      else if(column.type === 'Footer') {
        columnDiv = (
          `<mj-section background-color="#282728">Footer</mj-section>`
        )
      }

      // return the column with the right type
      return (
        `<mj-column>
          ${columnDiv}
        </mj-column>`
      )
    })

    // return the row with the columns
    return (
      `<mj-section>
        ${r_row}
      </mj-section>`
    );
  })

  // tack on the extra info into an interpolated string
  var htmlStr =   `
  <mjml>
    <mj-body>
      <mj-container>`;

  for(var i = 0; i < preview.length; i++) {
    htmlStr += preview[i];
  }

  htmlStr += `
      </mj-container>
    </mj-body>
  </mjml>`;

  console.log(htmlStr);
  // convert string to html
  const htmlOutput = mjml2html(htmlStr);
  
  window.open(document.URL, '_blank', 'scrollbars=yes,status=yes').document.write(htmlOutput.html);
};

export { previewEmail };