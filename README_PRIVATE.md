# Cairo Utils on Web
Web UI with utilities for programming in Cairo.

## Install
Install the dependencies:
```
yarn install
```


## Start the frontend and API Next.js app
In a third terminal, start the next app:
```
vercel pull  # pull the env variables for dev
vercel dev   # run the app
```

Open [http://localhost:3000/](http://localhost:3000/) to see your Dapp. 


## Deploy
To deploy the UI web app on a live network first add the network details to the [Vercel Environmental Variables](https://vercel.com/ccrnn/cairo-utils-web/settings/environment-variables) file (as per `.env.example`). Set the value for dev, staging and production appropriately.

Deploy:
```
# Preview (https://cairo-utils-web-ccrnn.vercel.app)
vercel

# Production (https://cairo-utils-web.vercel.app)
vercel --prod
```


## Author
[clacla.eth](mailto:claclaeth@icloud.com)
