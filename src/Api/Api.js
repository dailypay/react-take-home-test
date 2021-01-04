const api = {
  getBallotData() {
    return fetch('/api/getBallotData').then(res => {
      return res.json();
    });
  }
};

export default api;