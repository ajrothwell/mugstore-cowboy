export default {
  id: 'coasters',
  type: 'http-get',
  dependent: 'none',
  resettable: false,
  url: `https://api.airtable.com/v0/appeAGPBIv4HcRc0t/coasters?api_key=${process.env.VUE_APP_COASTERS_AIRTABLE_API_KEY}`,
  options: {
    params: {
    },
  },
};
