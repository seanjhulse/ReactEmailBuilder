function previewEmail(state) {
  fetch('/test_email', {
    method: 'post',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({'letter': state})
  })
};

export { previewEmail };