export default {
  id: 'mugs',
  type: 'http-get',
  dependent: 'none',
  resettable: false,
  url: `https://api.airtable.com/v0/appE6vMAbk0XuPPIP/mugs`,
  options: {
    params: {
    },
    headers: {
      'Authorization': 'Bearer ' + process.env.VUE_APP_MUGS_AIRTABLE_ACCESS_TOKEN,
    },
  },
};
