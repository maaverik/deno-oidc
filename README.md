# deno-oidc
Tried out deno by building a simple app that supports openID connect authentication. Right now, it just has a profile button you can click which starts up an oauth2 workflow through the identity provider of your choice (in my case, www.okta.com) and then after login, redirects to a basic list view of your ID token's properties. 

Run this by using this command
```
deno run -A index.ts
```

The only dependency is deno itself. So install deno by going through https://deno.land/#installation. The other required dependencies are taken care by deno itself on running the app.

# Acknowledgements
https://scotch.io/tutorials/build-your-first-deno-app-with-authentication
