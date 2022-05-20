import Client from '../src/GuideClient'
// const Client = require('../src/GuideClient')

const koalityGuideClient = new Client('md');

(async () => {
  const guide = await koalityGuideClient.getGuide('html.deadlink.404', 'de')
  console.log('Language: ', guide.getLanguage())
  console.log('Text: ', guide.getText())
})()
