export default {
  id: 'coasters',
  type: 'http-get',
  dependent: 'none',
  resettable: false,
  url: `https://api.airtable.com/v0/appeAGPBIv4HcRc0t/coasters`,
  options: {
    params: {
    },
    headers: {
      'Authorization': 'Bearer ' + process.env.VUE_APP_COASTERS_AIRTABLE_ACCESS_TOKEN,
    },
  },
};
