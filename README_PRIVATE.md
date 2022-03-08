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


To deploy the UI web app on a live network first add the network details to the [Vercel Environmental Variables](https://vercel.com/ccrnn/cairo-utils-web/settings/environment-variables) file (as per `.env.example`). Set the value for dev, staging and production appropriately.

Commit to one of the three main branches:
- dev
- staging ([url](https://cairo-utils-web-git-staging-ccrnn.vercel.app/))
- production ([url](https://cairo-utils-web.vercel.app))

To force a build:
```
vercel
```

Then automatically available at [url](https://cairo-utils-web.vercel.app).


## Author
[clacla.eth](mailto:claclaeth@icloud.com)
