import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
}

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;

  if(!domain || !clientId || !redirectUri) {
    return new Error('Unable to initialize Auth0. Please check');
  }
  const onRedirectCallback =(appState?: AppState, user?: User)=>{
    console.log("User", User);
    
  }
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri
      }}
      onRedirectCallback={onRedirectCallback}
    >
    { children }
    </Auth0Provider>
  );
}

export default Auth0ProviderWithNavigate;