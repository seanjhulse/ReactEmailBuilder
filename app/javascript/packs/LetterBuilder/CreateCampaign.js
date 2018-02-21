function createCampaign(id) {
  fetch('/campaigns?letter_id=' + id, {
    method: 'post',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
  })
  .then((response) => response.json())
  .then((results) => {
    if(results.id !== undefined) {
      window.location.href = `/campaigns/${results.id}/edit`
    }
  })
};

export { createCampaign };