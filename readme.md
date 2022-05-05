# JavaScript Client for the Koality Guide.

This client is used to connect to the KoalityClient database and fetch guides for given identifiers.

**Important**: When fetching data from the KoalityGuide only use this client. The API of the server will change in future, but we try to keep this client compatible as long a possible.

## Installation

```bash
npm i koality-guide-client
```

## Example

```javascript
import Client from 'koality-guide-client'

const koalityGuideClient = new Client('md');

(async () => {
    const guide = await koalityGuideClient.getGuide('html.deadlink.404', 'de')
    console.log('Language: ', guide.getLanguage())
    console.log('Text: ', guide.getText())
})()
```

For more examples see the `/examples` directory.

## Features
- **Fallback language**: when creating a new client a fallback language can be added. If no guide for the actual language was found the client will return the fallback language guide if exists.
- **Multi format**: in future it will be possible to fetch the guide in multiple formats. We will start with markdown (md) and html.

## To do

- **Access control**: Use tokens to gain access to the KoalityGuide server.
- **Overwrite axios**: It should be possible to inject an axios client with custom settings.
- **Multiple KoalityGuide servers**: KoalityGuide could be a framework or server detached from the content it is offers. So there could be many servers.
- **Recommendations**: If you read this guide, this one could alo be interesting.
- **Directory**: Show all guides for a whole directory.
